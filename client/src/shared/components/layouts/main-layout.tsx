import { AppSidebar } from "@/shared/components/app-sidebar"
import MainNavbar from "@/shared/components/main-navbar"
import { SidebarProvider} from "@/shared/components/ui/sidebar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        {/* <SidebarTrigger /> */}
        <MainNavbar />
        <Outlet />
      </div>
    </SidebarProvider>
  )
}

export default MainLayout