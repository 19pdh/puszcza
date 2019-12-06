#!/usr/bin/env bash

mkdir ./dist/api
mkdir ./static/api

node -r esm ./scripts/generateApi.js

