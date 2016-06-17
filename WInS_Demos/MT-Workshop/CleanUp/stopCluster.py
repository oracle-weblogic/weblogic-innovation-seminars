connect('weblogic','welcome1','t3://localhost:7001')
edit()

startEdit()
shutdown('app-cluster','Cluster',force='true')
shutdown('new-cluster','Cluster',force='true')
activate()

disconnect()

connect('weblogic','welcome1','t3://localhost:8001')
edit()

startEdit()
shutdown('otd_mt_otd_machine')
activate()

disconnect()
