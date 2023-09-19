FROM node:18-alpine3.17 as base
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile

FROM node:18-alpine3.17 as build
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:18-alpine3.17 as server
WORKDIR /app
COPY .env start.sh ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE ${SERVER_PORT}

CMD [ "./start.sh" ]