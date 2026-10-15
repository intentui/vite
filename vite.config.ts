import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, lazyPlugins } from "vite-plus"

export default defineConfig({
  fmt: {
    semi: false,
    printWidth: 100,
    sortImports: true,
    sortTailwindcss: {
      stylesheet: "./app/app.css",
      attributes: ["classList"],
      functions: ["twMerge", "twJoin", "tv", "composeRenderProps", "composeTailwindRenderProps"],
    },
    ignorePatterns: [".agents/**", "skills-lock.json", ".react-router/**", "build/**"],
  },
  lint: {
    plugins: ["typescript", "unicorn", "oxc", "react", "jsx-a11y"],
    ignorePatterns: [".agents/**", ".react-router/**", "build/**"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "react/rules-of-hooks": "error",
      "react/exhaustive-deps": "off",
      "no-unused-vars": "error",
      "no-param-reassign": "warn",
      "prefer-arrow-callback": "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
  resolve: { tsconfigPaths: true },
  plugins: lazyPlugins(() => [reactRouter(), tailwindcss()]),
})
