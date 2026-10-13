import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { ArrowUpRight, Bookmark, LayoutDashboard, LogOut, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";

const tiles = [
  {
    icon: Bookmark,
    title: "Saved projects",
    value: "—",
    note: "Placeholder — bookings and favourites will appear here.",
  },
  {
    icon: Mail,
    title: "Enquiries",
    value: "—",
    note: "Placeholder — new briefs land in this inbox.",
  },
  {
    icon: LayoutDashboard,
    title: "Active collaborations",
    value: "—",
    note: "Placeholder — in-progress work with studios and brands.",
  },
];

/**
 * Studio Desk — the signed-in workspace. Protected by RequireAuth, so
 * visitors arrive here after sign-in (landing CTA uses ?returnTo=/dashboard).
 */
export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono-label text-[11px] text-muted-foreground">
              Studio desk — signed in
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Welcome back{user?.name ? `, ${user.name}` : ""}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Your private workspace: saved projects, incoming enquiries and
              collaborations in one place.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" className="cursor-pointer gap-2">
              <Link to="/">
                View portfolio
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button type="button" variant="outline" className="cursor-pointer gap-2" onClick={handleSignOut}>
              <LogOut className="size-4" />
              Sign out
            </Button>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-3">
          {tiles.map((tile) => (
            <Card key={tile.title} className="border-border/70 shadow-none">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tile.icon className="size-5" />
                </div>
                <CardTitle className="text-base">{tile.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-display text-4xl font-semibold">{tile.value}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{tile.note}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <footer className="rule flex flex-wrap items-center justify-between gap-3 pt-4">
          <p className="font-display text-base font-semibold tracking-tight">Rishi Naskar</p>
          <p className="font-mono-label text-[10px] text-muted-foreground">
            Studio desk — starter content, replace with real data
          </p>
        </footer>
      </div>
    </main>
  );
}
