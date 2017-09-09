#!/bin/bash
set -e
set -x

npm install
gulp

bundle install
if [ "${TRAVIS_BRANCH}" == "master" ]; then
    # re-tag docker image
    bundle exec jekyll build
else
    bundle exec jekyll build --config _config.yml,_config.dev.yml
fi

docker build -t coinium/coinium .
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
	if [ "${TRAVIS_BRANCH}" != "master" ]; then
        # re-tag docker image
        docker tag coinium/coinium coinium/coinium:${TRAVIS_BRANCH}
        docker push coinium/coinium:${TRAVIS_BRANCH}
    else
        docker push coinium/coinium
    fi

    curl "https://ci.dini-mueter.net/buildByToken/build?job=deploy.coinium&token=${BUILD_TOKEN}&cause=Container%20build"
fi