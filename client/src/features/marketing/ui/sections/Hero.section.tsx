
import ProductPreview from "@/features/marketing/ui/components/ProductPreview";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="mt-20 sm:mt-24 md:mt-28 px-5 sm:px-8">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl mx-auto leading-[1.1]">
          Manage your team's productivity
        </h1>

        <p className="text-center mt-5 sm:mt-7 text-base sm:text-lg md:text-xl tracking-tight text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Plan projects, stay on track and deliver on time without
          overworking your team.
        </p>

        <div className="flex items-center justify-center mt-6 sm:mt-8">
          <Link to="/register">
            <Button size="lg" className="px-5">
              Get Waypoint free
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-28 px-4 sm:px-6 lg:px-8">
        <ProductPreview />
      </div>
    </section>
  );
};

export default HeroSection;
