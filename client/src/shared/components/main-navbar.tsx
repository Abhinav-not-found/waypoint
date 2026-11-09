import AppAvatar from "@/shared/components/app-avatar"
import InvitesBtn from "@/shared/components/buttons/invites-btn"
import { ModeToggle } from "@/shared/components/mode-toggle"
import { SidebarTrigger, useSidebar } from "@/shared/components/ui/sidebar"

const MainNavbar = () => {
  const { open } = useSidebar()
  return (
    <header className="flex items-center justify-between px-4 w-full h-15 border-b border-neutral-200 dark:border-neutral-700">
      <div className="flex items-center justify-center gap-4">
        {!open && <SidebarTrigger />}
      </div>
      <div className="flex gap-2 items-center">
        <InvitesBtn />
        <ModeToggle />
        <AppAvatar />
      </div>
    </header>
  )
}

export default MainNavbar