#!/bin/bash

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab1/
echo “*****************STARTING DB******************”
./startDB.sh wait

cd ../Lab2/
echo “*****************CREATING DB ENTRIES FOR DP1******************”
./Medrec1DB.sh
echo “*****************CREATING DB ENTRIES FOR DP2******************”
./Medrec2DB.sh
echo “*****************CREATING DB ENTRIES FOR DP3******************”
./DayTrader3DB.sh


echo “*****************CREATING base_domain *************************”
/u01/wins/wls1221/oracle_common/common/bin/unpack.sh -template /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2/base_domain.jar -domain /u01/wins/wls1221/user_projects/domains/base_domain -user_name=weblogic -password=welcome1 
echo “*****************STARTING NODE MANAGER******************”
cd /u01/wins/wls1221/user_projects/domains/base_domain/bin


nohup ./startNodeManager.sh &>nmserver.log </dev/null  &
#nohup ./startWebLogic.sh &>adminserver.log </dev/null  &

echo “*****************ADMIN SERVER******************”
sleep 10
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2/

/u01/wins/wls1221/oracle_common/common/bin/wlst.sh Lab1-2.py
/u01/wins/wls1221/oracle_common/common/bin/wlst.sh DayTraderInDP3.py


 

