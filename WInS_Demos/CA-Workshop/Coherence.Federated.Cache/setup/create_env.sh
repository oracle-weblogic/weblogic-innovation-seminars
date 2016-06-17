#!/bin/bash

echo "******************** Creating A_site_domain and B_site_domain ********************************"
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/
./createDomains.sh

echo "************************* Starting NodeManager in A_site_domain ******************************"
cd /u01/wins/wls1221/user_projects/domains/A_site_domain/bin/
nohup ./startNodeManager.sh &>nmserver.log </dev/null &

echo "************************* Starting NodeManager in B_site_domain ******************************"
cd /u01/wins/wls1221/user_projects/domains/B_site_domain/bin/
nohup ./startNodeManager.sh &>nmserver.log </dev/null &

echo "************************* Starting AdminServer in A_site_domain ******************************"
/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/startA_site_adminserver.sh

echo "************************* Starting AdminServer in B_site_domain ******************************"
/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/startB_site_adminserver.sh

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/
./startServers.sh

./deploy.sh