#!/bin/sh 

echo "Hello world"


function rm_same_line()
{
echo "=-=>"$0
echo "==>"$1

pre=""
cat $1 | while read line;
do

  cur=`echo $line | awk '{print $1}'`
  echo $cur 
  if [ "$cur"x != "$pre"x ]; then
    echo $line 
    echo $line>>$2 
  fi

  pre=$cur 
done
}

function merge_v103cn() 
{
  >temp 
  sort -m crash_file_v103_cn 1.0.3_cn_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v103_cn
  rm_same_line temp crash_file_v103_cn
  echo "begin--------------------crash_file_v103_cn----------------------------------------------------"
  cat crash_file_v103_cn
  echo "end--------------------------------------------------------------------------"
  #clear temp data
  >1.0.3_cn_temp
}

function merge_v103en() 
{
  >temp 
  sort -m crash_file_v103_en 1.0.3_en_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v103_en
  rm_same_line temp crash_file_v103_en
  echo "begin-------------------crash_file_v103_en-----------------------------------------------------"
  cat crash_file_v103_en
  echo "end--------------------------------------------------------------------------"
  #clear temp data
  >1.0.3_en_temp
}

function merge_v104cn() 
{
  >temp 
  sort -m crash_file_v104_cn 1.0.4_cn_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v104_cn
  rm_same_line temp crash_file_v104_cn
  echo "begin----------------crash_file_v104_cn--------------------------------------------------------"
  cat crash_file_v104_cn
  echo "end--------------------------------------------------------------------------"
  #clear temp data
  >1.0.4_cn_temp
}

function merge_v104en() 
{
  >temp 
  sort -m crash_file_v104_en 1.0.4_en_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v104_en
  rm_same_line temp crash_file_v104_en
  echo "begin---------------crash_file_v104_en---------------------------------------------------------"
  cat crash_file_v104_en
  echo "end--------------------------------------------------------------------------"
  >1.0.4_en_temp
}

function merge_v105cn() 
{
  >temp 
  sort -m crash_file_v105_cn 1.0.5_cn_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v105_cn
  rm_same_line temp crash_file_v105_cn
  echo "begin---------------crash_file_v105_cn---------------------------------------------------------"
  cat crash_file_v105_cn
  echo "end--------------------------------------------------------------------------"
  >1.0.5_cn_temp
}

function merge_v105en() 
{
  >temp 
  sort -m crash_file_v105_en 1.0.5_en_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v105_en
  rm_same_line temp crash_file_v105_en
  echo "begin-----------crash_file_v105_en-------------------------------------------------------------"
  cat crash_file_v105_en
  echo "end--------------------------------------------------------------------------"
  >1.0.5_en_temp
}

function merge_v106cn() 
{
  >temp 
  sort -m crash_file_v106_cn 1.0.6_cn_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v106_cn
  rm_same_line temp crash_file_v106_cn
  echo "begin----------------crash_file_v106_cn--------------------------------------------------------"
  cat crash_file_v106_cn
  echo "end--------------------------------------------------------------------------"
  >1.0.6_cn_temp
}

function merge_v106en() 
{
  >temp 
  sort -m crash_file_v106_en 1.0.6_en_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v106_en
  rm_same_line temp crash_file_v106_en
  echo "begin------------crash_file_v106_en------------------------------------------------------------"
  cat crash_file_v106_en 
  echo "end--------------------------------------------------------------------------"
  >1.0.6_en_temp
}

function merge_v107cn() 
{
  >temp 
  sort -m crash_file_v107_cn 1.0.7_cn_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v107_cn
  rm_same_line temp crash_file_v107_cn
  echo "begin-------------crash_file_v107_cn-----------------------------------------------------------"
  cat crash_file_v107_cn
  echo "end--------------------------------------------------------------------------"
  >1.0.7_cn_temp
}

function merge_v107en() 
{
  >temp 
  sort -m crash_file_v107_en 1.0.7_en_temp -o temp 
  cat temp 
  sort -k1 -nr temp > temp1
  cat temp1 > temp
  rm temp1 
  #clear file content
  >crash_file_v107_en
  rm_same_line temp crash_file_v107_en
  echo "begin------------crash_file_v107_en------------------------------------------------------------"
  cat crash_file_v107_en 
  echo "end--------------------------------------------------------------------------"
  >1.0.7_en_temp
}


echo "=========Dolphiin Engine  1.0.3 cn =======================>" 
merge_v103cn


echo "=========Dolphiin Engine  1.0.3 en =======================>" 
merge_v103en 

echo "=========Dolphiin Engine  1.0.4 cn =======================>" 
merge_v104cn 

echo "=========Dolphiin Engine  1.0.4 cn =======================>" 
merge_v104en 

echo "=========Dolphiin Engine  1.0.5 cn =======================>" 
merge_v105cn 

echo "=========Dolphiin Engine  1.0.5 en =======================>" 
merge_v105en 

echo "=========Dolphiin Engine  1.0.6 cn =======================>" 
merge_v106cn 

echo "=========Dolphiin Engine  1.0.6 en =======================>" 
merge_v106en 

echo "=========Dolphiin Engine  1.0.7 cn =======================>" 
merge_v107cn 

echo "=========Dolphiin Engine  1.0.7 en =======================>" 
merge_v107en 

