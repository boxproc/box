#!/bin/sh
BOX_HOME=/box
cd $BOX_HOME
JAVA_EXEC=/box/jdk-12.0.1/bin/java
SERVICE_NAME=boxapi
BOXAPI_LOG_DIR=/var/log/box
BOXAPI_LOG_LEVEL=debug
PATH_TO_BOX_API_JAR=$BOX_HOME/boxapi/bin/boxapi.jar
PID_PATH_NAME=/tmp/boxapi-pid

IS_PROCESS_EXISTS=`ps aux | grep -v grep | grep boxapi | wc -l`
red="`tput setaf 1`"
green="`tput setaf 2`"
white="`tput setaf 7`"


status() {
 if [ $IS_PROCESS_EXISTS -eq 0 ]; then
   echo "BOXAPI ${red}[DOWN]${white}"
 else
   echo "BOXAPI ${green}[UP]${white}"
 fi
}

stop() {
        echo -n "Shutting down  "
        pid=`ps -aefw | grep "boxapi.jar" | grep -v " grep " | awk '{print $2}'`
        kill -9 $pid > /dev/null 2>&1 && echo_success || echo_failure
        RETVAL=$?
        echo
        [ $RETVAL = 0 ] && rm -f ${LOCKFILE}
}

case $1 in
    start)

        if [ ! -f $PID_PATH_NAME ]; then
            sudo nohup $JAVA_EXEC -Dspring.datasource.url=$DATASOURCE_URL -Dspring.datasource.username=$DATASOURCE_USER_NAME -Dspring.datasource.password=$DATASOURCE_PASSWORD -Dbox.logging.dir=/var/log/box2 -Dbox.logging.level=$BOXAPI_LOG_LEVEL -jar $PATH_TO_BOX_API_JAR &
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
