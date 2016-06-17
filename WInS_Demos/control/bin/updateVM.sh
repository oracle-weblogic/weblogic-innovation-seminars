#!/bin/bash

JAVA_VERSION=`java -version 2>&1 |awk 'NR==1{ gsub(/"/,""); print $3 }'`

if [ $JAVA_VERSION == "1.8.0_60" ]
then
    echo "Default Java version: $JAVA_VERSION"
else
    sudo update-alternatives --set java /usr/java/jdk1.8.0_60/jre/bin/java
    JAVA_VERSION=`java -version 2>&1 |awk 'NR==1{ gsub(/"/,""); print $3 }'`
    echo "Default Java version fixed to: $JAVA_VERSION"
fi

echo "========================================"
echo "Update Firefox TLS setting"
FFPROFILE_FOLDER=$(cat ~/.mozilla/firefox/profiles.ini | grep Path | sed s/^Path=//)

USERJS_FILE=~/.mozilla/firefox/$FFPROFILE_FOLDER/user.js
USERJS_CONTENT="user_pref(\"security.tls.version.max\", 3);"

grepresult=$(grep -c "$USERJS_CONTENT" $USERJS_FILE -s)

if [ -f $USERJS_FILE ] && [ $grepresult == 1 ]
then
    # property already overrided
    echo "Firefox TLS setting is correct."
else
    # property not yet overrided
    echo $USERJS_CONTENT >> $USERJS_FILE
    echo "Firefox TLS setting has been updated."
fi
echo "========================================"

echo "Everything is up to date!"
