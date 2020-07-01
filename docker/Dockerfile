FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /opt && cd /opt && apk --update --no-cache add git && git clone https://github.com/bbpink/expertsado.git
EXPOSE 80
