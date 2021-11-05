ARG REPO=504857465313.dkr.ecr.us-east-2.amazonaws.com/nginx:latest
FROM ${REPO}
EXPOSE 80

RUN rm /usr/share/nginx/html/*

COPY configs/default.conf etc/nginx/conf.d/default.conf

# start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]