#!/usr/bin/env bash

mkdir ./dist/api

node ./scripts/generateApi.js > ./dist/api/posts.json

