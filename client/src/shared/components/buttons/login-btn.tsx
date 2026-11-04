import { Button } from "@/shared/components/ui/button"
import { Link } from "react-router"

const LoginBtn = () => {
  return (
    <Link to={'/login'}>
      <Button size={'lg'} className={'px-4 rounded-lg'}>Login</Button>
    </Link>
  )
}

export default LoginBtn