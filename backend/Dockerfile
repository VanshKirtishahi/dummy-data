# --- Backend Production Container ---
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache curl

# Install dependencies in a separate layer for optimal caching
FROM base AS dependencies
WORKDIR /app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# Production runner image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Security: run as non-root node user
USER node

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/api/health || exit 1

CMD ["npm", "start"]
