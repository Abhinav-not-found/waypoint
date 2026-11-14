import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import { Link } from "react-router";

const FinalCTASection = () => (
  <section className="px-5 md:px-10 py-24 border-t">
    <div className="max-w-4xl mx-auto text-center space-y-7">
      <div className="size-12 rounded-xl border flex items-center justify-center mx-auto">
        <Target size={22} />
      </div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
        Give your team a better way to work.
      </h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto">
        Bring your projects, people and priorities together.
        Your next milestone starts here.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
        <Link to="/register">
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            Get Waypoint free
            <ArrowRight size={17} />
          </Button>
        </Link>
        <Link to="/login">
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Sign in
          </Button>
        </Link>
      </div>
      <p className="text-xs text-muted-foreground">
        Get started and organise your team's work.
      </p>
    </div>
  </section>
);

export default FinalCTASection