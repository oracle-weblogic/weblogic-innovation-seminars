print "**** Connectiong to NodeManager in A_site_domain to Start cache_server1,webapp_server1 ***"
nmConnect('weblogic','welcome1',domainName='A_site_domain',port='5556',host='localhost')
prps = makePropertiesObject("AdminURL=http://localhost:7001;Username=weblogic;Password=welcome1")
nmStart('cache_server1',props=prps)
nmStart('webapp_server1',props=prps)
nmDisconnect()

print "*** Connectiong to NodeManager in B_site_domain to Start cache_server1,webapp_server1 ***"
nmConnect('weblogic','welcome1',domainName='B_site_domain',port='5559',host='localhost')
prps = makePropertiesObject("AdminURL=http://localhost:8001;Username=weblogic;Password=welcome1")
nmStart('cache_server1',props=prps)
nmStart('webapp_server1',props=prps)
nmDisconnect()
