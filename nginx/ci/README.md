# CI

This directory contains the continuous integration pipeline code. Github pull requests call make with the make file in this directory. The makefile builds a package for each config/dir that has changed. This can be hard-coded as dev-app01 for the moment as it is the only server we have!
