connect('weblogic','welcome1','t3://wins-vbox:7001')
edit()
startEdit()


cd('/')
cmo.createJDBCSystemResource('otrade-ds')

cd('/JDBCSystemResources/otrade-ds/JDBCResource/otrade-ds')
cmo.setName('otrade-ds')

cd('/JDBCSystemResources/otrade-ds/JDBCResource/otrade-ds/JDBCDataSourceParams/otrade-ds')
set('JNDINames',jarray.array([String('otrade-ds')], String))

cd('/JDBCSystemResources/otrade-ds/JDBCResource/otrade-ds/JDBCDriverParams/otrade-ds')
cmo.setUrl('jdbc:oracle:thin:@//localhost:1521/AC')
cmo.setDriverName('oracle.jdbc.OracleDriver')
cmo.setPasswordEncrypted('welcome1')
cd('/JDBCSystemResources/otrade-ds/JDBCResource/otrade-ds/JDBCConnectionPoolParams/otrade-ds')
cmo.setTestTableName('SQL SELECT 1 FROM DUAL\r\n\r\n')

cd('/JDBCSystemResources/otrade-ds/JDBCResource/otrade-ds/JDBCDriverParams/otrade-ds/Properties/otrade-ds')
cmo.createProperty('user')

cd('/JDBCSystemResources/otrade-ds/JDBCResource/otrade-ds/JDBCDriverParams/otrade-ds/Properties/otrade-ds/Properties/user')
cmo.setValue('system')

cd('/JDBCSystemResources/otrade-ds/JDBCResource/otrade-ds/JDBCDataSourceParams/otrade-ds')
cmo.setGlobalTransactionsProtocol('OnePhaseCommit')

cd('/JDBCSystemResources/otrade-ds')
set('Targets',jarray.array([ObjectName('com.bea:Name=AdminServer,Type=Server')], ObjectName))

activate()


startEdit()

cd('/')
cmo.createJDBCSystemResource('otrade-replay-ds')

cd('/JDBCSystemResources/otrade-replay-ds/JDBCResource/otrade-replay-ds')
cmo.setName('otrade-replay-ds')

cd('/JDBCSystemResources/otrade-replay-ds/JDBCResource/otrade-replay-ds/JDBCDataSourceParams/otrade-replay-ds')
set('JNDINames',jarray.array([String('otrade-replay-ds')], String))

cd('/JDBCSystemResources/otrade-replay-ds/JDBCResource/otrade-replay-ds/JDBCDriverParams/otrade-replay-ds')
cmo.setUrl('jdbc:oracle:thin:@//wins-vbox:1521/AC')
cmo.setDriverName('oracle.jdbc.replay.OracleDataSourceImpl')
cmo.setPasswordEncrypted('welcome1')

cd('/JDBCSystemResources/otrade-replay-ds/JDBCResource/otrade-replay-ds/JDBCConnectionPoolParams/otrade-replay-ds')
cmo.setTestTableName('SQL SELECT 1 FROM DUAL\r\n\r\n')

cd('/JDBCSystemResources/otrade-replay-ds/JDBCResource/otrade-replay-ds/JDBCDriverParams/otrade-replay-ds/Properties/otrade-replay-ds')
cmo.createProperty('user')

cd('/JDBCSystemResources/otrade-replay-ds/JDBCResource/otrade-replay-ds/JDBCDriverParams/otrade-replay-ds/Properties/otrade-replay-ds/Properties/user')
cmo.setValue('system')

cd('/JDBCSystemResources/otrade-replay-ds/JDBCResource/otrade-replay-ds/JDBCDataSourceParams/otrade-replay-ds')
cmo.setGlobalTransactionsProtocol('OnePhaseCommit')

cd('/JDBCSystemResources/otrade-replay-ds')
set('Targets',jarray.array([ObjectName('com.bea:Name=AdminServer,Type=Server')], ObjectName))

activate()

deploy('otrade','/u01/content/weblogic-innovation-seminars/WInS_Demos/jdbc-replay/src/main/apps/otrade.ear',targets='AdminServer')
startApplication('otrade')


