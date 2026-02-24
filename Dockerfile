# ──────────────────────────────────────────────────────────────
# Stage 1 — Install ALL dependencies (dev + prod) for the build
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# ──────────────────────────────────────────────────────────────
# Stage 2 — Build the React Router app (SSG + SSR bundle)
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS build
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# ──────────────────────────────────────────────────────────────
# Stage 3 — Production dependencies only (smaller image)
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS prod-deps
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod

# ──────────────────────────────────────────────────────────────
# Stage 4 — Node.js runtime (SSR server)
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS app
ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build    /app/build         ./build
EXPOSE 3000
CMD ["npx", "react-router-serve", "./build/server/index.js"]

# ──────────────────────────────────────────────────────────────
# Stage 5 — nginx (serves static/pre-rendered + proxies SSR)
# ──────────────────────────────────────────────────────────────
FROM nginx:stable-alpine AS nginx
# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy pre-rendered pages + static assets
COPY --from=build /app/build/client /usr/share/nginx/html
EXPOSE 80