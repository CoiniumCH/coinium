FROM alpine:latest
MAINTAINER Simon Erhardt <me+docker@rootlogin.ch>

RUN apk -U --no-cache add \
  nginx \
  tini

WORKDIR /opt/coinium/

COPY _site /opt/coinium
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["/sbin/tini","--"]
CMD ["/usr/sbin/nginx","-c","/etc/nginx/nginx.conf"]