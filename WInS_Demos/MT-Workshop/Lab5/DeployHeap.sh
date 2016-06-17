#!/bin/bash

DOMAIN_DIR=/u01/wins/wls1221/user_projects/domains/base_domain
Deploy_App_SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5/DeployHeap.py

SERVERHome=/u01/wins/wls1221/wlserver
${SERVERHome}/common/bin/wlst.sh $Deploy_App_SCRIPT


#. $DOMAIN_DIR/bin/setDomainEnv.sh
#java weblogic.WLST -skipWLSModuleScanning $Deploy_App_SCRIPT 
