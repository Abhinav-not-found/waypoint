import type { Filter, Invitation } from '@/features/invitation/types/invites.type';
import { useState } from 'react';

const initialInvitations: Invitation[] = [
  {
    id: '1',
    organisationName: 'Waypoint Technologies',
    organisationDescription: 'Building tools for better team collaboration.',
    invitedBy: 'Abhinav Kumar',
    invitedByEmail: 'abhinav@example.com',
    createdAt: '2026-11-08T10:30:00',
    status: 'pending',
  },
  {
    id: '2',
    organisationName: 'Design Studio',
    organisationDescription: 'A creative team working on digital products.',
    invitedBy: 'Rahul Sharma',
    invitedByEmail: 'rahul@example.com',
    createdAt: '2026-11-07T14:20:00',
    status: 'pending',
  },
  {
    id: '3',
    organisationName: 'Development Hub',
    organisationDescription: 'Software development and engineering.',
    invitedBy: 'Priya Singh',
    invitedByEmail: 'priya@example.com',
    createdAt: '2026-11-05T09:00:00',
    status: 'accepted',
  },
];

const useInvites = () => {
  const [invitations, setInvitations] = useState<Invitation[]>(initialInvitations);

  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const pendingCount = invitations.filter((invitation) => invitation.status === 'pending').length;

  const filteredInvitations = invitations.filter((invitation) => {
    if (activeFilter === 'all') return true;
    return invitation.status === activeFilter;
  });

  const handleInvitationAction = (invitationId: string, status: 'accepted' | 'rejected') => {
    setInvitations((prev) =>
      prev.map((invitation) =>
        invitation.id === invitationId ? { ...invitation, status } : invitation,
      ),
    );
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return {
    formatDate,
    filteredInvitations,
    activeFilter,
    pendingCount,
    invitations,
    setActiveFilter,
    handleInvitationAction,
  };
};

export default useInvites;
