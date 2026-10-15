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
      <IconSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <IconMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
