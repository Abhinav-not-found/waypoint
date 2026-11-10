import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import type { UseFormRegisterReturn } from "react-hook-form"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/shared/components/ui/field"
import { Input } from "@/shared/components/ui/input"

interface PasswordFieldProps {
  registration: UseFormRegisterReturn
  error?: string
}

const PasswordField = ({ registration, error }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Field>
      <FieldLabel htmlFor="password">Password</FieldLabel>

      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Create a strong password"
          autoComplete="new-password"
          className={`pr-10 ${error
            ? "border-red-500 focus-visible:ring-red-200 dark:focus-visible:ring-red-500/50 focus-visible:border-red-500"
            : ""
            }`}
          {...registration}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <Eye className="size-4 cursor-pointer active:scale-90" />
          ) : (
            <EyeOff className="size-4 cursor-pointer active:scale-90" />
          )}
        </button>
      </div>

      <FieldError className="text-xs">{error}</FieldError>
    </Field>
  )
}

export default PasswordField