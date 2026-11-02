import { Button } from "@/shared/components/ui/button"
import { Link } from "react-router"

const LoginBtn = () => {
  return (
    <Link to={'/login'}>
      <Button>Login</Button>
    </Link>
  )
}

export default LoginBtn