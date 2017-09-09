#!/bin/bash
set -e
set -x

if [ "${TRAVIS_BRANCH}" == "master" ]; then
    # re-tag docker image
    bundle exec jekyll build
else
    bundle exec jekyll build --config _config.yml,_config.dev.yml
fi