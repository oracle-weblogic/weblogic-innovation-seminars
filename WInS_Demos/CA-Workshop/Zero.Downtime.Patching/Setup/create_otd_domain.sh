#!/bin/bash

SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/create_otd_domain.py

oracle_common=/u01/wins/wls1221/oracle_common
${oracle_common}/common/bin/wlst.sh $SCRIPT
