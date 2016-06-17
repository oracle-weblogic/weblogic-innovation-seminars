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
8. **mvn install -DexecuteCloudUtil -Dgoal=dbcs-create** (Creation of DBCS instance may take about 20 minutes!! Please don’t execute creation of JCS instance until you get information that DBCS is in “Running” state)
9. **mvn install -DexecuteCloudUtil -Dgoal=dbcs-get-instance-details** (execute as many times until DBCS is in “Running” state – in that case write down DBCS IP address) 
10. We create the JCS instance with name **winsdemoWLS**.
11. **mvn install -DexecuteCloudUtil -Dgoal=jcs-create**
12. Creation of JCS instance may take about 20 minutes!! Verify the creation of JCS instance. 
13. **mvn install -DexecuteCloudUtil -Dgoal=jcs-get-instance-details** (execute as many times until JCS is in “Running” state – in that case write down JCS IP address) 

The above steps creates a domain **winsdemoWLS_domain** inside the JCS VM, and pluggable database **PDB1._{ Value of opc.identity from environment.properties}_.oraclecloud.internal**. A WebLogic domain contains the cluster **winsdemoWLS_cluster** with **winsdemo_adminserver** as Admin Server and **winsdemo_server_1** as managed server.

##LAB 2: MULTITENANCY CONFIGURATION

1. cd /u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab2
2. **mvn install -DLab2 -Djcs.ip=_{PUBLIC IP OF JCS INSTANCE}_ -Ddbcs.ip=_{PUBLIC IP OF DBCS INSTANCE}_** (This maven commands create users and populate the database for all the domain partitions, after that it creates three domain partitions dp1, dp2 and dp3. Basically it creates the similar environment as we have at the end of Lab 2 in workshop for on premise, but here on the cloud environment.

You can access the Medrec application running in domain partition dp1 and dp2; you can also access the day trader application running in dp3 partition.
Accessing Medrec application in dp1: [http://_{PUBLIC IP OF JCS INSTANCE}_/dp1/medrec](http://_{PUBLIC IP OF JCS INSTANCE}_/dp1/medrec)
Accessing Medrec application in dp2: [http://_{PUBLIC IP OF JCS INSTANCE}_/dp2/medrec] (http://_{PUBLIC IP OF JCS INSTANCE}_/dp2/medrec)  
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
