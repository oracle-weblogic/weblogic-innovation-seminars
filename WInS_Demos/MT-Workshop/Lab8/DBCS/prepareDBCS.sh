#!/bin/sh

sqlplus system/Welcome_1@winstestDB:1521/PDB1.jcsdemo026.oraclecloud.internal <<EOF
 create user conference identified by conference;
 grant DBA to conference;
 exit;
EOF

sqlplus conference/conference@winstestDB:1521/PDB1.jcsdemo026.oraclecloud.internal <<EOF
 set define off;
 set sqlblanklines on;
 @/tmp/conference.sql
 exit;
EOF
