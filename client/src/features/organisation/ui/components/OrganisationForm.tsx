import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Button } from '@/shared/components/ui/button';
import type { UseFormReturn } from 'react-hook-form';
import type { CreateOrganisationValues } from '@/features/organisation/types/createOrganisation.types';

interface CreateOrganisationFormProps {
  form: UseFormReturn<CreateOrganisationValues>;
  onSubmit: (data: CreateOrganisationValues) => void;
  isPending: boolean;
  isEditing: boolean
}

const CreateOrganisationForm = ({
  form,
  onSubmit,
  isPending,
  isEditing
}: CreateOrganisationFormProps) => {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="px-4 py-6"
    >
      <FieldSet>
        <FieldLegend>Organisation details</FieldLegend>

        <FieldDescription>
          Enter the basic information about your organisation.
        </FieldDescription>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">
              Organisation name
            </FieldLabel>

            <Input
              id="name"
              placeholder="Acme Technologies"
              {...form.register('name')}
            />

            <FieldError>
              {form.formState.errors.name?.message}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="description">
              Description (Optional)
            </FieldLabel>

            <Textarea
              id="description"
              placeholder="What does your organisation do?"
              className="min-h-24 resize-none"
              {...form.register('description')}
            />

            <FieldError>
              {form.formState.errors.description?.message}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="logo">
              Logo URL (Optional)
            </FieldLabel>

            <Input
              id="logo"
              type="url"
              placeholder="https://example.com/logo.png"
              {...form.register('logo')}
            />

            <FieldError>
              {form.formState.errors.logo?.message}
            </FieldError>
          </Field>

          {form.formState.errors.root && (
            <FieldError>
              {form.formState.errors.root.message}
            </FieldError>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? 'Saving...'
              : isEditing
                ? 'Save changes'
                : 'Create organisation'}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default CreateOrganisationForm;