import Navbar from "@/shared/components/navbar"
import { Outlet } from "react-router"

const LandingLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default LandingLayout