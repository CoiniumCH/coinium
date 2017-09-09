#!/bin/bash
set -e
set -x

if [ "${TRAVIS_BRANCH}" != "master" ]; then
    # re-tag docker image
    docker tag coinium/coinium coinium/coinium:${TRAVIS_BRANCH}
    docker push coinium/coinium:${TRAVIS_BRANCH}
else
    docker push coinium/coinium
fi