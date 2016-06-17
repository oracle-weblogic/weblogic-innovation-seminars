#==========================================================================
# Create a domain from the weblogic domain template.
#=================================================================
readTemplate('/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/otd-domain.jar')
cd('Servers/AdminServer')
#=================================================================
# Configure the Administration Server
#=================================================================
set('ListenAddress','localhost')
set('ListenPort', 9001)
 
#=================================================================
# Define the password for user weblogic. You must define the password before you
# can write the domain.
#=================================================================
cd('/')
cd('Security/otd_domain/User/weblogic')
cmo.setPassword('welcome1')
 
# - OverwriteDomain: Overwrites domain, when saving, if one exists.
setOption('OverwriteDomain', 'true')

#=================================================================
# Write the domain, close the domain template and exit from the WLST
#=================================================================
writeDomain('/u01/wins/wls1221/user_projects/domains/otd_domain')
closeTemplate()
exit()
