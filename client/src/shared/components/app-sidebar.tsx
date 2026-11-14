import Logo from "@/shared/components/logo"
import Searchbar from "@/shared/components/searchbar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar"

export function AppSidebar() {

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="m-2 flex items-center justify-between">
          <Logo />
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <Searchbar />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}