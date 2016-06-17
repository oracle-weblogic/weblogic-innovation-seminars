opc.base.url=jaas.oraclecloud.com
# Enter your cloud credential here, after you did the modification, you need to rename this file to environment.properties
opc.identity.domain=your_identity_domain
opc.username=your_cloud_username
opc.password=your_cloud_password

# Storage information
# Check your generic storage url - see documentation
opc.storage.generic.url=storage.oraclecloud.com
# The name of the container to use by Database and Java Cloud Services
opc.storage.container=wins_container

# SSH key details
# first you need to create your SSH key pair. Use example Putty's Keygen tool - see documentation
ssh.user=opc
# public ssh key in the following format, copy the public key value from winsmt.pub file which is inside the MT-Workshop folder
#ssh.public.key=ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDcAguIEk3eN67GF08F+qKcTD9Pl+bJEasYrHazGhlDEN4drdXcy7WG6VOexdaBD4kGZmRQp6ThgmS+fMg9h7BjIujJJtH0vs01OUuibwOEldELOoO4bYezXUl8t38NVQrdEarLvJMQaS831nXL8+Cam2y6srSZtd0u1uwCmCdW4BYhennhib7dzG6Es3NKRtDWDeWu3E+enGRpm5facFALSkDRLTD2hlnAxdseDBc2Ql1/UUgbQZt5UtH4Ax9IB5Nn/TyfZ1mkvMq3tfrHvQxK8end31qR6OYyFr85G9IvY0CV5XjtAgDalju5YNTheY5qLpGIUF5hE61iaU442aP7 winsmt

ssh.passphrase=

# JCS details
jcs.base.url=jaas.oraclecloud.com
jcs.rest.url=/paas/service/jcs/api/v1.1/instances/
jcs.instance.version.1=12.2.1.0.160119
jcs.instance.otd.1=false
jcs.instance.1=winsdemoWLS
jcs.instance.desc.1=winsdemo instance through REST
jcs.instance.admin.user.1=weblogic
jcs.instance.admin.password.1=welcome1

# DBCS details
dbcs.base.url=dbaas.oraclecloud.com
dbcs.rest.url=/paas/service/dbcs/api/v1.1/instances/
dbcs.instance.version.1=12.1.0.2
dbcs.instance.1=winsdemo
dbcs.instance.sid.1=ORCL
dbcs.instance.pdb1.1=PDB1
dbcs.instance.pdb2.1=PDB2
dbcs.instance.desc.1=winsdemo db instance through REST
dbcs.instance.usable.storage.1=15

dbcs.dba.name=sys
dbcs.dba.password=Welcome_1
