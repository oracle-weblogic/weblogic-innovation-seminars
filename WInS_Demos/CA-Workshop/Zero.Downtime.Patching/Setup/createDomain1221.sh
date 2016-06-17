#!/bin/bash


SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/createDomain1221.py

oracle_common=/u01/wins/ma/OracleHome1221/oracle_common
${oracle_common}/common/bin/wlst.sh $SCRIPT
