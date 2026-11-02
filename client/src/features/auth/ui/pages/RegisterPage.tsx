import RegisterForm from '@/features/auth/ui/components/forms/RegisterForm'
import { Link } from 'react-router'

const RegisterPage = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <div className='w-sm'>
        <RegisterForm />
      </div>
      <p className='text-sm mt-6 text-muted-foreground'>Already have an account? <Link to={'/login'} className='underline underline-offset-2'>Login here</Link></p>
    </main>
  )
}

export default RegisterPage