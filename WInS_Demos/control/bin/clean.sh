#!/bin/bash

. /u01/content/weblogic-innovation-seminars/WInS_Demos/control/bin/winsEnv.sh > /dev/null

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/
mvn clean

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/environment/weblogic-examples-domain/
pid_list=`jps -q`

for pid in $pid_list
do
  echo "Killing WebLogic pid=${pid}"
  kill -9 $pid
done

rm -Rf  /u01/middleware/user_projects/domains/weblogic-examples-domain

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/environment/sql/
sqlplus weblogic_examples_domain/weblogic_examples_domain@localhost:1521/pdborcl @cleanDB.sql
