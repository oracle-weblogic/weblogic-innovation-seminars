#!/bin/sh
# chkconfig: 345 98 10
# description: Oracle auto start-stop script.
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database software.

. /u01/content/weblogic-innovation-seminars/WInS_Demos/control/bin/winsEnv.sh > /dev/null

$ORACLE_HOME/bin/sqlplus 'sys/welcome1 as sysdba' <<EOF

alter pluggable database pdb2 close;

exit
EOF

if [ "$1" == "wait" ]; then
  echo "This window will close automatically in 3s..."
  sleep 3
fi
