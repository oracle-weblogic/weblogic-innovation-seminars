#!/bin/sh

echo "************************Creating Directory Structure for project *******************************"

mkdir /u01/wins/ma
mkdir /u01/wins/ma/OracleHome1221
mkdir /u01/wins/ma/Domain1221
chmod 777 -Rf /u01/wins/ma
mkdir /u01/wins/m1
mkdir /u01/wins/m1/OracleHome1221
mkdir /u01/wins/m1/Domain1221
chmod 777 -Rf /u01/wins/m1
mkdir /u01/wins/m2
mkdir /u01/wins/m2/OracleHome1221
mkdir /u01/wins/m2/Domain1221
chmod 777 -Rf /u01/wins/m2
mkdir /u01/wins/tmp
mkdir /u01/wins/patchVerification1221
chmod 777 -Rf /u01/wins/tmp
chmod 777 -Rf /u01/wins/patchVerification1221

echo "************** Installing  WebLogic Server 12.2.1 using generic installer to /u01/wins/ma/OracleHome1221 as OracleHome *********************"
cd /u01/wins/install
java -jar fmw_12.2.1.0.0_wls.jar -silent -invPtrLoc /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/oraInst_ma.loc ORACLE_HOME=/u01/wins/ma/OracleHome1221 INSTALL_TYPE="WebLogic Server" SECURITY_UPDATES_VIA_MYORACLESUPPORT=false DECLINE_AUTO_UPDATES=true DECLINE_SECURITY_UPDATES=true

echo "************************* Setting Environment to run copyBinary.sh files ***************************************************"
/u01/wins/ma/OracleHome1221/wlserver/server/bin/setWLSEnv.sh

echo "********************** Creating an Archive from OracleHome /u01/wins/ma/OracleHome1221 in /u01/wins folder name OracleHome1221p1.jar *******************************"

/u01/wins/ma/OracleHome1221/oracle_common/bin/copyBinary.sh -javaHome $JAVA_HOME -archiveLoc /u01/wins/OracleHome1221p1.jar -sourceOracleHomeLoc /u01/wins/ma/OracleHome1221

echo "*************************** Copying required files for extracting the OracleHome to new locations **************************"

cp /u01/wins/ma/OracleHome1221/oracle_common/bin/pasteBinary.sh /u01/wins/tmp/pasteBinary.sh
cp /u01/wins/ma/OracleHome1221/oracle_common/jlib/cloningclient.jar /u01/wins/tmp/cloningclient.jar

echo "****************** Extracting the Archive to Create another OracleHome as Node2 in /u01/wins/m1/OracleHome1221 ************************"

/u01/wins/tmp/pasteBinary.sh -javaHome $JAVA_HOME -invPtrLoc /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/oraInst_m1.loc -archiveLoc /u01/wins/OracleHome1221p1.jar -targetOracleHomeLoc /u01/wins/m1/OracleHome1221

echo "********************* Extracting the Archive to Create another OracleHome as Node3 in /u01/wins/m2/OracleHome1221 ************************"

/u01/wins/tmp/pasteBinary.sh -javaHome $JAVA_HOME -invPtrLoc /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/oraInst_m2.loc -archiveLoc /u01/wins/OracleHome1221p1.jar -targetOracleHomeLoc /u01/wins/m2/OracleHome1221

echo "*********************************** Creating domain for load balancer ***********************************"
cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/
./create_otd_domain.sh

echo "****************************** Creating Domain For ZDT Demo *****************************"
./createDomain1221.sh

echo "******************************** Packing Domain Domain1221 to Distribute it for another location ******************************"

/u01/wins/ma/OracleHome1221/oracle_common/common/bin/pack.sh -template /u01/wins/Domain1221.jar -domain /u01/wins/ma/Domain1221 -template_name="Domain1221" -managed=true

echo "************************************** UnPacking the Domain Domain1221 on Node 2 *************************"
/u01/wins/m1/OracleHome1221/oracle_common/common/bin/unpack.sh -template /u01/wins/Domain1221.jar -domain /u01/wins/m1/Domain1221

echo "******************* UnPacking the Domain Domain1221 on Node 3 **************************************"
/u01/wins/m2/OracleHome1221/oracle_common/common/bin/unpack.sh -template /u01/wins/Domain1221.jar -domain /u01/wins/m2/Domain1221

echo "******************************* Modifying the Listen port for Nodemanager in Node 2 *****************************"
sed -i '/ListenPort/s/5559/5558/' /u01/wins/m1/Domain1221/nodemanager/nodemanager.properties

echo "*************************** Creating Modified patch for OracleHome Rollout ***********************************"
./create_patchP2.sh
 
