interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="py-6 border-t border-border/40 bg-secondary">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
