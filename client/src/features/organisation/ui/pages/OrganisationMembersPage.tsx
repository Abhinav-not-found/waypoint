import GoBackBtn from '@/shared/components/buttons/go-back-btn';
import InviteMemberCard from '@/features/organisation/ui/components/members/InviteMemberCard';
import MemberList from '@/features/organisation/ui/components/members/MemberList';
import PendingList from '@/features/organisation/ui/components/members/PendingList';
import { useParams } from 'react-router';

const OrganisationMembersPage = () => {

  const { id } = useParams()
  if (!id) {
    return <p>Organisation ID is missing.</p>;
  }
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-6">
      <GoBackBtn />
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          Members
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your organisation members and invitations.
        </p>
      </div>

      <InviteMemberCard />
      <MemberList organisationId={id} />
      {/* <PendingList /> */}

    </div>
  );
};

export default OrganisationMembersPage;