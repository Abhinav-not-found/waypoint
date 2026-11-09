import type { Filter, Invitation } from '@/features/invitation/types/invites.type';
import { Button } from '@/shared/components/ui/button';

type InvitesFilterProps = {
  activeFilter: Filter;
  invitations: Invitation[];
  setActiveFilter: (filter: Filter) => void;
};

const InvitesFilter = ({
  activeFilter,
  invitations,
  setActiveFilter,
}: InvitesFilterProps) => {

  return (
    <div className="flex flex-wrap items-center gap-2 border-b pb-4">
      {(
        ['all', 'pending', 'accepted', 'rejected'] as Filter[]
      ).map((filter) => {
        const count = invitations.filter((invitation) =>
          filter === 'all'
            ? true
            : invitation.status === filter
        ).length;

        return (
          <Button
            key={filter}
            size="sm"
            variant={activeFilter === filter ? 'secondary' : 'ghost'}
            onClick={() => setActiveFilter(filter)}
            className="capitalize"
          >
            {filter}
            <span className="ml-1 text-xs text-muted-foreground">
              {count}
            </span>
          </Button>
        );
      })}
    </div>
  )
}

export default InvitesFilter