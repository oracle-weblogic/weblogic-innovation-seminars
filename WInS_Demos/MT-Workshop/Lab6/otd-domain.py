nmConnect('weblogic','welcome1',domainName='otd_domain',hostname='localhost',port='5557')
print "********************** Starting Admin Server ******************************"
nmStart('AdminServer')
nmDisconnect()

connect('weblogic','welcome1','t3://localhost:8001')

edit()
print "******************************************** Creating  machine otd_machine in otd_domain **********************************************"
startEdit()
cd('/')
cmo.createUnixMachine('otd_machine')
cd('/Machines/otd_machine/NodeManager/otd_machine')
cmo.setNMType('SSL')
cmo.setListenAddress('localhost')
cmo.setListenPort(5557)
activate()
print "******************************************** Creating  OTD Configuration mt in otd_domain **********************************************"
startEdit()
otd_createConfiguration({'configuration':'mt','server-name':'localhost','listener-port':'8080'})
otd_createInstance({'configuration': 'mt', 'machine': "otd_machine"})
activate()
print "******************************************** Starting Load balancer instance otd_mt_otd_machine **********************************************"
startEdit()
start("otd_mt_otd_machine")
activate()

disconnect()

connect('weblogic','welcome1','t3://localhost:7001')
edit()

print "******************************************** Creating  Virtual Target VT1 for domain partition dp4 **********************************************"
startEdit()
cd('/')
cmo.createVirtualTarget('VT-1')
cd('/VirtualTargets/VT-1')
set('HostNames',jarray.array([String('localhost')], String))
set('Targets',jarray.array([ObjectName('com.bea:Name=app-cluster,Type=Cluster')], ObjectName))
cmo.setUriPrefix('/dp4')
activate()

print "****************************************** Create and register LCM end point with WLS **********************************************"
startEdit()
lcmEP=cmo.createLifecycleManagerEndPoint("lcmEP")
lcmEP.setURL("http://localhost:7001/management/lifecycle/latest")
lcmEP.setUsername("weblogic")
lcmEP.setPassword("welcome1")
lcmEP.setRuntimeName("base_domain")
save()
activate()

disconnect()