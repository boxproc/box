#!/bin/bash

BOX_HOME="/box"
NAME="boxui"
SERVICENAME="boxui"
LOCKFILE=/var/lock/subsys/box
LOGFILE=${BOX_HOME}/logs/node/node.log
DAEMON_OPTS="--check $NAME"
IS_PROCESS_EXISTS=`ps aux | grep -v grep | grep  node| wc -l`
RETVAL=0
red="`tput setaf 1`"
green="`tput setaf 2`"
white="`tput setaf 7`"
source /usr/local/bin/env.sh .

start() {
  echo -n "Starting ${SERVICENAME}: "
  node ${BOX_HOME}/boxui > ${LOGFILE} 2>&1 &
  RETVAL=$?
  echo
  [ $RETVAL = 0 ] && touch ${LOCKFILE}

  return $RETVAL
}

status() {
 if [ $IS_PROCESS_EXISTS -eq 0 ]; then
   echo "UI ${red}[DOWN]${white}"
 else
   echo "UI ${green}[UP]${white}"
 fi
}

stop() {
        echo -n "Shutting down ${SERVICENAME}: "
        pid=`ps -aefw | grep "node ${BOX_HOME}" | grep -v " grep " | awk '{print $2}'`
        kill -9 $pid > /dev/null 2>&1 && echo_success || echo_failure
        RETVAL=$?
        echo
        [ $RETVAL = 0 ] && rm -f ${LOCKFILE}
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    status)
        status
        ;;
    restart)
        stop
        start
        ;;
    *)
        echo "Usage: ${NAME} {start|stop|restart|status}"
        exit 1
        ;;
esac
exit $RETVAL
