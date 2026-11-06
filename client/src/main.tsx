import '@/shared/api/api-interceptor';
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './shared/components/theme-provider'
import AppRoute from './app/routes/AppRoute'
import Providers from '@/shared/components/provider'
import AppToaster from '@/shared/components/app-toaster';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Providers>
      <AppRoute />
      <AppToaster />
    </Providers>
  </ThemeProvider>


)
