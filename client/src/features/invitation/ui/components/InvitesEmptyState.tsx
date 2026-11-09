import { Inbox } from 'lucide-react';
import { Card, CardContent } from '@/shared/components/ui/card';
import type { Filter } from '@/features/invitation/types/invites.type';

type InvitesEmptyStateProps = {
  activeFilter: Filter;
};

const InvitesEmptyState = ({
  activeFilter,
}: InvitesEmptyStateProps) => {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-xl border bg-muted/40 p-4">
          <Inbox className="size-7 text-muted-foreground" />
        </div>

        <h3 className="font-semibold">
          No {activeFilter === 'all' ? '' : activeFilter} invitations
        </h3>

        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          {activeFilter === 'pending'
            ? 'You have no pending invitations at the moment.'
            : 'There are no invitations to display here.'}
        </p>
      </CardContent>
    </Card>
  );
};

export default InvitesEmptyState;