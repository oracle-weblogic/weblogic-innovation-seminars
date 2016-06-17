connect('weblogic','welcome1','t3://localhost:7001')
edit()

startEdit()
shutdown('app-cluster','Cluster')
activate()

print "************************ Deployng HeapApp in dp2 partition ****************************"

deploy(appName='heapApp', partition='dp2', resourceGroup='app2RG', path='/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5/heapApp.war')

disconnect()
