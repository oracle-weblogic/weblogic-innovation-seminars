#!/bin/bash
#
# Copyright (c) Oracle and/or its affiliates. All rights reserved. 
#
# This script will create two domains (A_site_domain and B_site_domain)
# to demonstrate Coherence federated cache feature.
#

rm -rf /u01/wins/wls1221/user_projects/domains/A_site_domain
rm -rf /u01/wins/wls1221/user_projects/domains/B_site_domain

/u01/wins/wls1221/oracle_common/common/bin/unpack.sh -template=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/templates/A_site_template.jar -domain=/u01/wins/wls1221/user_projects/domains/A_site_domain -user_name=weblogic -password=welcome1 -log=A_site_domain_creation.log

/u01/wins/wls1221/oracle_common/common/bin/unpack.sh -template=/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/templates/B_site_template.jar -domain=/u01/wins/wls1221/user_projects/domains/B_site_domain -user_name=weblogic -password=welcome1 -log=B_site_domain_creation.log

