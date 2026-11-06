import { Button } from "@/shared/components/ui/button"
interface OrganisationHeaderProps {
  onCreate: () => void;
}

const OrganisationHeader = ({ onCreate }: OrganisationHeaderProps) => {
  return (
    <header className="flex items-center justify-between mb-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Organisations
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your organisations and collaborate with your team.
        </p>
      </div>

      <Button onClick={onCreate}>
        Create organisation
      </Button>
    </header>
  )
}

export default OrganisationHeader