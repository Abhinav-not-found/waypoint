import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { OrganisationsService } from '@/shared/api/services/OrganisationsService';
import type { Organisation } from '@/shared/api/models/Organisation';
import {
  createOrganisationSchema,
  type CreateOrganisationValues,
} from '@/features/organisation/types/createOrganisation.types';

const useOrganisation = () => {
  const [open, setOpen] = useState(false);
  const [selectedOrganisation, setSelectedOrganisation] = useState<Organisation | null>(null);
  const [organisationToDelete, setOrganisationToDelete] = useState<Organisation | null>(null);

  const queryClient = useQueryClient();

  const form = useForm<CreateOrganisationValues>({
    resolver: zodResolver(createOrganisationSchema),
    defaultValues: {
      name: '',
      description: '',
      logo: '',
    },
  });

  // Fetch user's organisations
  const myOrganisationsQuery = useQuery({
    queryKey: ['organisations', 'my'],
    queryFn: () => OrganisationsService.getOrganisationsMy(),
  });

  // Refresh organisation list
  const invalidateOrganisations = () => {
    queryClient.invalidateQueries({
      queryKey: ['organisations'],
    });
  };

  // Create organisation
  const createOrganisationMutation = useMutation({
    mutationFn: (data: CreateOrganisationValues) => {
      const { logo, ...rest } = data;

      return OrganisationsService.postOrganisations({
        ...rest,
        ...(logo ? { logo } : {}),
      });
    },

    onSuccess: (response) => {
      form.reset();
      setOpen(false);
      invalidateOrganisations();

      toast.success(response.message || 'Organisation created successfully');
    },

    onError: (error: any) => {
      const message = error.body?.message || error.message || 'Failed to create organisation';

      form.setError('root', { message });
      toast.error(message);
    },
  });

  // Update organisation
  const updateOrganisationMutation = useMutation({
    mutationFn: ({
      organisationId,
      data,
    }: {
      organisationId: string;
      data: CreateOrganisationValues;
    }) => {
      const { logo, ...rest } = data;

      return OrganisationsService.patchOrganisations(organisationId, {
        ...rest,
        ...(logo ? { logo } : {}),
      });
    },

    onSuccess: (response) => {
      form.reset();
      setSelectedOrganisation(null);
      setOpen(false);
      invalidateOrganisations();

      toast.success(response.message || 'Organisation updated successfully');
    },

    onError: (error: any) => {
      const message = error.body?.message || error.message || 'Failed to update organisation';

      form.setError('root', { message });
      toast.error(message);
    },
  });

  // Delete organisation
  const deleteOrganisationMutation = useMutation({
    mutationFn: (organisationId: string) =>
      OrganisationsService.deleteOrganisations(organisationId),

    onSuccess: (response) => {
      setOrganisationToDelete(null);
      invalidateOrganisations();

      toast.success(response.message || 'Organisation deleted successfully');
    },

    onError: (error: any) => {
      const message = error.body?.message || error.message || 'Failed to delete organisation';

      toast.error(message);
    },
  });

  // Submit create or update form
  const onSubmit = (data: CreateOrganisationValues) => {
    if (selectedOrganisation) {
      updateOrganisationMutation.mutate({
        organisationId: selectedOrganisation._id,
        data,
      });
      return;
    }

    createOrganisationMutation.mutate(data);
  };

  // Open create sheet
  const handleCreate = () => {
    setSelectedOrganisation(null);
    form.reset({
      name: '',
      description: '',
      logo: '',
    });
    setOpen(true);
  };

  // Open edit sheet
  const handleEdit = (organisation: Organisation) => {
    setSelectedOrganisation(organisation);

    form.reset({
      name: organisation.name,
      description: organisation.description,
      logo: organisation.logo ?? '',
    });

    setOpen(true);
  };

  // Close sheet
  const handleOpenChange = (value: boolean) => {
    setOpen(value);

    if (!value) {
      setSelectedOrganisation(null);
      form.reset();
    }
  };

  // Select organisation for deletion
  const handleDelete = (organisation: Organisation) => {
    setOrganisationToDelete(organisation);
  };

  // Confirm deletion
  const confirmDelete = () => {
    if (!organisationToDelete) return;

    deleteOrganisationMutation.mutate(organisationToDelete._id);
  };

  const handleDeleteDialogChange = (open: boolean) => {
    if (!open && !deleteOrganisationMutation.isPending) {
      setOrganisationToDelete(null);
    }
  };

  return {
    form,

    myOrganisationsQuery,

    createOrganisationMutation,
    updateOrganisationMutation,
    deleteOrganisationMutation,

    selectedOrganisation,
    organisationToDelete,

    open,
    handleOpenChange,
    handleCreate,
    handleEdit,
    handleDelete,
    confirmDelete,

    onSubmit,

    handleDeleteDialogChange,
  };
};

export default useOrganisation;
