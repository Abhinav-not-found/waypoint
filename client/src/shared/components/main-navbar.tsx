import LogoutBtn from "@/shared/components/buttons/logout-btn"
import { ModeToggle } from "@/shared/components/mode-toggle"
import { SidebarTrigger, useSidebar } from "@/shared/components/ui/sidebar"

const MainNavbar = () => {
  const { open } = useSidebar()
  return (
    <header className="flex items-center justify-between px-4 w-full h-15 border-b border-neutral-200 dark:border-neutral-700">
      <div className="flex items-center justify-center gap-4">
        {!open && <SidebarTrigger />}
        <div>
          <h4 className="font-medium tracking-tighter">Good Morning, Abhinav kumar</h4>
          <p className="text-muted-foreground text-xs">Here's what's happening today across your workspace.</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <LogoutBtn />
      </div>
    </header>
  )
}

export default MainNavbar