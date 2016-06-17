print "******************************************** Connecting to NodeManager in otd_domain *********************************"
nmConnect('weblogic', 'welcome1', domainName='otd_domain', port='5556', host='localhost')

print "******************************************* Starting AdminServer in otd_domain ****************************************"
nmStart('AdminServer')
nmDisconnect()

print "********************************************* Connecting to Admin Server in otd_domain ***************************************"
connect('weblogic','welcome1','t3://localhost:9001')
edit()

print "******************************************** Creating  OTD Configuration zdt in otd_domain **********************************************"
startEdit()
otd_createConfiguration({'configuration':'zdt','origin-server': 'localhost:7101,localhost:7102','server-name':'localhost','listener-port':'8080'})
otd_createInstance({'configuration': 'zdt', 'machine': "otd_machine"})
activate()

print "******************************************** Starting Load balancer instance otd_mt_otd_machine **********************************************"
startEdit()
start("otd_zdt_otd_machine")
activate()

disconnect()

