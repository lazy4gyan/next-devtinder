import { ThemeProvider } from "@/components/providers/theme-providers";
import "./globals.css";
// import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner"; // or "@/components/ui/toaster"
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: "DevTinder",
  description: "Discover, match, and collaborate with developers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

// src/app/(auth)/sign-up/[[...sign-up]]/page.tsx