#!/bin/bash

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab1/

echo "**************************** STARTING DB ****************************************"
./startDB.sh wait

echo "**************************** Creating cdtr user in pdborcl,pdb2 database ******" ****************************************”
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/Setup
./create_env.sh

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/primaryDomain/

echo "********************* Creating docker image samplewls:12.2.1 ********************"
sudo docker build -t samplewls:12.2.1 .

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/standbyDomain/

echo "********************* Creating docker image samplewls2:12.2.1 **************************"
sudo docker build -t samplewls2:12.2.1 .

echo "********************* Starting Admin Server in primary domain **************************"
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/primaryDomain/
nohup sudo docker run -p 8001:8001 --name=wlsadmin  -h aadrdemo samplewls:12.2.1 startWebLogic.sh &>primarydomain.log </dev/null &
sleep 100

echo "********************* Starting Admin Server in standby domain ***************************"
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/standbyDomain/
nohup sudo docker run -p 8002:8001 --name=wlsadmin2  -h aadrdemo samplewls2:12.2.1 startWebLogic.sh &>standbydomain.log </dev/null &
sleep 100