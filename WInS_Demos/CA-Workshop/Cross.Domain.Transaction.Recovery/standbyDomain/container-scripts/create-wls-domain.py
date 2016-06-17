# WebLogic on Docker Default Domain
#
# Default domain 'base_domain' to be created inside the Docker image for WLS
# 
# Since : October, 2014
# Author: bruno.borges@oracle.com
# ==============================================
admin_port = int(os.environ.get("ADMIN_PORT", "8001"))
admin_pass = os.environ.get("ADMIN_PASSWORD", "welcome1")

# Open default domain template
# ======================
readTemplate("/u01/oracle/weblogic/wlserver/common/templates/wls/wls.jar")

# Configure site name and recovery site name
# ================================
siteName="DEMOSTD"
recoverySiteName="DEMOPRI"
admin="ADMIN"
cd('/')
set('SiteName', siteName)
create('base_domain','JTA')
cd('/JTA/base_domain')
set('RecoverySiteName',recoverySiteName)
set('CrossDomainRecoveryRetryInterval', 120)
# Change the admin server name to "ADMIN"
# ===================================
cd('/')
set('AdminServerName', admin)

# Configure the Administration Server and SSL port.
# =========================================================
cd('/Servers/AdminServer')
set('ListenAddress', 'aadrdemo')
set('ListenPort', admin_port)
set('Name', admin)
# Define the user password for weblogic
# =====================================
cd('/')
cd('Security/base_domain/User/weblogic')
cmo.setPassword(admin_pass)

# Create a JMS Server
# ===================
cd('/')
create('myJMSServer', 'JMSServer')

# Create a JMS System resource
# ============================
cd('/')
create('myJmsSystemResource', 'JMSSystemResource')
cd('JMSSystemResource/myJmsSystemResource/JmsResource/NO_NAME_0')

# Create a JMS Queue and its subdeployment
# ========================================
myq=create('myQueue','Queue')
myq.setJNDIName('jms/myqueue')
myq.setSubDeploymentName('myQueueSubDeployment')

cd('/')
cd('JMSSystemResource/myJmsSystemResource')
create('myQueueSubDeployment', 'SubDeployment')

# Create and configure a JDBC Data Source, and sets the JDBC user
# ===============================================================
# IF YOU WANT TO HAVE A DEFAULT DATA SOURCE CREATED, UNCOMMENT THIS SECTION BEFORE BUILD

# first DS
def config_datasource(dsName, dsDriver, dsUrl, isXA, username, password):
  cd('/')
  create(dsName, 'JDBCSystemResource')
  cd('JDBCSystemResource/'+dsName+'/JdbcResource/'+dsName)
  create('myJdbcDriverParams','JDBCDriverParams')
  cd('JDBCDriverParams/NO_NAME_0')
  set('DriverName',dsDriver)
  set('URL',dsUrl)
  set('PasswordEncrypted', password)
  set('UseXADataSourceInterface', 'true')
  create('myProps','Properties')
  cd('Properties/NO_NAME_0')
  create('user', 'Property')
  cd('Property/user')
  cmo.setValue(username)

  cd('/JDBCSystemResource/'+dsName+'/JdbcResource/'+dsName)
  create('myJdbcDataSourceParams','JDBCDataSourceParams')
  cd('JDBCDataSourceParams/NO_NAME_0')
  set('JNDIName', java.lang.String(dsName))
  if isXA=='true':
    set('GlobalTransactionsProtocol','TwoPhaseCommit')
  else:
    set('GlobalTransactionsProtocol','None')

  cd('/JDBCSystemResource/'+dsName+'/JdbcResource/'+dsName)
  create('myJdbcConnectionPoolParams','JDBCConnectionPoolParams')
  cd('JDBCConnectionPoolParams/NO_NAME_0')
  set('TestTableName','SQL ISVALID')
# Add two xa datasources and non xa datasources to verify the tx result.
# ====================================
config_datasource('AuditDS','oracle.jdbc.xa.client.OracleXADataSource','jdbc:oracle:thin:@//10.0.2.15:1521/pdborcl','true', 'cdtr', 'welcome1')
config_datasource('StockDS','oracle.jdbc.xa.client.OracleXADataSource','jdbc:oracle:thin:@//10.0.2.15:1521/pdb2','true', 'cdtr', 'welcome1')
#config_datasource('OracleNonXADS','oracle.jdbc.OracleDriver','jdbc:oracle:thin:@//rtdc60121eems.us.oracle.com:1590/w34ys11g.us.oracle.com','false')
#config_datasource('OracleNonXADS2','oracle.jdbc.OracleDriver','jdbc:oracle:thin:@//rtdc60121eems.us.oracle.com:1528/w32ys11g.us.oracle.com','false')
config_datasource('TlogDS','oracle.jdbc.OracleDriver','jdbc:oracle:thin:@//10.0.2.15:1521/pdborcl','false','cdtr','welcome1')

# Target resources to the servers 
# ===============================
cd('/')
assign('JMSServer', 'myJMSServer', 'Target', admin)
assign('JMSSystemResource.SubDeployment', 'myJmsSystemResource.myQueueSubDeployment', 'Target', 'myJMSServer')
assign('JDBCSystemResource', 'AuditDS', 'Target', admin)
assign('JDBCSystemResource', 'StockDS', 'Target', admin)
#assign('JDBCSystemResource', 'OracleNonXADS','Target', admin)
#assign('JDBCSystemResource', 'OracleNonXADS2','Target', admin)
assign('JDBCSystemResource', 'TlogDS', 'Target', admin)

# Configure jdbc tlog, oracle db has a table name limitation 30
# so the prefix name should be less than or equal to 23, 30-leng(WLSTORE)
# ==============================
cd('/Servers/'+admin)
create(admin,'TransactionLogJDBCStore')
cd('TransactionLogJDBCStore/'+admin)
set('PrefixName', siteName+'_'+admin+'_')
set('DataSource', 'TlogDS')
set('Enabled', 'true')
# Write the domain and close the domain template
# ==============================================
setOption('OverwriteDomain', 'true')
setOption('ServerStartMode','dev')

cd('/')
cd('NMProperties')
set('ListenAddress','')
set('ListenPort',5556)
set('NativeVersionEnabled', 'false')
set('StartScriptEnabled', 'false')
set('SecureListener', 'false')

domain_path = '/u01/oracle/weblogic/user_projects/domains/base_domain'

writeDomain(domain_path)

# Exit WLST
# =========
exit()
