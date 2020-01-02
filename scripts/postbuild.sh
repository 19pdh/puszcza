#!/usr/bin/env bash

mkdir -p ./dist/api
mkdir ./static/api

node -r esm ./scripts/generateApi.js

