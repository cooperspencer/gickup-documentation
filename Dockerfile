# Stage 1: Build the Docusaurus static site
FROM node:alpine AS docusaurus

WORKDIR /project

# Copy the rest of the files and build the site
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve static site using static-web-server
FROM ghcr.io/static-web-server/static-web-server:2

WORKDIR /
COPY --from=docusaurus /project/build /public

