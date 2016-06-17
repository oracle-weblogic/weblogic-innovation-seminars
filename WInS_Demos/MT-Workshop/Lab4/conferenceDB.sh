#!/bin/bash
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4

sqlplus system/welcome1@localhost:1521/pdborcl <<EOF
 create user conference identified by conference;
 grant DBA to conference;
 exit;
EOF

sqlplus conference/conference@localhost:1521/pdborcl <<EOF
 set define off;
 set sqlblanklines on;
 @conference.sql
 exit;
EOF
