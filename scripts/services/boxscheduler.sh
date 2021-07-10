#!/bin/sh
BOX_HOME=/box
cd $BOX_HOME
JAVA_EXEC=/bin/java
SERVICE_NAME=boxscheduler
PATH_TO_SCHEDULER_JAR=$BOX_HOME/scheduler/bin/scheduler.jar
echo $PATH_TO_SCHEDULER_JAR
PID_PATH_NAME=/tmp/$SERVICE_NAME-pid
echo $PID_PATH_NAME
PATH_TO_SCHEDULER_PROPERTIES="$BOX_HOME/scheduler/bin/scheduler.properties"
echo $PATH_TO_SCHEDULER_PROPERTIES
source /usr/local/bin/env.sh .


IS_PROCESS_EXISTS=`ps aux | grep -v grep | grep scheduler| wc -l`
red="`tput setaf 1`"
green="`tput setaf 2`"
white="`tput setaf 7`"


status() {
 if [ $IS_PROCESS_EXISTS -eq 0 ]; then
   echo "SCHEDULER ${red}[DOWN]${white}"
 else
   echo "SCHEDULER ${green}[UP]${white}"
 fi
}

stop() {
        echo -n "Shutting down  "
        pid=`ps -aefw | grep "scheduler.jar" | grep -v " grep " | awk '{print $2}'`
        kill -9 $pid > /dev/null 2>&1 && echo_success || echo_failure
        RETVAL=$?
        echo
        [ $RETVAL = 0 ] && rm -f ${LOCKFILE}
}

case $1 in
    start)
        echo "Starting $SERVICE_NAME ..."
        if [ ! -f $PID_PATH_NAME ]; then
            sudo nohup $JAVA_EXEC -Ddb.conn.url=$DATASOURCE_URL -Ddb.username=$DATASOURCE_USER_NAME -Ddb.password=$DATASOURCE_PASSWORD -Dbox.home=$BOX -Dlog4j.configuration="file:/box/scheduler/bin/log4j.properties"  -jar $PATH_TO_SCHEDULER_JAR /tmp 2>> /dev/null >> /dev/null &
             echo $! > $PID_PATH_NAME
        echo "$SERVICE_NAME started ..."
        else
            echo "$SERVICE_NAME is already running ..."
        fi
    ;;

    status)
    status
    ;;
    stop)
        if [ -f $PID_PATH_NAME ]; then
            PID=$(cat $PID_PATH_NAME);
            echo "$SERVICE_NAME stoping ..."
            kill $PID;
            echo "$SERVICE_NAME stopped ..."
            sudo rm -f $PID_PATH_NAME
        else
            echo "$SERVICE_NAME is not running ..."
        fi
    ;;
esac
