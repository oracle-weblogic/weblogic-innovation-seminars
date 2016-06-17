user="weblogic"
password="welcome1"
listenAddress="localhost"
listenPort=5556
domainName="mydomain"
domainDirectory="/u01/content/weblogic-innovation-seminars/WInS_Demos/grid-archive-examples/Oracle/Domains/mydomain"

print ''
print '============================================='
print 'Connecting to Node Manager...'
print '============================================='
print ''

nmConnect(user,password,listenAddress,listenPort,domainName,domainDirectory,'Plain')

print ''
print '============================================='
print 'Connected to NODE MANAGER Successfully'
print '============================================='
print ''


adminServerStatus= nmServerStatus('AdminServer');
if( adminServerStatus != 'RUNNING'):									
	nmStart('AdminServer')
	
connect('weblogic','welcome1','t3://wins-vbox.localdomain:7001')

# Author:  Tim Middleton
# Date:    2012-05-07
# Purpose: This WLST script creates the full Managed Coherence Servers example from scratch.
#          Pre-requisites are a running WebLogic Server domain with admin server with node
#          manager running and configured.  A machine called 'machine' must be created and
#          configured to the running node mamager.
#          The examples directory is assumed to be in /home/oracle/examples/managed-coherence-servers.  Modify the
#          config file paths if this in not the case.
#
# Definitions
#
# WebLogic Cluster Names
cacheClusterName       = 'CacheServerWebLogicCluster'
applicationClusterName = 'WebAppWebLogicCluster'
proxyClusterName       = 'ProxyWebLogicCluster'
machineName            = 'machine'
#homeDir                = '/home/oracle/examples/managed-coherence-servers'


# Cache configuration target names
jndiName = 'ExamplesGar'
proxyCacheConfig       ='ProxyCacheConfig'
proxyCacheConfigFile   ='/u01/content/weblogic-innovation-seminars/WInS_Demos/grid-archive-examples/src/main/resource/config/proxy-cache-config.xml'
overrideFile           ='/u01/content/weblogic-innovation-seminars/WInS_Demos/grid-archive-examples/src/main/resource/config/tangosol-coherence-override.xml'

# Coherence Cluster Name
cohClusterName = 'CoherenceCluster'

# Managed servers
cache_ms = {'cache_server1':7003, 'cache_server2':7005}
webapp_ms = {'webapp_server1':7007, 'webapp_server2':7009}
proxy_ms = {'proxy_server1':7011, 'proxy_server2':7013}

unicastListenPort = 9000
unicastListenPortProxy = 9020



edit()
startEdit()

# Create a machine for everything to be managed by
#machine = create(machineName,'Machine')
#machine.setNMType('Plain')
#machine.setListenPort(5556)

# for already existing machine
machine = getMBean('/Machines/machine')


# Create the Coherence cluster
cohSR      = create(cohClusterName,'CoherenceClusterSystemResource')
cohBean    = cohSR.getCoherenceClusterResource()
cohCluster = cohBean.getCoherenceClusterParams()

cohSR.importCustomClusterConfigurationFile(overrideFile)

# Security
cohCluster.setSecurityFrameworkEnabled(false)

cohCluster.setUnicastListenPort(unicastListenPort)

# Create a WebLogic cluster for storage members
clu1 = create(cacheClusterName, 'Cluster')
clu1.setClusterMessagingMode('unicast')
clu1.setCoherenceClusterSystemResource(cohSR)
cohSR.addTarget(clu1)

# Create a WebLogic cluster for application
clu2 = create(applicationClusterName, 'Cluster')
clu2.setClusterMessagingMode('unicast')
clu2.setCoherenceClusterSystemResource(cohSR)
cohSR.addTarget(clu2)
cohTier = clu2.getCoherenceTier()
cohTier.setLocalStorageEnabled(false)

# Create a WebLogic cluster for proxy tier
clu3 = create(proxyClusterName, 'Cluster')
clu3.setClusterMessagingMode('unicast')
clu3.setCoherenceClusterSystemResource(cohSR)
cohSR.addTarget(clu3)
cohTier = clu3.getCoherenceTier()
cohTier.setLocalStorageEnabled(false)

# now create a coherenceCacheConfig for the Proxy Cluster to 
# set the cache configuration file to enable proxy server
# if setPerformImport = false, it wll just reference, not import
cohConfig = cohSR.createCoherenceCacheConfig(proxyCacheConfig)
cohConfig.setCacheConfigurationFile(proxyCacheConfigFile)
cohConfig.importCacheConfigurationFile(proxyCacheConfigFile)
cohConfig.setJNDIName(jndiName)
# add the proxy cluster
cohConfig.addTarget(clu3)

cd('/')
# Create storage enabled MS
for m, lp in cache_ms.items():
  print 'Creating managed server '+m
  managedServer = create(m,'Server')
  managedServer.setListenPort(lp)
  managedServer.setCluster(clu1)
  managedServer.setMachine(machine)

# Create storage disabled MS for application
for m, lp in webapp_ms.items():
  print 'Creating managed server '+m
  managedServer = create(m,'Server')
  managedServer.setListenPort(lp)
  managedServer.setCluster(clu2)
  managedServer.setMachine(machine)

# Create storage disabled MS for proxy tier
for m, lp in proxy_ms.items():
  cd('/')
  print 'Creating managed server '+m
  managedServer = create(m,'Server')
  managedServer.setListenPort(lp)
  managedServer.setCluster(clu3)
  managedServer.setMachine(machine)
  cd('/Servers/' + m + '/CoherenceMemberConfig/' + m)
  cmo.setUnicastListenPort(unicastListenPortProxy)
  cmo.setUnicastPortAutoAdjust(true)

activate()
disconnect()
print 'Finished'
exit()



