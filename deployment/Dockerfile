# build stage 
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --production
RUN npm i @vue/cli-service
# RUN npm install materialize-css@next
RUN npm i -S vue2-touch-events
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/deployment/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
