#!/bin/bash
#
# Copyright (c) 2012,2013, Oracle and/or its affiliates. All rights reserved. 
#
#

cp -Rf  /u01/content/weblogic-innovation-seminars/WInS_Demos/grid-archive-examples/src/main/wlst/gar_common.py /u01/middleware/wlserver/common/wlst/

cd /u01/content/weblogic-innovation-seminars/WInS_Demos/grid-archive-examples/Oracle/Domains/mydomain/bin/
. ./setDomainEnv.sh



cd /u01/content/weblogic-innovation-seminars/WInS_Demos/grid-archive-examples/src/main/wlst/

java weblogic.WLST test_redeploy.py
