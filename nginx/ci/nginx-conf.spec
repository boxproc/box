###############################################################################
# Spec file for Utils
################################################################################
#
Summary: Utility scripts for testing RPM creation
Name: nginx-conf
Version: 1.0.0
Release: 1
License: license.txt
URL: http://www.boxproc.com/
Group: System
Packager: Mike Charles
Requires: bash
Requires: screen
BuildRoot: ~/rpmbuild/

# Build with the following syntax:
# rpmbuild --target noarch -bb nginx-conf.spec

%description
Config files for nginx use with BOX

%prep
################################################################################
# The %prep section is the first script that is executed during the build process. 
# This script is not executed during the installation of the package.
# Create the build tree and copy the files from the development directories    
# into the build tree.                                                        
################################################################################
echo "BUILDROOT = $RPM_BUILD_ROOT"
mkdir -p $RPM_BUILD_ROOT/etc/nginx/conf.d

pwd
ls

exit

%files
%attr(0744, root, root) /usr/local/bin/*

%pre
#
# This would be the place to put any scripts that are required to run 
# during installation of the rpm but prior to the installation of the files
#

%post
#
# This runs after the installation of files. 
# This section can include creating files, running system commands, 
# and restarting services to reinitialize them after making configuration changes.
#
cd /etc
ls nginx

%postun
#
# This section contains a script that would be run after the rpm package is uninstalled. 
# Using rpm or DNF to remove a package removes all of the files listed in the %files section, 
# but it does not remove files or links created by the %post section
# 
ls /etc/nginx

%clean
#
# performs cleanup after the rpm build process
#
echo rm -rf $RPM_BUILD_ROOT/etc/nginx

%changelog
#
# This optional text section contains a list of changes to the rpm and files it contains. 
# The newest changes are recorded at the top of this section.
#
* Nov 2020 mike <mike@boxproc.com>
  - This add configuration to an nginx installation
