#!/bin/sh
echo "****************************************** Starting Node Manager in otd_domain *************************************************"
cd /u01/wins/wls1221/user_projects/domains/otd_domain/bin
nohup ./startNodeManager.sh &>nmserver.log </dev/null  &

sleep 5 

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/
/u01/wins/wls1221/oracle_common/common/bin/wlst.sh configure_start_OTD.py

echo "************************************************ Starting Node Manager in Domain1221 in Node ma ***********************************"
cd /u01/wins/ma/Domain1221/bin
nohup ./startNodeManager.sh &>nmserver.log </dev/null &


echo "************************************************ Starting Node Manager in Domain1221 in Node m1 ***********************************"
cd /u01/wins/m1/Domain1221/bin
nohup ./startNodeManager.sh &>nmserver.log </dev/null &

echo "************************************************ Starting Node Manager in Domain1221 in Node m2 ***********************************"
cd /u01/wins/m2/Domain1221/bin
nohup ./startNodeManager.sh &>nmserver.log </dev/null &

sleep 10
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/
/u01/wins/ma/OracleHome1221/oracle_common/common/bin/wlst.sh startAdminServer.py


cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/
/u01/wins/ma/OracleHome1221/oracle_common/common/bin/wlst.sh startCluster.py
