#!/bin/sh 

echo "----------------Calculate Average Chrome-------------------------"

mm=`awk '{_+=$0} END{print _/NR}' chrome `
echo "chrome sina:"$mm

mm=`awk '{_+=$0} END{print _/NR}' chrome_news`
echo "chrome sina news:"$mm


