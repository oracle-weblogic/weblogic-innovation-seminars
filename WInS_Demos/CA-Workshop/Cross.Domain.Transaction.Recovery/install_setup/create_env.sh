#!/bin/bash
sudo cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/public-yum-ol7.repo  /etc/yum.repos.d/public-yum-ol7.repo
sudo yum -y install docker
sudo cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/docker /etc/sysconfig/docker
sudo cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/docker-storage /etc/sysconfig/docker-storage
sudo cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/docker-network /etc/sysconfig/docker-network
sudo mkdir /etc/systemd/system/docker.service.d
sudo /sbin/groupadd docker
sudo /sbin/usermod -a -G docker oracle
sudo /bin/systemctl daemon-reload
sudo /bin/systemctl enable docker.service
sudo /bin/systemctl start docker.service
sudo /bin/systemctl stop docker.service
sudo yum -y remove docker.x86_64
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/
sudo yum -y install docker-engine-1.9.0-1.0.1.el7.x86_64.rpm docker-engine-selinux-1.9.0-1.0.1.el7.noarch.rpm
sudo yum -y remove lvm2-7:2.02.105-14.el7.x86_64
sudo yum -y update device-mapper
sudo cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/docker /etc/sysconfig/docker
sudo cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/docker-storage /etc/sysconfig/docker-storage
sudo cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/docker-network /etc/sysconfig/docker-network
sudo /sbin/usermod -a -G docker oracle
sudo /bin/systemctl daemon-reload
sudo /bin/systemctl enable docker.service
sudo /bin/systemctl start docker.service
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/install_setup/dockerfiles/
sudo sh buildDockerImage.sh -v 12.2.1 -d

