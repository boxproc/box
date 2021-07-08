#!/bin/sh
BOX_HOME=/box-dev/scheduler/
cd $BOX_HOME
echo $BOX_HOME
SERVICE_NAME=boxscheduler
PATH_TO_SCHEDULER_JAR=$BOX_HOME/scheduler/bin/scheduler.jar
echo $PATH_TO_SCHEDULER_JAR
PID_PATH_NAME=/tmp/scheduler-pid
echo $PID_PATH_NAME
PATH_TO_TEST_SH="$BOX_HOME/scheduler/bin/test.sh"
echo $PATH_TO_TEST_SH
PATH_TO_SCHEDULER_PROPERTIES="$BOX_HOME/scheduler/bin/scheduler.properties"
echo $PATH_TO_SCHEDULER_PROPERTIES
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
            sudo nohup /box-dev/jdk-12.0.1/bin/java -Dtest.sh="/box-dev/scheduler/bin/test.sh" -Dscheduler.properties="/box-dev/scheduler/bin/scheduler.properties" -Dlog4j.configuration="file:/box-dev/scheduler/bin/log4j.properties" -Denv.properties="/box-dev/scheduler/bin/env.properties"  -jar /box-dev/scheduler/bin/scheduler.jar /tmp 2>> /dev/null >> /dev/null &
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