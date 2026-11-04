import { Button } from "@/shared/components/ui/button"
import { Link } from "react-router"

const HeroSection = () => {
  return (
    <section className="w-full h-screen">
      <div className="mt-28">
        <h1 className="text-center text-7xl font-bold tracking-tighter w-2xl mx-auto">Manage your team's productivity</h1>
        <p className="text-center mt-8 text-xl tracking-tight">Plan projects, stay on track and deliver on time without overworking your team.</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Link to={'/register'}>
            <Button size={'lg'} className={'px-4'}>
              Get Waypoint free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection