import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/shared/lib/query-client"
import { SidebarProvider } from "@/shared/components/ui/sidebar"
import { ThemeProvider } from "@/shared/components/theme-provider"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Providers