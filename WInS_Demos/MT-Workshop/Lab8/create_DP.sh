#!/bin/bash

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab8
./conferenceDB.sh

/u01/wins/wls1221/oracle_common/common/bin/wlst.sh create_DP.py