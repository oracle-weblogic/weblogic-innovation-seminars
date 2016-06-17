import time

loadProperties('environment.properties')

domain_Name = 'saf-target-domain'

datasource_jndi_name = 'jdbc.ds.weblogic_examples'
datasource_global_transactions = 'None'
datasource_jdbc_driver = 'oracle.jdbc.OracleDriver'
datasource_user = 'saf_target_domain'
datasource_password = 'saf_target_domain'

adminServer_ListenAddress = 'wins-vbox.localdomain'
adminServer_ListenPort = 8001
adminServer_AdministrationPort = 8200
adminServer_Username = 'weblogic'
adminServer_Password = 'welcome1'

managed_server_name_base = 'ms'
managed_server_port_base = '810'
managed_server_count = 1

listen_address = 'wins-vbox.localdomain'
jms_sever_name_base = 'jms-server'
cluster_Name = 'cluster-1'

machine_Name = 'wins-vbox'
machine_ListenAddress = 'wins-vbox.localdomain'

################################################### JDBC

def createPhysicalDataSource(jndiName, driver, globalTX, url, user, passwd, target):
  dsName = jndiName
  print 'Creating Physical DataSource ' + dsName

  cd('/')
  jdbcSystemResource = create(dsName, "JDBCSystemResource")

  cd('/JDBCSystemResource/' + dsName + '/JdbcResource/' + dsName)
  dataSourceParams = create('dataSourceParams', 'JDBCDataSourceParams')
  dataSourceParams.setGlobalTransactionsProtocol(globalTX)
  cd('JDBCDataSourceParams/NO_NAME_0')
  set('JNDIName', jndiName)

  cd('/JDBCSystemResource/' + dsName + '/JdbcResource/' + dsName)
  connPoolParams = create('connPoolParams', 'JDBCConnectionPoolParams')
  connPoolParams.setMaxCapacity(20)
  connPoolParams.setInitialCapacity(5)
  connPoolParams.setCapacityIncrement(1)
  connPoolParams.setTestConnectionsOnReserve(true)
  connPoolParams.setTestTableName('SQL SELECT 1 FROM DUAL')

  cd('/JDBCSystemResource/' + dsName + '/JdbcResource/' + dsName)
  driverParams = create('driverParams', 'JDBCDriverParams')
  driverParams.setUrl(url)
  driverParams.setDriverName(driver)
  driverParams.setPasswordEncrypted(passwd)
  cd('JDBCDriverParams/NO_NAME_0')

  create(dsName, 'Properties')
  cd('Properties/NO_NAME_0')

  create('user', 'Property')
  cd('Property/user')
  cmo.setValue(user)

  cd('/JDBCSystemResource/' + dsName)
  jdbcSystemResource.setTargets(jarray.array([target], weblogic.management.configuration.TargetMBean))

  print dsName + ' successfully created.'
  return jdbcSystemResource

################################################### JMS Module

def createSAFTargetModules():
  print 'Creating SAF SOURCE JMS Resources...'

  module_name = 'jms-module-saf-target'

  cd('/')
  jmsMySystemResource = create(module_name, 'JMSSystemResource')
  jmsMySystemResource.setTargets(jarray.array([cluster], weblogic.management.configuration.TargetMBean))

  cd('/JMSSystemResources/' + module_name)
  subdeployment = create('cluster-subdeployment', 'SubDeployment')
  subdeployment.setTargets(jarray.array(jmsServerMBeans, weblogic.management.configuration.TargetMBean))

  cd('/JMSSystemResource/' + module_name + '/JmsResource/NO_NAME_0')

  cf_name = 'com.oracle.example.jms.saf.cf'

  myCF = create(cf_name, 'ConnectionFactory')
  myCF.setJNDIName(cf_name)
  myCF.setDefaultTargetingEnabled(true)

  cd('/JMSSystemResources/' + module_name + '/JmsResource/NO_NAME_0/ConnectionFactories/' + cf_name)
  lbParams = create(cf_name, 'LoadBalancingParams')
  lbParams.setLoadBalancingEnabled(true)
  lbParams.setServerAffinityEnabled(false)

  txParams = create(cf_name, 'TransactionParams')
  txParams.setXAConnectionFactoryEnabled(true)

  ##################

  queue_name = 'com.oracle.example.jms.saf.local-queue'
  cd('/JMSSystemResources/' + module_name + '/JmsResource/NO_NAME_0')
  queue = create(queue_name, 'UniformDistributedQueue')
  queue.setJNDIName(queue_name)
  queue.setDefaultTargetingEnabled(false)
  queue.setSubDeploymentName('cluster-subdeployment')


########################################
def createMachine(machine_name, nodemanager_type, listen_address, listen_port):
  cd('/')
  machine = create(machine_name, 'Machine')

  cd('/Machines/' + machine_name + '/')
  nodeManager = create(machine_name, 'NodeManager')

  #cd('/Machines/' + machine_name + '/NodeManager/' + machine_name)
  nodeManager.setNMType(nodemanager_type)
  nodeManager.setListenAddress(listen_address)
  nodeManager.setListenPort(listen_port)

  return machine

########################################

var_domain_dir = USER_PROJECTS + '/domains/' + domain_Name
print 'Creating domain in path=' + var_domain_dir

try:
  createDomain(DOMAIN_TEMPLATE, var_domain_dir, adminServer_Username, adminServer_Password)
except:
  dumpStack()
  print 'Unable to create domain!'
  exit('errors in WLST')
else:
  print 'domain created'

try:
  readDomain(var_domain_dir)
  print 'read domain'

  cd('/')
  cmo.setExalogicOptimizationsEnabled(false)
  cmo.setClusterConstraintsEnabled(false)
  cmo.setGuardianEnabled(false)
  cmo.setAdministrationPortEnabled(false)
  cmo.setConsoleEnabled(true)
  cmo.setConsoleExtensionDirectory('console-ext')
  cmo.setProductionModeEnabled(false)
  cmo.setAdministrationProtocol('t3s')
  cmo.setConfigBackupEnabled(false)
  cmo.setConfigurationAuditType('none')
  cmo.setInternalAppsDeployOnDemandEnabled(false)
  cmo.setConsoleContextPath('console')

  cd('/Servers/AdminServer')
  cmo.setListenPortEnabled(true)
  cmo.setAdministrationPort(int(adminServer_AdministrationPort))
  cmo.setListenPort(int(adminServer_ListenPort))
  cmo.setWeblogicPluginEnabled(false)
  cmo.setJavaCompiler('javac')
  cmo.setStartupMode('RUNNING')
  cmo.setVirtualMachineName(domain_Name + '_AdminServer')
  cmo.setClientCertProxyEnabled(false)
except:
  print 'Unable to read or configure domain!'
  dumpStack()
  exit('errors in WLST')

try:
  print 'updating domain'
  updateDomain()
except:
  print 'Unable to update domain'
  dumpStack()
  exit('errors in WLST')
else:
  print 'updateDomain() succeeded!'

machine = createMachine(machine_Name, 'Plain', machine_ListenAddress, 5557)
cd('/Servers/AdminServer')
cmo.setMachine(machine)
serverStart = create('AdminServer', 'ServerStart')
serverStart.setArguments(
  '-Dweblogic.security.SSL.ignoreHostnameVerification=true -Dweblogic.security.TrustKeyStore=DemoTrust -Xms128m -Xmx256m')

cd('/')
cluster = create(cluster_Name, 'Cluster')

jdbcSystemResource = createPhysicalDataSource(datasource_jndi_name, datasource_jdbc_driver,
                                              datasource_global_transactions,
                                              datasource_jdbc_url, datasource_user,
                                              datasource_password, cluster)

####### Create Managed Servers

print 'Creating ' + str(managed_server_count) + ' Managed Servers...'

jmsServerMBeans = []
managedServers = []

for n in range(1, int(managed_server_count) + 1):
  managed_server_name = managed_server_name_base + '-' + str(n)
  managed_server_listen_port = int(str(managed_server_port_base) + str(n))
  managed_server_listen_address = listen_address
  jms_server_name = jms_sever_name_base + '-' + str(n)

  print 'Creating Server Name=[' + managed_server_name + '] with Listen Port: ' + str(managed_server_listen_port)
  cd('/')
  managedServer = create(managed_server_name, 'Server')
  managedServer.setListenPort(managed_server_listen_port)
  managedServer.setListenAddress(managed_server_listen_address)
  managedServer.setCluster(cluster)
  managedServer.setMachine(machine)
  managedServers.append(managedServer)

  cd('/Servers/' + managed_server_name)
  print 'Setting ServerStart params...'
  serverStart = create(managed_server_name, 'ServerStart')
  serverStart.setArguments(
    ' -Dweblogic.security.SSL.ignoreHostnameVerification=true '
    ' -Dweblogic.security.TrustKeyStore=DemoTrust '
    ' -Xms128m -Xmx256m '
    ' -Dtangosol.coherence.ttl=0 '
    ' -Dtangosol.coherence.distributed.localstorage=false '
    ' -Dtangosol.coherence.session.localstorage=false '
    ' -Dtangosol.coherence.cacheconfig=/coherence-cache-config.xml '
    ' -Djava.security.egd=file:/dev/./urandom')

  print 'Creating JMS Server Name=[' + jms_server_name + ']'
  cd('/')
  jmsserver = create(jms_server_name, 'JMSServer')
  jmsServerMBeans.append(jmsserver)
  jmsserver.setTargets(jarray.array([managedServers[n - 1]], weblogic.management.configuration.TargetMBean))

cd('/')

createSAFTargetModules()

updateDomain()

shutdown()
