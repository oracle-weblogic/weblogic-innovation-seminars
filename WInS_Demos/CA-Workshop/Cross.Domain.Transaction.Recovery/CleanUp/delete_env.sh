#!/bin/bash

sudo docker stop wlsadmin2;
sudo docker rm $(sudo docker ps -a -q)
sudo docker rmi samplewls:12.2.1
sudo docker rmi samplewls2:12.2.1

sqlplus system/welcome1@localhost:1521/pdborcl <<EOF
 drop user cdtr cascade;
 exit;
EOF

sqlplus system/welcome1@localhost:1521/pdb2 <<EOF
 drop user cdtr cascade;
 exit;
EOF

echo "************************** Stopping Oracle Database ********************************"
sqlplus sys/welcome1  as sysdba <<EOF
 alter pluggable database pdb2 close;
 exit;
EOF

rm /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/primaryDomain/primarydomain.log
rm /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/primaryDomain/standbydomain.log

. /u01/content/weblogic-innovation-seminars/WInS_Demos/control/bin/winsEnv.sh
$ORACLE_HOME/bin/dbshut $ORACLE_HOME
