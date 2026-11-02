import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './shared/components/theme-provider'
import AppRoute from './app/routes/AppRoute'
import Providers from '@/shared/components/provider'
import { Toaster } from 'sonner'


createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Providers>
      <AppRoute />
      <Toaster richColors />
    </Providers>
  </ThemeProvider>


)
