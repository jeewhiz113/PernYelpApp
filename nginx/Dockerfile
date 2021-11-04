
FROM nginx
EXPOSE 80

RUN rm /usr/share/nginx/html/*

COPY configs/default.conf etc/nginx/conf.d/default.conf

# start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]