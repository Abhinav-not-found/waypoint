import type { Organisation } from '@/shared/api/models/Organisation';
import { Building2, RefreshCw } from 'lucide-react';
import OrganisationCard from './OrganisationCard';
import { Button } from '@/shared/components/ui/button';
import OrganisationEmptyState from '@/features/organisation/ui/components/OrganisationEmptyState';

interface OrganisationListProps {
  organisations: Organisation[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onCreate: () => void;
  onEdit: (organisation: Organisation) => void;
  onDelete: (organisation: Organisation) => void;
}

const OrganisationList = ({
  organisations,
  isLoading,
  isError,
  onRetry,
  onCreate,
  onEdit,
  onDelete,
}: OrganisationListProps) => {

  // console.log(organisations)
  
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-xl border bg-muted/40"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
        <Building2 className="mb-3 size-8 text-muted-foreground" />

        <h3 className="font-semibold">
          Couldn't load organisations
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Something went wrong while fetching your organisations.
        </p>

        <Button
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={onRetry}
        >
          <RefreshCw className="mr-2 size-4" />
          Try again
        </Button>
      </div>
    );
  }

  if (organisations.length === 0) {
    return (
      <OrganisationEmptyState onCreate={onCreate} />
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {organisations.map((organisation) => (
        <OrganisationCard
          key={organisation._id}
          organisation={organisation}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default OrganisationList;