connect('weblogic','welcome1','t3://wins-vbox:7001')
edit()
startEdit()

cd('/')
cmo.destroyJDBCSystemResource(getMBean('/JDBCSystemResources/otrade-ds'))
cmo.destroyJDBCSystemResource(getMBean('/JDBCSystemResources/otrade-replay-ds'))

activate()

undeploy('otrade')
