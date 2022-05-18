# Base
FROM node:16.13.0-alpine3.14 as base
WORKDIR /app
COPY package*.json .

# Development Stage
FROM base as development-stage
RUN npm install
COPY . .
CMD ["npm", "run", "serve"]

#["npm", "run", "serve", "--production"]

# Build Stage
FROM base as build-stage
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:1.19.2-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]