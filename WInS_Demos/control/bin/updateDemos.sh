#!/bin/bash

export CONTENT_DIR="/u01/content/weblogic-innovation-seminars"
export GIT_URL="https://github.com/oracle-weblogic/weblogic-innovation-seminars.git"
export GIT_BRANCH="caf-12.2.1"

echo "Using GIT_URL=[${GIT_URL}]"
echo "Getting BRANCH=[${GIT_BRANCH}]"
echo "Cloning remote repository to ${CONTENT_DIR}..."

GIT_SYSTEM_PROXY=`git config --get --system http.proxy`
GIT_GLOBAL_PROXY=`git config --get --global http.proxy`
GIT_PROJECT_PROXY=`git config --get -f $DEMOS_HOME/../.git/config http.proxy`

echo "GIT _system_ Proxy set to: [${GIT_SYSTEM_PROXY}] (OK to be empty)"
echo "GIT _global_ Proxy set to: [${GIT_GLOBAL_PROXY}] (OK to be empty)"
echo "GIT _project_ Proxy set to: [${GIT_PROJECT_PROXY}] (OK to be empty)"

if [ ! -e ${CONTENT_DIR} ]; then
  cd /u01/content
  git clone ${GIT_URL}
  cd ${CONTENT_DIR}
  git init
  git checkout ${GIT_BRANCH}
fi

cd ${CONTENT_DIR}

git fetch

git reset --hard origin/${GIT_BRANCH}

echo "========================================"
echo "The file(s) below is not tracked by git:"
git clean -n
echo "========================================"

cp ${CONTENT_DIR}/WInS_Demos/control/bin/updateDemos.sh /home/oracle/

echo "Updating virtualbox environment..."

${CONTENT_DIR}/WInS_Demos/control/bin/updateVM.sh

if [ "$1" == "wait" ]; then
  read -p "Checkout complete. Press [Enter] to close the window"
 fi
