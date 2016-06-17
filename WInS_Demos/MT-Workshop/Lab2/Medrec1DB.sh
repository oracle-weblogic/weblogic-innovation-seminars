#!/bin/bash
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2

sqlplus system/welcome1@localhost:1521/pdborcl <<EOF
 create user medrec1 identified by medrec1;
 grant DBA to medrec1;
 exit;
EOF

sqlplus medrec1/medrec1@localhost:1521/pdborcl <<EOF
 @Medrec.sql
 exit;
EOF
