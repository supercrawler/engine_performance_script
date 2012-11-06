#!/bin/sh

tt=0
filename="temp"
tt=`cat temp | awk '{print $1}'`
echo $tt