#!/bin/bash
echo "*********************************** Creating otd_domain ******************"
/u01/wins/wls1221/oracle_common/common/bin/unpack.sh -template /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab6/otd_domain.jar -domain /u01/wins/wls1221/user_projects/domains/otd_domain -user_name=weblogic -password=welcome1

cd /u01/wins/wls1221/user_projects/domains/otd_domain/bin
nohup ./startNodeManager.sh &>nmserver.log </dev/null  &

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab6/
sleep 10
/u01/wins/wls1221/oracle_common/common/bin/wlst.sh otd-domain.py


LIFECYCLE_URL="http://localhost:7001/management/lifecycle/latest"
CURL_COMMON_OPTIONS="-v --user weblogic:welcome1 -H X-Requested-By:MyClient -H Accept:application/json -H Content-Type:application/json"

echo "*************************************** Creating OTD Runtime in base_domain *******************************************************"


curl $CURL_COMMON_OPTIONS -d '{"name": "otd_runtime", "type": "otd",  "hostName": "localhost", "port": "8001", "properties": [{"name": "username", "value": "weblogic"},  {"name": "password", "value": "welcome1"}, {"name": "configuration", "value": "mt"}]}' -X POST $LIFECYCLE_URL/runtimes


echo "************************************ Creating domain partition dp4 with OTD Runtime ***********************************************"

curl $CURL_COMMON_OPTIONS -d '{"name":"dp4", "properties" : [ { "name" : "resourceGroups", "properties" : [ { "name" : "app4RG", "properties" : [ { "name" : "targets" , "value" : "VT-1"}]}]}, {"name" : "availableTargets" , "value" : "VT-1"}]}' -X POST $LIFECYCLE_URL/runtimes/base_domain/partitions


curl $CURL_COMMON_OPTIONS -d '{"name":"dp4", "properties" : []}' -X POST $LIFECYCLE_URL/runtimes/otd_runtime/partitions

curl $CURL_COMMON_OPTIONS -d '{"name": "dp4env"}' -X POST $LIFECYCLE_URL/environments

curl $CURL_COMMON_OPTIONS -d '{"name": "dp4", "runtimeName": "base_domain"}' -X POST $LIFECYCLE_URL/environments/dp4env/partitions

curl $CURL_COMMON_OPTIONS -d '{"name": "dp4", "runtimeName": "otd_runtime"}' -X POST $LIFECYCLE_URL/environments/dp4env/partitions

curl $CURL_COMMON_OPTIONS -d '{ "partition1Name": "dp4", "partition1RuntimeName" : "base_domain", "partition2Name": "dp4", "partition2RuntimeName": "otd_runtime",  "properties" :[]}' -X POST $LIFECYCLE_URL/environments/dp4env/associatePartitions

/u01/wins/wls1221/oracle_common/common/bin/wlst.sh Lab6.py