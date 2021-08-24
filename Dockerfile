FROM node:14.16.1-slim
WORKDIR /app
RUN npm i -g pnpm
COPY ./app/pnpm-lock.yaml ./app/package.json ./
RUN --mount=type=cache,target=/app/pnpm-store \
    pnpm config set store-dir /app/pnpm-store && \
    pnpm install
COPY ./app ./