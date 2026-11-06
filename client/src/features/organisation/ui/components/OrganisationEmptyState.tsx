import { Plus, Building2 } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

interface OrganisationEmptyStateProps {
  onCreate: () => void;
}

const OrganisationEmptyState = ({
  onCreate,
}: OrganisationEmptyStateProps) => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center">
      <div className="size-16 rounded-2xl bg-muted flex items-center justify-center mb-5">
        <Building2 className="size-8 text-muted-foreground" />
      </div>

      <h1 className="text-xl font-semibold">
        No organisations found
      </h1>

      <p className="text-sm text-muted-foreground mt-2 max-w-sm">
        Create an organisation to start managing your teams,
        projects and tasks in Waypoint.
      </p>

      <Button onClick={onCreate} className="mt-6 gap-2">
        <Plus className="size-4" />
        Create organisation
      </Button>
    </div>
  );
};

export default OrganisationEmptyState;