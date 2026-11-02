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

const RegisterForm = () => {
  const { form, registerMutation, onSubmit } = useRegister()

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
              className={form.formState.errors.name && "focus-visible:ring-red-200 dark:focus-visible:ring-red-500/50 border-red-500 focus-visible:border-red-500"}
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
              className={form.formState.errors.email && "focus-visible:ring-red-200 dark:focus-visible:ring-red-500/50 border-red-500 focus-visible:border-red-500"}
              {...form.register("email")}
            />

            <FieldError className="text-xs">
              {form.formState.errors.email?.message}
            </FieldError>
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <Input
              id="password"
              type="password"
              placeholder="Create a strong password"
              autoComplete="new-password"
              className={form.formState.errors.password && "focus-visible:ring-red-200 dark:focus-visible:ring-red-500/50 border-red-500  focus-visible:border-red-500"}
              {...form.register("password")}
            />

            <FieldError className="text-xs">
              {form.formState.errors.password?.message}
            </FieldError>
          </Field>

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