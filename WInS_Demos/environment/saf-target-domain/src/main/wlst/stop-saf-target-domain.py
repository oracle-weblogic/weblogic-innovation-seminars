import time

loadProperties('environment.properties')

DOMAIN_NAME = 'saf-target-domain'
var_domain_dir = USER_PROJECTS + '/domains/' + DOMAIN_NAME

adminServer_ListenAddress = 'wins-vbox.localdomain'
adminServer_ListenPort = 8001
adminServer_AdministrationPort = 8200
adminServer_Username = 'weblogic'
adminServer_Password = 'welcome1'

managed_server_name_base = 'ms'
managed_server_port_base = '810'
managed_server_count = 2

listen_address = 'wins-vbox.localdomain'
jms_sever_name_base = 'jms-server'
cluster_name = 'cluster-1'
machine_name = 'wins-vbox.localdomain'

########################################

def stopCluster():
    try:
        shutdown(cluster_name, 'Cluster', ignoreSessions='true', force='true')
        state(cluster_name, 'Cluster')
    except:
        print '============================================='
        print 'Unable to shutdown Cluster!!!'
        print '============================================='
        print ''
        dumpStack()

########################################

def startAdminServer():
    try:
        nmStart('AdminServer')
    except:
        print '============================================='
        print 'Unable to start Admin Server!!!'
        print '============================================='
        print ''
        dumpStack()

########################################

print ''
print '============================================='
print 'Connecting to Node Manager...'
print '============================================='
print ''

nmConnect(adminServer_Username, adminServer_Password, listen_address, 5557, DOMAIN_NAME, var_domain_dir, 'plain')

print ''
print '============================================='
print 'Connected to NODE MANAGER Successfully'
print '============================================='
print ''

adminURL='t3://' + adminServer_ListenAddress + ':' + str(adminServer_ListenPort)

try:
    print 'Attempting to connect to AdminServer at URL='+adminURL
    connect(adminServer_Username, adminServer_Password, adminURL)
except:
    print 'Unable to connect to AdminServer, attempting to start'
    startAdminServer()
    connect(adminServer_Username, adminServer_Password, adminURL)

domainRuntime()
stopCluster()

shutdown(force='true')