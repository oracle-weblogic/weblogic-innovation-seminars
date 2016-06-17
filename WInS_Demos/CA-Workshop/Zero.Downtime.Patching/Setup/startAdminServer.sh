#!/bin/bash

DOMAIN_DIR=/u01/wins/ma/Domain1221/
SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/startAdminServer.py

oracle_common=/u01/wins/ma/OracleHome1221/oracle_common
${oracle_common}/common/bin/wlst.sh $SCRIPT
