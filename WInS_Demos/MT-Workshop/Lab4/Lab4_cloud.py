#Configuration for medrec application in dev_domain

connect('weblogic','welcome1','t3://localhost:9001')
edit()
print "************************ Creating Virtual Target VT6 ****************************"
startEdit()
cd('/')
cmo.createVirtualTarget('VT6')
cd('/VirtualTargets/VT6')
cmo.setHostNames(array(["localhost"],java.lang.String))
cmo.setUriPrefix('/dp6')
set('Targets',jarray.array([ObjectName('com.bea:Name=AdminServer,Type=Server')], ObjectName))
activate()

print "************************ Creating domain partition dp6 ****************************"
startEdit()
cd('/')
cmo.createPartition('dp6')
cd('/Partitions/dp6/SystemFileSystem/dp6')
cmo.setRoot('/u01/wins/wls1221/user_projects/domains/dev_domain/partitions/dp6/system')
cmo.setCreateOnDemand(true)
cmo.setPreserved(true)
cd('/Partitions/dp6')
set('AvailableTargets',jarray.array([ObjectName('com.bea:Name=VT6,Type=VirtualTarget')], ObjectName))
set('DefaultTargets',jarray.array([ObjectName('com.bea:Name=VT6,Type=VirtualTarget')], ObjectName))
activate()

print "************************ Creating resource group app6RG  ****************************"
startEdit()
cmo.createResourceGroup('app6RG')
cd('/Partitions/dp6/ResourceGroups/app6RG')
cmo.setUseDefaultTarget(false)
set('Targets',jarray.array([ObjectName('com.bea:Name=VT6,Type=VirtualTarget')], ObjectName))
activate()



startEdit()
deploy(appName='conference', partition='dp6', resourceGroup='app6RG', path='/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/ConferencePlanner.war')
activate()

startEdit()
cd('/')
partitionBean=cmo.lookupPartition('dp6')
startPartitionWait(partitionBean)
activate()


print "************************ Creating JDBC datasource in app6RG resource group ****************************"
startEdit()
cd('/Partitions/dp6/ResourceGroups/app6RG')
cmo.createJDBCSystemResource('cp')
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp')
cmo.setName('cp')
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp/JDBCDataSourceParams/cp')
set('JNDINames',jarray.array([String('jdbc/cp')], String))
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp')
cmo.setDatasourceType('GENERIC')
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp/JDBCDriverParams/cp')
cmo.setUrl('jdbc:oracle:thin:@//localhost:1521/pdborcl')
cmo.setDriverName('oracle.jdbc.xa.client.OracleXADataSource')
cmo.setPassword('conference')
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp/JDBCConnectionPoolParams/cp')
cmo.setTestTableName('SQL ISVALID\r\n\r\n\r\n')
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp/JDBCDriverParams/cp/Properties/cp')
cmo.createProperty('user')
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp/JDBCDriverParams/cp/Properties/cp/Properties/user')
cmo.setValue('conference')
cd('/Partitions/dp6/ResourceGroups/app6RG/JDBCSystemResources/cp/JDBCResource/cp/JDBCDataSourceParams/cp')
cmo.setGlobalTransactionsProtocol('TwoPhaseCommit')
activate()


disconnect()



