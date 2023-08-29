import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b fixed top-0 w-full z-50 bg-background">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-xl text-primary">
          Blog App
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="font-medium text-muted-foreground hover:text-accent-foreground transition"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="font-medium text-muted-foreground hover:text-accent-foreground transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-medium text-muted-foreground hover:text-accent-foreground transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
