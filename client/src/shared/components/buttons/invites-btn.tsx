import { Button } from "@/shared/components/ui/button"
import { Link } from "react-router"

const InvitesBtn = () => {
  return (
    <Link to={'/home/invites'}>
      <Button variant={'link'} className={'text-black dark:text-neutral-400 underline-offset-2'}>Invites</Button>
    </Link>
  )
}

export default InvitesBtn