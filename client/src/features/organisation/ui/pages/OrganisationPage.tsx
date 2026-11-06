import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/components/ui/sheet';
import useOrganisation from '@/features/organisation/hooks/useOrganisation.hook';
import CreateOrganisationForm from '@/features/organisation/ui/components/OrganisationForm';
import OrganisationList from '@/features/organisation/ui/components/OrganisationList';
import DeleteOrganisationDialog from '@/features/organisation/ui/components/DeleteOrganisationDialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/shared/components/ui/alert-dialog';
import OrganisationHeader from '@/features/organisation/ui/components/OrganisationHeader';

const OrganisationPage = () => {
  const {
    form,
    createOrganisationMutation,
    updateOrganisationMutation,
    deleteOrganisationMutation,
    onSubmit,
    open,
    handleOpenChange,
    myOrganisationsQuery,
    selectedOrganisation,
    organisationToDelete,
    handleCreate,
    handleDelete,
    handleEdit,
    confirmDelete,
    handleDeleteDialogChange,
  } = useOrganisation();

  return (
    <>
      <OrganisationHeader onCreate={handleCreate} />

      <OrganisationList
        organisations={myOrganisationsQuery.data?.data ?? []}
        isLoading={myOrganisationsQuery.isLoading}
        isError={myOrganisationsQuery.isError}
        onRetry={() => myOrganisationsQuery.refetch()}
        onCreate={handleCreate}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <DeleteOrganisationDialog
        organisation={organisationToDelete}
        isPending={deleteOrganisationMutation.isPending}
        onOpenChange={handleDeleteDialogChange}
        onConfirm={confirmDelete}
      />

      <Sheet open={open} onOpenChange={handleOpenChange}>
        <SheetContent className="sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <SheetTitle> {selectedOrganisation ? 'Edit organisation' : 'Create organisation'}</SheetTitle>

            <SheetDescription>
              {selectedOrganisation
                ? 'Update your organisation details.'
                : 'Set up your organisation to start collaborating with your team.'}
            </SheetDescription>
          </SheetHeader>

          <CreateOrganisationForm
            form={form}
            onSubmit={onSubmit}
            isPending={
              createOrganisationMutation.isPending ||
              updateOrganisationMutation.isPending
            }
            isEditing={!!selectedOrganisation}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default OrganisationPage;