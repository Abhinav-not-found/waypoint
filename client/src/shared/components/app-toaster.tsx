import { Toaster } from 'sonner'
import { useTheme } from '@/shared/components/theme-provider'

const AppToaster = () => {
  const { theme } = useTheme()

  return (
    <Toaster
      richColors
      theme={theme}
    />
  )
}

export default AppToaster