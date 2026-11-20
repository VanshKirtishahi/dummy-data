# --- Root Dockerfile for Render Cloud Container Deployment ---
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache curl

FROM base AS dependencies
WORKDIR /app
COPY backend/package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=10000

COPY --from=dependencies /app/node_modules ./node_modules
COPY backend/ .

USER node
EXPOSE 10000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:10000/api/health || exit 1

CMD ["npm", "start"]
