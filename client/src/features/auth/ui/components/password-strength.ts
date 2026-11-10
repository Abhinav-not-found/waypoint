export const getPasswordStrength = (password: string) => {
  const requirements = [
    {
      label: "At least 8 characters",
      met: password.length >= 8,
    },
    {
      label: "One uppercase letter",
      met: /[A-Z]/.test(password),
    },
    {
      label: "One lowercase letter",
      met: /[a-z]/.test(password),
    },
    {
      label: "One number",
      met: /[0-9]/.test(password),
    },
    {
      label: "One special character",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ]

  const score = requirements.filter((item) => item.met).length

  const strength =
    score <= 2
      ? "Weak"
      : score === 3
        ? "Fair"
        : score === 4
          ? "Good"
          : "Strong"

  return { requirements, score, strength }
}