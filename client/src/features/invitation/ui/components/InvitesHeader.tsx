import useInvites from "@/features/invitation/hooks/useInvites.hook"
import { Badge } from "@/shared/components/ui/badge"
import { Inbox } from "lucide-react"

const InvitesHeader = () => {
  const { pendingCount } = useInvites()
  return (
    <section className="space-y-2">
      <div className="flex items-center gap-2">
        <Inbox className="size-5 text-muted-foreground" />

        <span className="text-sm text-muted-foreground">
          Notifications
        </span>
      </div>

      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Invitations
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage invitations to join organisations on Waypoint.
          </p>
        </div>

        <Badge variant="secondary" className="w-fit">
          {pendingCount} pending
        </Badge>
      </div>
    </section>
  )
}

export default InvitesHeader