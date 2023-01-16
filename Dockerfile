FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/ssi.conf
COPY root.ssi /usr/share/nginx/html/root
RUN ["rm", "-f", "/etc/nginx/conf.d/default.conf"]

CMD ["nginx", "-g", "daemon off;"]
