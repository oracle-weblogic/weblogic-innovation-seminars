#!/bin/sh

$CGGA_DEMO_HOME/CacheStoreDemo/scripts/init.sh

$CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-createdatabase.sh
gnome-terminal -e $CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-cacheserver.sh -t "CacheStore Demo-Cache Server Console"
$CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-cap-create.sh
$CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-cgga-create.sh
gnome-terminal -e $CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-cap-start.sh -t "CacheStore Demo-Extract Console"
gnome-terminal -e $CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-cgga-start.sh -t "CacheStore Demo-CGGA Console"
gnome-terminal -e $CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-monitor.sh -t "CacheStore Demo-Cache Monitor"
gnome-terminal -e $CGGA_DEMO_HOME/CacheStoreDemo/scripts/cs-sqlplus-notcsdemo.sh -t "CacheStore Demo-Third Party SQLplus"


