import { Check, Circle } from "lucide-react"
import { getPasswordStrength } from "./password-strength"

interface PasswordStrengthIndicatorProps {
  password: string
}

const PasswordStrengthIndicator = ({
  password,
}: PasswordStrengthIndicatorProps) => {
  if (!password) return null

  const { requirements, score, strength } =
    getPasswordStrength(password)

  const getBarColor = () => {
    if (score <= 2) return "bg-red-500"
    if (score === 3) return "bg-yellow-500"
    if (score === 4) return "bg-blue-500"
    return "bg-green-500"
  }

  return (
    <div className="space-y-3 pt-2">
      {/* Strength label */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Password strength
        </span>

        <span className="text-xs font-medium">{strength}</span>
      </div>

      {/* Progress bars */}
      <div className="flex gap-1.5">
        {requirements.map((requirement, index) => (
          <div
            key={requirement.label}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              index < score ? getBarColor() : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Requirements */}
      <div className="grid grid-cols-2 gap-2">
        {requirements.map((requirement) => (
          <div
            key={requirement.label}
            className={`flex items-center gap-2 text-xs ${
              requirement.met
                ? "text-green-500"
                : "text-muted-foreground"
            }`}
          >
            {requirement.met ? (
              <Check className="size-3.5" />
            ) : (
              <Circle className="size-3.5" />
            )}

            {requirement.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PasswordStrengthIndicator