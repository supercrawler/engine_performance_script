#!/bin/sh

echo "hello world"

myfile=$1".result"
min=999999999
max=-1
isbegin=0
sum=0;
num=0;

cat $1 | while read line
do
	echo $line

	if test $isbegin -eq 0;then
		mm=`awk 'BEGIN {print match("'"$line"'","begin")}'`
		if test $mm -gt 0 ;then
			isbegin=1
		fi
	fi

	
	
	nn=`awk 'BEGIN {print match("'"$line"'","end")}'`
	if test $nn -gt 0 ;then
		isbegin=0

		sum=`expr $sum - $min - $max`
		num=`expr $num - 2`
		echo "---total---------------"
		echo "sum:"$sum",num:"$num
		echo "max:"$max",min:"$min
		avg=`echo "scale=2\n $sum/$num"|bc`
		echo $avg
		printf "\r\n %.2f\r\n" $avg

		sum=0
		min=999999999
		max=-1
		num=0
	fi

	if test $isbegin -gt 0;then 
		##read data
		#store min data
		if test $min -gt $line; then
			min=$line
		fi

		#store max data
		if test $line -gt $max; then
			max=$line
		fi

		echo "min:"$min",max:"$max
		echo "sum:"$sum
		sum=`expr $sum + $line`
		num=`expr $num + 1`;

		echo "sum:"$sum",num:"$num
	fi

	echo "begin:"$isbegin
done