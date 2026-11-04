import { cn } from "cn"
import { Link } from "react-router"

type sizes = 'sm' | 'default'

const Logo = ({ size }: { size?: sizes }) => {
  return (
    <Link to={'/'} className="active:scale-97">
      <p className={cn(
        size === "default" && "text-lg tracking-tighter font-medium",
        size === "sm" && "text-lg tracking-tighter font-medium"
      )}>Waypoint</p>
    </Link>

  )
}

export default Logo