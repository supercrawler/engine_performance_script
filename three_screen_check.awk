#!/usr/bin/awk -f

BEGIN {
   
	THREESCREENSCROLLABLEVIEW_BEGIN="[ThreeScreenScrollableView]set drawing cache enabled true"
    THREESCREENSCROLLABLEVIEW_PAGE_SHOW="[ThreeScreenScrollableView]on page shown"
    THREESCREENSCROLLABLEVIEW_END="[ThreeScreenScrollableView]set drawing cache enabled false"

    #flag three screen scroll begin=>0, page=>1, end=>2
    FLAG=0
    RESULT=0

    #print PARAMS
   # print THREESCREENSCROLLABLEVIEW_BEGIN
   print FLAG
   print $1
    if (FLAG==0) {
        print "flag 0"
    } else if (flag==1) {
        print "flag 1"
    } else if (flag==2) {
        print "flag 2"
    } else {
        print "flag error"
    }

	RESULT=index(PARAMS, THREESCREENSCROLLABLEVIEW_BEGIN)
    #if (RESULT > 0) {
    #	print "OK"
    #} else {
    #	print "error"
    #}
    exit
}

#{
    # First, remove any trailing \r from the input line. This is important
    # because the output of "adb shell <cmd>" seems to use \r\n line ending.
 

#	RESULT=index(PARAMS, FS)
#    if (RESULT > 0) {
#    	print "OK"
#    } else {
#    	print "error"
#    }
#    exit
#}

END {

    print RESULT
}
