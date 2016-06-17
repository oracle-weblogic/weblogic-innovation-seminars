#!/bin/sh

export JAVA_HOME=/usr/java/jre1.7.0_76
export LD_LIBRARY_PATH=${JAVA_HOME}/lib/amd64/server:$ORACLE_HOME/lib:$GG_HOME
export PATH=$JAVA_HOME/bin:$PATH:$JAVA_HOME/bin

cd $GG_HOME
extract paramfile ./dirprm/cs-cgga.prm
