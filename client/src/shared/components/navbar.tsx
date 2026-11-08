import { useAuthStore } from "@/features/auth/store/auth.store"
import LoginBtn from "@/shared/components/buttons/login-btn"
import LogoutBtn from "@/shared/components/buttons/logout-btn"
import Logo from "@/shared/components/logo"
import { ModeToggle } from "@/shared/components/mode-toggle"

const Navbar = () => {
  const { status } = useAuthStore()
  // console.log(status)
  return (
    <header className="flex items-center justify-between px-10 w-full h-14">
      <Logo />
      <div className="flex gap-2 items-center">
        <ModeToggle />
        {status === 'authenticated' ?
          <LogoutBtn />
          :
          <LoginBtn />
        }
      </div>
    </header>
  )
}

export default Navbar