#!/bin/sh

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi
export SVN_EDITOR="vi"

# User specific aliases and functions

export SW_BASE="/u01"
export USER_BASE="/u01"

##################################################################

export ORACLE_HOME="${SW_BASE}/app/oracle/product/12.1/database"
export ORACLE_SID="orcl"
export ORACLE_HOSTNAME=wins-vbox.localdomain
export ORACLE_UNQNAME=orcl
export ORACLE_BASE=/u01/app/oracle

export LD_LIBRARY_PATH=${ORACLE_HOME}/lib:/lib:/usr/lib
export CLASSPATH=${ORACLE_HOME}/jlib:${ORACLE_HOME}/rdbms/jlib
export PATH="${ORACLE_HOME}/bin:${PATH}"

##################################################################

export THIRD_PARTY="/u01/third-party"

export ANT_HOME="${THIRD_PARTY}/apache-ant-1.9.2"
export PATH="${ANT_HOME}/bin:${PATH}"

export M2_HOME="${THIRD_PARTY}/apache-maven-3.0.5"
export MAVEN_HOME="${M2_HOME}"
export MAVEN_OPTS="-Xmx2048m -Xms512m -XX:PermSize=256m -XX:MaxPermSize=512m -Dweblogic.security.SSL.ignoreHostnameVerification=true -Dweblogic.security.TrustKeyStore=DemoTrust -Dweblogic.nodemanager.sslHostNameVerificationEnabled=false"
export PATH="${PATH}:${M2_HOME}/bin"

export MW_HOME="${SW_BASE}/wls1212"
export WL_HOME="${MW_HOME}/wlserver"
export PATH="${PATH}:${WL_HOME}/common/bin"

export NM_HOME="${WL_HOME}/common/nodemanager"

export PLUGIN_HOME="/u01/wls-plugins-12.1.2"
export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${ORACLE_HOME}/lib:${WL_HOME}/server/native/linux/i686:${PLUGIN_HOME}/lib"
export COHERENCE_HOME="${MW_HOME}/coherence"

export CONTENT_HOME="${USER_BASE}/content"
export DEMOS_HOME="${CONTENT_HOME}/weblogic-innovation-seminars/WInS_Demos"

export WORKSHOP_HOME="${CONTENT_HOME}/weblogic-workshop-1035"
export USER_PROJECTS="${MW_HOME}/user_projects"
export DOMAINS="${USER_PROJECTS}/domains"
export OPS_DOMAIN_HOME="${USER_PROJECTS}/domains/ops-cluster"

export JAVA_HOME="/usr/java/latest"
export PATH="${PATH}:${JAVA_HOME}/bin"

export PATH="${PATH}:${DEMOS_HOME}/control/bin"

###################################################################

export BASICOUT="${DOMAINS}/weblogic-basic-domain/servers/AdminServer/logs/AdminServer.out"

export ADMINOUT="${DOMAINS}/weblogic-examples-domain/servers/AdminServer/logs/AdminServer.out"
export ADMINLOG="${DOMAINS}/weblogic-examples-domain/servers/AdminServer/logs/AdminServer.log"

export MS1OUT="${DOMAINS}/weblogic-examples-domain/servers/ms-1/logs/ms-1.out"
export MS2OUT="${DOMAINS}/weblogic-examples-domain/servers/ms-2/logs/ms-2.out"

export MS1LOG="${DOMAINS}/weblogic-examples-domain/servers/ms-1/logs/ms-1.log"
export MS2LOG="${DOMAINS}/weblogic-examples-domain/servers/ms-2/logs/ms-2.log"

export TAIL_OPTS="--lines=500 --follow=name --retry"
###################################################################

alias demo="mvn -P demo -DskipTests=false"

alias tnm="tail ${TAIL_OPTS} ${NM_HOME}/nodemanager.log"
alias tnm2="tail ${TAIL_OPTS} ${NM_HOME}2/nodemanager.log"

alias tbasic="tail ${TAIL_OPTS} ${BASICOUT}"

alias tadmin="tail ${TAIL_OPTS} ${ADMINOUT}"
alias ladmin="less ${ADMINOUT}"

alias tadminlog="tail ${TAIL_OPTS} ${ADMINLOG}"
alias ladminlog="less ${ADMINLOG}"

alias tms1="tail ${TAIL_OPTS} ${MS1OUT}"
alias lms1="less ${MS1OUT}"

alias tms1log="tail ${TAIL_OPTS} ${MS1LOG}"
alias lms1log="less ${MS1LOG}"

alias tms2="tail ${TAIL_OPTS} ${MS2OUT}"
alias lms2="less ${MS2OUT}"

alias tms2log="tail ${TAIL_OPTS} ${MS2LOG}"
alias lms2log="less ${MS2LOG}"

alias tsaf1="tail ${TAIL_OPTS} ${DOMAINS}/saf-target-domain/servers/ms-1/logs/ms-1.out"
alias tsaf2="tail ${TAIL_OPTS} ${DOMAINS}/saf-target-domain/servers/ms-2/logs/ms-2.out"
alias tsafadmin="tail ${TAIL_OPTS} ${DOMAINS}/saf-target-domain/servers/AdminServer/logs/AdminServer.out"

alias tcoh1="tail ${TAIL_OPTS} ${DOMAINS}/weblogic-examples-domain/servers_coherence/coh-1/logs/coh-1.out"
alias tcoh2="tail ${TAIL_OPTS} ${DOMAINS}/weblogic-examples-domain/servers_coherence/coh-2/logs/coh-2.out"

alias topsadmin="tail ${TAIL_OPTS} ${OPS_DOMAIN_HOME}/servers/AdminServer/logs/AdminServer.out"
alias tops1="tail ${TAIL_OPTS} ${OPS_DOMAIN_HOME}/servers/ms-1/logs/ms-1.out"
alias tops2="tail ${TAIL_OPTS} ${OPS_DOMAIN_HOME}/servers/ms-2/logs/ms-2.out"

alias tcohweb1="tail ${TAIL_OPTS} ${OPS_DOMAIN_HOME}/servers_coherence/coh-1/logs/coh-1.out"
alias tcohweb2="tail ${TAIL_OPTS} ${OPS_DOMAIN_HOME}/servers_coherence/coh-2/logs/coh-2.out"

alias tcohtlg1="tail ${TAIL_OPTS} ${OPS_DOMAIN_HOME}/servers_coherence/ops-coh-tlg-1/logs/ops-coh-tlg-1.out"
alias tcohtlg2="tail ${TAIL_OPTS} ${OPS_DOMAIN_HOME}/servers_coherence/ops-coh-tlg-2/logs/ops-coh-tlg-2.out"

alias ttns="tail  ${TAIL_OPTS} ${SW_BASE}/app/oracle/diag/tnslsnr/wins-vbox/listener/trace/listener.log"

sudo route add -net 224.0.0.0 netmask 240.0.0.0 dev eth4 > /dev/null 2>&1

# Source global definitions
if [ -f /home/oracle/setProxy.sh ]; then
	. /home/oracle/setProxy.sh
fi

echo "Please note:"
echo "1) Ensure you have the latest WInS Demos code by running the \"Update WInS Demos\" command on the desktop!"
echo "2) Ensure you have configured the proxy for the Oracle network if you are on the Oracle Network or VPN!"
echo ""
