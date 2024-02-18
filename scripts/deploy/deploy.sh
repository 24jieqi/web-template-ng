#!/bin/bash

HOST=$1
PORT=22
USER=$2
PWD=$3
NAME=$4
TAR_DATE=`date "+%Y%m%d%H%M%S"`

tar cfj dist-$TAR_DATE.tar.bz2 build
sshpass -p $PWD ssh -p $PORT $USER@$HOST rm -rf /data/app/web/$NAME/*
sshpass -p $PWD scp -P $PORT -r build/* $USER@$HOST:/data/app/web/$NAME
