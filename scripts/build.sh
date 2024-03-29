#!/bin/bash

REPO="vss-repo"

git clone https://github.com/zztkm/vss.git $REPO
cd $REPO

# Install deps
v install markdown

# build vss
v . -o vss

# copy vss to project root
cp ./vss ..

# cd project root
cd ..

# remove vss repo
rm -rf $REPO

# build website
./vss build

rm vss