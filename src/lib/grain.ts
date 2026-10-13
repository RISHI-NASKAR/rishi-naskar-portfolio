/** Subtle film-grain texture as an inline SVG data URI (no network request). */
export const GRAIN =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='160'%20height='160'%3E%3Cfilter%20id='n'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.85'%20numOctaves='2'/%3E%3CfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.4%200'/%3E%3C/filter%3E%3Crect%20width='160'%20height='160'%20filter='url(%23n)'/%3E%3C/svg%3E";
