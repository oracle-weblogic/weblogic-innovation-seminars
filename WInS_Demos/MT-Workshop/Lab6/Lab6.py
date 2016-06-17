# This is the start of the script
connect('weblogic','welcome1','t3://localhost:7001')
edit()

print "***************************** Starting Domain partitin dp4 ************************************************************"
startEdit()
cd('/')
partitionBean=cmo.lookupPartition('dp4')
startPartitionWait(partitionBean)
activate()

print "***************************** Creating Dynamic Cluster new-cluster ************************************************************"
startEdit()
cd('/')
cmo.createCluster('new-cluster')
cd('/Clusters/new-cluster')
cmo.setClusterMessagingMode('unicast')
cd('/')
cmo.createServerTemplate('new-cluster-Template')
cd('/ServerTemplates/new-cluster-Template')
cmo.setCluster(getMBean('/Clusters/new-cluster'))
cd('/Clusters/new-cluster/DynamicServers/new-cluster')
cmo.setDynamicClusterSize(1)
cmo.setMaxDynamicClusterSize(8)
cmo.setServerNamePrefix('new-cluster-')
cmo.setServerTemplate(getMBean('/ServerTemplates/new-cluster-Template'))
cd('/ServerTemplates/new-cluster-Template')
cmo.setMachine(getMBean('/Machines/machine'))
cd('/Clusters/new-cluster/DynamicServers/new-cluster')
cmo.setCalculatedMachineNames(true)
cmo.setCalculatedListenPorts(true)
cd('/ServerTemplates/new-cluster-Template')
cmo.setListenPort(9100)
cd('/ServerTemplates/new-cluster-Template/SSL/new-cluster-Template')
cmo.setListenPort(10100)
activate()

print "***************************** Starting new-cluster-1 server *******************************************************"
startEdit()
start('new-cluster','Cluster')
activate()

print "***************************** Deploy heapApp in app4RG resource group ************************************************************"
startEdit()
deploy(appName='Scrabble', partition='dp4', resourceGroup='app4RG', path='/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab6/ScrabbleStage.war')
activate()

disconnect()