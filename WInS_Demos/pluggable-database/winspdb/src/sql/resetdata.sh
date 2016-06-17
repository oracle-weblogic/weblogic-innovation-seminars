#!/bin/sh
# chkconfig: 345 98 10
# description: Oracle auto start-stop script.
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database software.

. /u01/content/weblogic-innovation-seminars/WInS_Demos/control/bin/winsEnv.sh

$ORACLE_HOME/bin/sqlplus 'c##cdbuser/welcome1@orcl' <<EOF

alter session set container = PDB2;

delete from hr.department;

insert into hr.department (department_id, name, address) values (1, 'Oracle Austria', 'Vienna, Wagramer Strasse 17-19') ;
insert into hr.department (department_id, name, address) values (2, 'Oracle Hungary', 'Budapest, Lechner Odon fasor 7.') ;
insert into hr.department (department_id, name, address) values (3, 'Oracle Poland', 'Warsaw, Przyokopowa 31.') ;
insert into hr.department (department_id, name, address) values (4, 'Oracle Czech', 'Prague,  V Parku 2308/8') ;
insert into hr.department (department_id, name, address) values (5, 'Oracle Slovakia', 'Bratislava, Galvaniho 17/A') ;
insert into hr.department (department_id, name, address) values (6, 'Oracle Slovenia', 'Ljubljana, Dunajska cesta 156.') ;

commit;

alter session set container = PDBORCL;

delete from hr.department;

insert into hr.department (department_id, name, address) values (1, 'Oracle HQ', 'Redwood Shores, 500 Oracle Parkway') ;
insert into hr.department (department_id, name, address) values (2, 'Oracle Florida', 'Orlando, 7453 TG Lee Blvd') ;
insert into hr.department (department_id, name, address) values (3, 'Oracle Florida', 'Miami, 6505 Blue Lagoon Drive') ;
insert into hr.department (department_id, name, address) values (4, 'Oracle New York', 'New York City,  120 Park Avenue') ;
insert into hr.department (department_id, name, address) values (5, 'Oracle New York', 'Albany, 7 Southwoods Boulevard') ;
insert into hr.department (department_id, name, address) values (6, 'Oracle Oregon', 'Portland, 1211 SW 5th Avenue') ;

commit;

exit
EOF

if [ "$1" == "wait" ]; then

  echo "This window will close automatically in 3s..."

  sleep 3

 fi
