FROM nginx:1.27-alpine

COPY index.html styles.css og.png /usr/share/nginx/html/

EXPOSE 80
