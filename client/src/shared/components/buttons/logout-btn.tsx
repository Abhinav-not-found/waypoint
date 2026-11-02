import useLogout from '@/features/auth/hooks/useLogout.hook'
import { Button } from '@/shared/components/ui/button'

const LogoutBtn = () => {
  const { handleLogout } = useLogout()

  return (
    <Button variant={'link'} onClick={handleLogout}>Logout</Button>
  )
}

export default LogoutBtn