#!/bin/sh

echo "Set Maven proxy settings"
cp /u01/content/weblogic-innovation-seminars/WInS_Demos/control/maven/settings.xml ~/.m2/

PROXY_SCRIPT="/home/oracle/setProxy.sh"
ORACLE_HTTP_PROXY="http://www-proxy.us.oracle.com:80"
PROXY_MESSAGE="Proxy Configured for Oracle Network!!!"

echo "#!/bin/sh" > ${PROXY_SCRIPT}
echo "echo \"${PROXY_MESSAGE}\"" >> ${PROXY_SCRIPT}
echo "echo \"${PROXY_MESSAGE}\"" >> ${PROXY_SCRIPT}
echo "echo \"${PROXY_MESSAGE}\"" >> ${PROXY_SCRIPT}

sudo git config --system http.proxy ${ORACLE_HTTP_PROXY}

#cd $DEMOS_HOME
#sudo git config http.proxy ${ORACLE_HTTP_PROXY}

echo ${PROXY_MESSAGE}

chmod +x ${PROXY_SCRIPT}

if [ "$1" == "wait" ]; then
  echo "This window will close automatically in 5s..."
  sleep 5
 fi
