#!/bin/bash


echo "********************************** Applying Patch to the base_domain ********************************"
cp setDomainEnv.sh /u01/wins/wls1221/user_projects/domains/base_domain/bin/

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab7/
/u01/wins/wls1221/oracle_common/common/bin/wlst.sh Lab7.py

