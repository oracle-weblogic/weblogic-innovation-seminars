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
cmo.createMachine('machine')

cd('/Machines/machine/NodeManager/machine')
cmo.setNMType('Plain')

activate()
disconnect()
print 'Finished'
