import {
  Users,
  MoreHorizontal,
} from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import EmptyState from '@/features/organisation/ui/components/EmptyState';
import useInvitation from '@/features/organisation/hooks/useInvitation.hook';

type Role = 'admin' | 'manager' | 'employee';

const roleLabels: Record<Role, string> = {
  admin: 'Admin',
  manager: 'Manager',
  employee: 'Employee',
};


interface MemberListProps {
  organisationId: string;
}

const MemberList = ({ organisationId }: MemberListProps) => {

  const { fetchInvitations } = useInvitation()
  const { data, isLoading, isError } = fetchInvitations(organisationId);
  const invitations = data?.data ?? [];

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading invitations...</p>;
  }

  if (isError) {
    return <p className="text-sm text-destructive">Failed to load invitations.</p>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">
              Invited members
            </CardTitle>
            <CardDescription>
              People invited to join this organisation.
            </CardDescription>
          </div>

          <Badge variant="secondary">
            {invitations.length} invitations
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        {invitations.length === 0 ? (
          <EmptyState
            icon={Users}
            title="No invitations yet"
            description="Invite your team members to start collaborating."
          />
        ) : (
          <div className="space-y-4">
            {invitations.map((invitation: any) => (
              <div
                key={invitation._id}
                className="flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {invitation.email}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Invited {new Date(invitation.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {roleLabels[invitation.role as Role]}
                  </Badge>

                  <Badge
                    variant={invitation.status === 'accepted' ? 'default' : 'secondary'}
                  >
                    {invitation.status}
                  </Badge>

                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default MemberList