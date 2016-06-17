#Begin Script

var_username = 'weblogic'
var_password = 'welcome1'

connect(var_username, var_password, 't3://127.0.0.1:7001')
edit()
startEdit()

cd('/')
cmo.createJDBCSystemResource('orcl-datasource')

cd('/JDBCSystemResources/orcl-datasource/JDBCResource/orcl-datasource')
cmo.setName('orcl-datasource')

cd('/JDBCSystemResources/orcl-datasource/JDBCResource/orcl-datasource/JDBCDataSourceParams/orcl-datasource')
set('JNDINames', jarray.array([String('cgDatasource')], String))

cd('/JDBCSystemResources/orcl-datasource/JDBCResource/orcl-datasource/JDBCDriverParams/orcl-datasource')
#cmo.setUrl('jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=wins-vbox)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=PDBORCL)))')
cmo.setUrl('jdbc:oracle:thin:@//localhost:1521/pdborcl')
cmo.setDriverName('oracle.jdbc.OracleDriver')
cmo.setPassword('weblogic_examples_domain')
#setEncrypted('Password', 'Password_1326590775531', 'src/main/wlst/Script1326590585284Config','src/main/wlst/Script1326590585284Secret')

cd('/JDBCSystemResources/orcl-datasource/JDBCResource/orcl-datasource/JDBCConnectionPoolParams/orcl-datasource')
cmo.setTestTableName('SQL SELECT 1 FROM DUAL\r\n\r\n\r\n')

cd(
    '/JDBCSystemResources/orcl-datasource/JDBCResource/orcl-datasource/JDBCDriverParams/orcl-datasource/Properties/orcl-datasource')
cmo.createProperty('user')

cd(
    '/JDBCSystemResources/orcl-datasource/JDBCResource/orcl-datasource/JDBCDriverParams/orcl-datasource/Properties/orcl-datasource/Properties/user')
cmo.setValue('weblogic_examples_domain')

cd('/JDBCSystemResources/orcl-datasource/JDBCResource/orcl-datasource/JDBCDataSourceParams/orcl-datasource')
cmo.setGlobalTransactionsProtocol('None')

cd('/JDBCSystemResources/orcl-datasource')
set('Targets', jarray.array([ObjectName('com.bea:Name=AdminServer,Type=Server')], ObjectName))

activate()


