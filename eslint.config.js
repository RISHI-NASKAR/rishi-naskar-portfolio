import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // The WebGL scene layer is an imperative render loop, not a React tree.
    // Every frame it mutates three.js state in place: shader uniforms, camera
    // matrices, instanced transforms. react-hooks/immutability models values as
    // React renders them and rejects exactly that, and no alternative it
    // accepts exists here — reading a ref during render is also rejected, and
    // rebuilding the GPU objects on every render would detach the materials
    // from the uniform objects the render loop writes to.
    //
    // Scope is deliberately narrow: everything outside src/three still obeys
    // the full react-hooks rule set.
    files: ["src/three/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/immutability": "off",
    },
  },
);
