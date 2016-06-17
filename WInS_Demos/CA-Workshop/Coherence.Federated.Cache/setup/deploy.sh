#!/bin/bash
DEPLOY_SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/deploy.py

SERVERHome=/u01/wins/wls1221/wlserver
${SERVERHome}/common/bin/wlst.sh $DEPLOY_SCRIPT
 
