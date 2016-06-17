#!/bin/sh

cd $DOMAIN_HOME/bin
. ./setDomainEnv.sh

export JVM_ARGS="-Dweblogic.security.TrustKeyStore=DemoTrust -Dweblogic.security.SSL.ignoreHostnameVerification=true -Dweblogic.security.SSL.minimumProtocolVersion=TLSv1"

${JAVA_HOME}/bin/java ${JVM_ARGS} weblogic.WLST /tmp/restoreWLS.py
