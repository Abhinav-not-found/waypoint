import Logo from "@/shared/components/logo";
import { Link } from "react-router";

const Footer = () => (
  <footer className="border-t px-5 md:px-10 py-8">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
      <Logo />

      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#workflow" className="hover:text-foreground transition-colors">
          How it works
        </a>
        <Link to="/login" className="hover:text-foreground transition-colors">
          Sign in
        </Link>
        <Link to="/register" className="hover:text-foreground transition-colors">
          Get started
        </Link>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Waypoint. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer