#!/bin/bash

DOMAIN_DIR=/u01/wins/wls1221/user_projects/domains/base_domain
CONFIGURE_RG_SCRIPT=/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/CleanUp/stopCluster.py

SERVERHome=/u01/wins/wls1221/wlserver
${SERVERHome}/common/bin/wlst.sh $CONFIGURE_RG_SCRIPT

rm -Rf /u01/wins/wls1221/user_projects/domains/base_domain
rm -Rf /u01/wins/wls1221/user_projects/domains/dev_domain
rm -Rf /u01/wins/wls1221/user_projects/domains/otd_domain
rm -Rf /u01/wins/wls1221/user_projects/applications/base_domain
rm -Rf /u01/wins/wls1221/user_projects/applications/otd_domain
rm /home/oracle/Desktop/Medrec-Dev.zip
rm /home/oracle/Desktop/Medrec-Dev-attributes.json
