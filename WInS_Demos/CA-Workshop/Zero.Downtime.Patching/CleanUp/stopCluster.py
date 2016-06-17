connect('weblogic','welcome1','t3://localhost:7001')
edit()

startEdit()
shutdown('Cluster','Cluster',force='true')
activate()

disconnect()

connect('weblogic','welcome1','t3://localhost:9001')
edit()

startEdit()
shutdown('otd_zdt_otd_machine')
activate()

disconnect()
