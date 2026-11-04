import LandingLayout from "@/app/layouts/landing-layout";
import LoginPage from "@/features/auth/ui/pages/LoginPage";
import RegisterPage from "@/features/auth/ui/pages/RegisterPage";
import LandingPage from "@/features/marketing/ui/page/LandingPage";

const PublicRoutes = [
  {
    element: <LandingLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      }
    ]
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]

export default PublicRoutes