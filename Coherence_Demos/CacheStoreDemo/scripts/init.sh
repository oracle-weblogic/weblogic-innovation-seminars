#!/bin/sh

dirprm=$GG_HOME/dirprm

if [ ! -h $dirprm ]; then
  echo "create symlink to param file directory..."
  rm -rf $dirprm
  ln -s $CGGA_DEMO_HOME/CacheStoreDemo/scripts/dirprm $GG_HOME/
fi

dirsql=$GG_HOME/dirsql

if [ ! -h $dirsql ]; then
  echo "create symlink to def file directory..."
  rm -rf $dirsql
  ln -s $CGGA_DEMO_HOME/CacheStoreDemo/scripts/dirsql $GG_HOME/
fi