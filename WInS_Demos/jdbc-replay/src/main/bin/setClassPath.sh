#!/bin/bash
#
# Copyright (c) 2012,2013, Oracle and/or its affiliates. All rights reserved. 
#
# This script will set the required libraries for oracle 12 c drivers to weblogic server CLASSPATH
#

cd /u01/middleware/user_projects/domains/weblogic-examples-domain/bin/
. ./setDomainEnv.sh


export  EXT_PRE_CLASSPATH="/u01/app/oracle/product/12.1.0/dbhome_1/rdbms/jlib/xdb.jar:/u01/app/oracle/product/12.1.0/dbhome_1/jlib/orai18n-collation.jar:/u01/app/oracle/product/12.1.0/dbhome_1/lib/xmlparserv2_sans_jaxp_services.jar:/u01/app/oracle/product/12.1.0/dbhome_1/jlib/osdt_core.jar:/u01/app/oracle/product/12.1.0/dbhome_1/jlib/osdt_cert.jar :/u01/app/oracle/product/12.1.0/dbhome_1/jlib/oraclepki.jar:/u01/app/oracle/product/12.1.0/dbhome_1/jlib/orai18n-mapping.jar:/u01/app/oracle/product/12.1.0/dbhome_1/jlib/orai18n.jar:/u01/app/oracle/product/12.1.0/dbhome_1/opmn/lib/ons.jar:/u01/app/oracle/product/12.1.0/dbhome_1/ucp/lib/ucp.jar:/u01/app/oracle/product/12.1.0/dbhome_1/jdbc/lib/ojdbc7.jar" 
