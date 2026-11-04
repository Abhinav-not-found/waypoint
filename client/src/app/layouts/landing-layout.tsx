import Navbar from "@/shared/components/navbar"
import { Outlet } from "react-router"

const LandingLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default LandingLayout