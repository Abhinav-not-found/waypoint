import LoginForm from "@/features/auth/ui/components/forms/LoginForm"
import GoBackBtn from "@/shared/components/buttons/go-back-btn"
import { Link } from "react-router"

const LoginPage = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen w-full'>
      <div className='w-sm'>
        <GoBackBtn />
        <LoginForm />
      </div>
      <p className='text-sm mt-6 text-muted-foreground'>Don't have an account? <Link to={'/register'} className='underline underline-offset-2'>Register here</Link></p>
    </main>
  )
}

export default LoginPage