#!/bin/bash
StartAdmin_SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/startA_site_adminserver.py

OracleHome=/u01/wins/wls1221
${OracleHome}/oracle_common/common/bin/wlst.sh $StartAdmin_SCRIPT
 
