## Assets
FROM node:6 as assets

COPY . /tmp/coinium
WORKDIR /tmp/coinium

RUN npm install -g gulp

## Webpage
FROM ruby:2 as webpage

COPY . /tmp/coinium
WORKDIR /tmp/coinium

RUN bundle install
RUN bundle exec jekyll build --config _config.yml,_config.dev.yml

## Container
FROM alpine:latest
MAINTAINER Simon Erhardt <me+docker@rootlogin.ch>

RUN apk -U --no-cache add \
  nginx \
  tini

WORKDIR /opt/coinium/

COPY --from=webpage /tmp/coinium/_site /opt/coinium
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["/sbin/tini","--"]
CMD ["/usr/sbin/nginx","-c","/etc/nginx/nginx.conf"]