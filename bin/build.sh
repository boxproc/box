#!/bin/bash -xe

# Creates a branch called vx.y.z
# Asks for type of build eg bug fix
# makes directory
# copis in Tmcat and others from gzips
# prompts for te release notes
# pushes to origin

#exec > >(tee /var/log/build.log)
exec > >(tee ./build.log)

# Simple die function, every command should be followed by this!
die() { >&2 echo `basename $0`: $* ; exit 1 ; }

# Simple function to print a dot, to show that we are still alive and to aid debugging
dot() { echo -n \. ; }

TOMCAT_VERSION=9.0.2

cd `git rev-parse --show-toplevel 2>/dev/null` || die "Not in box repo"

# Check PATH
# hash npm  2>/dev/null || die "npm not found in PATH"
# hash service 2>/dev/null || die "service not found in PATH"
hash git 2>/dev/null || die "git not found in PATH"

echo Last version found is

git tag | more

echo -n "What do you want to tag this release with\? e.g. v1.2.3  "
read TAG

# git checkout -b $TAG || die "Cannot checkout branch called $TAG"

cd build

# SHould we rm -rf * here first?

mkdir $TAG
cd $TAG

# gzcat ../../zips/tomcat-9.0.21.tar.gz | tar xf -

# gzcat ../../zips/jre8.tar.gz | tar xf -
# 
# gzcat ../../zips/nginx.tar.gz | tar xf -

# gzcat ../../zips/scheduler.tar.gz | tar xf -
# 
# gzcat ../../zips/boxui.tar.gz | tar xf -

echo "# Evironment variables \nBOX_HOME=$TAG \nBOX_VERSION=$TAG \nTOMCAT_VERSION=9.0.2">env.properties

mkdir -p apache-tomcat-9.0.21/webapps 
scp ec2-user@3.8.160.93://box-dev/apache-tomcat-9.0.21/webapps/boxproc.war apache-tomcat-9.0.21/webapps/boxproc.war || die "Cannot copy boxproc.war from dev"

k
