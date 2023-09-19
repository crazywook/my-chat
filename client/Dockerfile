FROM node:14-alpine3.17 as base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:14-alpine3.17 as build
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.25.1-alpine-slim as web
WORKDIR /app
COPY --from=build /app/dist/client .
COPY deploy/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
