import { RouterProvider } from "react-aria-components"
import { type NavigateOptions, useHref, useNavigate } from "react-router"

import { ThemeProvider } from "./theme-provider"

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  )
}
