
# Parameter
user='weblogic'
password='welcome1'
listenAddress='localhost'
listenPort=5556
adminPort=7001
domainName='weblogic-examples-domain'
USER_PROJECTS='/u01/middleware/user_projects/domains/'
var_domain_dir = USER_PROJECTS + domainName

print ''
print '============================================='
print 'Connecting to Node Manager...'
print '============================================='
print ''

nmConnect(user,password,listenAddress,listenPort,domainName,var_domain_dir,'plain')

print ''
print '============================================='
print 'Connected to NODE MANAGER Successfully'
print '============================================='
print ''


	
connect('weblogic','welcome1', 't3://localhost:7001');

#Deploying Application to WebLogic Server
deploy('weblogic-deployment-example','./weblogic-deployment-example/target/weblogic-deployment-example-12.1.3.0.0.war', targets='AdminServer')
startApplication('weblogic-deployment-example')

# Undeploy the application

#undeploy('weblogic-deployment-example')
