import {
  inviteMemberSchema,
  type InviteMemberFormValues,
} from '@/features/organisation/types/member.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { InvitationsService } from '@/shared/api/services/InvitationsService';

const useInvitation = () => {
  const form = useForm<InviteMemberFormValues>({
    resolver: zodResolver(inviteMemberSchema),
    defaultValues: {
      email: '',
      role: 'employee',
    },
  });

  const inviteMutation = useMutation({
    mutationFn: async (values: InviteMemberFormValues) => {
      console.log('Invitation details:', values);
      return values;
    },

    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = (values: InviteMemberFormValues) => {
    inviteMutation.mutate(values);
  };

  const fetchInvitations = (organisationId: string) => {
    return useQuery({
      queryKey: ['organisation-invitations', organisationId],
      queryFn: () => InvitationsService.getInvitationOrganisationsAll(organisationId),
      enabled: !!organisationId,
    });
  };
  return { form, inviteMutation, onSubmit, fetchInvitations };
};

export default useInvitation;
