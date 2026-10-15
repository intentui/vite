import { Toaster as ToasterPrimitive, type ToasterProps } from "sonner"
import { useTheme } from "~/components/theme-provider"

const Toast = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  return (
    <ToasterPrimitive
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      toastOptions={{
        className:
          "*:data-icon:self-start font-sans has-data-description:*:data-icon:mt-1 *:data-icon:mt-0.5 backdrop-blur-2xl",
      }}
      style={
        {
          "--normal-bg": "var(--color-overlay)",
          "--normal-text": "var(--color-overlay-foreground)",
          "--normal-border": "var(--color-border)",

          "--success-bg": "var(--color-success-subtle)",
          "--success-border": "var(--color-success-subtle-border)",
          "--success-text": "var(--color-success-subtle-foreground)",

          "--error-bg": "var(--color-danger-subtle)",
          "--error-border": "var(--color-danger-subtle-border)",
          "--error-text": "var(--color-danger-subtle-foreground)",

          "--warning-bg": "var(--color-warning-subtle)",
          "--warning-border": "var(--color-warning-subtle-border)",
          "--warning-text": "var(--color-warning-subtle-foreground)",

          "--info-bg": "var(--color-info-subtle)",
          "--info-border": "var(--color-info-subtle-border)",
          "--info-text": "var(--color-info-subtle-foreground)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export type { ToasterProps }
export { Toast }
