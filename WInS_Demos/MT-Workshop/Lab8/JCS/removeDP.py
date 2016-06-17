connect('weblogic','welcome1','t3://winstestWLS-wls-1.compute-jcsdemo026.oraclecloud.internal:7001')
edit()

startEdit()
cd('/')
partitionBeanDP1=cmo.lookupPartition('Microcontainer3')
forceShutdownPartitionWait(partitionBeanDP1)
activate()

startEdit()
editService.getConfigurationManager().removeReferencesToBean(getMBean('/Partitions/Microcontainer3'))
cmo.destroyPartition(getMBean('/Partitions/Microcontainer3'))
activate()

disconnect()
