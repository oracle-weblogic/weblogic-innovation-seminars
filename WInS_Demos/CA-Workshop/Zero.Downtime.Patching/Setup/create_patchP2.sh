#!/bin/sh
/u01/wins/tmp/pasteBinary.sh -javaHome $JAVA_HOME -archiveLoc /u01/wins/OracleHome1221p1.jar -invPtrLoc /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/oraInst_p2.loc -targetOracleHomeLoc /u01/wins/patchVerification1221

cd /u01/wins/patchVerification1221/wlserver/server/lib
mkdir tmp
cd tmp
jar -xf ../weblogic.jar META-INF/MANIFEST.MF
cp /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/MANIFEST.MF META-INF/MANIFEST.MF
jar cmf META-INF/MANIFEST.MF ../weblogic.jar
/u01/wins/patchVerification1221/oracle_common/bin/copyBinary.sh -javaHome $JAVA_HOME -archiveLoc /u01/wins/OracleHome1221p2.jar -sourceOracleHomeLoc /u01/wins/patchVerification1221
