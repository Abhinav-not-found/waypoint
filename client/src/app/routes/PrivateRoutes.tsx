import HomePage from "@/features/home/ui/pages/HomePage";
import InvitesPage from "@/features/invitation/ui/pages/InvitesPage";
import OrganisationDetailsPage from "@/features/organisation/ui/pages/OrganisationDetailsPage";
import OrganisationMembersPage from "@/features/organisation/ui/pages/OrganisationMembersPage";
import MainLayout from "@/shared/components/layouts/main-layout";

const PrivateRoutes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'invites',
        element: <InvitesPage />
      },
      {
        path: '/home/:id',
        element: <OrganisationDetailsPage />
      },
      {
        path: '/home/:id/members',
        element: <OrganisationMembersPage />
      },
    ]
  }
]
export default PrivateRoutes