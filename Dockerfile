FROM oven/bun:1.3.14 AS bun

FROM node:22-alpine AS base
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
WORKDIR /app

FROM base AS development-dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS production-dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM base AS build
COPY --from=development-dependencies /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS production
ENV NODE_ENV=production
COPY package.json bun.lock ./
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["bun", "run", "start"]
