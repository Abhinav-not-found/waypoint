type InvitationStatus = 'pending' | 'accepted' | 'rejected';
export type Invitation = {
  id: string;
  organisationName: string;
  organisationDescription: string;
  invitedBy: string;
  invitedByEmail: string;
  createdAt: string;
  status: InvitationStatus;
};

export type Filter = 'all' | InvitationStatus;
