#!/bin/bash

HOST=$1
PORT=22
USER=$2
PWD=$3
NAME=$4
TAR_DATE=`date "+%Y%m%d%H%M%S"`

sshpass -p $PWD ssh -p $PORT $USER@$HOST "cd /data/app/web/$NAME/ && tar cfj dist-$TAR_DATE.tar.bz2 dist"
sshpass -p $PWD ssh -p $PORT $USER@$HOST rm -rf /data/app/web/$NAME/dist
sshpass -p $PWD scp -P $PORT -r dist $USER@$HOST:/data/app/web/$NAME/dist
