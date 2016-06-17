#!/bin/sh

cd $DOMAIN_HOME/bin
. ./setDomainEnv.sh

export JVM_ARGS="-Dweblogic.security.TrustKeyStore=DemoTrust -Dweblogic.security.SSL.ignoreHostnameVerification=true"

${JAVA_HOME}/bin/java ${JVM_ARGS} weblogic.WLST /tmp/prepareWLS.py