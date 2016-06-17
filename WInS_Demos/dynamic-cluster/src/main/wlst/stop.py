
loadProperties('counter.properties')

#Paramaters

#user='weblogic'
#password='welcome1'
#listenAddress='wins-vbox.localdomain'
#listenPort=5554
#adminPort=7001
#domainName='dynamic-cluster-domain'
														 
USER_PROJECTS='/u01/middleware/user_projects/domains/'
var_domain_dir = USER_PROJECTS + domainName




print ''
print '============================================='
print 'Connecting to Node Manager...'
print '============================================='
print ''

nmConnect(user,password,listenAddress,listenPort,domainName,var_domain_dir,'plain')

print ''
print '============================================='
print 'Connected to NODE MANAGER Successfully'
print '============================================='
print ''

adminServerStatus= nmServerStatus('AdminServer');
if( adminServerStatus != 'RUNNING'):									
	nmStart('AdminServer')

connect(user,password, 't3://' + listenAddress + ':' + str(adminPort))

edit()
startEdit()
#stop Server in Cluster if anyone is Running 
#Stop the MyCluser-1 in Dynamic Cluster

#Undeploying the Application
undeploy('LoadBalancer')
undeploy('Chat')

cluster1status= nmServerStatus('MyCluster-1');
if( cluster1status == 'RUNNING'):									
	nmKill('MyCluster-1')

#Stop the MyCluser-2 in Dynamic Cluster
cluster2status= nmServerStatus('MyCluster-2');
if( cluster2status == 'RUNNING'):									
	nmKill('MyCluster-2')
	
#Stop the MyCluser-3 in Dynamic Cluster
cluster3status= nmServerStatus('MyCluster-3');
if( cluster3status == 'RUNNING'):									
	nmKill('MyCluster-3')

#Stop the LoadBalancer 
lbstatus= nmServerStatus('LoadBalancer');
if( lbstatus == 'RUNNING'):									
	nmKill('LoadBalancer')
	
cd('/Servers/LoadBalancer')
cmo.setCluster(None)
cmo.setMachine(None)

editService.getConfigurationManager().removeReferencesToBean(getMBean('/Servers/LoadBalancer'))

cd('/')
cmo.destroyServer(getMBean('/Servers/LoadBalancer'))

activate()

startEdit()

editService.getConfigurationManager().removeReferencesToBean(getMBean('/Clusters/MyCluster'))
cmo.destroyCluster(getMBean('/Clusters/MyCluster'))

activate()

startEdit()

cd('/ServerTemplates/MyCluster-Template')
cmo.setCluster(None)
cmo.setMachine(None)

editService.getConfigurationManager().removeReferencesToBean(getMBean('/ServerTemplates/MyCluster-Template'))

cd('/')
cmo.destroyServerTemplate(getMBean('/ServerTemplates/MyCluster-Template'))

activate()

startEdit()

editService.getConfigurationManager().removeReferencesToBean(getMBean('/Machines/MyMachine'))
cmo.destroyMachine(getMBean('/Machines/MyMachine'))

activate()
shutdown()
