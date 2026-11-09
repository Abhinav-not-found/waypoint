// import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Users,
  // Plus,
  Building2,
  // UsersRound,
  // ArrowUpRight,
} from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
// import { Input } from '@/shared/components/ui/input';
// import { Label } from '@/shared/components/ui/label';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/shared/components/ui/card';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/shared/components/ui/dialog';
import GoBackBtn from '@/shared/components/buttons/go-back-btn';
import useOrganisationDetails from '@/features/organisation/hooks/useOrganisationDetails.hook';

// type Team = {
//   id: string;
//   name: string;
//   description: string;
// };

const OrganisationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    organisation,
    // isLoading,
    isError,
    error,
  } = useOrganisationDetails(id ?? '');


  // const [teams, setTeams] = useState<Team[]>([]);
  // const [teamName, setTeamName] = useState('');
  // const [teamDescription, setTeamDescription] = useState('');
  // const [dialogOpen, setDialogOpen] = useState(false);

  // const handleCreateTeam = () => {
  //   if (!teamName.trim()) return;

  //   const newTeam: Team = {
  //     id: crypto.randomUUID(),
  //     name: teamName.trim(),
  //     description: teamDescription.trim(),
  //   };

  //   setTeams((prev) => [...prev, newTeam]);

  //   setTeamName('');
  //   setTeamDescription('');
  //   setDialogOpen(false);
  // };

  // const displayName = decodeURIComponent(
  //   id ?? 'Organisation'
  // ).replace(/-/g, ' ');

  // if (isLoading) {
  //   return (
  //     <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
  //       <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
  //       <p className="text-sm text-muted-foreground">
  //         Loading organisation...
  //       </p>
  //     </div>
  //   );
  // }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <div className="rounded-full bg-destructive/10 p-4">
          <Building2 className="size-8 text-destructive" />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold">
            Failed to load organisation
          </h2>

          <p className="max-w-sm text-sm text-muted-foreground">
            {error?.message || 'Something went wrong while fetching organisation details.'}
          </p>
        </div>

        <Button variant="outline">
          Try again
        </Button>
      </div>
    );
  }

  if (!organisation?.data) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-center">
        <Building2 className="size-10 text-muted-foreground" />

        <h2 className="text-lg font-semibold">
          Organisation not found
        </h2>

        <p className="text-sm text-muted-foreground">
          This organisation may have been deleted or is no longer available.
        </p>

        <Button variant="outline" onClick={() => navigate('/home')}>
          Back to organisations
        </Button>
      </div>
    );
  }

  return (
    <div className={`mx-auto w-full max-w-6xl space-y-8 p-6 transition-[max-width] duration-300 ease-in-out`}
    >
      <GoBackBtn />
      {/* Organisation Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl border bg-muted/40">
            <Building2 className="size-6 text-muted-foreground" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight capitalize">
              {organisation?.data.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {organisation?.data.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() =>
              navigate(`/home/${id}/members`)
            }
          >
            <Users className="mr-2 size-4" />
            Members
          </Button>

          {/* <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger>
              <Button>
                <Plus className="mr-2 size-4" />
                Create team
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a team</DialogTitle>
                <DialogDescription>
                  Create a team to organize people and collaborate on projects.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="team-name">Team name</Label>
                  <Input
                    id="team-name"
                    placeholder="e.g. Engineering"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team-description">
                    Description (optional)
                  </Label>
                  <Input
                    id="team-description"
                    placeholder="What does this team work on?"
                    value={teamDescription}
                    onChange={(e) =>
                      setTeamDescription(e.target.value)
                    }
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={handleCreateTeam}
                  disabled={!teamName.trim()}
                >
                  Create team
                </Button>
              </div>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>

      {/* Teams Section */}
      {/* <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight">
              Teams
            </h2>
            <p className="text-sm text-muted-foreground">
              Manage and organize your organisation's teams.
            </p>
          </div>

          <span className="text-sm text-muted-foreground">
            {teams.length} {teams.length === 1 ? 'team' : 'teams'}
          </span>
        </div>

        {teams.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 rounded-xl border bg-muted/40 p-4">
                <UsersRound className="size-7 text-muted-foreground" />
              </div>

              <h3 className="text-base font-semibold">
                No teams created yet
              </h3>

              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                Get your organisation started by creating your first
                team. You can organize members and projects within teams.
              </p>

              <Button
                className="mt-5"
                onClick={() => setDialogOpen(true)}
              >
                <Plus className="mr-2 size-4" />
                Create your first team
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <Card
                key={team.id}
                className="group cursor-pointer transition-colors hover:border-primary/50"
                onClick={() =>
                  navigate(
                    `/home/${id}/teams/${team.id}`
                  )
                }
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg border bg-muted/40 p-2">
                      <UsersRound className="size-5 text-muted-foreground" />
                    </div>

                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>

                  <CardTitle className="text-base">
                    {team.name}
                  </CardTitle>

                  <CardDescription className="line-clamp-2">
                    {team.description || 'No description provided.'}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="size-3.5" />
                    Team workspace
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section> */}
    </div>
  );
};

export default OrganisationDetailsPage;