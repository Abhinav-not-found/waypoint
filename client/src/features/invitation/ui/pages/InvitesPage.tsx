import useInvites from '@/features/invitation/hooks/useInvites.hook';
import InvitesHeader from '@/features/invitation/ui/components/InvitesHeader';
import InvitesFilter from '@/features/invitation/ui/components/InvitesFilter';
import InvitesEmptyState from '@/features/invitation/ui/components/InvitesEmptyState';
import InvitationCard from '@/features/invitation/ui/components/InvitesCard';

const InvitesPage = () => {
  const { formatDate, filteredInvitations, activeFilter, invitations, setActiveFilter, handleInvitationAction } = useInvites()

  return (
    <main className="mx-auto w-full max-w-5xl space-y-8 p-6">
      <InvitesHeader />

      <InvitesFilter
        activeFilter={activeFilter}
        invitations={invitations}
        setActiveFilter={setActiveFilter}
      />

      <section className="space-y-4">
        {filteredInvitations.length === 0 ? (
          <InvitesEmptyState activeFilter={activeFilter} />
        ) : (
          filteredInvitations.map((invitation) => (
            <InvitationCard
              key={invitation.id}
              invitation={invitation}
              formatDate={formatDate}
              onAction={handleInvitationAction}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default InvitesPage;
