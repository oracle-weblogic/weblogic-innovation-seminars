connect('weblogic','welcome1','t3://localhost:7001')
print "************************ Deploying Applications in A_site_domain *****************************************"
deploy('ExampleGAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleGAR.gar',targets='CacheServerWebLogicCluster')
deploy('ExampleEAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleEAR.ear',targets='WebAppWebLogicCluster')
disconnect()
connect('weblogic','welcome1','t3://localhost:8001')

print "************************ Deploying Applications in B_site_domain *****************************************"
deploy('ExampleGAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleGAR.gar',targets='CacheServerWebLogicCluster')
deploy('ExampleEAR','/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/builds/ExampleEAR.ear',targets='WebAppWebLogicCluster')
disconnect()