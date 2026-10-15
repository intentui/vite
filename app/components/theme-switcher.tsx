import { IconMoon, IconSun } from "@intentui/icons"
import { Button } from "~/components/ui/button"
import { useTheme } from "./theme-provider"

interface Props {
  intent?: "plain" | "outline"
}

export function ThemeSwitcher({ intent = "plain" }: Props) {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      intent={intent}
      size="sq-sm"
      aria-label={`Switch to ${theme}` === "light" ? "dark" : "light" + "mode"}
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
