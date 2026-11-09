import { UserPlus, Mail } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/shared/components/ui/field';
import { type InviteMemberFormValues } from '@/features/organisation/types/member.types';
import useInvitation from '@/features/organisation/hooks/useInvitation.hook';

const InviteMemberCard = () => {

  const { form, inviteMutation, onSubmit } = useInvitation()

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-md border p-2">
            <UserPlus className="size-4" />
          </div>

          <div>
            <CardTitle className="text-base">
              Invite members
            </CardTitle>

            <CardDescription>
              Invite people to collaborate with your organisation.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet>
            <FieldGroup className="flex flex-col gap-3 sm:flex-row sm:items-start">

              {/* Email */}
              <Field className="flex-1">
                <FieldLabel htmlFor="email">
                  Email address
                </FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  className={
                    form.formState.errors.email &&
                    'border-red-500 focus-visible:border-red-500'
                  }
                  {...form.register('email')}
                />

                <FieldError className="text-xs">
                  {form.formState.errors.email?.message}
                </FieldError>
              </Field>

              {/* Role */}
              <Field className="w-full sm:w-40">
                <FieldLabel htmlFor="role">
                  Role
                </FieldLabel>

                <Select
                  value={form.watch('role')}
                  onValueChange={(value) =>
                    form.setValue('role', value as InviteMemberFormValues['role'], {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="employee">
                      Employee
                    </SelectItem>

                    <SelectItem value="manager">
                      Manager
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FieldError className="text-xs">
                  {form.formState.errors.role?.message}
                </FieldError>
              </Field>

              {/* Submit */}
              <Field className="sm:w-auto sm:pt-7">
                <Button
                  type="submit"
                  disabled={inviteMutation.isPending}
                >
                  <Mail className="mr-2 size-4" />
                  {inviteMutation.isPending
                    ? 'Sending...'
                    : 'Send invitation'}
                </Button>
              </Field>

            </FieldGroup>

            {/* Server error */}
            {inviteMutation.isError && (
              <FieldError className="text-xs">
                Something went wrong. Please try again.
              </FieldError>
            )}

          </FieldSet>
        </form>
      </CardContent>
    </Card>
  );
};

export default InviteMemberCard;
