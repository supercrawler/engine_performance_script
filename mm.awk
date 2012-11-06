#!/bin/sh

THREESCREENSCROLLABLEVIEW_BEGIN="[ThreeScreenScrollableView]set drawing cache enabled true"


tab_start=1
tab_sub_start=-1
if [ $tab_start -gt 0 -o $tab_sub_start -gt 0 ]; then
	echo "OK"
else
	echo "error"
fi

data=`echo "onTabSelectionChanged"|awk '{print $6}'`
echo "data="$data

if [ -z $data]; then
	echo "empty"
else
	echo "not empty"
fi

if [[$data -ge 0]]; then
	echo "bigger"
else
	echo "smaller"
fi


awk 'BEGIN {print match("total 148 105","total")}