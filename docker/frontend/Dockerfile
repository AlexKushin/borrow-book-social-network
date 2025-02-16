FROM node:18 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/dist/borrow-book-social-network-ui/browser /usr/share/nginx/html

EXPOSE 80

#docker build -t bsn/bsn-ui:1.0.0 -f ../docker/frontend/Dockerfile .