export default function OnboardingLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-dvh bg-background text-foreground">
        {children}
      </div>
    );
  }
  