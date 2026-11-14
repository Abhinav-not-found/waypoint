import { Link } from "react-router"

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1.5 font-bold text-lg active:scale-98">
      <div className="size-7 rounded-md bg-foreground text-background flex items-center justify-center text-sm">
        W
      </div>
      <span className="tracking-tighter">
        Waypoint
      </span>

    </Link>

  )
}

export default Logo