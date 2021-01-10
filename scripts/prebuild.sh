#!/bin/sh

set -x
set -eou pipefail

if [ -d ./content ]; then
    cd content
    git pull
    cd ..
else
    git clone https://github.com/19pdh/kronika content
fi
