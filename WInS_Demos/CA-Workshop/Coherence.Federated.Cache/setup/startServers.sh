#!/bin/bash
StartServers_SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/startServers.py

OracleHome=/u01/wins/wls1221
${OracleHome}/oracle_common/common/bin/wlst.sh $StartServers_SCRIPT
 
