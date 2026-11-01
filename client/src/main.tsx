import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './shared/components/theme-provider'
import AppRoute from './app/routes/AppRoute'


createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AppRoute />
  </ThemeProvider>


)
