import type { Organisation } from '@/shared/api/models/Organisation';
import { Building2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

import { Button } from '@/shared/components/ui/button';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

interface OrganisationCardProps {
  organisation: Organisation;
  onEdit: (organisation: Organisation) => void;
  onDelete: (organisation: Organisation) => void;
}

const OrganisationCard = ({ organisation, onEdit, onDelete }: OrganisationCardProps) => {
  return (
    <div className="group rounded-xl border bg-card p-5 transition-colors hover:border-primary/50">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-muted">
          {organisation.logo ? (
            <img
              src={organisation.logo}
              alt={`${organisation.name} logo`}
              className="size-full object-cover"
            />
          ) : (
            <Building2 className="size-6 text-muted-foreground" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold">
            {organisation.name}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {organisation.description || 'No description provided'}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon" className="size-8 shrink-0">
              <MoreHorizontal className="size-4" />
              <span className="sr-only">Organisation actions</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(organisation)}>
              <Pencil className="mr-2 size-4" />
              Edit
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => onDelete(organisation)}
              className="text-destructive focus:text-destructive cursor-pointer"
            >
              <Trash2 className="mr-2 size-4 text-destructive" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-5 border-t pt-3">
        <p className="truncate text-xs text-muted-foreground">
          /{organisation.slug}
        </p>
      </div>
    </div>
  );
};

export default OrganisationCard;