# Continuous Availability Workshop

# Introduction:

Oracle WebLogic Server Continuous Availability provides an integrated solution for building maximum availability architectures that span data centers across distributed geographical locations.

## Continuous Availability:

Continuous availability is the ability of a system to provide maximum availability by employing both high availability and disaster recovery solutions to ensure that applications are available when they are needed. Typically, high availability solutions provide redundancy in one data center. Disaster recovery solutions provide the ability to safeguard against natural or unplanned outages at a productions site by having a recovery strategy for applications and data to a geographically separate standby site. Oracle WebLogic Server Continuous Availability provides an integrated solution for building maximum availability architectures (MAA) that span data centers across distributed geographical locations. Integrated components include Oracle Weblogic Server, Oracle Coherence, Oracle Traffic Director, and Oracle Site Guard. The major benefits of this integrated solution are faster failover or switchover, increased overall application availability, data integrity, reduced human error and risk, recovery of work, and local access of real time data.

## Continuous Availability Key Features:

Continuous Availability provides maximum availability, reliability and application stability during planned upgrades or unexpected failures. It builds on the existing high availability features on Oracle WebLogic Server, Oracle Coherence, and Oracle Fusion and supports the key features described in the following sections.

## Automated Cross-Domain transaction Recovery:

Automated cross domain transaction recovery provides automatic recovery of XA transactions across an entire domain, or across and entire site with servers running in a different domain or at a different site. In active/active architecture, transactions can be recovered when an entire domain or site fails by having an active server running in a different domain either collocated at the same site or at a different site. In active/passive architecture, the server at the passive (standby) site at a different location can be started when the production site is no longer available.

## WebLogic Server Zero Downtime Patching:

WebLogic Server Zero Downtime Patching provides an automated mechanism to orchestrate the rollout of patches while avoiding downtime or loss of sessions. It reduces risks and downtime of mission critical applications that require availability and predictability while applying patches. Using Workflow that you define; you can patch or update any number of nodes in a domain with little or no manual intervention. Changes are rolled out to one node at a time, allowing a load balancer such as Oracle Traffic Director to redirecting incoming traffic to the remaining nodes until the node has been updated.

## Coherence Federated Caching:

The federated caching feature replicates cache data asynchronously across multiple geographically dispersed clusters. Cached data is replicated across clusters to provide redundancy, off-site backup, and multiple points of access for application users in different geographical locations. 

**Multiple Replication Topologies** 

Federated caching supports multiple replication topologies. These include: active-active, active-passive, hub-spoke, and central-replication. The topologies define common replication strategies between clusters and support a wide variety of use cases. Custom replication topologies can also be created as required. 

**Conflict Resolution**
 
Federated caching provides applications with the ability to accept, reject, or modify cache entries being stored locally or remotely. Conflict resolution is application specific to allow the greatest amount of flexibility when defining replication rules. 

**Replication Configuration**
 
Federated caching is configured using Coherence configuration files and requires no changes to application code. An operational override file is used to configure federation participants and the federation topology. A cache configuration file is used to create federated caches schemes. A federated cache is a type of partitioned cache service and is managed by a federated cache service instance. 

**Management and Monitoring**
 
Federated caching is managed using attributes and operations from the FederationManagerMBean, DestinationMBean, OriginMBean and TopologyMBean MBeans. These MBeans make it easy to perform administrative operations, such as starting and stopping replication and to monitor replication configuration and performance statistics. Many of these statistics and operations are also available from the Coherence Java VisualVM plugin.
 
Replication attributes and statistics are aggregated in the federation-status, federation-origin, and federation-destination reports. Replication statistics are also aggregated in the Coherence Java VisualVM plugin. Both tools can help troubleshoot possible resource and performance issues. In addition, as with any distributed cache, federated services and caches can be managed and monitored using the attributes operations of the ServiceMBean MBean and CacheMBean MBean and related reports and Java VisualVM plugin tabs.

## Oracle Traffic Director:

Oracle Traffic Director is a fast, reliable and scalable software load balancer that routes HTTP, HTTPS, and TCP traffic to applications servers and web servers on the network. It distributes the requests that it receives from clients to available servers based on the specified load-balancing method, routes the requests based on specified rules, caches frequently accessed data, prioritizes traffic and controls the quality of service. The architecture of Oracle Traffic Director enables it to handle large volumes of application traffic with low latency. For high availability, you can set up pairs of Oracle Traffic Director Instances for either active-passive or active-active failover. As the volume of traffic to your network grows, you can easily scale the environment by reconfiguring Oracle Traffic Director with additional back-end servers to which it can route requests. 

## Oracle Site Guard:

Oracle Site Guard, a component of Oracle Enterprise Manager Cloud Control, is a disaster-recovery solution that enables administrators to automate complete site switchover or failover, thereby minimizing downtime for enterprise deployments. Because Oracle Site Guard operates at the site level, it eliminates the need to tediously perform manual disaster recovery for individual site components like applications, middleware, databases, and so on. The traffic of an entire production site can be redirected to a standby site in a single operation.

Administrator do not requires any special skills or domain expertise in areas like databases, applications, and storage replication. Oracle Site Guard can continuously monitor disaster-recovery readiness and it can do this without disrupting the production site. You can manage an Oracle Site Guard configuration by using either the Enterprise Manager Command Line Interface (EMCLI), or a compatible version of Oracle Enterprise Manager Cloud Control (Cloud Control).

# Virtual Box Environment

## The Hands on Lab Environment

**Operating System Details**

Variable | Value
---------- | ----------
Operating  | Oracle Linux 6.4 x86_64
Hostname |  localhost, wins-vbox
Root User  |  root/oracle
Oracle User  | oracle/welcome1
Note:  For this hand on lab you should only need to use **oracle** user account.

**Installation Directories**	

Variable | Value
----------- | ---------------- 
JDK 1.8.0_60 | /usr/java/jdk1.8.0_60/	   
JDK 1.8.0_25 | /usr/java/jdk1.8.0_25/	   
Fusion Middleware WebLogic Server 12.2.1 | /u01/wins/wls1221/   
Oracle Traffic Director 12.2.1 | /u01/wins/wls1221/	   
Oracle Database 12c | /u01/app/oracle/product/12.1.0/dbhome_1/	 

**Workshop Content:**
 
Variable | Value
----------- | ----------------
Labs Directory | /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/	 

## Pre-requisite:

1. You must have connected to internet via browser and terminal as well.
2. The exercises in this lab require a machine capable of running the VirtualBox VM supplied. Supported operating systems configurations are below.

**Operating System:** Mac OS X, Windows, Linux or Solaris. 

For the supplied VM, the following minimums are required. 

**Disk Space:**  40 GB available 

**Memory:** 8 GB absolute minimum, 12 GB recommended for good performance. 
 
## Lab Overview 

This lab guide has an associated VirtualBox VM in which to carry out the exercises. While it is possible to run these labs in your own environment is not outlined in this document. 
The following components installed for this workshop: 
* Oracle WebLogic Server 12.2.1 
* Oracle Coherence 12.2.1 

# Lab1: Zero Downtime Patching

## Overview:

The Zero Downtime Patching feature may be better thought of as the Zero Downtime Rollout feature. The feature does not actually apply any patches to an OracleHome, but provides a process and mechanism for automating out-of-place patching rollout across a domain while allowing applications to continue to service requests.  This is achieved through a combination of configuration requirements, patching strategy, and a new WLST command to orchestrate the rollout of updates across servers.  The process is built on top of the Orchestration framework which provides fault tolerance and error handling. The zero downtime effect is achieved by rolling out the change to one node at a time, and allowing a load balancer (typically OTD) to redirect incoming traffic to the remaining nodes until the change is complete. For Zero Downtime Patching, your domain directory must be outside the Oracle Home. In our demo, we will perform four type of Rollout.

**Rolling Restart:** We will have two Managed servers inside the Cluster, and our application will be deployed to Cluster. We will use Oracle Traffic Director to redirect the request to Managed Servers.

In this Case, suppose your request is served by Managed Server2 (at Node 3), before restarting the Managed Server 2, your session data will be copied to Managed Server 1(at Node 2), and you will access the application through Managed Server 1 and your session data will be preserved. Once Managed Server 2 will be up and running, your session data will be copied to Managed Server 2, and you will access the application through Managed Server 2 now. And Managed Server 1 will restart now. During Servers restart your access to application will be transparent as you are access the application through OTD, which redirect the request to server up and running.

**Java Home Rollout:** In this case, we update the JDK version of Managed Server Node by Node, and your session data preserved during the rollout.

**Oracle Home Rollout:** We create a patched jar through our demo, in which we modified the weblogic.jar's MANIFEST.MF to change the WebLogic Version and implementation time. To show you the difference while updating the Oracle Home Node by Node.

**Application Rollout:** In this Case we have version 2 of the same application, we specify the location of a json file, which contains the location of version 2 of the application, and also you need to specify the location, so that you can take back up of current application version.

## Description of the Environment:

In our domain, we have a cluster with two managed servers, each managed server and admin server will be part of different Oracle Home. 

To show this Zero Downtime Patching features in single Machine (Virtual Box). Instead of using different machine for Admin Server, Managed Server 1 and Managed Server 2, we are using different folder to represent the Machines.  It means these folders will be on the same machine instead of different machines.
 
Server Name | Folder location | Oracle Home	 | Domain Directory
----------- | --------------- | ----------- | -------------	   
Admin Server | /u01/wins/ma | /u01/wins/ma/OracleHome1221 | /u01/wins/ma/Domain1221  
ms1 | /u01/wins/m1 | /u01/wins/m1/OracleHome1221 | /u01/wins/m1/Domain1221	   
ms2 | /u01/wins/m2 | /u01/wins/m2/OracleHome1221 | /u01/wins/m2/Domain1221	 

We have put WebLogic Generic jar in /u01/wins/install folder.

## Creation of the Environment:
1. Open a new terminal.
2. cd  /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup
3. ./create_env.sh                                             
  ![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/1.PNG)

Note: This Script takes 12-15 minutes. It perform the below operations.

It creates the required directories for this Lab. The individual directories significant will be clear from next upcoming steps. Below is the description of commands which create_env.sh script executes.

**cd /u01/wins/install**

**java -jar fmw_12.2.1.0.0_wls.jar -silent -invPtrLoc /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/oraInst_ma.loc ORACLE_HOME=/u01/wins/ma/OracleHome1221 INSTALL_TYPE="WebLogic Server" SECURITY_UPDATES_VIA_MYORACLESUPPORT=false DECLINE_AUTO_UPDATES=true DECLINE_SECURITY_UPDATES=true**

Here we are installing the WebLogic Server in silent mode using the Generic jar in /u01/wins/ma/OracleHome1221 as ORACLE_HOME and the inventory location is /u01/wins/ma/.

**/u01/wins/ma/OracleHome1221/wlserver/server/bin/setWLSEnv.sh**

In WebLogic Generic jar, we have two scripts copyBinary.sh and pasteBinary.sh.

**copyBinary.sh-** We use this script to create WebLogic archive from Oracle Home. Later we can use this archive to install WebLogic Server at different places.

**pasteBinary.sh-** We use this script to install WebLogic Server from the archive created by copBinary.sh script. 	
So we execute the setWLSEnv.sh to set WebLogic Server environment.

**/u01/wins/ma/OracleHome1221/oracle_common/bin/copyBinary.sh -javaHome $JAVA_HOME -archiveLoc /u01/wins/OracleHome1221p1.jar -sourceOracleHomeLoc /u01/wins/ma/OracleHome1221**

We are creating the archive OracleHome1221p1.jar using copyBinary.sh script, where the Oracle Home is /u01/wins/ma/OracleHome1221.

**cp /u01/wins/ma/OracleHome1221/oracle_common/bin/pasteBinary.sh /u01/wins/tmp/pasteBinary.sh**

**cp /u01/wins/ma/OracleHome1221/oracle_common/jlib/cloningclient.jar /u01/wins/tmp/cloningclient.jar**

On each machine where you are going to install WebLogic Server from the archive created using the copyBinary.sh script, you must have these two files on that machine. In our case, we are putting it inside /u01/wins/tmp folder.

**/u01/wins/tmp/pasteBinary.sh -javaHome $JAVA_HOME -invPtrLoc /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/oraInst_m1.loc -archiveLoc /u01/wins/OracleHome1221p1.jar -targetOracleHomeLoc /u01/wins/m1/OracleHome1221**

We are installing the WebLogic server in /u01/wins/m1/OracleHome1221 as OracleHome, as we are having all the installation on same machine, we are having different inventory location for each installation. Remember we are using the archive which we created by copyBinary.sh script for the installation. 

 
Server Name | Oracle Home | Inventory Location	   
----------- | ----------- | ------------------
Admin Server | /u01/wins/ma/OracleHome1221 | /u01/wins/ma	   
m1 | /u01/wins/m1/OracleHome1221 | /u01/wins/m1	   
m2 | /u01/wins/m2/OracleHome1221 | /u01/wins/m2	 

**/u01/wins/tmp/pasteBinary.sh -javaHome $JAVA_HOME -invPtrLoc /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/oraInst_m2.loc -archiveLoc /u01/wins/OracleHome1221p1.jar -targetOracleHomeLoc /u01/wins/m2/OracleHome1221**

In similar way, we are installing WebLogic Server in /u01/wins/m2/OracleHome1221 as Oracle Home. 

**cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/**

**./create_otd_domain.sh**

We need a load balancer, which can redirect the incoming request to managed servers. For that we are using Oracle Traffic Director here. We created a template otd-domain.jar, which we use to create otd_domain. 

**./createDomain1221.sh**

It creates a domain Domain1221 in /u01/wins/ma/Domain1221. This domain consist the following.

A cluster with two managed server, three machines Machine_ma, Machine_m1 and Machine_m2, We will start the admin server using Machine_ma, ms1 using Machine_m1 and ms2 by Machine_m2.It also consist an application ScrabbleStage.war, which we will use for the lab.

**/u01/wins/ma/OracleHome1221/oracle_common/common/bin/pack.sh -template /u01/wins/Domain1221.jar -domain /u01/wins/ma/Domain1221 -template_name="Domain1221" -managed=true**

Using the pack utility we are packaging the domain and making a template jar out of it. When you have all the WebLogic Server installation on different machine, you can use this utility to pack your domain and distribute it, where you have other WebLogic Server installations. In our case, we installed WebLogic Server in different folders instead of different machines. 

**/u01/wins/m1/OracleHome1221/oracle_common/common/bin/unpack.sh -template /u01/wins/Domain1221.jar -domain /u01/wins/m1/Domain1221**

We are unpacking the domain Domain1221 as /u01/wins/m1/Domain1221 as domain Directory.

**/u01/wins/m2/OracleHome1221/oracle_common/common/bin/unpack.sh -template /u01/wins/Domain1221.jar -domain /u01/wins/m2/Domain1221**

We are unpacking the domain Domain1221 as /u01/wins/m2/Domain1221 as domain directory.

**sed -i '/ListenPort/s/5559/5558/' /u01/wins/m1/Domain1221/nodemanager/nodemanager.properties**

To make the configuration like below, we are modifying the files. In each node manager properties file, you must have CrashRecoveryEnabled parameter value to true.  You should also start the server using the nodemanager. 

 
Server Name | Server Port | Machine Name | NodeManager Port | Domain Directory
-------- | --------- | -------- | ------- | --------------	   
Admin Server | 7001 | Machine_ma | 5557 | /u01/wins/ma/Domain1221	   
ms1 | 7101 | Machine_m1 | 5558 | /u01/wins/m1/Domain1221	   
ms2 | 7102 | Machine_m2 | 5559 | /u01/wins/m2/Domain1221	 

**./create_patchP2.sh**

For Oracle Home rollout we need a patched WebLogic Oracle Home, we modify the WebLogic version and it implementation time by editing the MANIFEST.MF file of weblogic.jar file. You can refer the create_patchP2.sh script for the creation of this OracleHome.

## Configuring OTD Domain and Starting Load balancer:

1. /u01/wins/wls1221/user_projects/domains/otd_domain/bin/startNodeManager.sh (It starts the Nodemanager in otd_domain.)
2. In terminal, Click on **Terminal -> Set Title**. Enter **otd_nm** as Title then click on **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/2.PNG)
3. Open a new tab.
4. /u01/wins/wls1221/user_projects/domains/otd_domain/bin/startWebLogic.sh (It starts the Admin Server in otd_domain.)
5. In terminal, Click on **Terminal -> Set Title**. Enter **otd_Admin** as Title then click on **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/3.PNG)
6. Go to Firefox, and type the URL for Fusion Middleware Control Console for otd_domain http://localhost:9001/em .
7. Enter **weblogic/welcome1** as **Username/Password** then Click on **Login**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/4.PNG)
8. Click on **WebLogic Domain -> Administration -> OTD Configurations**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/5.PNG)
9. Click on **Create**.
10. Enter **zdp** as Name then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/6.PNG)
11. Leave Default then click on **Next**.
12. Click on **Add Server** to Add the following Server as shown in the below Screen.

			localhost	7101
			localhost	7102
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/7.PNG)
13. Select the box for **otd_machine** then click on **Next**. (This **otd_machine** machine has been configured with node manager running in port **5556**.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/8.PNG)
14. Click on **Create Configuration**.
15. Once **zdp** created, check the box near zdp to make it highlighted then click on Start Instances. Wait until you see the Message **Start Operation on target Domain_otd_domain/otd_domain/zdp Completed successfully**. Then click on **Close** on that 	window. Do not close this FMW Console later we will use it to stop this load balancer instance.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/9.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/10.PNG)
16. Go to Firefox and type the URL http://localhost:8080/ to verify that load balancer instance is running.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/11.PNG)

## Starting Node Managers and Servers:

1. Open a new tab.
2. **/u01/wins/ma/Domain1221/bin/startNodeManager.sh** (It starts the Node manager, which we will use to start the Admin Server.) 
3. In this tab, Click on **Terminal -> Set Title**.  Enter **Admin_nm** as Title then click on **OK**.
4. Open a new tab.
5. /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/Setup/startAdminServer.sh (This startAdminServer.sh script first connects to Nodemanager started in previous step, setting few parameters for Admin Server, then start the Admin Server for domain Domain1221.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/12.PNG)
6. /u01/wins/m1/Domain1221/bin/startNodeManager.sh
7. In this tab, Click on **Terminal -> Set Title**.  Enter **m1_nm** as Title then click on OK.
8. Open a new tab.
9. /u01/wins/m2/Domain1221/bin/startNodeManager.sh
10. In this tab, Click on Terminal -> Set Title.  Enter **m2_nm** as Title then click on OK.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/13.PNG)
11. Go to Firefox and type the URL for Admin Console http://localhost:7001/console .
12. Enter **weblogic/welcome1** as **Username/Password** then click on **Login**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/14.PNG)
13. Click on **Environment -> Servers**. Click on **Control** tab then click on **Customize this table**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/15.PNG)
14. Customize the table to include **Java Version** and **WebLogic Version** as shown below.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/16.PNG)
15. Check the box near **ms1** and **ms2** and click on **Start**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/17.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/18.PNG)

## Rolling Restart Rollout:

1. Now on each of these managed servers, we have application deployed, which we will be accessing during the rollout to show that even during the rollout user can access their applications and their session data. So for the end user the rollout will be transparent. 
2. Go to Firefox and type the URL http://localhost:8080/ScrabbleStage/Scrabble.jsp for application. We are accessing the application through OTD. This Application also includes the Name of the Server which is fulfilling the request. This application is a simple **Word score counter**, so whatever the word you add here, it gives you the score based on how many letters and the value of each letter in the word. So the Score for word **WebLogic** is 16. We are using this application to show that even after the rollout user session data is maintained.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/19.PNG)
3. What we will see during the Rolling Restart is that ms2 will get shutdown and brought up again and then the rollout will wait until all the application on that ms2 are ready and then it will shutdown ms1 and bring it up again and will see that throughout this process we can access this application with session information still preserved.
4. In **Domain Structure**, click on Domain name **Domain1221**.
5. Click on **ZDT Control** tab, where ZDT refers Zero Downtime Patching.
6. The first three tabs you use to select the target of the Rollout (Domain, Cluster and Servers). In this case we are going to rollout the Clusters.
7. Check the box near **Cluster** then Click on **Patch**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/20.PNG)
8. The kind of rollout which we are going to perform is **Rolling Restart**, so choose the box for **Rolling Restart** and click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/21.PNG)
9. On this page we have some options, Migration Properties allows you to handle singleton service migration during the rollout. **Shutdown Timeout** is a timeout if you have sessions that may persist for very longtime and you can set this timeout so that it can try graceful shutdown. **Delay between Nodes** is just a propagation time. It will pause for this amount of time after successfully doing the rollout on one node before starting on the Next node. 60 is the default value, but in order to speed up the Lab, we make it 6. **Dry run** is used when the user wants to check that all of the pre conditions for doing this particular roll out are met, without actually performing the rollout. So finally to make sure that I could connect to all of the Node Managers and this topology is valid. If you are going to do Java Home rollout, so it will identify that java Home path is correct and valid. So it is the way through which you can identify issue with the rollout before actually attempting the rollout. So you can do Dry Run for a rollout. Here we are not choosing this box. So click on **Finish**.                                       
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/22.PNG)
10. We can see that every rollout has a **Workflow Task Id, Rollout Type** and the **Status of Last Action**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/23.PNG)
11. You can also click on **Workflow Progress** tab, here you can see the table for workflow which are in running or paused and the bottom table is for workflow which is completed successfully or failed. You can get more detail about workflow by click on Workflow Id. So if something goes wrong or failed. Click on **Workflow Id** will give you more information on why it failed and possibly on how to resolve the issue.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/24.PNG)
11. Click on **Environment -> Servers** then click on **Control** Tab. Click on the Refresh icon, so that you can get the Server state information after each 10 seconds. We see ms2 goes to Shutdown state and if you access the application now, it will be served by ms1. Wait for the ms2 to up and running. Then Access the application again, now it will be served by ms2. Your access to application through the OTD is transparent and it preserved your session data throughout the rollout process.                 
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/25.PNG)
12. You can click on **Workflow Progress** tab to get the Final Status of Rollout.                                                       
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/26.PNG)

## Java Home Rollout:

1. In this Case we are going to show the **Java Home Rollout**. In **Servers** page, you can see that Admin Server, ms1 and ms2 has **1.8.0_60** as Java Version. As we are going to perform Java Home Rollout on cluster, so as the end result ms1 and ms2 will have **1.8.0_25** as Java Version.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/27.PNG)
2. In **Domain Structure**, click on Domain name **Domain1221**.
3. Click on **ZDT Control** tab. Then Click on **Clusters** tab.
4. Check the box near **Cluster** then Click on **Patch**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/28.PNG)
5. The kind of rollout which we are going to perform is **Java Home**, so choose the box for **Java Home** and click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/29.PNG)
6. We need to tell the location of new Java home, Enter **/usr/java/jdk1.8.0_25/** as Java Home. Edit the value for **Delay between Nodes** to 6 second then click on **Finish**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/30.PNG)
7. You can see the **Workflow Task id, Rollout Type** and **Status of Last Action**.
8. To get more information click on **Workflow Progress** tab. In Workflow in Progress table you can see the **No of Completed Commands, No of Total Commands**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/31.PNG)
9. If we go back to **Servers** page, we can see that ms2 is in shutdown state. So while its down, go back to Application page, click on refresh, and we see that WebLogic Session data is still available and now we connected to ms1. Because ms2 is down, so OTD redirected us to ms1.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/32.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/33.PNG)
10. On the Server page, click on the **Refresh** icon, to get the current state after each 10 seconds.
11. While ms2 is in Shutdown state, the rollout is going through and finding all the references to the Java Path include version 1.8.0_60 and updating it to the new path i.e.  /usr/java/jdk1.8.0_25 and this is doing for the managed server that is running on that node and also the nodemanager running on that node. So both of those will be restarted after they are updated and will be running on new version of java.
12. Now we see that ms2 is starting, when it comes to **Running** State, you can verify that it will be running on new Java version. Now ms1 will get in shutdown state and the update will happen on this node.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/34.PNG)
13. This complete process takes around 8-10 minutes as we are running so many servers and nodemanager on single virtual machine. In real scenario it will take less time. If you access the application now, it will be served by ms2.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/35.PNG)
14. Once both the Managed Server is in **Running** state, it shows the new Java Version for both the managed server part of cluster. It completes our java home rollout.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/36.PNG)

## Oracle Home Rollout:

1. In this case we are going to rolling out new Oracle Home with a new patched version. If you look in Servers page, Admin Server, ms1 and ms2 has **WebLogic Server 12.2.1.0.0 Tue Oct 6 10:05:47 PDT 2015 1721936** as WebLogic Version. We will show that during the process it shutdown the managed server and update the WebLogic Version. As we described in the Environment section that we create a new Oracle Home with modified WebLogic Server version and it implementation time. So you can verify the Oracle Home rollout by the WebLogic Version.
2. Click on Domain name **Domain1221**, and then click on **ZDT Control** tab.
3. Click on **Cluster** tab, Select the box near **Cluster** and then click on **Patch**.
4. The kind of rollout which we are going to perform is OracleHome, so choose the box for **Oracle Home** and click on **Next**.   ![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/37.PNG)
5. In **Rollout OracleHome**, We need to specify the location of patched Oracle Home, Enter **/u01/wins/OracleHome1221p2.jar** here. This is the archive file which we created in Environment Section. 
6. In the **Backup OracleHome** we are going to specify the location **/u01/wins/OracleHome1221p1-Backup** where to store the current OracleHome. So in the future if we want to rollback, then backup will be there for us.
7. Edit the value for **Delay between Nodes** to 6 second then click on **Finish**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/38.PNG)
8. You can see the **Workflow Task id**, **Rollout Type** and **Status of Last Action**.
9. Click on the **Environment -> Server**, and then Click on **Control** tab.
10. We can see that ms2 is in Shutdown state. So while its down, go back to Application page, click on refresh, and we see that WebLogic Session data is still available and now we connected to ms1. Because ms2 is down, so OTD redirected us to ms1.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/39.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/40.PNG)
11. On the Servers page, click on the **Refresh** icon, to get the current state after each 10 seconds.
12. What is happening now the original OracleHome on with ms2 was running is backed up on the location which we specified. And the patched Oracle Home archive that we provided is being expanded in its place. Once that is done, the Node manager and the managed server will be started again and will pick up the changes in new Patched Oracle Home and we can verify it by looking the WebLogic Version in the Server page, which will be **WebLogic Server 12.2.1.0.0 Mon Oct 23 12:22:22 PDT**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/41.PNG)
13. Now we see that ms2 is starting, when it comes to Running State, you can verify that it will be running on new WebLogic Version. Now ms1 will get in Shutdown state and the same process will happen on this node. So while its down, go back to Application page, click on refresh, and we see that WebLogic Session data is still available and now we connected to ms2. Because ms1 is down, so OTD redirected us to ms2.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/42.PNG)
14. This complete process takes around 8-10 minutes as we are running so many servers and nodemanager on single virtual machine. In real scenario it will take less time. If you access the application now, it will be served by ms2.
15. Once both the Managed Server is in **Running** state, it shows the new WebLogic Version for both the managed servers part of cluster. It completes our OracleHome rollout.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/43.PNG)

## Application Rollout:

1. In this case, we will be doing application rollout. If you go to the application page, currently it has application Version 1 is running. And it is serving by ms2.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/44.PNG)
2. Click on Domain name **Domain1221**, and then click on **ZDT Control** tab.
3. Click on **Clusters** tab, Select the box near **Cluster** and then click on **Patch**.
4. Check the box for **Application**, and then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/45.PNG)
5. In the **Application Properties**, we need to specify the location of a json file that contains the information about the name of the application that is going to be updated, location of the new application source, and the backup location for the current application source. Enter **/u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/applications/appUpgrade.json** as Application Properties.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/46.PNG)
6. Edit the value for **Delay between Nodes** to 6 second then click on **Finish**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/47.PNG)
7. You can see the **Workflow Task id**, **Rollout Type** and **Status of Last Action**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/48.PNG)
8. Click on the **Environment -> Server**, and then Click on **Control** tab.
9. We can see that ms2 is in Shutdown state. So while its down, go back to Application page, click on refresh, and we see that WebLogic Session data is still available and now we connected to ms1. Because ms2 is down, so OTD redirected us to ms1.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/49.PNG)
10. On the Server Page, Now the ms2 is running, so ms1 will shutdown now. Now reload the application page, we are connected to ms2, and we can see the Version 2 of the application. And session data is still preserved. When ms1 will be running, it will also update to run application version 2. So this is done without no application downtime and loss of session.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/50.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/51.PNG)
This completes our Lab 1. You must follow the **Clean Up** Section before proceeding to next Lab.

## Clean Up:

1. Click on **Environment -> Server**, and then click on **Control** tab.
2. Check the box near to **Admin Server, ms1 and ms2** then click on **Shutdown -> Force Shutdown Now**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/52.PNG)
3. Go back to Fusion Middleware Control Console of **otd_domain** http://localhost:9001/em . 
4. Check the box near **zdp** to make it highlighted and click on **Stop Instances**. In **Confirmation** Page, Click on **OK**. It will stop the load balancer. Click on **Close**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/53.PNG)
5. Press **Ctrl+ C** on all terminals with name **otd_nm, otd_Admin, Admin_nm, ms1_nm and ms2_nm**. Then close all the terminals.
6. Open a new terminal.
7. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Zero.Downtime.Patching/CleanUp/
8. **./delete_dir.sh** (It deletes all the folder and files which we created during the Lab 1.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/54.PNG)

# Lab 2: Cross Domain Transaction Recovery

## Overview:

Cross Domain Transaction Recovery allows for the recovery of the transaction in Active-Active Configuration. Where one domain fails or site 1 or entire site fails, the server running on WebLogic Server domain on site 2 can recover transaction for the failed site.
You can refer the following link for getting more information on Cross Domain Transaction Recovery: here .

## Description of the Environment:
* We are using the Docker 1.9 for this Lab. It is up and running. To verify the State of Docker, run the following command: **sudo /bin/systemctl status -l  docker.service** (It must be in **Running** State.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/55.PNG)
* We also created two docker images, using which we can create docker image for WebLogic Domain.
* To list the available Docker images: **sudo docker images**
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/56.PNG)

As Part of the Lab, We will create two domains, which you can say one domain will be **primary domain** and another one will be **standby domain**. Both domains will have **Admin Server only**, on which we will deploy the application. This is an **online shop application** where you can purchase or return clothes. Also you can see the inventory and the activity log for the Transactions.

* As the requirement for the Cross Domain Transaction Recovery, Both Domain must have **same domain name, hostname** and **port number** but **different IP address**. That is why we are using docker to do the same. 
* We will use **base_domain** as domain name, **aadrdemo** as hostname and **8001** as Admin Server port number for both the domain.
* We have two Oracle pluggable database **pdborcl** and **pdb2**. Both the databases will be in use while creating jdbc datasources for both the domains.

## Creation of the Environment:

1. Double click on the **Start Database** Icon on Desktop to start both the pluggable databases.
2. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/Setup
3. **./create_env.sh** (This script provides required permission to the files, and it also creates the user cdtr in both the 	pluggable database.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/57.PNG)

## Creation of Primary and Standby Domain:

1. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/primaryDomain/
2. **sudo docker build -t samplewls:12.2.1 .**
 * This creates docker image with repository tag **samplewls:12.2.1** by extending **oracle/weblogic** docker image.
 * Inside this docker image it creates a **base_domain** WebLogic Domain.
 * Open the file **Dockerfile** to get more information.
 * It executes **create-wls-domain.py** wlst script to create **base_domain**.
 * Open the file create-wls-domain.py file from the container-scripts folder.
Below is the summary of Resources, which we are creating and Configuration information:	
 
Site Name | DEMOPRI | Primary Site
--------- | ------- | ---------
Recovery Site Name | DEMOSTD |  
Admin Server | Name: ADMIN Port:8001 | Listen Address: aadrdemo	   
JMS Server | myJMSServer | 		   
JMS Module | myJmsSystemResource | 		   
           | JMS Queue | Name: myqueue
 |   | JNDI Name: jms/myqueue	   
 | SubDeployment | Name: myQueueSubDeployment	   
JDBC Datasource | Name: AuditDS JNDI Name:        AuditDS| XA Datasource:  Yes PDB Name:         pdborcl	   
 | Name:   StockDS JNDI Name:        StockDS | XA Datasource:  Yes PDB Name:         pdb2	   
 | Name:   TlogDS  JNDI Name:        TlogDS | XA Datasource:  No  PDB Name:         pdborcl
 TransactionLogJDBCStore | Name: ADMIN | 
 
 It also set **CrossDomainRecoveryRetryInterval** to 120 Seconds; this is the interval at which a store lock for a given server in a recovery domain will be checked for takeover eligibility.
* Current directory also contains the file hosts, which contains the **aadrdemo** as hostname, Dockerfile copies these file to **/etc/hosts/** file in the docker environment.
* Dockerfile also copies the application **CADemo.war** file to **/u01/oracle/weblogic/user_projects/domains/base_domain/autodeploy/** which is autodeploy directory for base_domain. So as we start the Admin Server. This application will be also started.
Note: This step takes around 12-15 minute.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/58.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/59.PNG)
3. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/standbyDomain/
4. **sudo docker build -t samplewls2:12.2.1 .**
 * This creates docker image with repository tag **samplewls2:12.2.1** by extending oracle/weblogic docker image.
 * Inside this docker image it creates a base_domain WebLogic Domain.
 * Open the file Dockerfile to get more information.
 * It executes create-wls-domain.py wlst script to create base_domain.
 * Open the file create-wls-domain.py file from the container-scripts folder.
Below is the summary of Resources, which we are creating and Configuration information:
 
Site Name | DEMOSTD | StandBy Site
--------- | ------- | ------------
Recovery Site | Name	DEMOPRI	| 	   
Admin Server |Name: ADMIN Port:8001 | Listen Address: aadrdemo	   
JMS Server | myJMSServer | 
JMS Module | myJmsSystemResource		   
 | JMS Queue | Name: myqueue JNDI Name: jms/myqueue
 | SubDeployment | Name: myQueueSubDeployment	   
JDBC Datasource | Name: AuditDS JNDI Name:  AuditDS | XA Datasource:  Yes PDB Name:         pdborcl	   
 | Name: StockDS JNDI Name:        StockDS | XA Datasource:  Yes  PDB Name:         pdb2	   
 | Name: TlogDS  JNDI Name:        TlogDS | XA Datasource:  No PDB Name:         pdborcl	   
TransactionLogJDBCStore | Name: ADMIN | 

It also set **CrossDomainRecoveryRetryInterval** to 120 Seconds; this is the interval at which a store lock for a given server in a recovery domain will be checked for takeover eligibility.
 * Current directory also contains the file hosts, which contains the aadrdemo as hostname, Dockerfile copies these file to /etc/hosts/ file inside the docker environment.
 * Dockerfile also copies the application CADemo.war file to /u01/oracle/weblogic/user_projects/domains/base_domain/autodeploy/ which is autodeploy directory for base_domain. So as we start the Admin Server. This application will be also started.

Note: This step takes around 12-15 minute.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/60.PNG)

Note: If any of images does not create successfully, you can delete the exiting image and re-run the command again to create docker image.

**sudo docker rmi samplewls:12.2.1 #where samplewls:12.2.1 is repository and tag.**

## Starting Admin Server in respective domains:

1. **sudo docker run -p 8001:8001 --name=wlsadmin  -h aadrdemo samplewls:12.2.1 startWebLogic.sh** (It starts the docker container with name wlsadmin inside the docker image **samplewls:12.2.1**. The docker container is running the WebLogic Admin Server with aadrdemo as hostname and 8001 as port number inside the docker image. But you can access the Admin Console on URL 	http://localhost:8001/console in the host machine Firefox browser.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/61.PNG)
2. In this tab, Click on **Terminal -> Set Title**. Enter **primaryDomain** as Title then click on **OK**.
3. Wait until the **Admin Server** is in **Running** State. Then only proceed to next step.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/62.PNG)
4. Open a new tab.
5. **sudo docker run -p 8002:8001 --name=wlsadmin2  -h aadrdemo samplewls2:12.2.1** startWebLogic.sh (It starts the docker container with name **wlsadmin2** inside the docker image **samplewls2:12.2.1**. The docker container is running the WebLogic Admin Server with aadrdemo as hostname and 8001 as port number inside the docker image. But you can access the Admin Console on URL 	http://localhost:8002/console in the host machine Firefox browser)
6. In this tab, Click on **Terminal -> Set Title**.  Enter **standbyDomain** as Title then click on **OK**.
7. Wait until the Admin Server is in Running State. Then only proceed to next step.

Note: Both the base_domain are running in **development mode**. If somehow you container is not started successfully with WebLogic Server. You can stop the container and remove the container by below commands.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/63.PNG)
**sudo docker stop <container_name>;#sudo docker stop wlsadmin; or sudo docker stop wlsadmin2**

**sudo docker rm $(sudo docker ps -a -q)**

## Cross Domain Transaction Recovery show case:

1. Go to Firefox, and type the URL for **primary Domain** Admin Console http://localhost:8001/console .
2. Enter **weblogic/welcome1** as **Username/Password** then click on **Login**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/64.PNG)
3. Click on domain name base_domain, Go down in the **Configuration -> General** tab, Click on **Advanced** and then verify the Site Name to **DEMOPRI**.
4. Click on **Configuration -> JTA** tab, then click on **Advanced** and then verify the **Recovery Site Name** to **DEMOSTD** and **Cross Domain Recovery Retry Interval** to **120**.
5. Click on **Deployments**, and verify the **CADemo** application deployments.
6. Open another tab in Firefox and Enter the URL for standbyDomain Admin Console http://localhost:8002/console .
7. Enter **weblogic/welcome1** as **Username/Password** then click on **Login**.
8. Click on domain name **base_domain**, Go down in the **Configuration -> General** tab, Click on **Advanced** and then verify the **Site Name** to **DEMOSTD**.
9. Click on **Configuration -> JTA** tab, then click on **Advanced** and then verify the **Recovery Site Name** to **DEMOPRI** and **Cross Domain Recovery Retry Interval** to **120**.
10. Click on **Deployments**, and verify the **CADemo** application deployments.
11. Open a new tab in browser and type the URL http://localhost:8001/CADemo/Initialize to **initialize the Database table**. Click on **go to online shop**.  This is the application deployed on primary domain. We will refer this tab as primarySite tab for next few steps.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/65.PNG)
12. Open a new tab in Firefox and type the URL http://localhost:8002/CADemo/  to access the application deployed in standbyDomain. We will refer this tab as **standbySite** tab for next few steps.
13. In the standbySite, Click on **See Inventory** and make sure every Item has Quantity equal to **3**. Click on **return to main page** link.
14. Go back to the **primarySite** tab, Click on **See Inventory** and verify the value of **Quantity** be the same with standbySite value. Click on **return to main page** link
15. In the **primarySite**, Click on **Get Activity Report**. It will be blank as of now. Click on **return to main page** link.
16. In the **standbySite**, Click on **Get Activity Report**. It will be blank as of now. Click on **return to main page** link.
17. In the **primarySite**, Click on **Would you like to buy something?**, and then enter the following value or any other data then click on **Submit**.
			Men T Shirt:		1
			Women T Shirt:		1
			Name:			Kyle
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/66.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/67.PNG)
You will see the page like below. Click on **return to main page**, Click on **Get Activity Report**. Click on **return to main page** link.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/68.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/69.PNG)
18. In the standbySite, Click on **Get Activity Report**, and verify the transaction. Click on **return to main page** link. Both sites will have same **Activity Log** and same **Inventory Stocks Quantity**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/70.PNG)
19. This application has few basic checks before performing a transaction:
 * While purchasing or returning the Item, if you do not enter any Quantity and Name both. It will ask you to provide both.
 * While purchasing or returning the item, if you provide the quantity but not the Name, It will ask you to provide the Name.
 * While purchasing or returning the item, if you enter the Name but not the Quantity, it will ask you to provide the Quantity Value.
 * If you are purchasing the Item and that much quantity of items is not available, transaction will not happen.
You can check the above conditions by yourself.
20. In the primarySite, on main page of application, Click on **Would you like to Buy Something**, and then enter the following value or any other data and choose the box for **Procedure Failure** then click on **Submit**.
			Women Pants:		2
			Man Pants:		2
			Name:			Maciej
	
As you click on Submit, you will see **The Connection was reset** on this tab, It means Admin 	Server on this domain has been **Shutdown**. You can go back to Terminal in **primaryDomain** tab; you can verify the Shutdown of Admin Server.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/71.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/72.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/73.PNG)
21. We have configured the Recovery Interval to 120 seconds, so we need to wait some time.
22. In the standbySite, Click on **Get Activity Report**. You can see the details of the Transaction. Click on **return to main page** link.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/74.PNG)
23. Click on **See Inventory**, and the Items quantity has been modified as well.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/75.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/76.PNG)

Note: As this is the Active-Active configuration, so like we performed transaction on primarySite and showed recovery on standbySite. You can also try to make transaction on standbySite; it will be recovered by primarySite. 

## Clean Up:
1. Go back to terminal, with name **primaryDomain**.
2. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Cross.Domain.Transaction.Recovery/CleanUp
3. **./delete_env.sh**
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/77.PNG)

Note: It stops the running docker container and then removes the docker container. Then it deletes the docker images we created during the Lab. At last it drops users in both the databases.

# Lab 3: Coherence Federated Cache
## Overview:

Managed Coherence Servers provides tight integration between WebLogic Server and Coherence. This integration allows for a simplified and streamlined development and management environments of distributed applications. The functionality allows end users to build a new archive type (Grid Archive aka GAR), which can be deployed and managed via standard WebLogic Server best practices. Developers can now streamline their build processes to generate GARs. Operations departments can now standardize deployment of Coherence and Coherence applications in the test and production environments. This feature requires both WLS 12.1.2 and Coherence 12.1.2 in order to work. 

Traditionally, Coherence has been deployed as a jar incorporated into a java application (e.g., WAR or standalone Java application) along with a tier of standalone cache server JVMs (often using the DefaultCacheServer class). The embedded java usages (such as in a WAR) are referred to as clients and the standalone cache servers are referred to as servers. The lifecycles of the **clients** and cache servers are managed separately, often manually, with the cache servers managed by custom shell scripts. Application development and deployment in this model is a complicated process involving many moving parts that require custom management processes.

**What is a Grid Archive?**

A Coherence application is defined by the artifacts required for a Coherence node to serve a particular Coherence cache or invocation request. A GAR contains: 
* A deployment descriptor, with required name coherence-application.xml. The deployment descriptor contains the following: 
 * A pointer to a cache configuration xml document. This document describes the Coherence services and caches. 
 * An optional pointer to a POF configuration document. This document describes the types serializable using the Portable Object Format. 
 * An optional class name of a class implementing the LifeCycleListener interface. 
 * An optional class name of a class implementing the ConfigurableCacheFactory interface. 
* A collection of Java classes required serving the request; typically these are implementations of EntryProcessors, Filters, Aggregators, and backing-map business logic. Classes are optional. 
* A collection of library jars these classes depend on. Library jars are optional. 

These artifacts are grouped in a jar called a Coherence Grid Archive (GAR) that defines all the artifacts for a particular Coherence Application. This mirrors to a large degree the structure of other Java EE artifacts such as Web Archives (WAR). The format of a GAR is as follows: 
* META-INF 
 * MANIFEST.MF 
 * coherence-application.xml - Coherence deployment descriptor 
 * coherence-cache-config.xml - Coherence cache configuration 
 * pof-config.xml - Coherence POF configuration 
* [optional class files in appropriate packages] 
* lib [optional directory containing any additional dependency objects] 

## Coherence Application Deployment Models

Coherence Applications are typically deployed in tier. The simplest model is a two-tiered deployment. A data tier, used to host Coherence Server instances responsible for storing the data related to the application. And an application tier that hosts the application consuming data stored in the data tier. 
Each tier is managed using standard WLS principles combined with the new functionality integrated for the 12.1.2 release. The new Coherence Cluster definition represents the operational (runtime) configuration of a Coherence cluster. Coherence clusters are then associated with a WLS cluster representing the data tier, and a separate WLS cluster representing the application tier. In the data tier, the grid archive is deployed to each managed server, which is configured as a storage enabled coherence node. The application tier would deploy the identical GAR, packaged in an EAR and the EAR is then deployed to each storage disabled managed server representing the application tier.

Note: it is considered best practice to have dedicated storage tiers, separate from the application tier to ensure optimum cluster performance. Please refer to the diagram below.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/78.PNG)

## Configuration:

There are two areas related to configuration with Managed Coherence Servers: 
* Standard Cache Configuration 
* WLS Domain configuration 

Standard Cache configuration is managed by the coherence-cache-config.xml file that resides within the Grid ARchive. These configuration concepts relate to cache configuration and topologies (near caches) which are explained via the standard coherence documentation [http://docs.oracle.com/cd/E24290_01/coh.371/e22837/gs_config.htm#CEGJBDJD](http://docs.oracle.com/cd/E24290_01/coh.371/e22837/gs_config.htm#CEGJBDJD).

Configuring the WLS domain as described in the preceding sections is new functionality made available in 12.2.1. It is possible to perform this configuration via both WLST and the Administration console. The high-level steps involved would be to:

1. Create a domain 
2. Create a Coherence Cluster 
3. Create a Data tier WLS cluster.
4. Associate the Data tier WLS cluster with the Coherence Cluster 
5. Deploy your GAR to the data tier 
6. Create an Application WLS Cluster and associate it with the Coherence Cluster 
7. Deploy your EAR to the application tier. 

## Coherence Federated Cache Lab 

The target environment you will build is shown in the diagram below. This environment will be built using script.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/79.PNG)

The following components make up the lab architecture: 
* Two identical WebLogic Server 12.2.1 domains (**A_site_domain, B_site_domain**) with node manager pre-configured. 
* Cache Server WebLogic Cluster **containing one storage-enabled managed server** and holding Coherence Cluster data. Often referred to as the Data Tier
* WebApp WebLogic Cluster **containing one storaged DIS-abled managed servers**, and hosting a web application contained in an EAR. Often referred to as the Web Tier.
* The following artifacts will be deployed: 
 * **ExampleGAR.gar**-  the **Grid Archive**(GAR) which contains POJOs, cache and POF configuration, as well as other classes required by the Coherence applications and cache servers. 
 * **ExampleEAR.ear**-  the application to be deployed to the **WebApp** cluster. Contains a Web Archive (WAR) file with the application code, and the GAR file with required cluster resources.

The scenario is the following the two sites are identical and have the same application to be deployed. Between the two sites Coherence Federated Cache feature is activated. So whenever the data is created/updated/inserted on a site the changes will be immediately propagated to the other site.

## Create the demo environment 

The objective of this step is to create the environment for sample application. 

**Run the domain creation script** 

The domain configuration come in domain template form and we must execute the unpack command to create the two domains. Carry out the following: 
1. Open a new terminal 
2. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/ 
3. Run the following script to create (unpack) the two domains: **./createDomains.sh**
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/80.PNG)

This indicates the two domains have been unpacked successfully. If you have any errors first check the domain creation logs: 
* /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/A_site_domain_creation.log 
* /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/B_site_domain_creation.log 

And/or consult your instructor. You can re-run **createDomain.sh**, but first clean up the failed folders: 

1. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/cleanup/ 
2. Run the following script to remove the domain's folders: **./removeDomains.sh**

## Start the environment:    

1. Once the previous step has been completed, do the following:
2. In this tab, click on **Terminal -> Set Title**, Enter **A_site_nodemanager** as Title then click on **OK**.
3. cd /u01/wins/wls1221/user_projects/domains/A_site_domain/bin/
4. Run the following to start the node manager for **site A**: ./startNodeManager.sh
5. Open a new tab.
6. In this tab, click on **Terminal -> Set Title**, Enter **B_site_nodemanager** as Title then click on **OK**.
7. cd /u01/wins/wls1221/user_projects/domains/B_site_domain/bin/
8. Run the following to start the node manager for **site B**:  ./startNodeManager.sh
9. Open a new tab.
10. /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/startA_site_adminserver.sh (This script starts the Admin Server in A_site_domain through NodeManager.)
11. /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/startB_site_adminserver.sh (This script starts the Admin Server in B_site_domain through NodeManager)
12. Open Firefox and login to the A_site_domain's console at the following URL http://localhost:7001/console using weblogic/welcome1.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/81.PNG)
13. Click on **Environment -> Servers**. (Check the **configuration** and status of the managed servers.According to the architecture here we can see one cache server which acts as the data grid layer and a web application server which hosts the demo application.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/82.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/83.PNG)
14. Open a New Private Firefox Window and login to the B_site_domain's console at the following URL http://localhost:8001/console  using weblogic/welcome1. It is important to use this type of separate browser to login the B_site_domain's console; otherwise Firefox will always kick out from the other site's admin console.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/84.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/85.PNG)
15. Click on **Environment -> Servers**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/86.PNG)
16. Now check the configuration and status of the managed servers in the B site domain. According to the architecture here we can also see one cache server which acts as the data grid layer and a web application server which hosts the demo application. Don't forget the domain's configurations are identical except the port configuration for servers and clusters.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/87.PNG)
17. Now the managed servers in both the domain must be started. 
18. Go back to the Terminal.
19. /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/startServers.sh (This script first connects to the A_site_nodemanager and through NodeManager it starts the cache_server1 and webapp_server1 in A_site_domain. Then it connects to B_site_nodemanager and through NodeManager it starts the cache_server1 and webapp_server1 in B_site_domain.)
20. Before you proceed to the next step please check all the managed server status in the two domains. They all must be in Running State.

## Deploy the Federated Cache demo application

The demo application must now be deployed for both domains. Carry out the following:

1. /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/deploy.sh (This script connect to the Admin Server in A_site_domain, then it deploy the ExampleGAR.gar application to CacheServerWebLogicCluster and ExampleEAR.ear application to WebAppWebLogicCluster then disconnect to the Admin Server. Then it connects to the Admin Server in B_site_domain and then it deploys the ExampleGAR.gar application to CacheServerWebLogicCluster and ExampleEAR.ear application to WebAppWebLogicCluster.)
2. Go to the Admin Console of **A_site_domain** and click on **Deployments**. 
3. Go to the Admin Console of **B_site_domain** and click on **Deployments**.(If you have any issue, consult your instructor.)

Run the federated cache demo application. Once the previous step has been completed, access to the demo application on both sites:

1. Open a new tab in browser which is used for A_site_domain. 
2. To run the demo application, go to the following URL. Choose port **7007**. http://localhost:7007/WebApp/faces/ContactList.jsp 
On the application's page you can see lot of information. Currently this application's domain is A_site_domain; hosting server is webapp_server1, the Coherence data grid layer ensured by **CoherenceClusterA** in this domain which is one of the participants of the federated cache. If you have questions about the architecture see the diagram in the overview section or consult your instructor.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/88.PNG)
3. Open a new tab in the (private) browser which is used for **B_site_domain**.
4. To access to the same demo application in the secondary site go to the following URL. Choose port **8007**. http://localhost:8007/WebApp/faces/ContactList.jsp .(On the application's page here you can also find information about the hosting environment and the replication status as well. As you can see this application belongs to **B_site_domain** and part of the **CoherenceClusterB** which is the other participant of the federated cache. If you have questions about the architecture see the diagram in the overview section or consult your instructor. Note:  If you do not see the above output in any of site or both the site follow the instruction in **Troubleshoot** section given in the last of part of Lab 3.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/89.PNG)
5. Now test the behavior of the **Active-Active** configured federated cache.
6. Click in the **Insert 5 Random Contacts** button. The browser for A_site_domain should resemble the following. The red background indicates the recently (in the last 5-7 sec.) inserted/updated records.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/90.PNG)
7. Now switch to the (private) browser which shows the application for B_site_domain. There you can see the 5 records which were inserted by the application hosted in A_site_domain. If you switch enough fast there you can also see the red highlights for recently inserted records
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/91.PNG)
8. Now insert 5 another records on B_site_domain.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/92.PNG)
9. Then switch to the A_site_domain's applications.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/93.PNG)
10. You can modify or create just one record and see the immediate propagation. For example create a new record on A_site_domain. Click on **Create Contact**. Fill out few properties (First, Last name etc.) and click on **Save**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/94.PNG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/95.PNG)
11. In the browser you will see the new record.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/96.PNG)
12. Switch to the B_site_domain's browser.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/97.PNG)
13. In the next scenario let's pause the replication between the two sites. Click on **Pause replication**. You can use either of the sites, but now e.g. let's do it on A_site_domain.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/98.PNG)
14. Now modify a record. Click on **Update** at selected record in the list.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/99.PNG)
15. Make changes on the record. Then click on **Save**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/100.PNG)
16. In the list you can see the updated record with red background. ( Please notice the Pending Messages indicator which shows the currently pending messages to be executed on the other participant in federated cache.)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/101.PNG)
17. Before restart of the replication check the other site's records. You should see the selected record without any changes what was made on the A_site_domain.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/102.PNG)
18. Restart the replication by clicking on **Start replication** button on the A_site_domain.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/103.PNG)
19. Switch to the B_site_domain's (private) browser and check the result. You should see the updated records with the correct values.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/CA-Workshop/md.resources/104.PNG)

## Clean Up:

The objective of this step is to clean up the environment after Coherence federated cache demo. Please make sure that you have done because the clean up script will stop all server instances including node managers and delete the domains. To completely stop and remove the demo carries out the following:

1. Open a new terminal window.
2. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/cleanup/
3. Run the following script to remove the two domains: **./removeDomains.sh** (The script will shut down all server processes and the node managers. Finally deletes the domain folders)

## Troubleshooting

If any of the applications fail to start or behave unexpectedly. Redeploy the application and restart the servers.

1. Go back to the terminal.
2. /u01/content/weblogic-innovation-seminars/WInS_Demos/CA-Workshop/Coherence.Federated.Cache/setup/troubleshoot.sh (This script takes 8-10 minutes. It undeploys the applications from both the domain, then stop AdminServer, cache_serve1 and webapp_server1 in both the domain. Then it starts this server and deploys the application to respective server as described in architecture diagram.

## Appendix 

This section is to provide you help if you already run this workshop once, and only interested to showcase any specific features or any specific lav. We created few scripts about which the description is give below

**In Zero Downtime Patching Lab**:

**configure_start_OTD.sh:**  This script start the node manager in otd_domain, then it start admin server, and create otd configuration in otd_domain, and starts load balancer in otd_domain. In each **Domain1221** in all three nodes, it starts the node manager, then it starts the admin server in ma node, then it starts the Cluster. In Admin Console, You need **Customize the table** to show Java Version and WebLogic Version, then you can proceed with all type of roll out.

**Clean_ZDT_env.sh**: If you used the above script to start node manager and servers, then you can use this script to clean the environment.  You can also use this script if you uses the start nodemanager and admin server section in the lab. 

**In Cross Domain Transaction Recovery Lab**:

**cdtr_demo.sh:**  this script starts the Database, and creates the cdtr user in both the pluggable database. Then it creates two docker images, and start two container. After execution this script, you can access the applications. 

**delete_env.sh:** it stops the running docker container, remove the two docker images which we created during the Lab and it also remove the cdtr user from both the pluggable database and then it stops the Database.

**In Coherence Federated Cache Lab:**

**create_env.sh:** It creates the A_site_domain and B_site_domain, then it starts the Node manager in both the domains, using the node manager it starts the Admin Server in both the domain. Later it starts the Cache Server and WebApp Server in both the domains and then deploys the GAR and EAR files to respective servers.

**removeDomains.sh:**  It stops all the servers running, and then removes both the domains A_site_domain and B_site_domain.  
