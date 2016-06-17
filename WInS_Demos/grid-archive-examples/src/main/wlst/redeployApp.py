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

edit()
startEdit()

cd('/')
cmo.createServer('cache_server3')

cd('/Servers/cache_server3')
cmo.setListenAddress('')
cmo.setListenPort(7030)
cmo.setCluster(getMBean('/Clusters/CacheServerWebLogicCluster'))

activate()

startEdit()
cmo.setMachine(getMBean('/Machines/machine'))

cd('/Servers/cache_server3/SSL/cache_server3')
cmo.setEnabled(false)

activate()

start('cache_server3','Server')

disconnect()
print 'Finished'
exit()



