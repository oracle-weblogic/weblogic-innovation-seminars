#!/bin/bash

sqlplus trade/trade@localhost:1521/pdborcl <<EOF
 delete from orderejb;
 alter table orderejb drop constraint FK_e09h3dfd6os5mr0l7lslki9ca ;
 alter table orderejb add constraint FK_e09h3dfd6os5mr0l7lslki9ca foreign key (HOLDING_HOLDINGID) references holdingejb on delete cascade;
 exit;
EOF

