#==========================================================================
# Create a domain from the weblogic domain template.
#=================================================================
readTemplate('/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/Domain1221.jar')
cd('Servers/AdminServer')
#=================================================================
# Configure the Administration Server
#=================================================================
set('ListenAddress','localhost')
set('ListenPort', 7001)
 
#=================================================================
# Define the password for user weblogic. You must define the password before you
# can write the domain.
#=================================================================
cd('/')
cd('Security/Domain1221/User/weblogic')
cmo.setPassword('welcome1')
 
# - OverwriteDomain: Overwrites domain, when saving, if one exists.
setOption('OverwriteDomain', 'true')

#=================================================================
# Write the domain, close the domain template and exit from the WLST
#=================================================================
writeDomain('/u01/wins/ma/Domain1221')
closeTemplate()
exit()
