INSTANCE_ID="`wget -qO- http://instance-data/latest/meta-data/instance-id`"
REGION="`wget -qO- http://instance-data/latest/meta-data/placement/availability-zone | sed -e 's:\([0-9][0-9]*\)[a-z]*\$:\\1:'`"
ENVIRONMENT="`aws ec2 describe-tags --filters "Name=resource-id,Values=$INSTANCE_ID" "Name=key,Values=Name" --region $REGION --output=text | cut -d"-" -f3`"
DATASOURCE_USER_NAME=boxuser
DATASOURCE_PASSWORD=`aws secretsmanager get-secret-value --secret-id ${ENVIRONMENT}_boxuser --query SecretString --output text | jq -r '.password'`
DB_ENDPOINT=`aws rds describe-db-clusters --db-cluster-identifier box-${ENVIRONMENT} | jq -r '.DBClusters[].Endpoint'`
DATASOURCE_URL="jdbc:mysql://$DB_ENDPOINT:3306/boxdb01?zeroDateTimeBehavior=convertToNull&enabledTLSProtocols=TLSv1.2"
BOXAPI_LOG_DIR=/var/log/box
BOX_HOME=/box
PRIVATE_IP=`ec2-metadata -o| cut -d" " -f2`
export INSTANCE_ID REGION ENVIRONMENT DATASOURCE_USER_NAME DATASOURCE_PASSWORD DB_ENDPOINT DATASOURCE_URL PRIVATE_IP BOXAPI_LOG_DIR BOXAPI_HOME
