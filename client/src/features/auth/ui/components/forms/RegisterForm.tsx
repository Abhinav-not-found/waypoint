import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/components/ui/field"

import { Input } from "@/shared/components/ui/input"
import { Button } from "@/shared/components/ui/button"

import useRegister from "@/features/auth/hooks/useRegister.hook"

import PasswordField from "../PasswordField"
import PasswordStrengthIndicator from "../PasswordStrengthIndicator"

const RegisterForm = () => {
  const { form, registerMutation, onSubmit } = useRegister()

  const password = form.watch("password") || ""

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldLegend>Create your account</FieldLegend>

        <FieldDescription>
          Join Waypoint to organize your projects, collaborate with your team,
          and keep track of every milestone.
        </FieldDescription>

        <FieldGroup>
          {/* Name */}
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>

            <Input
              id="name"
              placeholder="John Doe"
              autoComplete="name"
              className={
                form.formState.errors.name
                  ? "border-red-500 focus-visible:border-red-500"
                  : ""
              }
              {...form.register("name")}
            />

            <FieldError className="text-xs">
              {form.formState.errors.name?.message}
            </FieldError>
          </Field>

          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email address</FieldLabel>

            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              autoComplete="email"
              className={
                form.formState.errors.email
                  ? "border-red-500 focus-visible:border-red-500"
                  : ""
              }
              {...form.register("email")}
            />

            <FieldError className="text-xs">
              {form.formState.errors.email?.message}
            </FieldError>
          </Field>

          {/* Password */}
          <div className="space-y-2">
            <PasswordField
              registration={form.register("password")}
              error={form.formState.errors.password?.message}
            />

            <PasswordStrengthIndicator password={password} />
          </div>

          {/* Server error */}
          {form.formState.errors.root && (
            <FieldError className="text-xs">
              {form.formState.errors.root.message}
            </FieldError>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full"
          >
            {registerMutation.isPending
              ? "Creating account..."
              : "Create account"}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default RegisterForm