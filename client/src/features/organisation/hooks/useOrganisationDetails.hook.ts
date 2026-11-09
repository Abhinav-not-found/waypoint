import { OrganisationsService } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

const useOrganisationDetails = (organisationId: string) => {
  const {
    data: organisation,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['organisation-details', organisationId],
    queryFn: () => OrganisationsService.getOrganisations(organisationId),
    enabled: !!organisationId,
  });

  return {
    organisation,
    isLoading,
    isError,
    error,
  };
};

export default useOrganisationDetails;