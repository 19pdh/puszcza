#!/bin/bash

set -x
set -eou pipefail

if [ -d ./kronika ]; then
    cd kronika
    git pull
    cd ..
else
    git clone https://github.com/19pdh/kronika
fi
