## Here is the sequence of events for a pull request and push against the BOX API repository:

 * Git pull/push request is made
 * A Linux runner is created
 * Copies the new code branch to the runner
 * Set up jdk 11
 * Clean buit clasess using 'Maven'
 * Build the executable war using 'Maven'
 * Delete existing `/box-dev/apache-tomcat-9.0.21/webapps/boxproc.war`
 * Copy `/target/boxproc.war` to a remote server `/box-dev/apache-tomcat-9.0.21/webapps/`
 * Restart tomcat server using command: `sudo service boxapi-dev restart`
 
 ## Full description you can see by link:
https://www.boxprocessing.com/confluence/display/KB/Build+Process
