connect('weblogic','welcome1','t3://localhost:7001')
edit()

#Shutdown the domain partition dp1
print "************************ Shuting down domain partition dp1 ****************************"
startEdit()
cd('/')
partitionBeanDP1=cmo.lookupPartition('dp1')
forceShutdownPartitionWait(partitionBeanDP1)
activate()
print "************************ Creating new security realm newrealm in base_domain ****************************"
#Creating new security realm newrealm
startEdit()
cd('/SecurityConfiguration/base_domain')
cmo.createRealm('mynewrealm')
cd('/SecurityConfiguration/base_domain/Realms/mynewrealm')
cmo.setDeployCredentialMappingIgnored(true)
cmo.createAuthenticationProvider('DefaultAuthenticator', 'weblogic.security.providers.authentication.DefaultAuthenticator')
cmo.createAuthenticationProvider('DefaultIdentityAsserter', 'weblogic.security.providers.authentication.DefaultIdentityAsserter')
cmo.createAuthorizer('XACMLAuthorizer', 'weblogic.security.providers.xacml.authorization.XACMLAuthorizer')
cmo.createRoleMapper('XACMLRoleMapper', 'weblogic.security.providers.xacml.authorization.XACMLRoleMapper')
cmo.createAdjudicator('DefaultAdjudicator', 'weblogic.security.providers.authorization.DefaultAdjudicator')
cmo.createCredentialMapper('DefaultCredentialMapper', 'weblogic.security.providers.credentials.DefaultCredentialMapper')
cmo.createCertPathProvider('WebLogicCertPathProvider', 'weblogic.security.providers.pk.WebLogicCertPathProvider')
cmo.setCertPathBuilder(getMBean('/SecurityConfiguration/base_domain/Realms/mynewrealm/CertPathProviders/WebLogicCertPathProvider'))
cmo.createPasswordValidator('SystemPasswordValidator', 'com.bea.security.providers.authentication.passwordvalidator.SystemPasswordValidator')
cd('/SecurityConfiguration/base_domain/Realms/mynewrealm/PasswordValidators/SystemPasswordValidator')
cmo.setMinPasswordLength(8)
cmo.setMinNumericOrSpecialCharacters(1)
activate()


#Assiging newrealm to domain partition dp1
print "************************ Assigning newrealm to domain partition dp1 ****************************"
startEdit()
cd('/Partitions/dp1')
set('DefaultTargets',jarray.array([ObjectName('com.bea:Name=VT-Medrec-1,Type=VirtualTarget')], ObjectName))
cmo.setRealm(getMBean('/SecurityConfiguration/base_domain/Realms/mynewrealm'))
cmo.setDataSourceForJobScheduler(None)
cmo.setPrimaryIdentityDomain('idd_dp1')
cmo.setJobSchedulerTableName('WEBLOGIC_TIMERS')
activate()

#Starting domain parttion dp1
print "************************ Starting domain partition dp1 ****************************"
startEdit()
cd('/')
partitionBean=cmo.lookupPartition('dp1')
startPartitionWait(partitionBean)
activate()

disconnect()

# Adding the administrator user in newrealm security realm
connect('weblogic','welcome1','t3://localhost:7001')
print "************************ Adding Administrator user in newrealm security realm ****************************"
cd('/SecurityConfiguration/base_domain/Realms/mynewrealm/AuthenticationProviders/DefaultAuthenticator/')
cmo.createUser('administrator','welcome1','Medrec in DP1')

disconnect()

