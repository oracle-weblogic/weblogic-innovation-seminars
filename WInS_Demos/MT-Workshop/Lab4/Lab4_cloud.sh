#!/bin/bash

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab1/
echo “*****************STARTING DB******************”
./startDB.sh wait

echo "**************** Populating Sample data for Conference Planning Application***********************"
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4
./conferenceDB.sh

echo "*************** Creating dev_domain ******************"
/u01/wins/wls1221/oracle_common/common/bin/unpack.sh -template /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/dev_domain.jar -domain /u01/wins/wls1221/user_projects/domains/dev_domain -user_name=weblogic -password=welcome1 


cd /u01/wins/wls1221/user_projects/domains/dev_domain/bin
nohup ./startWebLogic.sh &>adminserver.log </dev/null  &
sleep 90 

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4
echo "************* Configuring Conference Planner application in dp6 partition in dev_domain*************"
/u01/wins/wls1221/oracle_common/common/bin/wlst.sh Lab4_cloud.py


