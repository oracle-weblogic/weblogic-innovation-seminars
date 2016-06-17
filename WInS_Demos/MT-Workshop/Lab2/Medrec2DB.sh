#!/bin/bash
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2

sqlplus system/welcome1@localhost:1521/pdb2 <<EOF
 create user medrec2 identified by medrec2;
 grant DBA to medrec2;
 exit;
EOF

sqlplus medrec2/medrec2@localhost:1521/pdb2 <<EOF
 @Medrec.sql
 exit;
EOF
