#!/bin/bash
#
# Copyright (c) Oracle and/or its affiliates. All rights reserved. 
#
# This script will remove two domains (A_site_domain and B_site_domain)
# what are used to demonstrate Coherence federated cache feature.
#

pkill -f weblogic.Server
pkill -f weblogic.NodeManager

rm -rf /u01/wins/wls1221/user_projects/domains/A_site_domain
rm -rf /u01/wins/wls1221/user_projects/domains/B_site_domain

