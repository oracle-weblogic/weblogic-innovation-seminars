#!/bin/bash
#
# Copyright (c) 2012,2013, Oracle and/or its affiliates. All rights reserved. 
#
# This script will run the DRCP application Client
#

#Parameters
#1.	The number of client (thread)
#2.	The number of call per client.
#3.	The delay between calls in sec.
#4.	The delay in the call in sec. (Holding time of the database connection).
#5.	Servlet URL 1.
#6.	Servlet URL 2. (if exists)
#.	More Servlet URL

/usr/java/latest/bin/java -Dfile.encoding=UTF-8 -classpath ./wins.drcp.client.jar:./javax.json-1.0.jar com.oracle.wins.drcp.DRCPLoaderClient 100 2 1 2 http://wins-vbox:7101/drcpdemo/DRCPDemo http://wins-vbox:7102/drcpdemo/DRCPDemo

