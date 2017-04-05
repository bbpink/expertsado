FROM nginx:alpine
MAINTAINER "bbpink" <ssbbpink@gmail.com>
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir /opt && cd /opt && apk --update --no-cache add git && git clone https://github.com/bbpink/expertsado.git
EXPOSE 80
