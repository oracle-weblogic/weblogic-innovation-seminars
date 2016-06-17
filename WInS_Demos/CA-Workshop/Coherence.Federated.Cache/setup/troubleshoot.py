#Connecting to Admin Server in A_site_domain to Undeploy Applications
connect('weblogic','welcome1','t3://localhost:7001')
undeploy('ExampleGAR',targets='CacheServerWebLogicCluster')
undeploy('ExampleEAR',targets='WebAppWebLogicCluster')
disconnect()


#Connecting to Admin Server in B_site_domain to Undeploy Applications
connect('weblogic','welcome1','t3://localhost:8001')
undeploy('ExampleGAR',targets='CacheServerWebLogicCluster')
undeploy('ExampleEAR',targets='WebAppWebLogicCluster')
disconnect()

#Connectiong to NodeManager in A_site_domain to Stop AdminServer,cache_server1,webapp_server1
nmConnect('weblogic','welcome1',domainName='A_site_domain',port='5556',host='localhost')
nmKill('AdminServer')
nmKill('cache_server1')
nmKill('webapp_server1')
nmDisconnect()

#Connectiong to NodeManager in B_site_domain to Stop AdminServer,cache_server1,webapp_server1
nmConnect('weblogic','welcome1',domainName='B_site_domain',port='5559',host='localhost')
nmKill('AdminServer')
nmKill('cache_server1')
nmKill('webapp_server1')
nmDisconnect()

#Connectiong to NodeManager in A_site_domain to Start AdminServer,cache_server1,webapp_server1
nmConnect('weblogic','welcome1',domainName='A_site_domain',port='5556',host='localhost')
nmStart('AdminServer')
nmStart('cache_server1')
nmStart('webapp_server1')
nmDisconnect()

#Connectiong to NodeManager in B_site_domain to Start AdminServer,cache_server1,webapp_server1
nmConnect('weblogic','welcome1',domainName='B_site_domain',port='5559',host='localhost')
nmStart('AdminServer')
nmStart('cache_server1')
nmStart('webapp_server1')
nmDisconnect()

#Connecting to Admin Server in A_site_domain to deploy Applications
connect('weblogic','welcome1','t3://localhost:7001')
deploy('ExampleGAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleGAR.gar',targets='CacheServerWebLogicCluster')
deploy('ExampleEAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleEAR.ear',targets='WebAppWebLogicCluster')
disconnect()

#Connecting to Admin Server in B_site_domain to deploy Applications
connect('weblogic','welcome1','t3://localhost:8001')
deploy('ExampleGAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleGAR.gar',targets='CacheServerWebLogicCluster')
deploy('ExampleEAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleEAR.ear',targets='WebAppWebLogicCluster')
disconnect()
