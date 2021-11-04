ARG REPO=504857465313.dkr.ecr.us-east-2.amazonaws.com/node:16
FROM ${REPO} AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
