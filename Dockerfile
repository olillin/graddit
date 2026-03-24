# syntax=docker/dockerfile:1

################################################################################
# Use node image for base image for all stages.
FROM node:24-alpine AS base

# Set working directory for all build stages.
WORKDIR /app

################################################################################
# Create a stage for building the application.
FROM base AS build

# Install dev dependencies for build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci -D

# Copy the source files into the image.
COPY . .

# Run the build script.
RUN npm run bundle

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base AS final

# Use production node environment by default.
ENV NODE_ENV=production

# Run the application as a non-root user.
RUN chown -R node:node /app
USER node

# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
COPY --from=build /app/bundle /app
COPY --from=build /app/public /app/public

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD ["node", "server.js"]
