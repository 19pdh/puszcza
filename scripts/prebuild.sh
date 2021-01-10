#!/bin/sh

set -x
set -eu pipefail

if [ -d ./content ]; then
    cd content
    git pull
    cd ..
else
    git clone https://github.com/19pdh/kronika content
fi
