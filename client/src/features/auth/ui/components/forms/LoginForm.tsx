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
import useLogin from "@/features/auth/hooks/useLogin.hook"
import PasswordField from "@/features/auth/ui/components/PasswordField"

const LoginForm = () => {

  const { form, loginMutation, onSubmit } = useLogin()

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldLegend>Welcome back</FieldLegend>

        <FieldDescription>
          Sign in to your Waypoint account to continue managing projects,
          collaborating with your team, and tracking your progress.
        </FieldDescription>

        <FieldGroup>

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
          <PasswordField
            registration={form.register("password")}
            error={form.formState.errors.password?.message}
          />

          {/* Server error */}
          {form.formState.errors.root && (
            <FieldError className="text-xs">
              {form.formState.errors.root.message}
            </FieldError>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full"
          >
            {loginMutation.isPending ? "Signing in..." : "Sign in"}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default LoginForm