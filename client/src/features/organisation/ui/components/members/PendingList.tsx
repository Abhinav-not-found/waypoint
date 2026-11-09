import {
  Clock,
  X,
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
import { Avatar, AvatarFallback } from '@/shared/components/ui/avatar';


type Role = 'admin' | 'manager' | 'employee';

type Invitation = {
  email: string;
  role: Role;
};

const roleLabels: Record<Role, string> = {
  admin: 'Admin',
  manager: 'Manager',
  employee: 'Employee',
};


const pendingInvitations: Invitation[] = [
  // {
  //   email: 'john@example.com',
  //   role: 'employee',
  // },
];

const PendingList = () => {

  const handleCancelInvitation = (email: string) => {
    // setInvitations((prev) =>
    //   prev.filter((invite) => invite.email !== email)
    // );
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">
              Pending invitations
            </CardTitle>
            <CardDescription>
              Invitations that haven't been accepted yet.
            </CardDescription>
          </div>

          <Badge variant="secondary">
            {pendingInvitations.length} pending
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {pendingInvitations.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-8 text-center">
            <Clock className="size-8 text-muted-foreground" />
            <p className="text-sm font-medium">
              No pending invitations
            </p>
            <p className="text-xs text-muted-foreground">
              Invitations you send will appear here.
            </p>
          </div>
        ) : (
          pendingInvitations.map((invite) => (
            <div
              key={invite.email}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {invite.email[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {invite.email}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {roleLabels[invite.role]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  Pending
                </Badge>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    handleCancelInvitation(invite.email)
                  }
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>

  )
}

export default PendingList