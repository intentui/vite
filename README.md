# Intent UI Starter Kit

React Router 8 and Intent UI, powered by Vite+ 1.2 (Vite, Oxfmt, Oxlint, and type checking).

Requires Node.js 22.22+ on the 22.x line, 24.11+ on the 24.x line, or 26+, and Bun 1.3.14.

```sh
bun install
bun run dev
bun run check
bun run format
bun run build
bun run start
```

With the global `vp` CLI installed, use `vp install`, `vp run dev`, `vp run check`,
`vp fmt`, and `vp run build`. Without it, use the Bun scripts above or `bunx vp`.
React Router owns the dev and production build commands, so use `vp run dev` and
`vp run build` to execute its scripts. `vp check` checks formatting, lint, and types;
`vp run check` also generates React Router route types first.

Formatting and lint rules live in `vite.config.ts`. Oxfmt preserves the project's
semicolon-free style and sorts imports and Tailwind classes. Biome is no longer required.
There is no test suite configured yet.
