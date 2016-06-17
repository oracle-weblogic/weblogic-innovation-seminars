# WebLogic Multitenancy Workshop
# INTRODUCTION:
Multitenancy in WebLogic Server provides a sharable infrastructure for use by client organizations (tenants). By allowing one domain to support multiple tenants, WLS MT improves density and achieves a more efficient use of resources while eliminating the trade-offs that are traditionally made in a shared environment: Isolation issues. Multitenancy essentially creates the tension between isolation and sharing. Isolation separates both the administration and runtime of different tenants from each other, where resource sharing among tenants improves efficiency and reduces operation costs.
## Domain Partition:
WebLogic Server MT provides resource isolation with in domain partitions, an administrative and runtime slice of a WebLogic domain that is dedicated to running application instances and related resources for a tenant. Domain Partition achieve greater density by allowing application instances and related resources to share the domain, WebLogic Server itself, the Java virtual machine, and the operating system while isolating tenant specific application data, configuration, and runtime traffic. Each domain partition has its own runtime copy of the application and resources. 
## Resource Groups:
WLS MT introduces resource groups, simply as a convenient way to group together Java EE applications and the resources they use into a distinct administrative unit within the domain.  The resources and applications are fully qualified in that administrator provides all information needed to start or connect to those resources, including credentials for connecting to data source and targeting information for Java EE application. A resource group will either contain these deployable resources directly or refer to a resource group templates which contain the resources. Resource group can be defined at the domain level, or be specific to domain partition. 
All the resources in or referenced by a resource group are targeted together (to the same target). Resource group can be started and stopped. 
## Virtual Target:
Encapsulate where a partition or resource group runs and how to route traffic to them, including addresses, protocol settings, and targeting, Request routing is determined by the host name and optional URI. 
May Include:-
* Host name and port
* Optional URI 
* Network Access Point or Channel
* Protocol specific configuration
* T3, IIOP
* Web Server
* Target Clusters and managed servers

In Multitenant environment, We create Virtual Target first, In previous versions of WebLogic Server, We Targeted our application, system resources (JDBC or JMS Resources) to Clusters, Managed Servers part of Cluster or stand alone managed server. But here we target our resources to Virtual Target. After creation of Virtual Target, we create a domain partition, while creating domain partition we can create resource group. A domain partition can have multiple resource groups. Then we target domain partition to the Virtual Target. Below diagram gives you the picture how they work together.

![Multitenancy Architecture](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/1.JPG)

As in the Above Diagram, We created Virtual target 1, Virtual Target 2 which are Targeted to WebLogic Server. Then we created Two Domain partitions, Domain partition 1 has Resource Group 1 and Domain Partition 2 has Resource Group 2. 

To know more about the Multitenancy, you can follow the link [here](https://docs.oracle.com/middleware/1221/wls/WLSMT/concepts.htm#WLSMT715) 

We have total 7 Labs; the brief information about each lab is given below. 

Lab 1 consist Non MT configuration, in this Lab we create basic configuration required for each lab. First we create **base_domain** using the **Restricted-JRF** template. This is the domain we are using in each lab. Using the Fusion Middleware Control Console, we will create machine and one dynamic cluster of initial size of two managed server inside it. 

Lab 2 consist creation of MT configuration, in which we creates virtual target, domain partition and resource group. We show you can easily deploy one application twice in a domain in different domain partition. In this case both applications will be connected to different database. Good thing is that you don't need to modify the application deploying to different domain partition because we have JNDI isolation. We also use day trader application which is build by IBM, we made few changes in the application to run the application in Non MT environment, and we took the same application to deploy in MT environment (inside domain partition). So you don't need any specific application development to deploy the application in Multitenant environment. 

Lab3 shows how you can have two or more security realms active inside a domain. Traditionally in WebLogic server, we have more than one Security realm but only one is active for the domain. Here, we have multiple domain partition, so you can have separate security realm for each domain partition. In Lab 2 we deploy Medrec application in domain partition dp1 and dp2. As while creating domain partition dp2 we do not choose any security realm so it uses the default security realm. In Lab 3 we create a new security realm and assign it to domain partition dp1. So both domain partitions will have different set of authorized user. 

Lab 4 shows how you can easily move domain partition from one environment to another environment. Generally we work in simple development environment, like no restricted JRF, no cluster. But we need to test our application in testing environment, run in production environment. In Lab 4 we create a dev_domain using a by default templates and it consist only admin server. We do the required configuration for Medrec Application in dev_domain, once we have Medrec application is deployed in domain partition Medrec-Dev in dev_domain, we export the domain and import it in base_domain. 

Lab 5 shows how you can configure the resource configuration manager. As the domain partition is targeted to the Virtual target which is targeted to a cluster. So multiple domain partition may be using the same cluster, in that scenario to avoid one partition to use the resources excessively, we set the limit using resource configuration management, we specify the limit for notify, slow and shutdown action. As the resource uses reaches that limit, particular action happens. 

Lab 6 shows how you can integrate OTD as a front end in domain partition. It shows the steps how to integrate OTD while creating the domain partition. This Lab also shows you the Resource group migration from one cluster to other cluster. As OTD is front ending your domain partition, so without any interruption you can access the application using the same URL. 

Lab 7 shows how you can clone existing domain partition. We are importing the domain partition in the same domain from where we exported the domain partition to perform the clone operation. We need to create virtual target and specify the name of new virtual target in partition-attributes.json file. We also need to specify new partition name while importing the partition.
 
You create three domains as part of this workshop. There role are as given:

**base_domain:** We create this domain as part of Lab 1. This is the main domain which we are using in each lab. We create machine, dynamic cluster and domain partitions. 

**dev_domain:** We create this domain as part of Lab 4. This domain uses default template and contain Admin Server only. This domain represent domain which we generally uses for development purposes. 
We create a domain partition Medrec-Dev inside it, which we later export and import it to base_domain. 

**otd_domain:** We create this domain as part of Lab 6. This domain consist Admin Server, and Load Balance instance. 

How to Use Individual Labs:

Lab 1 and Lab 2 are compulsory. 

Lab 3: You need to run Lab 1 and Lab2 before executing Lab 3. 

Lab 4: You need to run Lab 1 and Lab 2 before executing Lab 4. 

Lab 5: You need to run Lab 1 and Lab 2 compulsory for it. And if you do not execute Lab 4 before running Lab 5, then instead of modifying the changes to Medrec-Dev domain, you need to modify the domain partition dp1. 

Lab 6: You need to run Lab 1 before executing the Lab 6. 

# Virtual Box Environment

## The Hands on Lab Environment

**Operating System Details**

Variable | Value
-------- | ---------
Operating System | Oracle Linux 6.4 x86_64
Hostname | localhost, wins-vbox
Root User | Root User
Oracle User | oracle/welcome1

Note:  For this hand on lab you should only need to use **oracle** user account.

**Installation Directories**	

Variable | Value
--------------- | -------------------
JDK 1.8.0_60 | /usr/java/jdk1.8.0_60/
WebLogic Server 12.2.1 | /u01/wins/wls1221/
Oracle Traffic Director 12.2.1 | /u01/wins/wls1221/
Oracle Database 12c | /u01/app/oracle/product/12.1.0/dbhome_1/

**Workshop Content:**

Variable | Value
------- | --------
Labs Directory | /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/

# LAB 1: DOMAIN CREATION AND NON-MT CONFIG

## Overview
In this lab, we are going to perform the below operations.
We create a WebLogic domain, in that domain we create machine, dynamic cluster.
## Start the database
We have two Pluggable database **pdborcl** and **pdb2**; we are going to start both the database.

1. In Desktop, Double Click on Icon **Start Database**.

Note: Wait until the Window disappears.

## Create WebLogic Restricted JRF Domain
1. Open a new terminal.
2. cd /u01/wins/wls1221/oracle_common/common/bin/
3. ./config.sh
4. Select **Create a new domain** and Enter **/u01/wins/wls1221/user_projects/domains/base_domain** as Domain Location then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/2.JPG)
5. Select  **Oracle Enterprise Manager Restricted JRF-12.2.1 [em]** as it also select the remaining required check boxes then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/3.JPG)
6. Leave Default on **Application Location** then click on **Next**.
7. Enter  **weblogic/welcome1** as Name/Password then click on  **Next**.
8. Leave Default on  **Domain Mode and JDK Screen** then click on  **Next**.
9. Leave Default on  **Advanced Configuration** then click on  **Next**.
10. Click on  **Create**.
11. Click on  **Next** then click on  **Finish**.

## Configuration of WebLogic base_domain
1. cd  /u01/wins/wls1221/user_projects/domains/base_domain/bin/
2. **./startNodeManager.sh**
3. In tab, Click on **Terminal -> Set Title**. Enter **base_nm** as Title then click on OK.
4. Open a new tab.
5. cd /u01/wins/wls1221/user_projects/domains/base_domain/bin/
6. **./startWebLogic.sh**
7. In tab, Click on **Terminal -> Set Title**. Enter **base_admin** as Title then click on OK.
8. Go back to Firefox and type the Fusion Middleware Control URL [http://localhost:7001/em](http://localhost:7001/em)
9. Enter **weblogic/welcome1** as **username/password** then click on **Login**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/4.JPG)
10. Create a Machine.
 * Click on **WebLogic Domain-> Environment -> Machine**.
 * Click on **Create**.
 * Enter **machine** as Name, Select **Unix** as Machine OS, then click on **Next**.
 * Leave Defaults on Node Manager Properties then click on **Create**.
 * Click on the Machine name **machine**.
 * Click on **Monitoring** tab and verify the status as **Reachable**.
11. Create a Dynamic Cluster
 * Click on **WebLogic Domain -> Environment -> Clusters**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/5.JPG)
 * Click on **Create -> Dynamic Cluster**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/6.JPG)
 * Enter **app-cluster** as Name then click on **Next**.
 * Leave Default on **Dynamic Server Properties** page and click on **Next**.
 * Select **Use a single machine for all dynamic servers** and choose the **machine**, then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/7.JPG)
 * Leave Default on Listen Port Bindings, and then click on **Next**.
 * Review the Configuration and click on **Create**.
12. Start Managed Servers.
 * Click on **WebLogic Domain -> Control ->Clusters**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/8.JPG)
 * Check the box near to **app-cluster** to make it highlighted and then Click on **Control -> Start -> Start Servers**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/9.JPG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/10.JPG)

# LAB 2: MULTITENANCY CONFIGURATION	
## Overview:
In this lab, we are going to learn the following:
* Configuration of Virtual Target, Domain Partition and Resource Group
* Run multiple instances of Medrec application in different domain partition without modifying the application. We try to show **JNDI Isolation** for that we are using the same Medrec applications and same JNDI name for the Datasources, connection factory and Distributed queue in both the domain partition.
* Run Day trader application which is build by WebSphere to WebLogic 12.2.1.
* You don't need to modify your application to run in Multitenant environment. So no special application development needed.
The final deployment architecture will look like the below where we will create three domain partitions .Deploy Medrec application in domain partition dp1 and dp2. And Day Trader application on domain partition dp3.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/11.JPG)

## Configuration of Medrec Application in Domain Partition 1
In the next step we are creating the below configuration for Medrec application in domain partition dp1.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/12.JPG)

1. Open a new tab.
2. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2/
3. **./Medrec1DB.sh** (It creates the required database user and populate sample data into database)
4. Close the tab.
5. In Enterprise Manager, Click on **WebLogic Domain -> Environment -> Virtual Targets**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/13.JPG)
6. Click on **Create**.
7. Enter **VT-Medrec-1** as Name and **/dp1** as Uri Prefix and Add **localhost** as Hosts then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/14.JPG)
8. Select Cluster **app-cluster** as Target then click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/15.JPG)
9. Click on **WebLogic Domain -> Environment -> Domain Partitions**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/16.JPG)
10. Click on **Enable Lifecycle Manager**.
11. Go back to base_admin terminal, press CTRL+C, to stop the admin server.
12. ./startWebLogic.sh
13. Go back to Firefox, and type the Fusion Middleware Control Console URL [http://localhost:7001/em]( http://localhost:7001/em).
14. Enter **weblogic/welcome1** as **User Name/Password** then Click on **Login**.
15. Click on **WebLogic Domain -> Environment -> Domain Partition**.
16. Click on **Create**.
17. Enter **dp1** as Name then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/17.JPG)
18. Check the left box near **VT-Medrec-1** and also check the box for **Set as Default** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/18.JPG)
19. Enter **app1RG** as Resource Group name and **None** as Resource Group Template, Move the **VT-Medrec-1** virtual target to **Selected targets** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/19.JPG)
20. Verify the configuration and click on **Create**.
21. Check the box near **dp1** and click on **Control -> Start**. Once you notice the message **Partition state after the operation is RUNNING** then Click on **Close**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/20.JPG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/21.JPG)
22. Click on the Domain Partition **dp1**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/22.JPG)
23. Click on **Domain Partition -> Administration -> Resource Group**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/23.JPG)
24. Click on Resource Group **app1RG**. 
25. Creation of Datasource.
 * Select the **Services** tab. 
 * Choose JDBC tab, click on **Create -> Generic Data Source**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/24.JPG)
 * Enter **MedRecGlobalDataSourceXA** as Data Source Name and **jdbc/MedRecGlobalDataSourceXA** as JNDI Name, and then click on **Select**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/25.JPG)
 * Select **Oracle** as Database Type and **Oracle's Driver (Thin XA) for service connections; Versions: Any** as JDBC Driver then click on **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/26.JPG)
 * Click on **Next**.
 * Click on **Generate URL and Properties** and Enter the following:

			Host Name:			localhost

			Listen Port:			1521

			Database Name:			pdborcl

			User Name:			medrec1

			Password:			medrec1

			Confirm Password: 		medrec1

 	Click **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/27.JPG)
 * Click on **Test Database Connection** to verify the connection. Click **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/28.JPG)
 * Leave Default on **Transaction Options** and click on **Next**.
 * Verify the configuration and click on **Create**.
26. Adding User to Default Realm.
 * Click on **Weblogic Domain->Security->Users and Groups**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/29.JPG)
 * In **Users** tab, click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/30.JPG)
 * Enter the following then click on **Create**.

			Name:			administrator
		
			Description:		Medrec Admin	
		
			Provider:		Default Authenticator
		
			Password:		administrator123
		
			Confirm Password:	administrator123
27. Configuring Mail Session.
 * Click on **Weblogic Domain -> Environment -> Domain Partition**.
 * Click on Domain Partition **dp1**.
 * Click on **Domain Partition -> Other Services -> Mail Sessions**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/31.JPG)
 * Click on **Create**. 
 * Enter the following and click on **Next**.
		
			Name:			MedRecMailSession
		
			Scope:			Leave as default
		
			JNDI Name:		mail/MedRecMailSession
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/32.JPG)
 * Click on **Create**.
28. Configuring JMS Server.
 * Click on **Domain Partition -> Messaging -> JMS Servers**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/33.JPG)
 * Click on **Create**. Enter **MedRecJMSServer** as Name then click on **Create a Store -> File Store**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/34.JPG)
 * Enter **MedRec-fs** as Name then click on **Next**. Click on **Create**.
 * In **JMS Server: General Setting**, Select the newly created file store as persistent store then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/35.JPG)
 * Click on **Create**.
29. Configure JMS Module.
 * Click on **Domain Partition -> Messaging -> JMS Resources and Modules**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/36.JPG)
 * Under the **JMS Modules** tab, click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/37.JPG)
 * Enter **MedRecModule** as Name then click on **Next**. Click on **Create**. 
 * Under **JMS Modules** tab, click on **MedRecModule**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/39.JPG)
 * Under **Subdeployment** tab, click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/40.JPG)
 * Enter **MedRecJMS** as Name and Select the box near **MedRecJMSServer** then click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/41.JPG)
 * Under **General** tab, click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/42.JPG)
 * Select box near **Connection Factory** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/43.JPG)
 * Leave Default in **JMS System Module** Page then click on **Next**. 
 * Enter **MedRecConnectionFactory** as Name and **com.oracle.medrec.jms.connectionFactory** as JNDI Name then click on **Next**. Click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/44.JPG)
 * Under **General** tab, Click on **Create**. 
 * Select **Uniform Distributed Queue** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/45.JPG)
 * Click on **Next**. 
 * Enter the following and click on **Next**. 

			Name: 		PatientNotificationQueue

			JNDI Name: 	com.oracle.medrec.jms.PatientNotificationQueue
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/46.JPG)
 * Click on **Create**. Click on **PatientNotificationQueue**, Under **Targeting**, Select **Subdeployment targeting** as **Targeting Policy** and **MedRecJMS** as **Subdeployment** then click on **Apply**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/47.JPG)
Note: You must restart domain partition before going to deploy Medrec Application.
 * Click on Change Center -> View Restart Checklist.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/48.JPG)
 * Select the box near to dp1 then click on Restart.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/49.JPG)
 * On Confirmation Screen, Click on Restart.
30. Deployment of Medrec Application.
 * Click on **WebLogic Domain -> Environment -> Resource Groups**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/50.JPG)
 * Click on Resource Group **app1RG**, click on **Deployments** tab.
 * Click on **Deployment -> Deploy**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/51.JPG)
 * Select **Archive or exploded directory is on the server where Enterprise Manager is running** then click on **Browse**. Specify the location of **medrec.ear** from **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2** then click on **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/52.JPG)
 * click on **Next** then click on **Deploy**. Click on **Close**.
 * Deploy **physician.ear** file similarly from the **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2** location.
 * Deploy **chat.war** file similarly from the **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2** location.

## Accessing Medrec Application in Domain Partition dp1

1. Go to Firefox and type the URL: [http://localhost:7101/dp1/medrec/](http://localhost:7101/dp1/medrec/)
2. Click on Getting Started. 
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/53.JPG)
3. Under Patient, Click on **I am New Here**
4. Enter the following or any other data then click on Submit.

			Email:				weblogic@oracle.com

			Password:			welcome1

			Confirm Password:		welcome1

			First Name:			Ankit

			Last Name:			Pandey

			Gender:				Male

			DOB:				Jun 23, 1988

			SSN:				123456788
Note: Make sure you not use 123456789 as SSN Number. 
5. Click on **Getting Started** again on Medrec Home Page.
6. Under Administrator, Click on **Login**.
7. Enter **administrator/administrator123** as username and password then click on **Sign In**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/54.JPG)
8. Under **Pending Requests**, click on **Go**.
9. Click on the Email Id, and then click on **Approve**.
10. Click on Logout. Click on Logout again.
11. You can login as weblogic@oracle.com/welcome1  as username/password as Patient.
12. You can view your record summary, and you can also have interaction with physician.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/55.JPG)

## Configuration of Medrec Application in Domain Partition 2

In the next step we are creating the below configuration for Medrec application in domain partition dp2. We are using the same Medrec applications and same JNDI name for the Datasources, connection factory and Distributed queue but we will connect to different database. So there are two benefits of Multitenancy.
* In a domain, you can deploy the same application in two different domain partitions and there will be no JNDI conflict. You do not have to make any changes in application. 
* In single domain, you can have same application deployed in two different domain partitions and connected to two databases. So both the application will have different Set of Users in our case or different set of Application Specific Data.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/56.JPG)

The Scripts MedrecInDP2.sh creates the Virtual Target, Domain Partition, Resource Group, JDBC Datasource, JMS Server, JMS Module, Distributed Queue and Connection Factory then deploys the medrec.ear, physician.ear and chat.war.

1. Open a new tab.
2. cd **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2**
3. **./Medrec2DB.sh** (It creates the required user medrec2 in pdb2 and populates the sample data.)
4. **./MedrecInDP2.sh**
5. Go back to Fusion Middleware Control [http://localhost:7001/em](http://localhost:7001/em).
6. Verify the creation of the following resources.
 * Click on **WebLogic Domain ->Environment ->Virtual Target**. Here we have **dp2** as **URI Prefix** for the Virtual Target **VT-Medrec-2**.
 * Click on **WebLogic Domain ->Environment ->Domain Partition**. 
 * Click on Domain Partition **dp2** then Select **Domain Partition -> Administration -> Resource Groups**.
 * Click on Resource group **app2RG**.
 * In the **Services** and **Deployments** tab, you can verify the creation of above System Resources here.

## Accessing Medrec Application in Domain Partition dp2

While accessing the application we need to use the Virtual Target URI. As domain partition dp2 is targeted to Virtual Target VT-Medrec-2, which has /dp2 as URI, we need to add it in URL for the accessing the application.

1. In Firefox, type the URL: [http://localhost:7101/dp2/medrec/](http://localhost:7101/dp2/medrec/)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/57.JPG)
2. As both this application has exactly same JNDI name used within application, JNDI name of Datasource, JMS connection factory, mail sessions, Distributed Queue.
3. Click on **Getting Started!**. 
4. Under **Patient**, Click on Login, Try to login with weblogic@oracle.com/welcome1. You will not be able to login. As both Medrec application is connected to different database. So in Multitenant WebLogic Server, you can deploy exactly same application with same configuration but with different database and there will be no JNDI conflict in domain.

## Configuration of Day Trader application in domain partition 3

Here we will create the below configuration through WLST to Run Day Trader Application on Domain Partition dp3.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/58.JPG)

This DayTraderInDP3.sh creates the Virtual Target, Domain Partition, Resource Group, JDBC Datasource, JMS Server, JMS Module, Distributed Queue and Connection Factory then deploys the web-3.0.0.war.

1. cd **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2**
2. **./DayTrader3DB.sh** (It creates the required user for pdborcl database.)
3. **./DayTraderInDP3.sh**
4. Go back to Fusion Middleware Control  [http://localhost:7001/em]( http://localhost:7001/em)
5. Verify the creation of the following resources.
 * Click on **WebLogic Domain ->Environment ->Virtual Target**. Here we have **dp3** as **URI Prefix** for the Virtual Target **VT-daytrader**.
 * Click on **WebLogic Domain ->Environment ->Domain Partition**. 
 * Click on Domain Partition to **dp3** then Select **Domain Partition -> Administration -> Resource Groups**.
 * Click on Resource group **app3RG**.
 * In **Services** and **Deployments** tab, you can verify the creation of above System Resources here.

## Access Day Trader Application in Domain Partition dp3

1. Go to Firefox and type the URL: [http://localhost:7101/dp3/daytrader/](http://localhost:7101/dp3/daytrader/) 
2. We will not test here the application behavior. The application is loaded and is running inside partition. 

You can create many domain partitions in WebLogic 12.2.1. Your application does not require any specific application development. Your application which is working in previous version of WebLogic 12c, you can deploy them in multitenant environment without modifying the application. Daytrader application is developed by IBM which we deployed in domain partition dp3. So you can also easily deployed application build on different platform to WebLogic Server. 

# LAB 3: SECURITY ISOLATION
## Overview 

A security realm comprises mechanism for protecting WebLogic resources. Each security realm consists of a set of configured security providers, users, groups, security roles, and security policies. You use realms to configure authentication, authorization, role mapping, credential mapping, auditing and other services.
 
WebLogic Server traditionally supports multiple realms in a domain configuration, but only one realm- typically referred to as the default realm or admin realm -can be active at any given time.
 
In contrast, WebLogic Server MT supports multiple active realms and allows each partition to execute against a different realm.
 
This means that a partition can have unique security providers, users, groups, security roles and security policies. Resources and applications in the domain partition are available to only to users within the domain partition's security realm. Other tenants cannot see or access the resources or applications. 

Note: Partition can share a security realm, with consequent loss of independence isolation. In particular if you do not specify a realm when you create a partition, the default realm is shared with the partition and there is no security isolation between the partition and the domain. 

In this Lab, first we will create a new security realm then we will assign the security realms to a partition dp1. So we will have two security realms in our domain one which we created and one is default security realm. Domain partition dp1 will have new security realm and other domain partitions will have default security realm. Default security realm has a user administrator with password administrator123. And new security realm will have user administrator with password welcome1. So Medrec application deployed in dp1 can be used by users of new security realm. You will not be able to login as an Admin in Medrec Application with default security realm user (administrator/administrator123).

In this lab we are going to perform the following operations:
* Creation of New Security Realm. 
* Assigning a new Security realm to Domain Partition.
* Medrec application deployed in two different domain partitions which are using two different security realms in single domain.

## Creating a New Security Realm

1. The creation of Security Realm is more automated still inside WebLogic Console versus Fusion Middleware Control. This is why we will use WebLogic Console for that action. Go to Firefox and type the WebLogic Admin Console URL: [http://localhost:7001/console](http://localhost:7001/console).
2. Enter **weblogic/welcome1** as username/password then click on **Login**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/59.JPG)
3. Under Domain Structure, click on **Security Realms**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/60.JPG)
4. Click on **New**.
5. Enter **mynewrealm** as Name; check the box for **Create default providers within new realm** and **Ignore Deploy Credential Mapping** then click on **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/61.JPG)
6. Click on **mynewrealm**.
7. Click on **Users and Groups -> Users** tab.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/62.JPG)
8. Click on **New**.
9. Enter the following then click on **OK**.
	
			Name:			administrator

			Description:		Domain Partition 1 users
	
			Provider:		Default Authenticator
	
			Password:		welcome1
	
			Confirm Password: 	welcome1
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/63.JPG)

## Assign the mynewrealm security realm to domain partition dp1.

1. Click on **Domain Partitions**, then on **Control** tab.
2. Check the box near **dp1** and click on **Shutdown ->Force Shutdown Now**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/64.JPG)
3. Once domain partition shutdown, click on dp1.
4. In **Configuration-> General** tab, Under Use Realm, select **mynewrealm** then click on **Save**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/65.JPG)
5. Click on **Domain Partitions**, then on **Control** tab.
6. Select the box near dp1 and click on **Start**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/66.JPG)

## Verified that we have two security realms in different domain partition in single domain

1. Go to Firefox and type the URL: [http://localhost:7101/dp1/medrec/index.xhtml](http://localhost:7101/dp1/medrec/index.xhtml)
2. Under Administrator, click on Login. 
3. Login with old security realm credential that is administrator/administrator123.
4. You must get **Incorrect username or password!**.
5. Login with new security realm credential that is administrator/welcome1.
6. Click on Logout. Click on Logout again.
7. Go to Firefox and type the URL: [http://localhost:7101/dp2/medrec/index.xhtml](http://localhost:7101/dp2/medrec/index.xhtml)
8. Under Administrator, click on Login.
9. Login with new security realm credential that is administrator/welcome1.
10. You must get **Incorrect username or password!**.
11. Login with old security realm credential that is administrator/adminsitrator123.
12. Click on Logout. Click on Logout again.

Here we learned how you can have two security realms in a domain. So one of your domain partitions can use default security realm and other can use custom security realm created by you in same domain. 


# LAB 4: EXPORT/IMPORT DOMAIN PARTITION
## Overview 

Exporting and importing partitions let WLS system administrators easily move partitions from one domain to another, including the applications that are deployed to the partition. This feature is useful for replicating partitions across the domains and for moving domains from a development to a testing then production environment. 

Exporting a domain partition creates a partition backup and stores it in an archived format. You can export a domain partition from source domain with its entire configuration and data. With few configuration changes, you can then import the partition archive into another instance of multi-tenant WLS (the target domain). You might need to update any domain dependencies, such as targets and security realms, and optionally update other attributes in the partition configuration to make it valid. 

When a partition is exported from the source domain it is packaged in a partition archive. Included in the partition archive is:
* The partition configuration.
* Any resource group contained in the partitions.
* Any resource group templates referred to by those resource groups. 
* The contents of the file system, <partition-file-system>/config directory. 
* Optionally, application binaries and configuration for applications deployed to the partition. 

No application runtime state or application-specific runtime configuration is included in the partition archive. Examples of what would not be exported are JMS messages in queues, users in an embedded LDAP realm.

In this Lab, We will create a Non-JRF domain dev_domain and configure it with all required resources for Medrec application. You will remove domain partition dp1 from base_domain. As this domain partition is targeted to Virtual Target VT-Medrec-1 and we are going to import a new domain partition on this Virtual target. So we need to remove this domain partition dp1 for this Lab2.

We are going to learn the following:
* Exporting a domain partition from a Non-JRF domain dev_domain and importing it to a Restricted JRF domain base_domain. 

Note: To simplify import/export both domains contain Virtual Target with the same name. In our case, base_domain and dev_domain has VT-Medrec-1 as Virtual Target. It is possible to make import/export without that restriction. To import partition and bind it to virtual target of different name, you should modify settings inside associated *-attributes.JSON file.

Please remember that Virtual Target may be assigned to the one and only one domain partition. This is why before importing please ensure that original domain partition dp1 was completely removed from domain configuration .

## Stop and remove domain partition dp1 from base_domain.

1. In Fusion Middleware Control [http://localhost:7001/em](http://localhost:7001/em) , Click on **WebLogic Domain -> Environment -> Domain Partition**. 
2. Check the **box** near **dp1** then click on **Control -> Stop->Force Stop Now**. On the Confirmation Screen Click on **OK**. Once you see the message **Partition state after the operation is SHUTDOWN** then click on **Close**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/67.JPG)
3. Check the box near **dp1** and make it highlighted then click on **Delete**. In Delete Domain Partition Screen, click on OK.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/68.JPG)
4. Go to Firefox and type the URL: [http://localhost:7101/dp1/medrec/](http://localhost:7101/dp1/medrec/)
5. Confirm that page return **Error 404 Not Found**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/69.JPG)

## Create a new dev single server (Admin Server) domain

We are going to create a domain which contains only Admin Server, as the previous domain base_domain is created with RESTRICTED-JRF template. But this domain will be created by default template that is with basic template.

1. Open a new tab. 
2. cd /u01/wins/wls1221/oracle_common/common/bin/
3. ./config.sh
4. Select **Create a new domain** and Enter **/u01/wins/wls1221/user_projects/domains/dev_domain** as Domain Location then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/70.JPG)
5. Leave **Default** on Templates then click on **Next**.
6. Enter **weblogic/welcome1** as Name/Password in Administrator Account then click on **Next**.
7. Leave default on Domain Mode and JDK then click on **Next**.
8. Check the box near to Administration Server then click on **Next**.
9. In Administration Server, Enter 9001 as Listen Port then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/71.JPG)
10. Click on **Create** then click on Next. Click on **Finish**. 

## Configure domain for Medrec Application

In Lab 2, you configure the domain using Fusion Middleware console, but here we are going to configure domain using Weblogic Admin Console. The operation related to Multitenancy, we can also perform using WebLogic Admin Console. 

1. cd /u01/wins/wls1221/user_projects/domains/dev_domain/
2. ./startWebLogic.sh
3. In Tab, Click on Terminal -> Set Title, Enter **dev_admin** as Title then Click on OK.
4. Go to Firefox and type the WebLogic Admin Console URL: [http://localhost:9001/console](http://localhost:9001/console).
5. Enter **weblogic/welcome1** as **Username/Password** then click on Login.
6. Creation of Virtual Target.                      
 * Click on **Environment -> Virtual Targets**.                                                        
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/72.JPG)
 * Click on New.
 * Enter the following then click on **OK**.
	
			Name:		VT-Medrec-1 (Both Virtual Target Name will be same)

			Target:		Admin Server

			URI Prefix:	/devDP
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/73.JPG)
7. Creation of Domain Partition.
 * Click on **Domain Partition -> New**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/74.JPG)
 * Enter **Medrec-Dev** as Name and **uncheck** the box for **Default Resource Group**. Click on **Next**.
 * Check the box for **VT-Medrec-1** then click on **Next**. 
 * In Default Targets, Move **VT-Medrec-1** to Chosen. Click on **Finish**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/75.JPG)
 * In **Domain Partition -> Control tab**, check the box near Medrec-Dev and click on **Start**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/76.JPG)
8. Creation of Resource Group
 * Click on domain partition **Medrec-Dev**. 
 * Click on **Resource Groups -> Configuration tab** then click on New.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/77.JPG)
 * Enter **appRG** as Name, Leave others as default then click on **OK**. ( Note:  We have created script through which you can create the remaining resources, you need to run the file MedrecInMedrec-Dev.sh inside /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4, and then you can directly go to **Exporting the domain partition** section.)
9. Creation of Data Source.
 * Click on **dev_domain -> Services -> Data Sources** then click on **New-> Generic Data Sources**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/78.JPG)
 * Enter the following and click on **Next**.

			Name:			MedRecGlobalDataSourceXA

			JNDI Name:		jdbc/MedRecGlobalDataSourceXA

			Scope:			appRG in Medrec-Dev

			Database Type:		Oracle
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/79.JPG)
 * Select **Oracle's Driver (Thin XA) for Service connections; Version: Any** then click on Next.
 * In Transaction Options, click on **Next**.
 * Enter the following and click on **Next**. 
	
			Database Name:			pdborcl

			Host Name:			localhost

			Port:				1521
	
			Database User Name:		medrec1
	
			Password:			medrec1
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/80.JPG)
 * click on **Test Configuration** and verify the connectivity.
 * Click on **Next** then Click on **Finish**.
10. Creation of JMS Server.
 * Click on **Services -> Messaging -> JMS Servers**.
 * Click on New.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/81.JPG)
 * Enter the following and click on **Next**.
	
			Name:		DevJMSServer
	
			Scope:		appRG in Medrec-Dev
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/82.JPG)
 * Click on **Create a New Store**.
 * Select **File Store** as Type then click on **Next**.
 * Enter **MedrecDev-fs** as Name and **appRG in Medrec-Dev** as Scope then click on **Next**. Click on **Finish**. 
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/83.JPG)
 * Select **MedrecDev-fs** as Persistent Store then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/84.JPG)
 * Click on **Finish**.
11. Creation of JMS Module.
 * Click on **Services -> Messaging -> JMS Modules** then click on New.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/85.JPG)
 * Enter **DevJMSModule** as Name and **appRG in Medrec-Dev** then click on **Next**. 
 * Check the box for **Would you like to add resources to this JMS system module** then click on **Finish**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/86.JPG)
12. Creation of Subdeployment.
 * Select **Subdeployments** tab then click on **New**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/87.JPG)
 * Enter **DevMedrecJMS** as Name then click on **Next**.
 * Select **DevJMSServer** as Target then click on **Finish**.
13. Creation of Connection Factory.
 * Click on Configuration tab then click on New.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/88.JPG)
 * Select the box for Connection Factory then click on Next.
 * Enter **DevMedRecConnectionFactory** as Name and **com.oracle.medrec.jms.connectionFactory** and leave other default then click on **Next**.
 * Click on **Finish**.
14. Creation of Distributed Queue.
 * Click on **New**. 
 * Select the box for Distributed Queue then click on **Next**.
 * Enter **PatientNotificationQueue** as Name and **com.oracle.medrec.jms.PatientNotificationQueue** as JNDI Name and leave other default then click on **Next**. 
 * Click on **Advanced Targeting**, Select DevMedrecJMS as Subdeployments and DevJMSServer as Targets then click on **Finish**.    
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/89.JPG)
15. Creation of Mail Session. 
 * Click on **Services -> Mail Sessions**.                              
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/90.JPG)
 * Click on **New**.
 * Enter the following then click on **Next**.
	
			Name:			MedRecMailSession

			JNDI Name:		mail/MedRecMailSession

			Scope:			appRG in Medrec-Dev
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/91.JPG)
 * Click on **Finish**.
16. Deployments of Application
 * Click on **Deployments** then on **Install**.
 * Select the medrec.ear application from the Path **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/** then click on **Next**.
 * Select **Install this deployment as an application** and **appRG in Medrec-Dev** as Scope then click on **Next**. Click on **Finish**.                                  
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/92.JPG)
 * Click on Install then Select the physician.ear application from the Path **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/** then click on **Next**.
 * Select **Install this deployment as an application** and **appRG in Medrec-Dev** as Scope then click on **Next**. Click on **Finish**.
 * Click on **Install** then Select the chat.war application from the Path /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/ then click on **Next**.
 * Select **Install this deployment as an application** and **appRG in Medrec-Dev** as Scope then click on **Next**. Click on **Finish**.
 * Go to Firefox and type the URL: [http://localhost:9001/devDP/medrec/](http://localhost:9001/devDP/medrec/) and confirm the execution of application.

## Exporting the domain partition

1. Go back to admin console [http://localhost:9001/console/](http://localhost:9001/console/)  of dev_domain.
2. Click on **Domain Partition**, and then check the box near to **Medrec-Dev** then click on **Export**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/93.JPG)
3. Select the box for **Include Application Bits** and enter **/home/oracle/Desktop** as Path then click on **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/94.JPG)
4. Go to Desktop and Verify the Creation of **Medrec-Dev-attributes.json** and **Medrec-Dev.zip** file.

## Importing the domain partition 

1. Go back to EM console of base_domain. Go to Firefox and type the WebLogic Admin Console URL: [http://localhost:7001/em](http://localhost:7001/em).
2. Enter **weblogic/welcome1** as **Username/Password** and click on **Login**.
3. Click on **WebLogic Domain-> Environment ->Domain Partition**. 
4. Click on Import. Click on **Browse** button, Select the file **Medrec-Dev.zip** from **/home/oracle/Desktop** directory then click on **OK**.                                             
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/95.JPG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/96.JPG)
5. Initially it will have State **Unknown**. Wait for 1 or 2 minute, click on Refresh icon to get the current state. 
6. Once the status for **Medrec-Dev** domain partition is **Shutdown**, check the box, near Medrec-Dev then click on **Control -> Start**. Click on **Close**. Click on the Refresh icon to get the current state.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/97.JPG)
7. Go to Firefox and type the URL: [http://localhost:7101/dp1/medrec/](http://localhost:7101/dp1/medrec/)
8. Click on **Getting Started!** Under Administrator, click on **Login**.
9. Enter **administrator/administrator123** as Username/Password then click on **Sign in**. 
10. Click on Logout. Click on Logout again. (Note: As we have VT-Medrec-1 as Virtual target in both the domains base_domain and dev_domain. In base_domain, we have added administrator user to default security realm. So as this domain partition becomes part of this domain. It also uses the default security realm. Here you are accessing the application using /dp1 in the URL because, we have Virtual target VT-Medrec-1 has /dp1 as URI, So Virtual target definition do not change during import.) 
11. Come back to tab **dev_admin**.
12. Stop the Weblogic Server running in dev_domain, by pressing Ctrl+C in tab in which Admin Server is running. Close the Tab.

# LAB 5: RESOURCE CONSUMPTION MANAGEMENT
## Overview

When applications that are deployed to multiple collocated Domain Partitions, access shared resources (low level resources such as CPU, network, storage) two key problems are likely to be faced:
* Contention and unfairness during allocation: Multiple request for a Shared resources results in contention and interference. Abnormal resource consumption requests may happen due to benign reasons (high traffic-genuine or DDoS), misbehaving, buggy applications or malicious code. These requests could overload the capacity of shared resources, thereby preventing another consumer's access to the resource.
* Variable performance leading to potential Service Level Agreement (SLA) violations: From a cloud operations perspective, performance for different collocated consumers.

It is therefore critical to manage and isolate access to shared resources in the WebLogic application Server by domain partition to ensure fairness in allocation, prevent contention/interferences of access to shared resources and to provide consistent performance for multiple co resident tenants. The Resource Consumption Management (RCM) feature in WebLogic 12.2.1 Multitenancy allows WebLogic System administrator to specify resource consumption management policies (allows the specification of constraints, recourse actions and notification) on shared resources such as CPU, Heap, File and Network.
You can create resource manager based on the following parameter:
* Retained Heap
* CPU Time
* Open File Descriptor 

You need to provide the value for below action, as it reaches to that value. It will trigger the following action:

**Notify:** 		Inform administrator that a threshold has been crossed.

**Slow:**		Reduce Partition ability to consume more resources. 

**Stop:**		Initiate the shutdown sequence for the offending partition. 

In this lab first we create a resource manager based on the Heap size then we specify the values with respective actions. So as following values reaches that action get triggered. We will use sample application through which we can modify the value of Heap size and we will see the action associated. 

In this lab we are going to perform the following operations:
* Enabling RCM by adding extra arguments in Server Java Arguments.
* Creating Resource manager on the basis of Heap Size. 
* Assign Resource manager to a Domain Partition.
* Running an example to understand the functioning of RCM.

## Enabling RCM by adding extra arguments in Server JAVA_OPTION Arguments

1. Go to Firefox and type the Fusion Middleware Control Console URL: [http://localhost:7001/em]( http://localhost:7001/em)
2. Click on **WebLogic Domain -> Control -> Clusters**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/98.JPG)
3. Check the boxes near app-cluster then click on **Control -> Shutdown ->Force Shutdown Now**.  Click on **Forcibly Shutdown Servers**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/99.JPG)
4. Open a new tab.
5. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5
6. cp setDomainEnv.sh /u01/wins/wls1221/user_projects/domains/base_domain/bin/
7. In above command we have modified the JAVA_OPTIONS as specified below. JAVA_OPTIONS="**-XX:+UnlockCommercialFeatures -XX:+ResourceManagement -XX:+UseG1GC** ${JAVA_OPTIONS} ${JAVA_PROPERTIES}"
8. Go back to Fusion middleware control then click on **WebLogic Domain -> Control -> Clusters**.
9. Check the box near to **app-cluster** to make it highlighted and then click on **Control -> Start -> Start Servers**.
10. tail -f /u01/wins/wls1221/user_projects/domains/base_domain/servers/app-cluster-1/logs/app-cluster-1.log
11. In this tab, Click on Enter **Terminal -> Set Title** and **app-cluster-1** then click on **OK**.We will use these logs to monitor resource consumption manager lab.

## Creating a Resource Manager and Configuring Resource Manager for a domain partition

1. Go to FMW control [http://localhost:7001/em]( http://localhost:7001/em)
2. Enter weblogic/welcome1 as Username/Password then click on Login.
3. Click on **WebLogic Domain->Environment -> Resource Consumption Managers**.
4. Click on **Add Resource Manager** and Enter the following value then click on **OK**
	
			Resource Manager:		smallHeap

			Policy Type:			HeapRetained

			Shutdown:			400

			Slow:				250

			Notify:				200
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/100.JPG)

## Associate the Resource Manager with Medrec-Dev domain partition

1. Click on **WebLogic Domain -> Environment->Domain Partition** then click on **Medrec-Dev**.
2. Click on **Domain Partition ->Administration -> Resource Sharing**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/101.JPG)
3. Under **Resource Manager Configuration**, and Select **Use a Resource Manager configured for the domain** and choose **smallHeap** then click on **Save**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/102.JPG)
4. Click on **Start Up** near Domain partition. Click on **Close**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/103.JPG)
5. Open a new tab. 
6. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5
7. **./DeployHeap.sh**
8. Close the tab. 
9. Go back to Firefox and type the URL: [http://localhost:7101/dp1/heapApp/](http://localhost:7101/dp1/heapApp/) 
10. Enter 160 in **Allocate Heap** then click on **Submit** then observe the logs of app-cluster-1 managed server. After that no Warning message should be observed in the log as we didn't cross the boundary of any RCM action.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/104.JPG)
11. Enter 50 in **Allocate Heap** then click on **Submit** then observe the logs of app-cluster-1 managed server. We will cross the first (**Notify**) boundary of RCM actions. So we should see associated log message.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/105.JPG)
12. Enter 50 in Allocate Heap then click on Submit then observe the logs of app-cluster-1 managed server. We crossed the second limit (**Slow**) so the associated message should be seen in the log.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/106.JPG)
13. Enter 150 in **Allocate Heap** then click on **Submit** then observe the logs of app-cluster-1 managed server. This will exceed the limit of memory allowed to be used by that partition. So to prevent other partitions from suffering of lack of memory WebLogic will shutdown the partition.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/107.JPG)
14. Refresh the page, [http://localhost:7101/dp1/heapApp/](http://localhost:7101/dp1/heapApp/) which return 404 and confirm shutdown of the domain partition Medrec-dev in managed server 1.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/108.JPG)

Note: As this domain partition is target to virtual target which is target at cluster which consists of two managed servers. So this domain partition stopped working on managed server 1, but if you access the application on managed server 2, you still will be able to access the application in this domain partition. If similar things happen in managed server 2 and domain partition shutdown on managed server 2 as well, then domain partition will be shutdown. 

# LAB 6: OTD INTEGRATION AND RESOURCE MIGRATION

## Overview

This lab describes how Oracle Traffic Director can front end a WLS MT Deployment topology for a large enterprise, providing an integrated, end to end administration experience for the server life cycle, and partition management. 

For this lab, we installed OTD in Collocated mode. We create one domain otd_domain for OTD instance then we show how to register an OTD instance in WebLogic Domain base_domain. Then we show how you can create partition front ended by OTD. 

Oracle Traffic Director has an administration plug in which is responsible for handling life cycle events and automatically configuring Oracle Traffic Director with the corresponding configuration

When you create a WLS MT partition, a corresponding Oracle Traffic Director partition is created for you. The Oracle Traffic Director partition is simply a grouping with the same name as the partition and the resource group. The life cycle of an Oracle Traffic Director partition and its corresponding artifacts are linked to the life cycle of the partition. 
The Oracle Traffic Director console provided a partition table with the list of Oracle Traffic Director Partitions to identify the Oracle Traffic director artifacts that are mapped to partitions and resource groups.

Oracle Traffic Director Artifacts map to WebLogic Server MT artifacts as follows:
* Each cluster maps to an origin server pool.
* The hostnames of a virtual target that is associated with the partitions and/or resource groups maps to a virtual server.
* Each partition or resource group maps to a route within the virtual server corresponding to the hostname of the virtual target. 

In this lab, we are going to perform the below operations.
* We create an OTD domain; in that domain we create a machine and OTD configuration.
* We register that OTD Runtime instance inside the WebLogic domain. 
* We create a domain partition front ended by OTD. 
* We deploy a simple application to verify the OTD integration with domain partition. 
* We migrate a resource group from one cluster to other cluster. 

## Create OTD Restricted JRF Domain

1. Open a new tab.
2. cd /u01/wins/wls1221/oracle_common/common/bin/
3. **./config.sh**
4. Select **Create a new domain** and enter **/u01/wins/wls1221/user_projects/domains/otd_domain** as Domain Location then Click on Next.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/109.JPG)
5. Enter **Oracle Traffic Director- Restricted JRF** Template as it also selects other required template then Click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/110.JPG)
6. Enter **/u01/wins/wls1221/user_projects/applications/otd_domain** as Application Location then Click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/111.JPG)
7. Enter **weblogic/welcome1** as **Username/Password** then Click on **Next**.
8. Leave Default in **Domain Mode and JDK** then Click on **Next**.
9. In **Advanced Configuration**, Select the box near **Administration Server** then Click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/112.JPG)
10. Change Listen port to **8001** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/113.JPG)
11. Click on **Create**.
12. Click on **Next** then Click on **Finish**.
13. cd /u01/wins/wls1221/user_projects/domains/otd_domain/
14. **./startWebLogic.sh**
15. In terminal, Click on **Terminal -> Set Title**. Enter **otd_admin** as Title then click on **OK**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/114.JPG)
16. Open a New tab.
17. cd /u01/wins/wls1221/user_projects/domains/otd_domain/
18. vi nodemanager/nodemanager.properties
19. Change Listen Port to 5557 then save the file and close it.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/115.JPG)
20. bin/startNodeManager.sh
21. In tab, Click on **Terminal -> Set Title**. Enter **otd_nm** as Title then click on **OK**.
22. Go to Firefox and type the Fusion Middleware Control URL [http://localhost:8001/em](http://localhost:8001/em) .
23. Enter **weblogic/welcome1** as **Username/Password** then click on **Login**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/116.JPG)
24. Create a Machine.
 * Click on **WebLogic Domain ->Environment ->Machines**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/117.JPG)
 * Click on Create, Enter **otd_machine** as Name and **Unix** as Machine OS then Click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/118.JPG)
 * Change Listen Port to **5557** then Click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/119.JPG)
 * Click on **Create**.
 * Create an OTD Configuration.
 * Click on **WebLogic Domain -> Administration -> OTD Configurations**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/120.JPG)
 * Click on **Create**.
 * Enter **mt** as Name and **HTTP** as **Origin Server Type** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/121.JPG)
 * Leave Default in **Create Configuration: Listener** then click on **Next**.
 * Leave Default in **Create Configuration: Server Pool** then click on **Next**.
 * Select the **otd_machine** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/122.JPG)
 * Click on **Create Configuration**.
 * Check the box near **mt** to make it highlighted and then click on **Start Instances**. Click on **Close**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/123.JPG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/124.JPG)

Note:  Go to Firefox and type the URL [http://localhost:8080/](http://localhost:8080/) to verify that server is listening.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/125.JPG)

## Registering an OTD Runtime Instance

1. Go to base domain Fusion Middleware Control Console [http://localhost:7001/em](http://localhost:7001/em) .
2. Enter weblogic/welcome1 as User Name/Password then click on Login. 
3. Click on **Weblogic Domain -> Environment -> OTD Runtimes**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/126.JPG)
4. Click on **Register Runtime**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/127.JPG)
5. Enter the following and then click on OK.
	
			Runtime Name:			otd_runtime

			OTD Configuration Name:		mt

			Admin Server Host:		localhost

			Admin Server Port:		8001

			Username:			weblogic

			Password:			welcome1

			OTD Domain Name:		otd_domain
		
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/128.JPG)

## Creating Domain Partition front ended by OTD

1. Click on **WebLogic Domain -> Environment ->Virtual Targets**.
2. Click on **Create**.
3. Enter **VT-1** as Name and **/dp4** as Uri Prefix then click on Add to Enter **localhost** as Host Name then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/129.JPG)
4. Select **app-cluster** as Cluster then click on **Create**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/130.JPG)
5. Click on **WebLogic Domain -> Environment -> Domain Partition**.
6. Click on **Create**.
7. Enter **dp4** as name and Check the box for **Use OTD for load balancing** and select **otd_runtime** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/131.JPG)
8. Check the box for **VT-1** as shown below then click on Next.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/132.JPG)
9. Enter **app4RG** as Resource Group Name and Move **VT-1** to **Selected Targets** then click on **Next**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/133.JPG)
10. Review the Configuration then click on **Create**.
11. Check box near to **dp4** and click on **Control -> Start**. Click on **Close**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/134.JPG)

## Deploying simple application to test OTD integration with weblogic

Here we are going to deploy heapApp.war which we used in Lab5. We will access that application through **load balancer** now.

1. Click on dp4.
2. Click on **Domain Partition -> Administration -> Resource Groups**.
3. Click on Resource Group **app4RG**.
4. Click on **Deployments** tab, and then click on **Deployment -> Deploy**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/135.JPG)
5. Select **Archive or exploded directory is on the server where Enterprise Manager is running** then click on **Browse**. Select the file **ScrabbleStage.war** from /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab6/ location then click on OK.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/136.JPG)
6. Click on **Next** then click on **Deploy**. Click on **Close**.
7. Go to Firefox and type the URL [http://localhost:8080/dp4/ScrabbleStage/Scrabble.jsp](http://localhost:8080/dp4/ScrabbleStage/Scrabble.jsp).
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/137.JPG)

## Migration Resource Group from one Cluster to other Cluster

Now we are going to migrate Resource Group app4RG from app-cluster to another cluster. As the application deployed in app4RG are front ended by OTD, when you migrate your resource group on other cluster. WebLogic automatically detect the server setting and you can access the application continuously without doing any manual configuration.

![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/138.JPG)

* When you click on **migrate** the following actions performs:
* Migrate API is called 
* Resource Group starts on new hosts
* Sessions are replicated to new hosts.
* New origin server pool added to the OTD Configuration
 * Old pool used for sticky request to old pool only
 * New pool used for all new requests.
* Graceful shutdown called on resource group on original hosts.
* Virtual target configuration updated with new cluster only. 
So using the same URL, you can access the application. 

1. Go back to Fusion middleware control console [http://localhost:7001/em](http://localhost:7001/em) 
2. Create a new Cluster.
 * Click on **WebLogic Domain -> Environment -> Clusters**.
 * Click on **Create -> Dynamic Cluster**.
 * Enter **new-cluster** as Name then click on **Next**.
 * Enter **1** as Dynamic Cluster Size then click on Next.
 * Select the box for **Use a single machine for all dynamic servers** and choose **machine** as Selected Machine then click on **Next**.
 * Enter 9100 and 10101 as **Base Listen Port** and **SSL Base Listen Port** Respectively then click on Next.
 * Review the Configuration then click on **Create**.
 * Click on **WebLogic Domain -> Control -> Clusters**.
 * Check the box near **new-cluster** to make it highlighted and then click on **Control -> Start -> Start Servers**.(Note: Before going to next step, wait till managed server in new-cluster get started, you can monitor the progress in base_nm tab.)
3. Migration of Resource Group.
 * Click on **WebLogic Domain -> Environment -> Resource Groups**..
 * Check the box near to app4RG to make it highlighted and then click on Migrate. 
 * Select **new-cluster** as New Target then click on Migrate. In Confirmation window, click on Migrate.
 * Once you notice **Migrating resource group app4RG -Completed successfully** message then click on Close.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/139.JPG)


## Access Application through OTD

1. Go to Firefox and type the URL [http://localhost:8080/dp4/ScrabbleStage/Scrabble.jsp](http://localhost:8080/dp4/ScrabbleStage/Scrabble.jsp) .
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/140.JPG)
2. As the Resource group migrated from app-cluster to new-cluster. But still you are able to access the application through same URL. Load balancer is redirecting all requests to new cluster. new-cluster-1 is running on 9101 port and app-cluster-2 is running on 7102.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/141.JPG)
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/142.JPG)

So you can successfully migrate the resource group from one cluster to another cluster without affecting the front end of your application. 

# LAB 7: CLONING A PARTITION

## Overview:

This lab describes, how you can clone the existing partition, Earlier in Lab 2, we created two domain partitions dp1, dp2 for Medrec applications. The differences are both the partitions were targeted to different Virtual target and database connections and they were using different security realms. Instead of creating dp2 manually and configure it manually through WLST, Admin Console or Fusion Middleware Console. We can use the dp2 partition and we can clone it and later modify it to use different database and use different security realms. 

We will use dp2 partition for cloning.

## Applying Patch to domain:

We have found some bug in existing installer, so we are using an interim patch Patch.jar as a workaround. There is bug opened for it [OWLS-35927](https://jira.oraclecorp.com/jira/browse/OWLS-35927).

1. In Fusion Middleware Console, Click on **Weblogic Domain -> Environment -> Clusters**.
2. Check the box near app-cluster to make it highlighted, and then click on **Control -> Shutdown -> Force Shutdown Now -> Forcibly Shutdown Servers**.  
3. Go back to terminal named **base_admin**.
4. Press CTRL+C to shutdown the Admin Server in base_domain.
5. **export PATCH_CLASSPATH="/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab7/Patch.jar"**
6. ./startWebLogic.sh
7. Once Admin Server up and running, go back to FMW Console, and Click on **WebLogic Domain -> Environment -> Clusters**.
8. Check the box near app-cluster to make it highlighted and then click on **Control -> Start -> Start Servers**.

## Exporting a domain:

1. Go back to Firefox and type the Fusion Middleware Control Console URL: [http://localhost:7001/em](http://localhost:7001/em) .
2. Enter **weblogic/welcome1** as **Username/Password** then Click on **Login**.
3. Click on **WebLogic Domain -> Environment -> Domain Partitions**. 
4. Check the box near **dp2** to make it highlighted, and then Click on **Export**.
5. Click on Browse and Select the **Desktop** folder from **/home/oracle** location and click on **OK**.
6. Check the box for **Include application bits in the zip archive** then click **OK**.
7. You can go to the Desktop and verify the creation of **dp2.zip** and **dp2-attributes.json** file. 

## Importing a domain:

1. Click on **WebLogic Domain -> Environment -> Virtual Targets**.
2. Click on **Create**.
3. Enter the following and then click on Next.
	
			Name:			VT5

			Uri Prefix:		/dp5

			Hosts:			localhost
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/143.JPG)
4. Select **app-cluster** as Cluster and then click on **Create**.
5. Go back to the terminal. The below command will modify the Virtual Target name in JSON file.
6. sed -i -e 's/VT-Medrec-2/VT5/g' /home/oracle/Desktop/dp2-attributes.json
7. Go back to Firefox in Fusion Middleware Control Console, Click on **WebLogic Domain -> Environment -> Domain Partitions**. 
8. Click on Import, Browse to the /home/oracle/Desktop/dp2.zip and click on OK.
9. Specify the new domain partition name dp5 in **Override domain partition name (optional)** and then click on **Ok**.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/144.JPG)
10. Click on Refresh icon.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/145.JPG)
11. Check the box near **dp5** to make it highlighted, and then click on **Control -> Start**.
12. Once you see **Start Operation on target dp5 successful** in Confirmation window, click on **Close**.
13. Verify the execution of Medrec application in dp5 at [http://localhost:7101/dp5/medrec]( http://localhost:7101/dp5/medrec) .

# CLEANING AND RESETING

## Cleaning up Environment
1. Go back to Fusion Middleware Control [http://localhost:7001/em](http://localhost:7001/em) 
2. Click on WebLogic Domain -> Control -> Cluster. 
3. Check the boxes near to both the cluster then click on Control -> Shutdown -> Force Shutdown now.  Click on Forcibly Shutdown Servers.
![alt text](https://raw.githubusercontent.com/oracle-weblogic/weblogic-innovation-seminars/caf-12.2.1/WInS_Demos/MT-Workshop/md.resources/146.JPG)
4. Press CTRL + C on Tab title with otd_admin, otd_nm, base_nm, base_admin, dev_admin,app-cluster-1. 
5. Open a new terminal.
6. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/CleanUp/
7. ./CleanEnvironment.sh

# Appendix:  

This Section is to provide you help, if you already run this workshop once, and only interested to showcase any specific features or any specific lab. We created few scripts about which the description is given below. 

Lab1-2.sh: It starts the DB, and create user and populates the DB for all domain partition we need. Then it create the base_domain, in that domain we create the machine and dynamic cluster. After that we create three domain partition dp1, dp2 and dp3. Basically after execution of this script, you will be at the end of Lab 2.

Note: After executing Lab1-2.sh, if you want to see proper metrics/state of cluster/servers you need to manually apply JRF template to cluster. You need to restart the cluster as well. 

Lab3.sh: This script stop the domain partition dp1 and create new security realm newrealm and assign this security realm to dp1, and start the domain partition dp1. It perform the same task what Lab 3 does.

Lab4.sh:  This script creates dev_domain, it configures the Medrec application in Medrec-Dev domain partition in dev_domain, and then it removes the dp1 in base_domain. So you can login to admin console of dev_domain and export the partition and later import it in base_domain through admin console. 

Lab5.sh: It sets the configuration parameter for RCM in SetDomainEnv.sh script then it restart the cluster and also deploys heapApp.war in dp2 partition in base_domain.

Lab6.sh: This script creates otd_domain first, inside otd_domain; it creates otd_machine and OTD Configuration. Then it creates load balancer instance and start it. Then in base_domain, it creates the Virtual target VT-1, and registers OTD Runtime, after that it creates domain partition dp4 with otd_runtime and then deploy the heapApp.war in app4RG resource group inside dp4 partition. It also create new-cluster dynamic cluster, and start domain partition dp4 and server in new-cluster. After running this script, you can move to resource group app4RG in dp4 in FMW console, and migrate the resource group.

Lab7_prep.sh: This script applies the patch, for this it stops the Cluster and Admin Server first, then it starts Admin Server and Cluster, and later it create virtual target VT5. To perform Lab 7 as demo, user need to run this script, then he need to export partition, modify json file to include new virtual target, then he can import partition.  
CleanEnvironment.sh: This script stops the servers and Node managers, remove the otd_domain, base_domain, dev_domain. It also removes the user from pluggable database, and then it stops the DB.

#Appendix- Multitenancy Workshop in Cloud 
This section helps you to demo the features of Multitenancy on Cloud; we have seen Lab2, Lab3, Lab4, Lab5 and Lab7 in on premise. Multitenancy Workshop as demo exactly goes parallel to Multitenancy workshop in on premise.  You need to follow the below steps to perform the same. 

##Lab 1: CREATING DBCS/JCS INSTANCES
In this, we create the required environment. We expect the user to run command in Lab 1 as pre-requisite before he comes to workshop, as this steps are time taking. 

**Creation of pair of SSH Key:**
* cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop
* ./createSSHkeys.sh (**createSShKeys.sh** scripts create the pair of public and private key for you with name winsmt.pub and winsmt respectively.) 

**Preparation of environment:**
You need to modify the **environment.properties.MT** file present in **/u01/content/weblogic-innovation-seminars/cloud.demos** folder. We expect the user to modify the following parameter values:
**opc.identity**, **opc.username**, **opc.password** and **ssh.public.key**, he needs to copy the public key value from **winsmt.pub** file and put it in **ssh.public.key** value. You can modify the values of other parameter as well, but in order to keep things simple, modify only these four values and then you need to rename the file with new name **environment.properties**. 

1. We assume that it is your fresh oracle cloud account, and you didn't perform any operation on it, so we will start from scratch. As the steps for creating Cloud storage container, DBCS and JCS takes 15-20 minutes, you can refer the doc **WInS - Demo Guides - JCS Setup.PDF** available in **/u01/content/weblogic-innovation-seminars/cloud.demos/common/doc** folder inside the Virtual Box for more information.
2. We need to create the Storage cloud container first.
3. cd /u01/content/weblogic-innovation-seminars/cloud.demos
4. **mvn install -DexecuteCloudUtil -Dgoal=storage-create**
5. Verify the creation of storage container by below command. 
6. **mvn install -DexecuteCloudUtil -Dgoal=storage-list**
7. We create the DBCS instance with name **winsdemo**.
8. **mvn install -DexecuteCloudUtil -Dgoal=dbcs-create** (Creation of DBCS instance may take about 20 minutes!! Please don't execute creation of JCS instance until you get information that DBCS is in **Running** state)
9. **mvn install -DexecuteCloudUtil -Dgoal=dbcs-get-instance-details** (execute as many times until DBCS is in **Running** state in that case write down DBCS IP address) 
10. We create the JCS instance with name **winsdemoWLS**.
11. **mvn install -DexecuteCloudUtil -Dgoal=jcs-create**
12. Creation of JCS instance may take about 20 minutes!! Verify the creation of JCS instance. 
13. **mvn install -DexecuteCloudUtil -Dgoal=jcs-get-instance-details** (execute as many times until JCS is in **Running** state in that case write down JCS IP address) 

The above steps creates a domain **winsdemoWLS_domain** inside the JCS VM, and pluggable database **PDB1._{ Value of opc.identity from environment.properties}_.oraclecloud.internal**. A WebLogic domain contains the cluster **winsdemoWLS_cluster** with **winsdemo_adminserver** as Admin Server and **winsdemo_server_1** as managed server.

##LAB 2: MULTITENANCY CONFIGURATION

1. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2
2. **mvn install -DLab2 -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_** (This maven commands create users and populate the database for all the domain partitions, after that it creates three domain partitions dp1, dp2 and dp3. Basically it creates the similar environment as we have at the end of Lab 2 in workshop for on premise, but here on the cloud environment.

You can access the Medrec application running in domain partition dp1 and dp2; you can also access the day trader application running in dp3 partition.

Accessing Medrec application in dp1: [http://_{PUBLIC IP OF JCS INSTANCE}_/dp1/medrec](http://_{PUBLIC IP OF JCS INSTANCE}_/dp1/medrec)

Accessing Medrec application in dp2: [http://_{PUBLIC IP OF JCS INSTANCE}_/dp2/medrec](http://_{PUBLIC IP OF JCS INSTANCE}_/dp2/medrec)  

Accessing Daytrader application in dp3: [http://_{PUBLIC IP OF JCS INSTANCE}_/dp3/daytrader] (http://_{PUBLIC IP OF JCS INSTANCE}_/dp3/daytrader) 

## LAB 3: SECURITY ISOLATION

1. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab3
2. **mvn install -DLab3 -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_** (This maven commands stops the domain partition dp1 and creates new security realm  **newrealm** and assign this security realm to dp1, and adds the user **administrator** to new security realm with password **welcome1**, and then starts the domain partition dp1.It perform the same task, we do as part of Lab 3 of Multitenancy workshop in on premise.) 

## LAB 4: EXPORT/IMPORT PARTITION

1. cd  /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4
2. **./Lab4_cloud.sh** (This Lab4_cloud.sh scripts start the Database in local Virtual box, then it creates the user and populate the database with sample data. Then it creates a dev_domain, and starts admin server in it, later we configure all the resources required for conference planner application. This is simple application which we used during Java One in 2011 for registration purpose of various events. At the end of execution of this script, you can access the application on [http://localhost:9001/dp6/ConferencePlanner/](http://localhost:9001/dp6/ConferencePlanner/).)  
3. Open a new tab in browser, and type the URL for Admin Console for dev_domain [http://localhost:9001/console] (http://localhost:9001/console).
4. Enter **weblogic/welcome1** as **Username/Password** then click on **Login**.
5. Click on **Domain Partitions** from left side, then check the box for **dp6** and then click on **Export**.
6. Check the box for **Include Application Bits** and Enter the Path **/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/JCS** and then click on **OK**. 
7. Verify the creation of **dp6.zip** and **dp6-attributes.json** file in the **JCS** folder inside **Lab4** folder. 
8. **mvn install -DLab4 -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_** (This maven command copies the required files to DBCS instance first, and populate the database with sample data. Here we used the SQL scripts for that, In general, you can unplug the local database, copies related files to DBCS instance and then plug the pluggable database to database in DBCS or you can export and import database. But to simply the demo, we used the SQL scripts here.Then it copies the ZIP and JSON file to /tmp folder of JCS instance, and provides it sufficient permissions. It also creates the Virtual Target **VT6**, which we will use during the import partition.)
9. Open a new tab in terminal. 
10. Click on **Terminal -> Set Title**, enter **remote** as **Title** and then click on **OK**.
11. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop
12. **ssh  -i winsmt -L 7001:_{PUBLIC IP OF JCS INSTANCE}_:7001 opc@_{PUBLIC IP OF JCS INSTANCE}_** (This ssh commands, open an ssh tunnel to remote jcs instance, and port forwarding for admin server port 7001, in that way you can run the commands in remote machine as **opc** user. And access the admin console running in JCS by http://localhost:7001/console.)
13. Go to Admin Console of JCS instance [https://_{PUBLIC IP OF JCS INSTANCE}_:7002/console](https://_{PUBLIC IP OF JCS INSTANCE}_:7002/console) and enter **weblogic/welcome1** as **Username/Password** and then click on **Login**.
14. Click on **Domain Partitions** and then click on **Lock & Edit**.
15. Click on **Import**, specify the file **/tmp/dp6.zip** in **Path** and click on **OK**.
16. Click on **Lock & Edit**, and then click on **Services -> Data Sources -> cp**.
17. Click on the **Connection Pool** tab for **cp** datasource, and modify the URL  **jdbc:oracle:thin:@localhost:1521/pdborcl** with **jdbc:oracle:thin:@_{DBCS_INSTANCE_NAME}_:1521/PDB1._{Value of opc.identity from environment.properties}_.oraclecloud.internal** and then click on **Save**. Click on **Activate Changes**. Where **DBCS _INSTANCE_NAME** should be **winsdemo**, if you did not modify it in environment.properties file, and **opc.identity** name is your identity domain name, you specified in environment.properties file.
18. Click on **Domain Partitions**, go to **Control** tab, Check the box near **dp6** partition and then click on **Start**. On Confirmation screen click on **Yes**.
19. Click on the refresh icon, once the partition is in **RUNNING** state, go to the browser and access the application [http://_{PUBLIC_IP_OF_JCS_INSTANCE}_/dp6/ConferencePlanner/](http://_{PUBLIC_IP_OF_JCS_INSTANCE}_/dp6/ConferencePlanner/) .
Here we showed how can you lift and shift the partition running in development mode in on premise to production mode domain in Java Cloud Service. 

## LAB 5: RESOURCE CONSUMPTION MANAGEMENT

1. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5
2. **mvn install -DLab5 -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_** (This maven commands configure the parameter for **RCM** in **setDomainEnv.sh** script then it restart the cluster and also deploys the **heapApp.war** in **dp2** partition in **winsdemoWLS_domain**.) 
3. You need to **Lock & Edit** in **Fusion middleware control console** of **winsdemoWLS_domain**, then you need to create **Add resource manager** as specified in workshop or you can specify the value 200,300 and 400 respectively for Notify, Slow and Shutdown action for **smallHeap** and  then you need to **assign it to domain partition dp2**. Make sure to activate the changes at the end. 
4. Go back to **remote** tab, where you open ssh tunnel to JCS instance. 
5. **sudo su**
6. **tail -f /u01/data/domains/winsdemoWLS_domain/servers/winsdemo_server_1/logs/winsdemo_server_1.log|grep 'RCM'**
7. Go to **heap Application** page **http://_{PUBLIC_IP_OF_JCS_INSTANCE}_/dp2/heapApp**   Add the Value 100 each time, and observe the logs output, wait for 10 seconds after entering 100 every time. At the end of this lab, your partition dp2 will be shutdown. As in this case, Cluster has only one managed server, while in on premise Lab5, we have cluster with two managed server. 

## LAB 7: CLONNING A PARTITION

1. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab7
2. **mvn install -DLab7 -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_** (This maven scripts applies the patch, for this it stops the cluster and Admin Server first, add the patch jar in **PATCH_CLASSPATH** and then it starts Admin Server and Cluster, and later it creates Virtual target **VT5** in winsdemoWLS_domain.) 
3. Go back to remote tab; enter **CTRL+C** to stop the execution of tail command. 
4. **chmod -Rf 777 /tmp**
5. Go back to Admin Console of winsdemoWLS_domain [https://_{PUBLIC IP OF JCS INSTANCE}_:7002/console] (https://_{PUBLIC IP OF JCS INSTANCE}_:7002/console) .
6. Enter **weblogic/welcome1** as **Username/Password** then click on **Login**.
7. Click on **Lock & Edit** and then Click on **Domain Partitions**, then check the box for **dp6** and then click on **Export**. 
8. Check the box for **Include Application Bits** and Enter the Path **/tmp** and then click on **OK**.
9. Go back to remote tab; modify the **Virtual target** name in **dp6-attributes.json** file. 
10. **sed  -i 's/VT6/VT5/g' /tmp/dp6-attributes.json** (The above commands, replace the string 'VT6' with 'VT5'. VT5 is the virtual target name, which we use for importing the partition.)
11. Click on **Domain Partitions**, and then Click on **Import**, Enter **dp5** as **Domain partition name** and specify the file **/tmp/dp6.zip** in **Path** and click on **OK**.
12. In **Domain Partitions**, click on **Control** tab.
13. Check the box for **dp5**, and click on **Start**, on confirmation screen, click on **Yes**.
14. Click on refresh icon, once the Status for dp5 is **RUNNING**.
15. You can access the application on **http://_{PUBLIC_IP_OF_JCS_INSANCE}_/dp5/ConferencePlanner/** .

Note: In Lab 4, we also copied the dp6.zip to /tmp folder, But here when we Export the partition dp6, it override the dp6.zip and dp6-attributes.json. That's why we don't need to change the URL for JDBC data source cp in domain partition dp5. Make sure to close the ssh tunnel by pressing CTRL +C on  remote tab.

## CLEANUP:

* **cd  /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/CleanUp**

Here we have two options for the cleanup.

**_First case_**, if you execute all the labs Lab2, Lab3, Lab4, Lab5 and Lab7. Then you can reuse both the JCS instance and DBCS instance for the demo purpose. You need to perform the next step.
* **mvn install -DCleanUp -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_**
* **./CleanEnvironment.sh** (This script stops the admin server running in dev_domain and deletes the domain. It removes the user conference from database and stops the database.)

**_Second case_**, if you did not run any of the above lab or you runs only Lab1 and Lab4 or you configured the database for Medrec, Daytrader and Conference Planner application. You need to perform the next step. So that you can reuse the DBCS instance for the demo purpose again.
* **mvn install -DCleanDBCS -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_**
* you need to delete the JCS instance and create the JCS instance again. 
* cd /u01/content/weblogic-innovation-seminars/cloud.demos
* **mvn install -DexecuteCloudUtil -Dgoal=jcs-delete** (This steps take 10-15 minutes; you can confirm the status from browser through your cloud account access. Once it is deleted then executes the next command only.)
* **mvn install -DexecuteCloudUtil -Dgoal=jcs-create** (This steps take 15-20 minutes; you can confirm the status from browser through your cloud account access.)
* **./CleanEnvironment.sh** (This script stops the admin server running in dev_domain and deletes the domain. It removes the user conference from database and stops the database.)
