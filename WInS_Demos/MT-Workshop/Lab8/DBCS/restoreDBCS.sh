#!/bin/sh

sqlplus system/Welcome_1@winstestDB:1521/PDB1.jcsdemo026.oraclecloud.internal <<EOF
 drop user conference cascade;
 exit;
EOF
