import useLogout from '@/features/auth/hooks/useLogout.hook'
import { Button } from '@/shared/components/ui/button'
import { LogOut } from 'lucide-react'

const LogoutBtn = () => {
  const { handleLogout } = useLogout()

  return (
    <Button variant={'link'} onClick={handleLogout} className={'text-black dark:text-white'}><LogOut className='size-4' />Logout</Button>
  )
}

export default LogoutBtn