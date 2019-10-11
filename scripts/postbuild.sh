#!/usr/bin/env bash

mkdir ./dist/api

node ./script/generateApi.js > ./dist/api/posts.json

