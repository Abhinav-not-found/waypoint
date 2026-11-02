import Logo from "@/shared/components/logo"
import { ModeToggle } from "@/shared/components/mode-toggle"
import { Button } from "@/shared/components/ui/button"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-10 w-full h-14">
      <Logo />
      <div className="flex gap-2">
        <ModeToggle />
        <Link to={'/login'}>
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar