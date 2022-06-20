# Base
FROM node:16.13.0-alpine3.14 as base
WORKDIR /app
COPY package*.json .

# Development Stage
FROM base as development-stage
RUN npm install
COPY . .
CMD ["npm", "run", "serve"]

# Build Stage
FROM base as build-stage
RUN npm install
COPY . .
RUN npm run build


