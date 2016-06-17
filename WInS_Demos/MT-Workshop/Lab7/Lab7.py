nmConnect('weblogic','welcome1',domainName='base_domain',port='5556',host='localhost')
nmKill('AdminServer')
nmKill('app-cluster-1')
nmKill('app-cluster-2')
nmStart('AdminServer')
nmDisconnect()


connect('weblogic','welcome1','t3://localhost:7001')
edit()
print "************************ Starting app-cluster ****************************"
start('app-cluster','Cluster')

print "************************ Creating Virtual target VT5 for dp5  ****************************"
startEdit()
cd('/')
cmo.createVirtualTarget('VT5')
cd('/VirtualTargets/VT5')
cmo.setHostNames(array(["localhost"],java.lang.String))
cmo.setUriPrefix('/dp5')
set('Targets',jarray.array([ObjectName('com.bea:Name=app-cluster,Type=Cluster')], ObjectName))
activate()

disconnect()

