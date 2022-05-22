# develop stage
FROM node:13.14-alpine as develop-stage
WORKDIR /app

COPY package*.json ./
COPY quasar.config.js ./
COPY ./ ./
RUN npm install -g @vue/cli
RUN npm install -g @quasar/cli
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm install
RUN quasar build
# production stage
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"， "http-server", "dist"]
