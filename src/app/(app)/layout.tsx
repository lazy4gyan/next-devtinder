import { AppHeader } from "@/components/layout/app-header";
import { AppFooter } from "@/components/layout/footer";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

export const metadata = {
  title: "DevTinder",
  description: "Discover, match, and collaborate with developers.",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* App header/nav goes here */}
      <AppHeader/>
      <main className="container mx-auto px-4 py-4 flex-1 h-full">{children}</main>
      <AppFooter/>
    </div>
  );
}
