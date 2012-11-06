#!/bin/sh

echo "------------------dolphin engine en-------------------------------"
filename="data_en"
>$filename
mm=` awk '{_+=$0} END{print _/NR}' web_cache_en1.0.5sina`
echo "1.0.5 sina:"$mm
echo "105sina:"$mm>>$filename

mm=` awk '{_+=$0} END{print _/NR}' web_cache_en1.0.5sina_news`
echo "1.0.5 sina news:"$mm
echo "105sina_news:"$mm>>$filename

mm=` awk '{_+=$0} END{print _/NR}' web_cache_en1.0.6sina`
echo "1.0.6 sina:"$mm
echo "106sina:"$mm>>$filename

mm=` awk '{_+=$0} END{print _/NR}' web_cache_en1.0.6sina_news`
echo "1.0.6 sina news:"$mm
echo "106sina_news:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_en1.0.7sina`
echo "1.0.7 sina:"$mm
echo "107sina:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_en1.0.7sina_news`
echo "1.0.7 sina news:"$mm
echo "107sina_news:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_en1.0.8sina`
echo "1.0.8 sina:"$mm
echo "108sina:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_en1.0.8sina_news`
echo "1.0.8 sina news:"$mm
echo "108sina_news:"$mm>>$filename
echo "------------------dolphin engine cn-------------------------------"

filename="data_cn"
>$filename
mm=` awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.5sina`
echo "1.0.5 sina:"$mm
echo "105sina:"$mm>>$filename

mm=` awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.5sina_news`
echo "1.0.5 sina news:"$mm
echo "105sina_news:"$mm>>$filename

mm=` awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.6sina`
echo "1.0.6 sina:"$mm
echo "106sina:"$mm>>$filename

mm=` awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.6sina_news`
echo "1.0.6 sina news:"$mm
echo "106sina_news:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.7sina`
echo "1.0.7 sina:"$mm
echo "107sina:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.7sina_news`
echo "1.0.7 sina news:"$mm
echo "107sina_news:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.8sina`
echo "1.0.8 sina:"$mm
echo "108sina:"$mm>>$filename

mm=`awk '{_+=$0} END{print _/NR}' web_cache_cn1.0.8sina_news`
echo "1.0.8 sina news:"$mm
echo "108sina_news:"$mm>>$filename