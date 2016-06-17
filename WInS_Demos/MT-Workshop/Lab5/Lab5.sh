#!/bin/bash

echo "Stoping servers in app-cluster"
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5
/u01/wins/wls1221/oracle_common/common/bin/wlst.sh stopCluster.py


cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5

cp setDomainEnv.sh /u01/wins/wls1221/user_projects/domains/base_domain/bin/
#cd /u01/wins/wls1221/user_projects/domains/base_domain/bin
#. ./setDomainEnv.sh

echo "Starting Server in app-cluster with RCM enabled"
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5
/u01/wins/wls1221/oracle_common/common/bin/wlst.sh startCluster.py
