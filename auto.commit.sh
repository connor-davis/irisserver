#!/bin/bash
inotifywait -e close_write,moved_to,create -m ./* |
while read -r directory events filename; do
    git commit -am "autocommit-$(($(date +%s%N)/1000000))"
done