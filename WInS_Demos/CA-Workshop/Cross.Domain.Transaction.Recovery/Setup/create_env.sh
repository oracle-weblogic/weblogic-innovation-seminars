#!/bin/bash

chmod -Rf 777 ../*


sqlplus system/welcome1@localhost:1521/pdborcl <<EOF
 create user cdtr identified by welcome1;
 grant DBA to cdtr;
 exit;
EOF

sqlplus system/welcome1@localhost:1521/pdb2 <<EOF
 create user cdtr identified by welcome1;
 grant DBA to cdtr;
 exit;
EOF
