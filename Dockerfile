FROM node:bookworm AS build

WORKDIR /project

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM ghcr.io/static-web-server/static-web-server:2

WORKDIR /
COPY --from=build /project/build /public
