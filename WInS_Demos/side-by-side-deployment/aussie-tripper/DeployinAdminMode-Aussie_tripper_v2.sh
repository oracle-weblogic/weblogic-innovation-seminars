#!/bin/sh
. ${WL_HOME}/server/bin/setWLSEnv.sh
echo CLASSPATH=${CLASSPATH}

export JVM_ARGS="-Dweblogic.security.TrustKeyStore=DemoTrust"

${JAVA_HOME}/bin/java ${JVM_ARGS} weblogic.Deployer -adminurl https://localhost:7200 -user weblogic -password welcome1 -adminmode -name aussie-tripper-v1 -deploy aussie-tripper-v2.ear -upload -remote -appversion v2

