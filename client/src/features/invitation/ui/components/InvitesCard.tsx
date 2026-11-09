import {
  Building2,
  Check,
  X,
  Clock3,
  Users,
} from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';

import type { Invitation } from '@/features/invitation/types/invites.type';

type InvitationCardProps = {
  invitation: Invitation;
  formatDate: (date: string) => string;
  onAction: (id: string, status: 'accepted' | 'rejected') => void;
};

const InvitationCard = ({
  invitation,
  formatDate,
  onAction,
}: InvitationCardProps) => {
  return (
    <Card className="transition-colors hover:border-foreground/20">
      <CardContent className="p-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border bg-muted/40">
            <Building2 className="size-6 text-muted-foreground" />
          </div>

          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold tracking-tight">
                {invitation.organisationName}
              </h3>

              <Badge
                variant={
                  invitation.status === 'accepted'
                    ? 'default'
                    : invitation.status === 'rejected'
                      ? 'destructive'
                      : 'secondary'
                }
                className="capitalize"
              >
                {invitation.status}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              {invitation.organisationDescription}
            </p>

            <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
              <span className="flex items-center gap-1.5">
                <Users className="size-3.5" />
                Invited by {invitation.invitedBy}
              </span>

              <span className="flex items-center gap-1.5">
                <Clock3 className="size-3.5" />
                {formatDate(invitation.createdAt)}
              </span>
            </div>

            {invitation.status === 'pending' ? (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Button
                  size="sm"
                  onClick={() => onAction(invitation.id, 'accepted')}
                >
                  <Check className="mr-2 size-4" />
                  Accept invitation
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onAction(invitation.id, 'rejected')}
                >
                  <X className="mr-2 size-4" />
                  Decline
                </Button>
              </div>
            ) : (
              <p className="flex items-center gap-1.5 pt-2 text-xs text-muted-foreground">
                {invitation.status === 'accepted' ? (
                  <>
                    <Check className="size-3.5 text-green-500" />
                    You accepted this invitation.
                  </>
                ) : (
                  <>
                    <X className="size-3.5" />
                    You declined this invitation.
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvitationCard;