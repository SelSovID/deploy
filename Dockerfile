FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/ssi.conf

CMD ["nginx", "-g", "daemon off;"]
