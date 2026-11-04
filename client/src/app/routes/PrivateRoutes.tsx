import HomePage from "@/features/home/ui/pages/HomePage";
import MainLayout from "@/shared/components/layouts/main-layout";

const PrivateRoutes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      }
    ]
  }
]
export default PrivateRoutes