CREATE TABLE CONFERENCEATTENDEE (ID INT NOT NULL, ADDRESS1 VARCHAR(255), ADDRESS2 VARCHAR(255), CITY VARCHAR(255), EMAILADDRESS VARCHAR(255), FIRSTNAME VARCHAR(255), LASTNAME VARCHAR(255), ORGANIZATION VARCHAR(255), PASSWORD VARCHAR(255), SALUTATION VARCHAR(255), ADDRESSSTATE VARCHAR(255), TITLE VARCHAR(255), USERNAME VARCHAR(255), ZIP VARCHAR(255), SCHEDULE_ID INT, PRIMARY KEY (ID));
CREATE UNIQUE INDEX CONFERENCEATTENDEE_UNIQUEID ON CONFERENCEATTENDEE (USERNAME);
CREATE TABLE SPEAKER (id VARCHAR(255) NOT NULL, company VARCHAR(255), firstName VARCHAR(255), jobTitle VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY (id));
CREATE TABLE MYSCHEDULE (ID INT NOT NULL, ATTENDEE_ID INT, PRIMARY KEY (ID));
CREATE TABLE SEZZION (id VARCHAR(255) NOT NULL, abztract VARCHAR(1000), optionalTrack VARCHAR(80), primaryTrack VARCHAR(80), sezzionLength INTEGER, sezzionLevel VARCHAR(50), status VARCHAR(50), stream VARCHAR(25), title VARCHAR(100), track VARCHAR(100), type VARCHAR(100), PRIMARY KEY (id));
CREATE TABLE CONFERENCE (ID INT NOT NULL, CONFERENCENAME VARCHAR(255), CONFERENCEEND DATE, CONFERENCESTART DATE, SYNOPSIS VARCHAR(2000), LOCALE VARCHAR(255), LOCATION VARCHAR(255), VENUE VARCHAR(255), PRIMARY KEY (ID));
CREATE TABLE SEZZION_SPEAKER (speakers_id VARCHAR(255) NOT NULL, sessions_id VARCHAR(255) NOT NULL, PRIMARY KEY (speakers_id, sessions_id));
CREATE TABLE MYSCHEDULE_SEZZION (MySchedule_ID INT NOT NULL, sezzions_id VARCHAR(255) NOT NULL, PRIMARY KEY (MySchedule_ID, sezzions_id));
CREATE TABLE Sezzion_SEZZIONTIMES (stCapacity VARCHAR(5), stDate VARCHAR(25), stLength VARCHAR(20), stRegistered VARCHAR(4), stRoom VARCHAR(100), stTime VARCHAR(5), Sezzion_id VARCHAR(255));
ALTER TABLE CONFERENCEATTENDEE ADD CONSTRAINT CNFRNCTTNDEESCHDLD FOREIGN KEY (SCHEDULE_ID) REFERENCES MYSCHEDULE (ID);
ALTER TABLE MYSCHEDULE ADD CONSTRAINT MYSCHEDULETTNDEEID FOREIGN KEY (ATTENDEE_ID) REFERENCES CONFERENCEATTENDEE (ID);
ALTER TABLE SEZZION_SPEAKER ADD CONSTRAINT SZZNSPEAKERsssnsid FOREIGN KEY (sessions_id) REFERENCES SEZZION (id);
ALTER TABLE SEZZION_SPEAKER ADD CONSTRAINT SZZNSPEAKERspkrsid FOREIGN KEY (speakers_id) REFERENCES SPEAKER (id);
ALTER TABLE MYSCHEDULE_SEZZION ADD CONSTRAINT MYSCHDLSZZMySchdlD FOREIGN KEY (MySchedule_ID) REFERENCES MYSCHEDULE (ID);
ALTER TABLE MYSCHEDULE_SEZZION ADD CONSTRAINT MYSCHDLSZZONszznsd FOREIGN KEY (sezzions_id) REFERENCES SEZZION (id);
ALTER TABLE Sezzion_SEZZIONTIMES ADD CONSTRAINT SzznSZZNTIMESSzznd FOREIGN KEY (Sezzion_id) REFERENCES SEZZION (id);
                                                                                
CREATE TABLE SEQ_GEN_TABLE (SEQ_NAME VARCHAR(50) NOT NULL, SEQ_COUNT DECIMAL(15), PRIMARY KEY (SEQ_NAME));
INSERT INTO SEQ_GEN_TABLE (SEQ_NAME, SEQ_COUNT) values ('SEQ_GEN', 0);  
CREATE TABLE SEQUENCE (SEQ_NAME VARCHAR(50) NOT NULL, SEQ_COUNT DECIMAL(15), PRIMARY KEY (SEQ_NAME));
INSERT INTO SEQUENCE(SEQ_NAME, SEQ_COUNT) values ('SEQ_GEN', 0);

INSERT INTO CONFERENCE.CONFERENCE (ID, CONFERENCENAME, CONFERENCEEND, CONFERENCESTART, SYNOPSIS, LOCALE, LOCATION, VENUE) 
	VALUES (1, 'JavaOne 2011', '05-Nov-2011', '02-Nov-2011', '<p>JavaOne San Francisco returns to the Zone October 2 - 6, bringing Java experts and enthusiasts an extraordinary week of learning and networking focused entirely on all things Java - in a neighborhood created exclusively for you. Expand your skills at the worlds best conference for the Java community. JavaOne 2011 tracks cover everything from building modern applications using JDK 7, leveraging JavaFX to create client-side applications, to creating sophisticated Java-based cloud solutions and more.</p><p> Register now and prepare to enter the Zone, a developer-friendly neighborhood designed to enhance and extend your JavaOne experience. At the heart of the Zone is the Mason Street Cafe, a block-long playground and lounge bordered by JavaOne hotels (the world-class Hilton San Francisco, Hotel Nikko, and Parc 55 Wyndham) where you can refuel between sessions with coffee and beer; recharge your electronic devices; renew acquaintances with JUG leaders, Java Champions, and fellow developers; and more.Five days, hundreds of learning opportunities, and one community: Java.</p>', 'en_US', 'San Francisco,California', 'Hilton San Francisco Union Square, Hotel Nikko San Francisco, and Parc 55 Wyndham');

INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23680', 'Apache TomEE, pronounced &quot;Tommy,&quot; is a simple all-Apache stack aimed at Java EE 6 Web Profile certification, where Tomcat is top dog. Pioneered from the Apache OpenEJB project and including Apache OpenWebBeans, Apache MyFaces, and Apache OpenJPA, the Apache TomEE integration of these technologies is simple, to the point, and focused on the singular task of delivering the Java EE 6 Web Profile in a minimalist fashion. Finally you can get a little more out of your lightweight Tomcat apps without having to give up anything in the process. Learn more in this session.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Apache TomEE Java EE 6 Web Profile', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25240', 'Public cloud platforms provide seamless elasticity and massive scalability for computing, plus near-infinite storage, NoSQL and relational databases, distributed cache, message queues, application and network connectivity, security with identity federation, and more&amp;mdash;all integrated as ready-to-use services. However, the fully integrated cloud platform also uses a different type of reliability and scalability model and requires different design principles. This session discusses how Java applications such as those based on GlassFish and Hadoop can be deployed in Windows Azure and then explores patterns and practices for architecting cloud-based applications.', NULL, 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Architectural Design Patterns for Java in Windows Azure', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24466', 'If you wanna know what your garbage collector is up to, the best place to look is in the GC logs. Using the right set of switches, you can get information critical to the proper tuning of your JVM while incurring minimal overhead. For example, many applications are starved for memory in at least one of their internal memory pools. GC logs will tell you about these starvation conditions, and with a few calculations, you can do the necessary reconfiguration. But it&apos;s not only starvation that can be a problem. Having too much memory can be equally problematic. Or your problem may be as simple as your application&apos;s calling System.gc(). All this information can be found in the GC logs&amp;mdash;but only if you learn how to listen to what the logs are telling you. Find out more in this session.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Are Your Garbage Collection Logs Speaking to You?', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24242', 'With more than six billion ARM-based devices shipped in 2010, ARM-based chips are used in a wide range of embedded systems, from handsets to network routers. New processors such as the Cortex-A15 not only offer an enhanced platform for many traditional embedded systems but are also projected to help drive into new markets such as microserver appliances. Similarly, Java SE for Embedded Devices, which has offered the power and ease of Java on ARM for traditional embedded markets for some time, is being optimized for these new processors, which, in turn, creates growth opportunities in emerging markets.

This joint ARM/Oracle session covers what developers need to know about the features and futures of these new processors and how Java SE is being optimized.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'ARM: Over 6 Billion Served&amp;mdash;&quot;Want That Java Superoptimized?&quot;', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24121', 'Arquillian is the missing link in Java EE development. Developers burdened with bootstrapping the infrastructure on which a test depends place a high barrier to entry on integration testing. Arquillian tears down that barrier. It picks up where unit tests leave off, targeting the integration of application code inside a real runtime environment. This session looks at how you can take advantage of the test platform&apos;s infrastructure to fit your testing needs. It shows you how to write extensions so you can give your test classes new capabilities, manipulate the packaging process, hide testing framework integration complexity, integrate into the test&apos;s lifecycle, integrate with existing test runners, create your own container, and more.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Arquillian: The Extendable Enterprise Test Platform', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24301', 'Whether in a cluster or in the cloud, deployment topology changes over time in terms of load, free memory, and even hardware. This reality requires us to change how we think about asynchronous job execution. Having a job execute at the right time used to be sufficient, but we now have to make sure the job executes where its requirements are best fulfilled: Where is the dependent data local? Does the node have sufficient processing power? 

Memory, core counts, and load are some of the many parameters that can help the scheduler decide the best-possible location for execution. Quartz, the de facto Java enterprise scheduler, provides an extended set of tools to handle asynchronous job execution in clustered and cloud environments. Learn more in this session.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Asynchronous Job Execution in the Cloud', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20580', 'Java performance remains a hot topic today. Modern processors have greatly increased the number of cores. As a result, enterprise applications that traditionally scaled well have started increasingly encountering scaling bottlenecks not seen in the past. The increasing complexity of software stacks and hardware platforms creates an intimidating combination to analyze in solving scaling issues. Using tools and methodologies can help in finding the problem areas. 

In this presentation, the speakers discuss their findings on a variety of workloads reflecting different types of scalability problems, summarize their experiences with various tools, offer their ideas on methodology for finding and analyzing scaling issues, and discuss potential solutions for common problems.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Attack on Scaling: Methods and Tools for Eradicating Performance Bottlenecks', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24641', 'Ever thought of having your UI verified automatically? It only looks hard&amp;mdash;it is actually quite easy, with the right tools and techniques. The JavaFX team offers an effective tool chain for making the most out of test automation. Indeed, UI testing cannot be strictly manual, because all levels of testing&amp;mdash;such as unit testing, preintegration testing, and build acceptance testing&amp;mdash;are applicable to a UI code.

This session demonstrates creating a few UI tests from scratch and also uses some from an existing test base. It shows how to make UI tests stable and inexpensive to support. 

Your takeaway from the session will be a set of open source tools and UI testing concepts that make writing JavaFX UI tests as easy as creating your regular unit tests.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Automated Testing of JavaFX Applications: UI Testing for Developers', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26462', 'A system is elastic if it can easily be resized to accommodate fluctuations in demand. Resizing in this context means growing or shrinking virtual machine instances that host applications. This presentation outlines some of the metrics (such as CPU, memory, and response times) that can be used to monitor system health. These metrics can then be used to determine if the cluster of virtual machines needs to be expanded or shrunk.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Autoscaling Cluster in the Cloud', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24089', 'Augmented-reality applications have evolved from simple OpenGL animations to complex location-aware services and have become a ubiquitous feature in any mobile platform, but does it make sense to speak about augmented reality on the regular desktop? This presentation analyzes the APIs available on desktop systems and how to combine them with great UI-crunching frameworks such as JavaFX and Swing to achieve visually appealing and portable rich client applications. It also explores how to take advantage of mobile devices features such as multitouch, GPS, and accelerometers to visually drive multimedia-oriented desktop applications.', 'Java ME, Mobile, Embedded, and Devices', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Back to the Desktop: Rich Augmented-Reality Applications with Swing and JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23459', 'Java application scalability in the presence of large multicore systems, whether the system is virtualized or not, is crucial for achieving the best-possible results. The IBM Java 7 JDK release includes the introduction of the new Balanced garbage collection (GC) technology to address these scalability issues. This session takes a technical tour through Balanced technology and how it is evolving to meet the demands of modern processors and workloads. Come learn details of how Balanced approaches pause time and heap collection decision issues, and hear about future directions based on the new technology.', 'The Java Frontier', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Balanced: Inside IBM&apos;s Next-Generation GC', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25581', 'This presentation uses the code for a simple Java Executor-based server as the basis for a series of experiments looking at performance metrics, including traditional throughput measurements as well as the distribution of response times, to measure the server&apos;s consistency of service quality. It shows some examples of diagnosis and tuning for better throughput and to improve the tail of the response time distribution for better quality.  Tuning for one or the other typically involves making trade-offs, which the presentation discusses as well.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Balancing Performance and Service Quality in a Java Server', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20343', 'This session describes the ODC, a distributed, in-memory database built in Java that holds objects in a normalized form in a way that alleviates the traditional degradation in performance associated with joins in shared-nothing architectures. The presentation describes the two patterns that lie at the core of this model. The first is an adaptation of the Star Schema model used to hold data either replicated or partitioned data, depending on whether the data is a fact or a dimension. In the second pattern, the data store tracks arcs on the object graph to ensure that only the minimum amount of data is replicated. Through these mechanisms, almost any join can be performed across the various entities stored in the grid, without the need for key shipping or iterative wire calls.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Balancing Replication and Partitioning in a Distributed Java Database', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24507', 'Java EE is already the perfect solution for complex business/enterprise systems and provides all the tools and foundations required to deliver scalable, performant applications for a wide variety of customers and clients. But how does the end user experience stack up? How easy is it to navigate through your Website code full of nasty navigation logic? Are your links clear, transparent, and informative? How frequently do you find yourself adding &apos;?query=parameters&apos; in order to serve dynamic content from your application? These are all things that PrettyFaces URL rewriting can help with, and if your answer to any of these questions was unsatisfactory, this session is for you.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Beautiful Java EE: URL Rewriting for the Next-Generation Web User', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23421', 'This hands-on lab offers an overview of Java EE 6 through a rundown of its key new and improved features. Participants will build an application from scratch via incremental steps in three exercises focusing on JSF 2.0, JAX-RS 1.1, and CDI 1.0 (other technologies such as JPA 2.0, Servlet 3.0, and EJB 3.1 are also included).

With the arrival of several new Java EE 6 implementations in 2011, participating in this lab is an ideal opportunity to get up to speed with the latest in Java EE. It has been successfully delivered at multiple conferences such as JavaOne, Devoxx, JFall, and more. The content was initially created with Antonio Goncalves (Java EE 6 book author and EG member) and is perpetually improving at http://beginningee6.kenai.com.', NULL, 'Java EE Web Profile and Platform Technologies', 120, 'Introductory', 'Approved', 'JavaOne', 'Beginning Java EE 6', 'Java EE Web Profile and Platform Technologies', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24423', 'The Spring Framework has no doubt played a major role in evolving how we write enterprise applications on the Java platform today, but it is still a proprietary framework owned by a single company. The age of having to rely on such proprietary frameworks in order to develop decent enterprise applications is now over, and using Java EE 6 has become an even easier way to develop enterprise applications based on standards, which makes it the best choice for any enterprise application. In this session, you will experience how to migrate a typical full-stack Spring application to a standards-based, completely portable Java EE 6 application, including integration tests.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Best Practices for Migrating Spring Applications to Java EE 6', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23106', 'Using Eclipse 3.6 (Helios) along with the Dali Persistence Tools that come with the Eclipse Web Tools Project, this session looks at best practices for users in the following circumstances:

&amp;bull; Developing enterprise-grade applications that are either
   a. Built from the bottom up with pre-existing databases but easily deployable across a variety of relational databases such as Derby, MySQL, and DB2
   b. Built from the top down, starting with business domain entities requiring persistence storage
&amp;bull; Looking to incorporate a JPA approach into their existing Java EE architecture
&amp;bull; Looking to minimize data-impedance mismatch issues', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Best Practices for Using Eclipse Dali Tools to Deploy JPA/Java EE Apps Anywhere', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25364', 'The world of XML and XML Schema is vast, from very simple constructs to complicated, advanced, well-designed XML/schemas that use every bit of the feature set XML Schema provides. Data binding frameworks such as standard Java API for XML Binding are trying to make this large area easily approachable, with bigger or smaller success and bigger or smaller limitations.

This session explores some of the best practices for designing schemas that enable easier and more natural data binding in Java&amp;mdash;and also, for example, in .NET&amp;mdash;to ease datatype interoperability. It also walks through several schema constructs and describes how each of them affects the process of data binding in Java.', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Best Practices for XML/Schema Data Binding with JAXB', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('18540', 'Microprocessors and server platforms keep marching toward higher performance and power-optimized offerings, propelled by Moore&apos;s Law. Software infrastructure keeps evolving to ensure optimal application performance. Java runtimes have become an integral part of enterprise software stacks and play a crucial part in overall application performance. Oracle and Intel engineering teams have been collaborating closely to ensure that performance, scalability, and efficiency gains promised by hardware innovation are realized for enterprise Java application stacks. This session describes new performance optimizations and scalability improvements in HotSpot and provides performance results on industry-standard workloads.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Blazing JVM Performance: Trends Fueled by the Latest Hardware and JVM Optimizations', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25141', 'Most Java developers never get past -Xmx, -classpath, and -jar when learning about the flags that JVMs offer. If you&apos;re an OpenJDK user, you know -server and -client too, but if you&apos;re a performance nut, you crave more.

This presentation walks through several lower-level OpenJDK flags you can use to monitor what code the JVM compiles into native code, what decisions it makes along the way, and even what that native assembly looks like. You&apos;ll learn how JVM bytecode makes its way through Hotspot and how you can write code that JVMs will optimize well.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Blood from a Stone: Low-Level Hotspot Flags for Optimization Nuts', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25144', 'Whereas most objects in a data grid or a distributed cache simply represent &quot;values,&quot; often in the style of the value/data transfer pattern, live objects react when their state changes. These &quot;reactions&quot; enable us to represent and implement finite state machines in a distributed manner. Distributed finite state machines are a powerful concept. They enable us to efficiently, elegantly, and robustly implement other patterns such as Actors and reliable subscription-based solutions much like those used in Twitter.
This session outlines the architecture and walks through how to use it to build a reliable subscription system.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Bringing Objects to Life: The Live Object Pattern', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23926', 'Brisk is an open source Hadoop and Hive distribution that uses Apache Cassandra for its core services and storage, making it possible to run Hadoop MapReduce on top of CassandraFS, an HDFS-compatible storage layer. Users leverage MapReduce jobs on an  operationally simpler peer-to-peer, fault-tolerant, scalable architecture. 

With CassandraFS, all nodes are peers. Datafiles can be loaded through any node in the cluster, and any node can serve as the JobTracker for MapReduce jobs. Hive Metastore is stored and accessed as just another column family (table) on the distributed data store. Brisk makes Hadoop truly peer-to-peer. 

By storing HDFS and online data within the same data cluster, Brisk makes analytics possible without ETL. Learn more in this session.', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Brisk: Truly Peer-to-Peer Hadoop', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('30460', 'This session is an open forum discussion of how to get sponsors and make the decision to become a legal entity. It attempts to help answer questions such as
&amp;bull; Should my employer be a sponsor?
&amp;bull; What does sponsorship mean?', NULL, 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', '&quot;Show Me the Money!&quot;', 'The Java Frontier', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21682', '&quot;If you can&apos;t measure it, you can&apos;t optimize it.Whenever you measure performance, you do a benchmark run. Whenever you reason about performance, you&apos;d better have a good benchmark that tests the &quot;right thing.&quot; The smaller your benchmark, the greater your knowledge about the benchmarked platform should be. Doing Java (micro)benchmarking without an understanding of JVM specifics is shooting yourself in the foot. What are the key things to keep in mind while doing (Java) benchmarking? Come to this session to get the answer.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', '(The Art of) (Java) Benchmarking', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24306', 'Interactive content for set-top boxes is getting more and more ambitious, and with the demand for interactive content comes demand for enhanced graphics abilities. OpenGL is now the de facto standard for graphics card 3-D APIs in most embedded devices. However, since the Java TV UI is written on top of Personal Basis Profile (PBP) AWT, there is a real need to connect the existing 2-D world to the emerging 3-D technology. 

This presentation focuses on the latest PBP solution and its connection to OpenGL, with an emphasis on both performance and usage. It shows how this revolutionary future solution gives developers an unique opportunity to combine OpenGL&amp;mdash;using a standard Java API, JSR 239&amp;mdash;with the traditional 2-D PBP technology.', 'Emerging Languages, Tools, and Techniques', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', '2-D UI and 3-D Graphics on the Same Screen for CDC', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24221', 'JavaFX is a high-level scene-graph-based API for the Java platform. It supports a programming model in which you can build, render, and manipulate objects with 2-D or 3-D transformation matrices. With the JavaFX API, you can incorporate high-performance, high-quality, platform-independent 3-D graphics into applications and applets based on Java technology.

This presentation focuses on the technical how-to of mixing 2-D/3-D scene graph objects and the various pitfalls to avoid. It demonstrates how you can add 3-D effects to your 2-D application and covers a range of 3-D topics applicable to the JavaFX API, such as the coordinate system, rendering semantics, depth buffer, and camera.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', '2-D/3-D Mixing Made Easy with JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24060', 'You have worked hard to develop your enterprise Java application, but to get the most out of your application, you must have the right ingredients to give your users the best experience, the best tools to keep you in control of your application, and the latest information so you can plan ahead. Using case studies of an industry-standard enterprise Java benchmark, this presentation examines ways to get the most out of the OS, the Java runtime, the application server, and the hardware platform itself. It also looks at the supporting components, such as the latest networking and storage technology. Along the way, Intel has evaluated different tools and how they can be best used. The attendees can leverage this learning to make their own best cup of enterprise Java.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', '2011 Ingredients for Your Best Cup of Enterprise Java', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22920', 'Oracle Java Micro Edition Software Development Kit Release 3.0.5, an evolution release, handles the growing complexity of Java ME applications. This comprehensive toolkit can reduce the cost and time spent on functional testing and increase developer productivity. The toolkit runs on the same VM that Oracle makes available to manufacturers and can be customized for/by OEMs and operators to cater to their developer communities. This results in emulation with much higher fidelity. Fidelity is further enhanced by support of new JSRs, one-click network monitoring, and tooling (debugging, profiling, and more). Commercial plug-ins for the toolkit introduce support for extensions of Oracle Java Wireless Client Release 3.0&apos;s Oracle Mobile Developer API feature, Java + Web, and Java + SIM runtimes.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'A Closer Look at Oracle Java Micro Edition Software Development Kit Release 3.0.5', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23382', 'This session guides the attendees through the evolution of JSR 107, from original rationale and subsequent mutation to recent rejuvenation aiming for inclusion in Java EE 7. Questions addressed include what JSR 107 means to Java EE, particularly in making Java EE 7 a cloud-friendly platform as well as helping applications remove database bottlenecks in a standard and portable manner.

The presentation then introduces JSR 347. Data grids provide us with a highly scalable, in-memory distributed data structure capable of low-latency storage, used either as a &quot;database pacemaker&quot; to remove bottlenecks or as an alternative storage technology. JSR 347&apos;s relationship to JSR 107 is discussed, along with implications for Java EE as well as PaaS/SaaS developers.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'A Tale About Caching (JSR 107) and Data Grids (JSR 347) in Enterprise Java', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25284', 'A core strength of the JVM is support for polyglot development. In fact, Java 7 includes performance improvements that will increase the use of popular Web languages on the JVM such as JavaScript, Ruby, and Python.

Enterprises today are moving to the cloud to improve agility, cost, and scale. Ruby, together with the Rails framework, is one of the hottest languages in the cloud. At the same time, it&apos;s no secret that Java is the foundation of the enterprise. With JRuby, Java and Ruby run side-by-side to accelerate migration by leveraging existing infrastructure.

This presentation reviews technology, best practices, and case studies of companies enjoying competitive advantage via the powerful combination of Java, Ruby, and the cloud.', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Accelerate Your Business and Aim for the Cloud with Java and JRuby', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25067', 'This session provides guidelines to ease the work of GUI designers as well as Java developers. 

It covers the following topics:
&amp;bull; SVG in a Java application with the Batik toolkit: using the interactive canvas, buttons, links, controls; JavaScript and Java controllers
&amp;bull; Advanced controls: mixing SVG graphics and Java&amp;mdash;buttons and sliders
&amp;bull; SVG animation basic rules: animation queue, runtime
&amp;bull; Multithreaded application model for Swing + SVG environment
&amp;bull; REST server integration; async response handling; operating with an SVG modification queue 
&amp;bull; Deploying with JNLP on three platforms with simple native launchers

The session presents examples taken from two real applications: clustered medical image analysis and online gaming.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Advanced GUI with Batik SVG and Swing', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('18180', 'This session illustrates recipes for Java developers who want to integrate flexible agile practices and lightweight tools along software development phases. It discusses task-based development for aligning activities with tasks, resulting in traceable artifacts; (advanced) continuous integration, which involves frequently and systematically integrating, building, and testing an application; and agile approaches to release, configuration, deployment, and requirements management. Beside strategies, this session explores state-of-the-art tool chains. Many of the examples are Java-based, but the agile ALM principles apply to all development platforms and the session shows how you can bridge different languages and systems.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Agile Application Lifecycle Management (ALM)', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24315', 'Learn from Oracle professionals, and get all the details of the agile techniques used in a real-world project: development of the JavaFX 2.0 platform. This session walks you through the process, describes each step, and explains the underlying rationale. It uses real tracking tools and project data and reviews video recordings. Bring your experience with you, and compare notes with engineers who have been using agile methodology to develop successful products for years.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Agile Practices in JavaFX 2.0 Platform Development', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25044', 'With the shift to PaaS and a new breed of open source application lifecycle management tools, the deployment loop of enterprise applications is going through its biggest transition since the creation of Java. This session explores connecting the enterprise Java stack to cloud deployment via task-focused continuous integration based on Hudson, DVCS, code review, and agile planning based on the Eclipse Mylyn interoperability platform. It demonstrates how to apply this new level of connectivity and automation between the team and the running application. The presentation outlines a roadmap for transforming productivity by connecting developers&apos; desktops to a release and automating all the steps in between, from provisioning the IDE to monitoring the running application.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'ALM Automation with Mylyn and Hudson', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24567', 'With a need for a robust, always-on embedded industrial platform, Rockwell Automation turned to Java Standard Edition for Embedded Devices. Its small footprint and comprehensive set of Java SE APIs, coupled with a dynamic OSGi container, provide the foundation for flexible, long-lived, uninterruptible systems. This platform supports management of embedded applications that stay online through maintenance and updates, increasing customers&apos; ROI. This session describes lessons learned in building out an industrial service architecture, including pluggable services with OSGi, troubleshooting, benchmarking ARM, and working with an embedded database. The presentation includes a demonstration of dynamic service provisioning on ARM BeagleBoard hardware.', 'Enterprise Service Architectures and the Cloud', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'An Embedded Service Platform for Uninterruptible Processing', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22703', 'Animation is an essential part of modern user interfaces. It can make an application much more fun and engaging. In addition, well-placed animation can help guide the user through the user interface, increasing overall usability.

This session takes an in-depth look at the animation API in JavaFX 2.0 and its possibilities. And it presents techniques for adding that little extra spice that makes your animations really awesome.

After this session, you will have detailed knowledge of the animation API that is part of JavaFX 2.0 and you will have heard many ideas for improving your applications with fantastic animation.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Animation: Bringing Your User Interfaces to Life', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24780', 'The database industry has been abuzz over the past year about NoSQL databases. Apache Cassandra, which has quickly emerged as a best-of-breed solution in this space, is used at many companies to achieve unprecedented scale while maintaining streamlined operations.

This presentation goes beyond the hype, buzzwords, and rehashed slides and actually presents the attendees with a hands-on, step-by-step tutorial on how to write a Java application on top of Apache Cassandra. It focuses on concepts such as idempotence, tunable consistency, and shared-nothing clusters to help attendees get started with Apache Cassandra quickly while avoiding common pitfalls.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Apache Cassandra for Java Developers', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23927', 'Apache Karaf is an open source OSGi runtime that runs on top of an OSGi container such as Apache Felix or Eclipse Equinox. Cellar is a Karaf subproject that provides Karaf clustering capabilities. Among other things, Cellar enables the creation and provisioning of groups of nodes that sync data such as configuration and bundle states events. 

Cellar can integrate with cloud solutions to bring the Karaf-powered OSGi to the clouds. Learn more in this session.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Apache Karaf Cellar', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22521', 'With the shift to nonstop development cycles, developers are under increasing pressure to continuously and rapidly deliver applications that guarantee 100 percent availability. Developers need scalable tools that use new techniques to build visibility into application environments by building intelligence into logs&amp;mdash;instantaneously identifying issues and jumping to that exact spot in code.
 
In this session, attendees will learn a new approach to accelerating application development, including effective logging standards to simplify your life, techniques for building extra intelligence into logs, instantaneous identification of issues found in your application, and powerful visualizations for pattern analysis and problem resolution.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Build Visibility into Application Environments by Adding Intelligence into Logs', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21801', 'Using Apache&apos;s UIMA project for indexing unstructured data, combining it with JWordNet for natural language processing, and indexing large amounts of online data such as Wikipedia gets you well on your way to building your own version of IBM&apos;s Watson DeepQA engine. This session includes the steps necessary to build your own engine, code examples, and a working demonstration.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Build Your Own Version of IBM&apos;s Watson DeepQA Engine with UIMA and JWordNet', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25172', 'There is nothing more rewarding than building a device and then writing embedded software for it. This session covers the nuts and bolts of building a home security system by using Java and a mixture of Oracle&apos;s Sun SPOTs and cheap embedded hardware (basic stamps/propeller). Topics covered include wireless and serial communication, sensor communication (motion/accelerometer), and remotely monitoring the system. No prior experience with embedded hardware is required. The presentation guides you from basic project setup in NetBeans to purchasing parts at an electronics parts store. This session is based on a system the speaker constructed for his home.', 'Java ME, Mobile, Embedded, and Devices', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Building a Home Security System with Java', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('17381', 'The cloud is forcing a fundamental shift in enterprise application architecture toward a highly distributed, highly parallelized, horizontal scale-out services model. Additionally, when it comes to granularity of the services tier, there is no &quot;one size fits all&quot; answer. This means that Java components must be able to be flexibly composed into lightweight services that can be easily distributed and parallelized to take advantage of the cloud deployment model.

Over the past several years, with the emergence of Java SE-based frameworks and open TCP-based protocols for messaging, it is easier than ever to deliver cost-effective solutions that enable the flexible distribution and parallelization of your applications within the cloud. Learn more in this session.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Building Cloud-Ready Systems with Modern Open Technologies', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25208', 'Using an open and simple API is a great way to build a developer ecosystem and grow a user base dramatically for Web 2.x (social/cloud/mobile) applications. But building flexible APIs can be a challenge. This session covers how to build a nice Web API from scratch, using open source stacks.

It starts with data modeling with a DSL tool and generates POJOs that can be transformed in JSON/XML and persisted with JPA/NoSQL. After defining the service interface, it expands the API experience with REST, JSON-RPC, and other cloud-friendly protocols without application coding. The presentation gets the API running immediately and tests it with a browser. In addition, it addresses how to realize common patterns such as pagination and hypermedia.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Building Flexible APIs for Web 2.x/Cloud Applications', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25088', 'Java is a great programming language, but it&apos;s not supported on all mobile platforms. Using the open source GWT Java -&gt; JavaScript compiler and the PhoneGap build tools, this session shows you how to create mobile applications in Java that run on virtually all smartphone operating systems, including webOS, Android, BlackBerry, and iOS. The session covers how to get started with GWT and PhoneGap and then builds a few real-world applications that properly adapt to different devices and screen sizes with a single code base.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Building Java Apps for Non-Java Mobile Platforms with GWT and PhoneGap', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25229', 'Come learn how to build cross-platform HTML5 mobile applications with GWT. This session provides a brief introduction to the features and components of GWT and its development styles, ClientBundles, RPC, patterns, tooling, and source-to-source optimizing compiler. It covers some best practices for building mobile Web apps and takes a quick dive into GWT mobile events, scrollable panels, fast widgets, and hardware-accelerated animations. Using what they&apos;ve learned, the attendees will write some code, create a mobile Web application, and run it on a tablet device.', 'Java ME, Mobile, Embedded, and Devices', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Building Mobile HTML5 Apps with Google Web Toolkit', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25260', 'Among the plethora of Web application frameworks on the JVM, Lift provides some distinct advantages in helping build secure, interactive, and scalable applications that are also easy to develop, fast, and nimble.

This session introduces Lift briefly and goes on to discuss the key features&amp;mdash;such as security, interactivity, scalability, and designer-friendliness&amp;mdash;that distinguish Lift from other Web frameworks on JVM. The presentation uses code and a live demonstration to share with developers how they can take advantage of these features (often underpinned by Java EE 6 features).', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Building Secure, Interactive, Scalable Web Applications Easily on JVM with Lift', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25002', 'Since 2008 the Java-based Elastic Path platform has been the e-commerce backbone of two Google online stores that were recently migrated to run on Google App Engine. Like many other complex Web applications, these stores used to run in a multiserver environment (Apache and Tomcat with a MySQL database) hosted in a colocation center. Today the public storefronts, the internal commerce manager, and the database of the Elastic Path platform have been successfully moved to run on the Google App Engine cloud, resulting in increased efficiency, reduced costs, and an improved customer experience.
 
In this session, Elastic Path&apos;s CTO discusses the challenges and the benefits of moving these complex enterprise e-commerce applications to Google App Engine.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Case Study: Moving Complex Enterprise E-Commerce Systems to the Cloud', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23400', 'Typesafe dependency injection, decoupling components by events, and a portable extension API are some of the core principles the CDI specification introduced to Java EE. Although CDI is part of the Java EE 6 specification and designed to run in an enterprise container, many of the concepts CDI builds on are based on a state-of-the-art programming model that applies in a broader context. This presentation demonstrates how CDI can be used outside of the enterprise container to build applications in a common programming model shared between the various Java worlds. The session includes an overview of how to bootstrap the CDI container, a general architectural setup for designing for extensibility, and how to effectively use the services provided by CDI.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'CDI in Java SE', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19941', 'Contexts and Dependency Injection (CDI) is poised to play a critical part in Java EE, now and going forward. It already enjoys robust community support in the form of three major open source implementations, a gamut of supported runtimes, and numerous plug-ins and tools.

This panel session is your opportunity to get the perspectives of a cross-section of folks in the CDI ecosystem. The panelists talk about the current state of the CDI ecosystem, goals, adoption, community engagement, gaps, hurdles, relationship with Java EE, and future directions. Please do feel free to bring your own questions, concerns, and ideas.', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'CDI Today and Tomorrow', 'Java EE Web Profile and Platform Technologies', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21280', 'At last count, there are more than 110 open source Java-based frameworks. How does one choose from such an enormous list? What criteria should be used? Features such as performance, scalability, learning curve, and ease of development and deployment are thrown around as criteria, but is that it? How do you know you&apos;ve made the right choice for your development organization and your users?

This session addresses these questions, among others. It introduces a classification system to describe the types of framework architectures. And it evaluates Tapestry, Spring, Wicket, Grails, Vaadin, and Google Web Toolkit (GWT) according to 30 criteria and provides recommendations.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Choosing Your Java Web Framework: A Comparison', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23223', 'CLDC serves a wide range of embedded and mobile devices and plays a very important role in the mobile Java ecosystem. This session covers the evolution of the platform and the tools supporting it. It includes demos of the new language features, functional extensions, and VM improvements proposed for the platform update. It also discusses the motivation and real use cases for the proposed changes.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'CLDC Mobile Platform Evolution', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25165', 'First released in 2007, Clojure is a Lisp dialect running on the JVM. Clojure&apos;s support for functional programming and unified state management simplifies the development of concurrent applications. Clojure is compiled to and interoperates with JVM bytecode, so Clojure applications can be deployed to existing runtimes and directly call existing Java libraries. This session introduces Clojure to Java programmers, with a focus on building concurrent, distributed, cloud-based applications. It features a live demo of deploying and operating a Clojure application.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Clojure in the Enterprise: Easy Concurrency with Java Interoperability', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25151', 'Imagine sharing your favorite hobby with more than 30 million people. Imagine that more than 250,000 businesses depend on your hobby but use antiquated processes such as making phone calls to schedule activities, completely lacking modern technology? If you had to start today, what technology would you use to connect these people and automate these businesses?

This presentation details the road traveled and the technologies used to construct and provide infrastructure that aims to bring the golfing world together online. It examines the factors driving technology choice; the technologies chosen; and the overall architectural solution that is enabling new forms of interaction between players, coaches, ground staff, tournaments, and courses.', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Cloud + NoSQL + Data Grid + REST + Facebook Integration + Mobile Connectivity = ?', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22580', 'Key/value stores are the most common storage offerings in the cloud today. This session introduces storage concepts and differences between cloud storage providers, including Amazon Simple Storage Service (Amazon S3), Rackspace Cloud Files, and Microsoft Azure Blob Storage. It demonstrates how jclouds BlobStore helps Java and Clojure developers avoid lock-in and increase testability without restricting access to provider-specific features.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Cloud Storage Simplified', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24445', 'With the cloud becoming the new deployment target for many applications, developers have an additional set of challenges facing them, including figuring out how to manage persistence in their cloud-enabled applications and services. Developing more-flexible SaaS solutions that address multitenancy and extensibility while still maintaining high performance and scalability makes the persistence layer of these applications a critical component. This session explores the persistence challenges facing developers and demonstrates how they can be addressed.', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Cloud-Enabled Java Persistence', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24621', 'In many ways, the cloud has taken on the hype that was previously associated with SOA. But does SOA have a role to play in the cloud, and, if so, what? This session examines the cloud and shows how SOA concepts are not only applicable to it but are actually critical to the successful realization of all that it entails. The presentation looks at the evolution of cloud from pregrid days to where we are today and considers the reasons for its continued growth. By examining the history behind the cloud, it predicts where it is going in the future and illustrates how SOA patterns and infrastructures can benefit the developers of cloud infrastructures as well as those who implement applications for the cloud.', 'Core Java Platform', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Cloudy SOA', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26041', 'This session covers the challenges and advantages of combining clustering and cloud services, after a brief overview of HA and scalability in Java EE and mainstream cloud services (Amazon EC2, WLST, GlassFish, and Oracle Coherence). First the presentation uses Oracle WebLogic on the EC2 platform. Using AWS APIs and WLST, it is possible to monitor the load of the cluster and automatically expand or shrink the cluster based on the actual load, thus getting a scalable and cost-effective solution, in that the extra nodes are used just as needed. 

The session&apos;s speakers present a different approach, using GlassFish and Oracle Coherence as the session sharing mechanism. Their solution is a dynamic, cost-effective, highly scalable infrastructure that can react to unpredictable changes in load.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Clusters in the Clouds: Dynamically Scaling Application Server Clusters with the Cloud', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25040', 'The Java Collections Framework is one of the most heavily used parts of the JDK. It is hard to imagine any substantial Java program that doesn&apos;t use the core collections. Java 7 introduces several important new classes to the Java Collections Framework as well as improvements to the existing classes. This BOF session provides an overview of the new fork/join framework and other new JSR 166 classes. It also looks at performance and convenience improvements to the existing classes, including improved sorting. Last, it examines some of the recent changes to recommended best practices and suggested usage.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Collections Gathering', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('17461', 'There is a lot of synergy between the patterns used for enterprise integration and complex event processing. In fact, 80 percent of the things you need to to do with complex event processing, you can do with an integration framework such as Apache Camel. This presentation shows how to build on Apache Camel to create a complex event engine that can do correlation between complex event streams.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Complex Event Processing with Enterprise Integration Patterns', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('29401', 'This BOF session covers the Java-based technology in connected TVs and set-top boxes that is enabling the next wave of innovation in digital media. Java-based technology is widely deployed across cable, satellite, IPTV, and Blu-ray devices worldwide and enables innovative user experiences and integration with connected devices. This session includes updates on recent changes in the GEM family of TV specifications to enable advanced user interfaces and connected home technology. It presents examples of advanced interactive services being deployed by pay TV operators and content providers worldwide.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Connecting TV with the Power of Java', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25290', 'Jenkins is a continuous integration server gaining widespread adoption in the Java community and other communities. This session discusses the current state of the Jenkins project and what it is currently spending its resources on. It then elaborates on emerging sophisticated techniques for driving large-scale automation that takes advantage of industry trends such as abundance of computing power, cloud computing, and distributed version control systems. You will learn where the project is&amp;mdash;as well as where it is heading.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Continuous Integration with Jenkins', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24321', 'Coroutines are nonpreemptive, lightweight processes. Their advantage over threads is that they do not have to be synchronized, because they pass control to each other explicitly. They also consume fewer resources, can be created in greater numbers, and pass control to each other much more quickly.

Languages that run on JVMs, such as JRuby, often provide coroutine-like features, which traditionally were slow on JVMs.

This session describes a fast JVM-level implementation of coroutines that is built on top of HotSpot, along with the APIs and the concepts behind it. The implementation also allows for coroutines to be serialized, which creates exciting usage scenarios ranging from highly available servers to dynamic compilation support.', NULL, 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Coroutines for HotSpot', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23225', 'Although concurrent programming on multiprocessors has existed for decades, the evolution of multicore is bringing true parallelism to nearly every computer in your life. To take full advantage in a multicore world, software needs to be parallelized and it needs to scale. One approach to data parallelism is through divide-and-conquer techniques with which problems are broken into chunks that can be solved in parallel and recombined. Employing these techniques requires library support, and in Java 7, this is brought to you via the java.util.concurrent fork/join framework. This session explores how to use fork/join to construct parallel solutions to common problems such as parallel sorting.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Data Parallelism with the Fork/Join Framework in Java 7', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24788', 'The cloud has promised a lot to Java Web developers but has delivered on only some of the hype. Many issues still exist that have the ability to kill many a project.

Elastic Beanstalk, a Web service announced by Amazon in early 2011, takes the cloud to the next level for Java Web applications. It aims to eliminate the remaining issues the cloud presents. No hardware purchases? Check! Low setup costs? Check! No software installation? Check! Automatic resource scaling? Check! Resource monitoring? Check!

This presentation takes a deep dive into Amazon&apos;s Elastic Beanstalk service, including what problems it can help solve and opportunities it provides to deliver better Java Web applications.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Dead-Simple Deployment: Headache-Free Java Web Applications in the Cloud', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25288', 'Nowhere does the Java EE specification dictate that your container must be slow. Come see the latest Enterprise Java offering from the JBoss Community: Application Server 7.

This session provides an introduction to the completely revamped popular application server, including an overview of its features from a developer-centric perspective. It shows how quickly and easily you can deploy an application from the IDE, bringing new meaning to the term &lt;i&gt;rapid development&lt;/i&gt;. Further, it covers the new modular ClassLoading, service layer, and management designed right into the core.

The future of Java EE is here, and it&apos;s fast.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Death of the Slow: JBoss AS7', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21380', 'Alipay is a leading third-party online payment platform and has the biggest market share in China. It offers a mobile proprietary library to enable Alipay payment transactions on mobile phones. There is an obvious incentive for Alipay to provide its payment method by standardized means on Java ME platforms. In this Alipay/Oracle joint session, you&apos;ll see what Alipay and Oracle have done together to facilitate mapping from the Alipay solution onto the JSR 229 Payment API. Alipay&apos;s mobile payment service has additional requirements beyond those already supported by the current Java ME payment API, and the session addresses these additional requirements and shows where JSR 229 will evolve to.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Deploy Alipay Mobile Payment Service with JSR 229', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24980', 'Deploying JavaFX applications over the Web and inside the Web browser is easy and flexible. JavaFX 2.0 includes a new application model that enables you to deploy the same code in multiple ways. This session explains how to deploy your application and demonstrates how to customize your deployment to tailor the user experience to your needs.

JavaFX now includes the ability to have custom and interactive preloaders that enable your application to start working before it is fully downloaded. The presentation explains how to make the user experience more interactive and how to take care of &quot;corner&quot; cases in which the user does not have the required software installed.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Deploying Web Applications with JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24640', 'The avast! solution is one of the world&apos;s leading antivirus packages. To get the latest information on viruses, avast! clients connect to a back-end RESTful Web application. This session discusses how to develop such a heavily loaded application in Java with Project Jersey. It starts with an overview of the application architecture and then provides details on the following design aspects:

&amp;bull; Asynchronous request processing
&amp;bull; HTTP request parsing optimizations
&amp;bull; Lightweight container (Grizzly, Netty) integration
&amp;bull; Apache Cassandra distributed database integration

The presentation includes code snippets and live demonstrations to depict the presented functionality.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Designing Heavily Loaded REST Applications in Java', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25089', 'Due to continued fragmentation in the mobile OS space, developers are looking for platform-independent solutions to address their enterprise mobility needs. This session proposes and demonstrates an approach using Oracle Application Development Framework Mobile Client components to render in standard HTML5 and JavaScript with business logic in Java to achieve true platform independence. Although HTML is ideal for building UIs, it is not suited for implementing complex business logic. On the other hand, Java provides unmatched capability for processing business data and access to device features. The session describes an approach that converges these two incredible technologies to provide a compelling cross-platform application development framework for building mobile enterprise apps.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Develop Mobile Apps with Java and Oracle ADF Mobile Client for iOS, Android, and More', 'Java ME, Mobile, Embedded, and Devices', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19120', 'The NetBeans IDE and GlassFish provide a seamless experience for developing/deploying a Java EE 6 application. GlassFish also provides several other features, such as nonintrusive REST monitoring, that are very typical of a Java EE 6 production deployment.

This hands-on lab begins with developing/deploying a typical Java EE 6 application with NetBeans and GlassFish. You will learn how to create a two-instance GlassFish cluster and front end with a Web server and a load balancer. The application demonstrates session replication when one of the instances fail. You will also learn how to use the extensible monitoring infrastructure to generate application-specific monitoring data. This lab will equip you to put a Java EE 6 application into production.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 120, 'Introductory', 'Approved', 'JavaOne', 'Develop, Deploy, and Monitor a Java EE 6 Application with Clustered GlassFish 3.1', 'Java EE Web Profile and Platform Technologies', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23513', 'JavaFX 2.0 provides a versatile media framework that application developers can use to create rich media-centric applications. This session provides an overview of the JavaFX 2.0 media API and demonstrates recommended practices for integrating media into your applications. It also showcases features new to JavaFX 2.0, such as alpha channel compositing, sound effects with AudioClip, and audio spectrum feedback.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Developing Rich Media Applications with JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25006', 'Cloud-based Java applications are different from traditional three-tier applications and use modern technologies such as distributed caching, NoSQL databases, and Hadoop. Troubleshooting of production Java applications is a very challenging task, and deployment of applications in the cloud adds more complexities. 

This session outlines the challenges of managing application performance and service level when enterprise Java applications are deployed in the public cloud (with either an IaaS or a PaaS provider) or to your private cloud. The session showcases approaches and best practices for diagnosing Java production applications and explores tools and techniques that can help you debug Java applications in a cloud environment.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Diagnosing Performance Issues in Cloud-Based Java Applications', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19220', 'Class loaders are at the core of the Java language. Java EE containers, OSGi, NetBeans modules, Tapestry 5, Grails, and many others use class loaders heavily. Yet when something goes wrong, would you know how to solve it?

This session takes a tour of the Java class loading mechanism,  from both the JVM and developer point of view. It looks at typical problems you get with class loading and how to solve them. ClassNoDefError, IncompatibleClassChangeError, LinkageError, and many other errors are symptoms of specific things going wrong that you can usually find and fix. For each problem, the presentation goes through a hands-on demo with a corresponding solution. 

We&apos;ll also take a look at how and why classloaders leak and how can you remedy that.', 'Java EE Web Profile and Platform Technologies', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Do You Really Get Class Loaders?', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19200', 'That&apos;s a stupid question, isn&apos;t it? Memory is just where you keep things. Nevertheless the majority of performance problems are in the end connected to memory. In modern computers, memory is a complex multilayered thing affected by the hardware, the operating system, and the JVM. And considering that it&apos;s shared among multiple CPUs, we get a lot of classical distributed problems without an actual network anywhere in sight.

You should attend this session if any of the following questions give you pause:
&amp;bull; How slow is memory?
&amp;bull; How does CPU cache behave on a multicore chip?
&amp;bull; What does volatile memory really do?
&amp;bull; What does synchronization really do?
&amp;bull; Why doesn&apos;t GC scale well (so far)?
&amp;bull; What can be done to reduce or eliminate GC pauses?', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Do You Really Get Memory?', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25299', 'To provide a unified experience and optimal service to a variety of the organization&apos;s API clients, LinkedIn engineers resorted to a RESTful architecture coupled with domain-driven design. They would like to share the set of principles, requirements, and features that evolved from their experience with designing the APIs and implementing them in Java for heterogeneous clients and back-end services.

In this session, they discuss their way of exposing interconnected domain objects of arbitrary complexity in a RESTful way, domain model building blocks used in the API implementation, and Hypermedia as the Engine of Application State (HATEOAS) features of the LinkedIn API framework.', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Domain-Driven RESTful APIs at LinkedIn', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25149', 'In this session, the developers of the CERT Oracle Secure Coding Standard for Java present a selection of real exploits that have compromised Java programs in the field. For each, they describe the core vulnerability exploited, present techniques for avoiding or repairing the vulnerability (including code examples), and discuss existing (or possible near-future) static analyses that can diagnose similar problems.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Don&apos;t Be Pwned: A Very Short Course on Secure Programming in Java', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24722', 'Pushing information is a decoupled and performance-effective way to ensure that interested parties have the most-recent information ASAP.

This session looks at reasons and technology for pushing information at various points in an enterprise architecture. Databases can push to the middle tier&amp;mdashas a result of DML; the middle tier pushes to the browser&amp;mdashtriggered by e-mail, chat, JMS message, or CEP event; and one client can push to another. 

The presentation explores the link with event-driven architecture. It also demonstrates HTTP channels and Web sockets as well as Ajax-based background push, database query result change notification, and HTTP calls from the database. And it looks at what to send in an event and how to present the push signal in the end.', 'Enterprise Service Architectures and the Cloud', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Don&apos;t Call Us; We&apos;ll Push You: The Story of Cross-Tier Push Architecture', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24988', 'How many times have you sat in a dark office after-hours, hand-editing forms, page after page? Software teams spend a lot of time developing the UI. To speed up the process, developers resort to drag-and-drop widget solutions or model-based static generation tools, which only change the appearance of the problem.

This session presents Metawidget as a solution to keep your UIs DRY. Metawidget is a smart UI processor that populates itself at runtime with UI components that match properties of your model. Rather than introduce new technologies, it reads existing metadata&amp;mdash;such as JavaBeans, annotations, or XML&amp;mdash;to create native UI widgets in JSF, Android, Swing, and more.

Stop hand-coding your forms! Come learn how to break out of the rut.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'DRY UIs: Let the Metadata Do the Work', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24143', 'Your users often know how to write code. Take advantage of that by creating a custom DSL&amp;mdash;a minilanguage. This BOF session goes over the different ways you can provide your users with the ability to write code that&apos;s executed inline and how to add features to that code that make it more valuable to your users. Using Groovy&apos;s facilities, you don&apos;t have to design a language from the ground up&amp;mdash;you can instead use Groovy as your baseline and add (or even remove) capabilities as required.  

This presentation is designed for attendees without any Groovy experience, although some Java knowledge is required.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'DSLs with Groovy', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23364', 'The new DVB GEM 1.3 standard contains a new Over The Top (OTT) profile that makes it possible to build Java-based media clients for internet TV and other non-QoS networks.

GEM is the heart of Java TV-based standards such as tru2way and MHP as well as of every Blu-ray player on the planet. The latest APIs in GEM 1.3 enable hybrid broadcast/broadband receivers, which can handle true hybrid services. Additional APIs for stereoscopic 3-D are currently defined for GEM to enable 3-D TV with Java applications.
This session outlines the new GEM APIs that address advanced hybrid and 3-D scenarios.

The session includes a demo of a hybrid service deployed on a set-top box by the Italian broadcaster Mediaset.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'DVB GEM: Java TV Goes Over the Top&amp;mdash;Hybrid and 3-D', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21304', 'Java provides a foundation for cloud computing though its SOA protocols and Java EE architecture. But educators and trainers don&apos;t emphasize a &quot;cloud first&quot; approach. Because of this, many students don&apos;t internalize the cloud paradigm and developers don&apos;t design enterprise applications specifically for the cloud. This session takes a detailed look at teaching presentation logic, business logic, data layers, and security issues and integrating these elements in the cloud. Through peer and educator discussions, presenters and attendees will address the process and challenges of mentoring developers to help them create software as a service (SaaS) applications in the cloud.', NULL, 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Educating Students and Professionals About the Cloud', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22740', 'The variety of mobile platforms supported by the Oracle Java Micro Edition Connected Limited Device Configuration Hotspot Implementation VM raises many challenges for bringing efficient, performant multitasking/multithreading to Java applications. Often the platforms are low-end mobile devices with limited capabilities, such as single-thread execution or support for only cooperative multitasking. More-powerful platforms have multicore CPUs and many threads for native applications. Making the best of such different platforms requires lightweight, scalable, highly optimized solutions. This session covers VM multitasking/multithreading challenges for feature phones and the elegant ways the Oracle Java Micro Edition Connected Limited Device Configuration Hotspot Implementation VM solves them.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Efficient Multitasking and Multithreading of Feature Phones', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25244', 'In this session, see the emerging concept of meta-annotations applied to Enterprise JavaBeans and watch the technology transform before your eyes.

Similar to CDI stereotypes, meta-annotations enable several annotations to be summarized by a new custom annotation.  Applications making heavy use of annotations that require many hard-coded parameters can be dramatically simplified. Large amounts of metadata can be localized to one place, making it easier to maintain and change them. A complex @Schedule expression can be aliased with a custom @Daily annotation. Extensive use of @RolesAllowed can be replaced with a single custom @Admins annotation.

The session presents a demo that is focused and full of action. The possibilities will excite you, and you&apos;ll never see EJB the same way again.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'EJB with Meta-annotations', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25301', 'Using Couchbase, supporting both memcached protocol access and HTTP access, is one of several new approaches to data storage in the NoSQL category. Couchbase&apos;s core driver for Java, spymemcached, is widely deployed in sites from Zynga to HBO. When building their new game Animal Party, the developers at Tribal Crossing needed to get away from the complexity of sharding an SQL database. They also were looking for a reduction in the administration cost associated with operation of traditional data stores. When evaluating multiple different NoSQL solutions, they discovered Couchbase&apos;s Membase server.  Simple to use, Couchbase&apos;s model enabled Tribal Crossing to easily model its game interactions with the key/value data store. Learn more in this session.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Couchbase: NoSQL for Social Game Scaling and Performance', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25111', 'PhoneGap is a new open source mobile framework that leverages HTML5 and JavaScript. Using Java ME technology is a way to run advanced cross-platform-compatible code on multiple devices. In this session, learn how to use PhoneGap as the HTML5/JavaScript UI layer for a mobile app while leveraging existing or new Java code as the underlying processing or middleware layer of a mobile app.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Create Compelling Mobile Applications with PhoneGap and Java ME Technology', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26527', 'Smartphones and the like have dominated the rich user interface market for some time now. This session demonstrates Java Swing techniques that enable developers to quickly build beautiful and dynamic user interfaces that can be easily customized by users. In particular, this session looks at how to present overview data in a rich, meaningful way.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Create Rich, User-Configurable Dashboards with Java Swing', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22360', 'Touchscreens are becoming more and more popular, largely due to gesture technology. Without gestures, GUIs that utilize touchscreens are usually just buttons, but gestures enable touchscreens to offer a truly rich interactive GUI interface. Java has a few tools for creating gestures but no library of already created gestures ready to use.

This session goes over the tools available, shows how to create gestures, and discusses a US Navy project under way to create a library of gestures ready to be used in Java GUIs.  

The primary tool the session explores is Multitouch for Java (MT4J), and you will leave with a knowledge of what gestures offer for rich GUI design and a basic understanding of how to create your own gestures.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Creating Gestures for Rich Desktop Touchscreen GUI Creation', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('33860', 'Telecom operators are making network capabilities such as location and messaging accessible to Java developers via network APIs. Clever developers are &quot;mashing up&quot; these network capabilities into innovative applications that delight their users. This session describes Parlay X and OneAPI standards-based Simple Object Access Protocol (SOAP) and Representational State Transfer (REST) network APIs exposed via Oracle Communications Services Gatekeeper and how these APIs can be used by Java developers to build network-enabled applications. It demonstrates specific Java examples utilizing geographic notification and sending Multimedia Message Service (MMS) messages, using Web applications running in the cloud.', NULL, 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Creating Innovative Java-Based Applications with Network APIs', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23240', 'Even in the era of rich internet applications, JavaFX, Flash, and Silverlight, Java Swing still has its place. The powerful Java 2D API makes it possible to create good-looking components, and with the right tools, it&apos;s possible to convert drawings from design software such as Adobe Illustrator or Adobe Fireworks into Java 2D code. This presentation shows a possible workflow for creating custom Java Swing components by converting Adobe FXG files into Java 2D code. As an example, it shows the creation of components from the open source SteelSeries Java Swing library.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Custom Swing Components the Easy Way', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24140', 'JavaFX 2.0 comes with several user interface controls and completely rewritten charts, but sometimes your user interface needs a custom control or chart. This might be because your UI is truly unique or just because what you desire isn&apos;t yet available in the latest JavaFX release.

This session discusses building your own user interface controls and charts. It details how to build UI controls and charts in precisely the same way the developers at Oracle build them. And it also considers code patterns, use of CSS, and performance implications.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Custom UI Controls and Charts with JavaFX 2.0', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24003', 'Data grids:
What are they?
What are they good for?
Why should you be using them?

This session, delivered by an expert group member of JSR 347&amp;mdash;the forthcoming data grids JSR&amp;mdash;provides an introduction to this exciting new technology. The session first delves into typical data grid product architectures and how they achieve linear scalability, data availability, and extreme performance. It then looks at typical uses of data grids in the field and the applications and architectures that are best suited to them. Finally, it examines the extension of data grids and compute grids to deliver radical new architectures and elastic data stores in the cloud.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Data Grids for Extreme Performance, Scalability, and Availability', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25205', 'The text components that ship with Swing haven&apos;t changed much since Swing was originally introduced. A Java developer can choose from either a text field or a text area&amp;mdash;which is quite limiting. However, Java&apos;s text controls are actually quite sophisticated and extensible. This presentation covers how the text controls that ship with Java can be extended to handle numeric data such as currencies and percentages and also support such features as autocompletion, spell-checking, and complex formatting. Besides discussing how to extend these components, it covers internationalization and data conversion. Both of these are important for ensuring that data is interpreted correctly and not rounded, for example.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Building Sophisticated Text Components', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25066', 'Java 8 will add lambda expressions. The combination of the fork/join parallel execution framework introduced in Java 7 and lambdas will provide an excellent solution for working with very large amounts of data. Data-parallel operations will be a fundamental change to how future data-intensive Java applications will be written.

This session covers the state of the evolving library proposals and ongoing implementation. It also discusses the key design choices and trade-offs in the planned implementation as well as important planning tips for readying applications for parallel data.

Attendee questions and feedback will be an important part of this session.', 'The Java Frontier', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Bulk Hauling: Parallel Data and Lambdas in Java 8', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('28380', 'Bulk processing applies to almost every business use case: shipping, processing payments, mailing, analytics, and managing inventory and claims are just a few examples. Bulk processing leverages economies of scale to achieve optimization and efficiency. Batch is an IT metaphor for bulk processing. Every business design typically has a mix of batch and real-time activities. A standards-based approach to batch processing is a critical complement to an overall component development practice focused on consistency and reuse.  

Come to this session to learn about the exciting new Java EE 7 JSR for batch programming and see how you can leverage it to achieve efficiency in your business.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Business Efficiency Through Bulk Processing: Java Batch Is Here', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24021', 'This presentation is a tour of the surprisingly large number of caches in a typical Java application and the systems it is part of. You&apos;ll take home a practical approach to examining the characteristics of a cache and will be able to compare caching solutions.

The first part of the session refreshes what caching is. You&apos;ll learn how to evaluate the trade-off a cache brings and how to measure the effectiveness of each cache on running systems. After introducing the fundamentals, the presentation takes a tour around a typical Java EE application and examines the caches that can be found. Some of the caches on the tour, such as second-level JPA caches and memcached, are well known. Others, such as CPU caches and DNS, are more obscure.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Cache Fundamentals, Dangers, and Tuning', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22500', 'In today&apos;s demanding world, speed and scalability are essential for enterprise applications. This BOF session offers a practical approach to addressing these issues through in-memory caches and data grids, showcasing patterns (such as write-through, write-behind, and no-write) for improving application performance and scalability by eliminating common bottlenecks usually found in tiered architectures. It also presents several tips for creating leaner and more cache-friendly designs.', 'Core Java Platform', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Caching and Data Grids Patterns and Tips', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23509', 'If I want to achieve modularity in my Java code base, what are my options? Is OSGi pretty much the only option? How about JBoss Modules? Is Jigsaw something to look at? Even Maven? There are certainly choices out there, but there is not much information on comparing them on various dimensions.

As part of achieving modularity on a large scale, eBay evaluated these Java modularity solutions and tried to put some more details into the comparison. This session presents an in-depth comparison of various Java modularity solutions and their strengths and weaknesses. You&apos;ll find that these solutions often share a lot more similarities than not and that these similarities have to do with the characteristics of modularity itself.', 'Java EE Web Profile and Platform Technologies', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Calling All Modularity Solutions: A Comparative Study from eBay', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('29460', 'This session is an open discussion of starting up a JUG. What is the process from java.net (the community side) and becoming associated with the JUG community? How do you grow it organically through its members and associations with businesses and the local community. A discussion of how being goodwill ambassadors to the community can fuel your growth covers technology clinics for local businesses and essential Java skills training. Helping local schools can also bring new members and vital innovative thinking from young members.

The session is expected to include a dialogue between the speakers and attendees about experiences with their JUGs, and the cream of the discussion will be posted on Java.net.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Care and Feeding of Java User Groups', 'The Java Frontier', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21080', 'You and your team know Java well, and you have invested much to get to this point. But there are times in any Java project when you have to leave your preferred language to get things done: for build automation, modeling complex business domains, smart configuration, user macros, office integration, ad hoc inspections, and more.

This session presents seven patterns for leveraging your Java knowledge in these areas with the help of the Groovy extension language. Their names are easy to remember: 
1. Super Glue
2. Liquid Heart
3. Lipstick
4. Keyhole Surgery
5. Unlimited Openness
6. Ghost Writer
7. House Elf

If you love Java and would like to see it used everywhere in your project, you will find new opportunities here.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Extending Java&apos;s Reach with Groovy: Seven Scenarios', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22640', 'HTML5 WebSockets offers secure, high-performance, bidirectional network communication over the Web and in the cloud, making applications more responsive while using less bandwidth: live dashboards, financial quotes and transactions, real-time auctions and betting, gaming, equipment monitoring . . . the list is endless. In this session, see how to extend the Java Message Service (JMS) API to Web devices over HTML5 WebSockets to enrich and accelerate your applications. Discover through concrete code examples and a live customer application how to develop highly interactive UIs showing real-time data from any middleware supporting JMS, such as Tibco EMS or Informatica UMQ. Demos include JavaFX and JavaScript running in a Web browser and on a mobile device.', 'Java ME, Mobile, Embedded, and Devices', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Extending the Java Message Service API to the Internet over HTML5 WebSockets', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22501', 'Apache&apos;s Hadoop is the de facto platform for crunching &quot;big data&quot; being used by important names in the industry such as Amazon, Facebook, IBM, and Yahoo&amp;mdash;to name just a few. Even though the MapReduce model is easy to grasp, the Hadoop API can be challenging, due to its verbosity. With established patterns and an embrace of dependency injection, the boilerplate code and unnecessary noise can be eliminated from Hadoop-based solutions, enabling effective and clearer map-reduce jobs with minimal impact on your infrastructure or workflow. In short, POJO programming for Hadoop. Learn more in this session.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Fewer Hoops with Hadoop: Spring Hadoop', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('35800', 'Intel improved the performance of an Oracle Fusion Middleware application from supporting 400 to supporting 20,000 concurrent users. The performance increase came from both hardware and software upgrades, but those upgrades alone were not sufficient to reach the desired performance. Indeed, Intel reached the performance milestone by applying a systematic tuning approach, and this presentation shares that methodology. Using a case study, it goes through, step-by-step, how the application was tuned to capitalize on hardware and software upgrades to achieve the 50x performance gain.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Fiftyfold Performance Gain in an Oracle Fusion Middleware Application: A Case Study', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23424', 'Java Development Kit (JDK) 7 provides a new and easy-to-use API to the file system that addresses many of the long-standing issues and shortcomings that existed in previous releases. Finally the platform gets support for basic things: file permissions, symbolic links, scalable access to large directories, bulk access to file attributes, methods of copying or moving files, file change notification, path manipulation, an API for doing recursive operations, and much more. This session provides a tour of the API with examples to help busy developers quickly digest and appreciate the useful things that are now possible with JDK 7.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'FileNotFound: A Tour of the File System API in JDK 7', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22680', 'Proper resource management at the per-tenant level is an important aspect of a robust SaaS application, especially in massive multitenant scenarios. It enables collocated tenants to peacefully consume shared computational resources, based on individual SLA settings. This session introduces a set of related pilot features in IBM&apos;s &quot;Java for Cloud&quot; technology preview and demonstrates how to use them to build multitenant applications with fine-grained resource consumption management capability. 

It focuses on
&amp;bull; A fine-grained tenant management API
&amp;bull; Built-in low-level resource management capability based on the JSR 284 API (CPU, Java heap, I/O, and so on)
&amp;bull; Managing resources per-tenant with the tenant management API', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Fine-Grained Resource Consumption Management in Your SaaS Application', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25108', '&lt;i&gt;Cloud computing&lt;/i&gt; is the buzzword of the moment (mainly in addition to &lt;i&gt;social&lt;/i&gt;). Two thirds of those who talk about the cloud are marketing people, and one third are system engineers&amp;mdash;no one has been able yet to explain to the real world (IT architects and  developers) how applications must be designed and written to be deployable into the cloud. This presentation gives enterprise developers and IT architects some key facts and some strong best practices for building scalable, performing, robust, and cloud-ready J2EE enterprise applications.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Flying into the Cloud, Avoiding Storms: Addressing Cloud Issues for Developers and Architects', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25213', 'A couple of years ago, building an application meant first building the infrastructure to support the application. Typically this entailed installing a database, an application server, and often a messaging server and e-mail server&amp;mdash;all tedious preamble to actually building the application. Now you have free access to these infrastructure services on the Web, but which ones should you use?
 
This session picks 10 services available today and introduces some others to keep your eye on. It looks at services such as MongoHQ, SendGrid, and DropBox. With no infrastructure for you to set up for your applications, you can now start coding them immediately: all Dev, no Ops!', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'From DevOps to NoOps: 10 Cloud Services You Should Be Using', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24001', 'When you write Java code, the JVM makes several allocations on your behalf, but do you have an understanding of how much that is? This session provides insight into the memory usage of Java code, covering the memory overhead of putting an &quot;int&quot; into an integer object, the cost of object delegation, and the memory efficiency of the different collection types. It also gives you an understanding of the off-Java (native) heap memory usage of some types of Java objects, such as threads and sockets. Most importantly, the session covers how to determine where there are inefficiencies in your application and how to choose the right collections to improve your Java code.', 'Core Java Platform', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'From Java Code to Java Heap: Understanding the Memory Usage of Your Application', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24582', 'The Ruby programming language makes for great integration glue in enterprise applications. With JRuby, the Ruby implementation that runs on the JVM, and Rails as our glue for Web applications, we can inject a high degree of flexibility into an existing Java Web application. And we can do it in a way that leverages existing code and does not require significant rewriting of existing functionality. 

This session presents strategies for taking advantage of the productivity of Rails in a legacy Java environment. It also highlights new features of the latest version of Rails that can be applied to take productivity to new levels once you&apos;ve begun to harness the power of Ruby and Rails in your existing applications.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'From Java to Rails: Techniques for Adding Ruby Agility to Your Java Web Stack', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25209', 'In this session, see fun new aspects of Enterprise JavaBeans (EJB) 3.1 in action. They include @Schedule for cron-style execution, @Asynchronous method communication, @Singleton beans, and the @LocalBean &quot;no interface&quot; view. Take a quick step into Context and Dependency Injection (CDI) for important EJB-enhancing features such as the @Inject and @Producer dependency injection techniques or @Decorator for a strongly typed wrapping alternative to interceptors.

Learn how these apps can be quickly developed and tested with the new EJB Release 3.1 Embeddable Container API. Then take your development to the cutting edge with techniques not yet part of the specification, such as metatyping and expanded interceptor annotations.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Fun with EJB 3.1 and OpenEJB', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('32560', 'This Java User Group Sunday general session discusses the format and topics for JUG Sunday. It introduces all the JUG leaders, Java Champions, and Oracle staff involved.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'General Session: Java User Group Sunday', 'Core Java Platform', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('33960', 'This general session for Java User Group Sunday discusses the format and topics for UG Sunday. It includes an introduction of Oracle staff and all Java UG leaders and Java Champions.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'General Session: Java User Groups Sunday', 'Core Java Platform', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24787', 'Swing has been a great GUI library for years, but with today&apos;s focus on rich user interfaces, many Java applications can benefit from using JavaFX instead. The question is, How do you manage that when you&apos;re stuck with an old Swing front end?

This presentation starts with a typical Swing application and replaces parts of it with a shiny new JavaFX interface. During this transformation, event listeners are replaced by JavaFX bindings; hard-coded color constants are replaced by style sheets; and instead of the limited HTML support in Swing, the JavaFX WebView component is used to display formatted content.

After this session, the attendees will have a thorough understanding of how JavaFX can replace all or parts of a Swing user interface.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Get Dressed for Success: From Swing to JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25023', 'Has dealing with OSGi been a pain for you? Have you hit the wall, trying to fight through the set of cryptic errors and nonintuitive exceptions? Eclipse Virgo, part of the Eclipse Runtime project, is a natural candidate for providing a safe and efficient environment for getting quickly through the most-prominent issues of OSGi modularity commonly faced in enterprise application development. This session guides you through the process of developing a modular application with several open source projects, jumping over the usual hurdles of NoClassDefFound, LinkageError, and ClassCastException errors. You&apos;ll learn how to figure out the root cause and take the corresponding actions that will enable you to proceed forward quickly and get your stuff running.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Get Efficient in Building and Diagnosing Modular Applications with Eclipse Virgo and OSGi', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20340', 'Learn from the Lightweight User Interface Toolkit (LWUIT) teams head designer how to create compelling user interfaces for mobile platforms. This BOF session is presented by Martin Lichtbrun, a designer with many years of mobile design experience, and Shai Almog, one of the LWUIT head developers. Together, they show how to narrow the gap between the creative and technical worlds.
 
The session features unique designs and explanations on how to extrapolate these designs into your own code/UI. It can help developers struggling to improve their design skills as well as improve communication skills between designers and developers.

The session focuses on using the LWUIT resource editor and PhotoShop tools and is relatively light on code.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Graphics Designer Secrets for Compelling Mobile User Interfaces', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25230', 'Using a combination of slides and demonstrations, this session shows you how easy it is to build and use Web services with Groovy, Grails, and Griffon. To illustrate how to employ these technologies for Web services, the presentation builds and uses a Web service with Groovy, builds a Web service in Grails, and then accesses the Web service defined in Grails from Griffon. It also illustrates how simple it is to test Web services by using Groovy.', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Groovy Web Services: Building and Using Web Services in the Groovy Ecosystem', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('38352', 'GroovyFX is a new open source project whose goal is to combine the conciseness of Groovy with the power of JavaFX 2.0. GroovyFX&apos;s SceneGraphBuilder enables you to declare a JavaFX scene graph in a concise way that closely resembles the structure of the actual scene graph. GroovyFX supports all the controls, shapes, effects, and other JavaFX objects as well as the ability to use Groovy closures for event handling. GroovyFX also eliminates the boilerplate associated with JavaFX properties and provides a more natural syntax for writing JavaFX binding expressions. This session explores the key features of GroovyFX and shows you how to leverage the Groovy framework, Griffon, for complete JavaFX desktop application development.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'GroovyFX: JavaFX Is My Bag, Baby, Yeah!', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22204', 'In this session, returning experts from the successful JavaOne 2010 panel on cloud computing recap the progress made since then. 

As cloud computing has evolved from mere hype to reality, PaaS platforms have evolved to meet the demands of Java developers. Architectural patterns and best practices are starting to make progress. What is missing or can be improved? 

A group of panelists from companies such as Amazon, Cisco, Google, IBM, Intuit, Microsoft, Oracle, and salesforce.com participates. After attending this panel discussion, you will walk away with a good understanding of the differences in cloud offerings&apos; technologies and what it means to supplement your existing Java investments with the cloud.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Growing the Cloud: Cloud Panel 2011', 'Enterprise Service Architectures and the Cloud', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23805', 'Java EE 6 is a drastic improvement over previous revisions of the platform, but regardless of how significant the releases are, it&apos;s not long before we want more. In this session, you&apos;ll discover that waiting around for Java EE 7 isn&apos;t your only option, thanks to the portable extension SPI, introduced by CDI. 

To prove that the Java EE platform is truly extensible, this session hacks rather than only talks theory. It goes over the options you have for enhancing the application, from registering custom beans, interceptors, and decorators to customizing dependency injection points, aliasing annotations, augmenting the annotation metadata on registered beans, and introducing custom scopes.

Java EE 6, you&apos;re going to be pwn&apos;d. W00t!', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Hacking Java EE: CDI Extension Writing n00b to l33t', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25360', 'A PaaS offering typically facilitates application deployment without the cost and complexity of managing infrastructure, by providing all of the facilities required to build and deliver services.

Current Java EE deployment models assume that the deployer provisions the various dependent services of an application. To support PaaS deployment scenarios, GlassFish is working to provide a simplified application provisioning and deployment interface to users, with the runtime handling the discovery of service dependencies, provisioning services, and associating service references with these services.

This session details how Java EE containers such as GlassFish can provide such service orchestration capabilities to PaaS application deployers.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Handling Service Orchestration in the Cloud for GlassFish', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25680', 'Ever been envious of how easily Python, Ruby, and even JavaScript can &quot;metaprogram&quot;? Metaprogramming provides new ways of writing your code that goes beyond traditional object-oriented composition or inheritance.

Traditionally, this has been hard in pure Java, but some of the techniques can be adapted. This presentation discusses the library employed by Apache Tapestry but designed for general use and shows how a handful of simple constructs can be combined for impressive results.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Have Your Cake and Eat It Too: Metaprogramming Techniques for Java', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19560', 'Even though Hazelcast and Apache Cassandra serve different purposes, they have one thing in common: they are both great open source Java technologies. Furthermore, used in combination, they can provide a fast and robust peer-to-peer messaging solution. This session presents an overview of their features and also highlights their strengths. Moreover, it provides an experience report on using them as an alternative to JMS.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Hazelcast and Cassandra Combined: A Powerful Alternative to Peer-to-Peer JMS', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22260', 'Oracle is converging the HotSpot and Oracle JRockit JVMs to produce a &quot;best-of-breed JVM.&quot; Internally, the project is sometimes referred to as the HotRockit project. This presentation discusses what to expect from the converged JVM over the next two years and how this will benefit the Java community.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'HotRockit: What to Expect from Oracle&apos;s Converged JVM', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19240', 'In a survey conducted in 2011, it turned out that only a quarter of the respondents considered their updated process ideal and only 12.2 percent used container-provided redeployment as the primary means of updating the application in production. 

With every passing year, more and more alternative tools and processes become available, including the DevOps movement; provisioning tools such as Puppet, Chef, and jclouds; and management tools such as Deployit, StreamStep, and MetaStacks. There are also some new approaches on the horizon, such as the in-app updates provided by LiveRebel. 

This session compares and discusses the various approaches that make it possible to update applications with no human intervention; no side effects; and, preferably, no downtime.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'How Do You Update Your Java EE App in Production?', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24120', 'Working on a large Java project can be tough. The demands of the customer need to be met, and tight deadlines and internal requirements need to be met. Some decisions will make your life a lot harder than it needs to be&amp;mdash;decisions such as not using a framework as the basis of your applications.

This presentation, based on personal experience gained over years of working on large-scale NetBeans RCP applications for managing satellite communication networks, shows you how a project&apos;s problems were solved and how they wouldn&apos;t have been problems with the NetBeans Platform. Besides hearing a detailed use case, you&apos;ll see code snippets and learn techniques that could have been applied in this project to make the development work a lot easier and the customers a lot happier.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'How My Life Would Have Been So Much Better If We Had Used the NetBeans Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23360', 'JDK 7 is about to be unleashed. Are you ready? This session examines the code base of some existing open source projects and then assesses how they will be affected by JDK 7, especially the Project Coin enhancements. It then explores tools for refactoring the code and suggests principles and guidelines for this process.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'How to Refactor for JDK 7', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23801', 'Compared to Release 11&lt;i&gt;g&lt;/i&gt;, Oracle JDeveloper Release 11.1.2.0.0 starts up in less than half the time and uses significantly less memory. This session&apos;s speakers improved the performance of this product by implementing lazy loading to load the application in feature-level blocks and introducing OSGi to improve classloading. If you have a large desktop application and are looking for ways to give it a speed boost, this session might be of interest. It is a case study of how they sped up theirs, the technical difficulties they ran into, and the trade-offs they had to make along the way.

Large desktop products developed by teams in isolation are open to scalability problems at their more generous integration points. This session reveals how the speakers solved this in Oracle JDeveloper.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'How We Halved Startup Time and Used Less Memory in Our Desktop Application', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24821', 'This session discusses HTML5/JavaScript and the Java platform as complementary Web technologies for building rich, safer, robust Web applications. The HTML5/JavaScript Web browser platform introduces several new features that reflect the demands for rich, dynamic offline Web content. At the same time, the Java platform is evolving as a simpler, modular, rich multimedia, multilanguage ubiquitous runtime. The session explores the key attributes of each technology&amp;mdash;minus the myths and incorrect assertions&amp;mdash;and discusses recent Java platform innovations for integrating HTML5/JavaScript and Java content on the Java platform.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'HTLM5 and Java: The Facts and the Myths', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24181', 'HTML5 won&apos;t be released as a formal specification for at least a couple of more years, but developers need to start working with it immediately, making the task of selecting usable HTML5 components time-consuming and frustrating.

This session aims to assist developers targeting HTML5 by providing an inventory of currently available Java server technology components that can be used to support HTML5 applications, along with example Web applications and source code demonstrating their usage.
 
The session also demonstrates nontraditional uses of HTML5 features such as accessing some of HTML5&apos;s unique features such as geolocation and storage from Java applets via JavaScript.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'HTML5 with Java Now: A Pragmatic Review of Java&apos;s Current Support for HTML5', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24542', 'This BOF session focuses on the various HTTP-related APIs and implementations on the Java platform. 

Topics include:
&amp;bull; The legacy HttpURLConnection client API&amp;mdash;what it was intended for originally and its present limitations
&amp;bull; The lightweight HTTP server API introduced in JDK 6
&amp;bull; HTTP client work being done for JDK 8 that aims to provide a new API for clients that is more flexible and powerful than the old API
&amp;bull; Other HTTP-related technologies in Java EE and elsewhere
&amp;bull; HTTP security, HTTPS, and more.', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'HTTP Client and Server APIs in Java', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24563', 'The year 2011 has been an amazing one for Hudson: new release schedule, process, leads, a fork, Eclipse Foundation proposal. . . . This session looks at where Hudson is today and where it is going. It discusses the latest Hudson infrastructure and process and how users and developers can benefit from the work that is ongoing to ensure that Hudson is an &quot;IP-clean, inviting, API-robust and long-lived de facto standard CI tool&quot; (Mike Kersten, Tasktop). In addition, it demos how Oracle is &quot;eating its own dog food&quot; through some of its own Hudson usage patterns.', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Hudson: Onward and Upward', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22660', 'It&apos;s been a year since IBM and Oracle announced their intention to collaborate in the OpenJDK community to develop the leading open source Java environment. This session outlines the progress of that collaboration and reviews the continuing challenges and opportunities ahead. IBM brings long and extensive experience with Java&amp;mdash;hear about its unique perspective on what makes Java successful and how that success can be maintained and improved within the OpenJDK community. The session also covers details of IBM&apos;s contribution to OpenJDK and Java SE, including such topics as the technical challenges faced in sharing technology and how the solutions benefit both the OpenJDK community and Java SE.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'IBM and OpenJDK', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23829', 'Java 7 is out and ready for business! IBM has been involved in Java 7 since the beginning, and more recently directly in OpenJDK. Come hear about how IBM is contributing to Java, both through its world-class JVM and in its participation in OpenJDK and the JCP.  This presentation focuses on technical improvements to the IBM J9 JVM, including work on the just-in-time compiler, the garbage collector, and the base runtime. You will leave with an appreciation of the cutting-edge technology being applied in today&apos;s JVMs as well as how both collaboration and competition are critical to the well-being of the Java ecosystem.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'IBM Java 7', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22960', 'From the creators of Caciocavallo, another great project to open the doors of compatibility in the Java world, IcedRobot attempts to bring the Android framework back to where it belongs: the Java Virtual Machine universe. IcedRobot consists of many small components such as a JIT VM called Daneel that translates the Dalvik bytecode back to Java on the fly. Android has proven to be an important and easy-to-use framework, suited for mobile and set-top boxes, and has been a great success in many (controversial) ways. IcedRobot wants to deliver this power to the Java ecosystem, where it naturally belongs. In this presentation, you will learn about the internals of the IcedRobot architecture, especially the magic behind Daneel and the IPC for the JVM.', 'Core Java Platform', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'IcedRobot: Bring Android Back to Java', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21540', 'Have you ever used the default Java implementation on any of the major Linux distros (Fedora, Ubuntu, and the like)? If so, you have used IcedTea. Almost all major Linux distros use IcedTea, which supplies a stable framework for turning OpenJDK into a deployable distributable.

In this session, you will find out all there is to know about IcedTea: why it was created, how it is used today, and all the work that goes into it.

Of course, no talk about IcedTea would be complete without a discussion of the deployment tools (IcedTea-Web). IcedTea-Web boasts a free (as in speech) implementation of the Java Web browser plug-in and of Java Web Start (javaws). The latter portion of the session covers these tools, their current status, and their future.', NULL, 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'IcedTea and IcedTea-Web', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24324', 'It is not really easy to define a domain-specific or general-purpose programming language. A lot of decisions have to be made that may influence the usability, readability, comprehensibility, and acceptability of the language. But it is much more complicated to provide a proper back end for the virtual machine to produce efficient, stable, and correct bytecode.

This session describes how a programming language can be translated into efficient bytecode, demonstrates how additional information can be stored in class files, and presents ideas on how to circumvent some of the restrictions of the virtual machine without losing the ability to interoperate with existing Java classes.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Implementing a Programming Language for the JVM', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25087', 'Over the past year, the Grizzly team has been hard at work on an&#160;asynchronous HTTP server/client API for Grizzly 2 whose final&#160;result can be used by higher-level frameworks/applications (such as Jersey&#160;or GlassFish) that require HTTP protocol services.Having learned many lessons working on Grizzly 1.9, this session&apos;s speakers discuss the techniques they have applied to make Grizzly 2&apos;s HTTP implementation completely nonblocking.&#160;They cover the server-side HTTP API and the features they offer above and beyond the traditional servlet API.&#160;They also discuss their client-side HTTP offering: a Grizzly transport implementation using the Ning async HTTP client APIs.', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Implementing Asynchronous HTTP Client and Server Applications with Grizzly 2', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25287', 'Batch-process test strategies must combine common testing techniques with new controlling approaches to be effective. This session describes a strategy that was applied on two Java EE applications with a strong batch-processing profile built to integrate stock exchange systems for a global bank. This strategy shows how to control batch-process execution for predictable behavior and, by using enhanced design principles, how to have a Java-based domain-specific language with good fluency and tooling support. The results for those two systems were very expressive, with improved business case coverage through tests written by testers with only basic programming skills.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Improving Batch-Process Testing Techniques with a Domain-Specific Language', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25281', 'Arduino is a popular open source electronics prototyping platform intended for anyone interested in creating electronic prototypes. It is at the core of Android ADK and many other projects. It can sense the environment and control just about anything to affect its surroundings. This presentation introduces you to Arduino and how to integrate it with the Java platform. 

The presentation includes
&amp;bull; An introduction to Arduino
&amp;bull; Information on how to develop Arduino applications
&amp;bull; A brief overview of key electronics principles
&amp;bull; Information on how to integrate Arduino with Java
&amp;bull; Several live demos

This session is for anyone who wants to learn how they can, with just their Java skills, extend their applications to reach the physical world.', 'Java ME, Mobile, Embedded, and Devices', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Get Physical! An Arduino Introduction for Java Developers', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24605', 'In this HOL, you will learn how to build a embedded Java solution that senses and controls the environment, stores data, and connects to back-end databases for synchronization and further processing. The session offers deep detail and step-by-step exercises.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 120, 'Introductory', 'Approved', 'JavaOne', 'Getting Started with Embedded Java: Sense, Control, Store, Connect', 'Java ME, Mobile, Embedded, and Devices', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24002', 'Although not all workloads are created equal, it is becoming increasingly apparent that generational garbage collection is the most beneficial mode for running applications in most cases. In this session, you&apos;ll learn the theory behind the generational garbage collection algorithms. It covers the concept of the histogram of object lifetimes and the use of the nursery to deal with objects that die young, and it uses that theory to understand how to size and tune the nursery and old generations to optimize the performance of your applications.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Getting the Most Out of Generational GC', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24326', 'Nokia Series 40 phones are used by more than 600 million people and continue to provide a ubiquitous internet and Java-enabled development platform. Its unique features and the installed base present an opportunity for developers.

This session shows how to take advantage of some of the unique features of the platform. It covers the UI features, especially the Touch and Type style. It shows how to design applications and use APIs to take advantage of the Touch and Type style. It also discusses the monetization opportunities and looks at the new in-app-purchase advertising features.

The presentation also introduces some of the innovative features of the available location-based services and the core Java platform.', 'Emerging Languages, Tools, and Techniques', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Getting the Most Out of the Series 40 Java Platform', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26280', 'This session discusses what is happening with digital TV in Brazil and how new technologies such as Lightweight User Interface Toolkit (LWUIT) and Java DTV fit into the new digital TV standard in Brazil. New markets need new content. DTVi, Brazilian digital TV interactive middleware that enables broadcast-driven interactivity, was specified by the digital TV forum SBTVD by agreement between universities, government, manufacturers, and private companies, using technology such as Java DTV, LWUIT, Java ME, and CDC. The session will help you understand the context and learn what Oracle technologies are related and how they work together to provide a new niche opportunity.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Ginga, Lightweight User Interface Toolkit, Java DTV, and You 2.0', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23426', 'The GlassFish Community is large and vibrant and has had a tradition of getting together at JavaOne for the past few years. Attend this BOF session again this year to meet like-minded developers, learn about the development plan for the open source project, showcase user stories, and share overall experiences to improve both the open source product and how the community works.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'GlassFish Community Event', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25008', 'The GlassFish open source project offers a comprehensive administration framework that makes it possible to configure an entire GlassFish domain that is CLI-, admin GUI-, and RESTful Web services-driven.

Based on configuration and CLI metadata, 500 REST resources are generated, allowing for CRUD operations in the entire the back end, relying on the modular, transactional, and replicated CLI framework to serve GlassFish modularity, integrity, and clustering requirements.

This session describes this advanced REST framework, based on Jersey JAX-RS; how it is used in the admin GUI; the tools (NetBeans and Eclipse); and how it will simplify cloud access and management based on GlassFish.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'GlassFish REST Administration Back End: An Insider Look at a Real REST Application', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19080', 'Mobile devices such as smartphones and tablets are rapidly becoming the primary Web clients for many users. Taking your existing skills from traditional Web application development and applying them to a mobile interface can be daunting. This session walks through best practices for building a mobile solution using a combination of JSF, CDI, JMS, data grid, HTML5, and CSS3 technologies.

Attendees will learn which front-end mobile frameworks work best with Java-based technologies and how they can be used to kick-start your own applications. The presentation begins with an overview of technologies used to create the demo and then jumps into the code for a step-by-step tutorial.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Going Mobile with Java-Based Technologies Today', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23932', 'Promises that cloud computing can save money and reduce time to market by automatically scaling applications (up or down) oversimplify what it takes to develop application architectures to achieve these benefits of elastic scaling. Few of today&apos;s business applications are designed for elastic scaling, and most of those few involve complex coding unfamiliar to most enterprise developers. A new generation of Java application platforms is arriving to help remove this barrier to realizing the cloud&apos;s benefits. Elastic application platforms will reduce the skill required to design, deliver, and manage elastic applications, as this session illustrates. Get a jump on the competition by starting now to understand elastic platforms and their potential for your organization.', 'Enterprise Service Architectures and the Cloud', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Elastic Application Architecture for Java', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24320', 'In this session, get practical advice, illustrated with code examples and demos, on using the JavaFX Web component. Learn how to embed Web content into your application, manage the document model, and interact with Web applications from JavaFX code.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Embed HTML in Your JavaFX 2.0 Application', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25061', 'Today&apos;s smart devices are capable of running Java technology, but there is no promise of write once, run anywhere. The problem goes beyond just fragmentation or lack of Java APIs. This session shows how a developer can write an application and deploy it on multiple devices.', 'Core Java Platform', 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Embedding Java VM in Smart Devices', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23180', 'This session covers upcoming changes in the EJB 3.2 specification:
&amp;bull; Enhancements to the EJB architecture to enable the platform as a service (PaaS) model
&amp;bull; Further factorization of the EJB technology
&amp;bull; Simplifying the EJB core by defining a set of optional features from among those that were designated as &quot;proposed optional&quot; in the EJB 3.1 specification
&amp;bull; Improvements to the embeddable EJB container
&amp;bull; Further simplifications in the EJB core requirements
&amp;bull; Extending EJB 3.1 features for a richer development model and ease-of-use support', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Enterprise JavaBeans Technology 3.2', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24784', 'This session is about enterprise SOAP features that handle messages once they come off the wire. It shows how those features are built with SOAP protocols at their base. You will learn what to look for in a SOAP stack besides interoperability.

Topics include
&amp;bull; Async handling of sync messages for less resource use, long requests, and handling of load spikes  
&amp;bull; Async via WS-MakeConnection for clients behind firewalls and to survive network outages
&amp;bull; Messaging with persistence to survive server restarts and service-side async handling of sync requests
&amp;bull; Persistence/routing strategies such as JDBC, file, distributed caches/pinning, forwarding, any node
&amp;bull; Client-side recovery
&amp;bull; Alternative transports', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Enterprise SOAP: Advanced &quot;Off the Wire&quot; Features', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20262', 'Although the JVM abstracts developers from the hardware the Java program runs on, the underlying platform&amp;mdash;including operating systems and hardware&amp;mdash;can have a significant impact in a high-performance, low-latency environment. This session examines how in extreme cases, we can make use of Linux performance tools along with JVM performance tools to improve the performance and latency of the application. It presents an example in Linux to demonstrate how Java profiling tools can be used to identify the high-latency portion of the application and make use of Linux profiling tools such as oprofile to further identify the opportunity to optimize at the operating system/hardware level.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Every Last Nanosecond: Tuning the JVM for Extreme Low Latency', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('37941', 'Twitter is increasingly relying on services written in either Java or Scala and running on the JVM. Although the JVM gives the company a world-class runtime in terms of operational stability, performance, and manageability, achieving the desired performance characteristics of the programs being run on it is still not trivial, especially when you&apos;re dealing with services that need lots of memory, require very low latency, or both. This session presents examples of performance problems Twitter encountered while operating JVM-based services and the ways it solved them.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Everything I Ever Learned About JVM Performance Tuning at Twitter', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24815', 'Public Java benchmarks with active competition have the potential to influence the direction of JDK and JVM development and to accelerate innovation. Because of this, careful consideration is necessary when developing competitive workloads.

This presentation evaluates competitive workloads and highlights the positive and negative impact of optimizing for them. It also describes the benchmark development process in detail, with a concentration on workload modeling to help the attendees build or choose workloads to simulate their own application.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Evolution of Competitive Java Benchmarks', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26120', 'Red Hat&apos;s Java-based PaaS solution, OpenShift, relies on the Java EE-based JBoss Application Server as the PaaS container. This session describes the challenges, best practices, and suggestions for a Java EE-based PaaS infrastructure. It describes the security challenges associated with providing identity services to the PaaS infrastructure and the applications. The emphasis is on lessons learned.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Experiences with Java EE-Enabled PaaS', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24944', 'This session presents a no-holds-barred examination of modern Web application deployment with Java. It takes a look at the new deployment features in JRE 7 that enable you to simplify deployment, reduce application startup time, and improve the user experience.

The presentation examines best practices for applets and Java Web Start applications and talks about some &quot;worst practices&quot; the speakers have seen and how to refactor your code to avoid them. It also addresses how to troubleshoot common problems and takes a detailed look at nocodebase, embedded JNLP, and security improvements.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Improving Web Application Deployment with JDK 7', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25242', 'It&apos;s said that cloud computing will profoundly alter software development, create endless opportunities for developers, and solve world hunger. But why the hype? This session discusses reasons for considering cloud deployments and focuses on cloud technologies from the developer&apos;s point of view. It shows real technology from multiple cloud vendors and explores open source cloud frameworks, Java-focused cloud environments, and development tools. Moreover, it demystifies the multiple layers of cloud technologies, showing where cloud computing really changes the game and where it&apos;s marketing hype. It also offers a map of how cloud technology can be used in your project, where it makes sense, and when you should avoid it altogether.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Instant Cloud: Just Add Java', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24984', 'This session describes observations and lessons learned while integrating JSR 196 (Java Authentication Service Provider Interface for Containers) with an application server. It covers JSR 196 configuration, the various container profiles, callback handlers, and use of server authentication modules (SAMs) to integrate with front- and back-end systems. It also discusses possible enhancements, revisions, and extensions to the specification, focusing on support for containers not currently covered by JSR 196 profiles and possible standardization of configuration artifacts that can support a richer ecosystem of third-party SAMs.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Integrating JSR 196 (JASPIC) with Containers', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23528', 'This session demonstrates leveraging the power of JavaFX 2.0 and the Lua scripting language running in a pure Java VM to iteratively build an application user interface.', NULL, 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Interactive UI Design with JavaFX and Lua', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25860', 'Good layout remains one of most challenging aspects of building a user interface. The layout APIs in JavaFX 2.0 were specifically designed to make it easier to achieve great layout in the face of the increasing complexity that has come with animated graphics and resolution independence. Using the context of a practical example, this session covers what you need to know to use  JavaFX 2.0 to lay out an aesthetically beautiful and usable interface to meet the expectations of modern users.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Interface Layout with JavaFX 2.0', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25011', 'Why restrict ourselves to interacting with a user interface through a keyboard and a mouse? This session looks at how open source APIs for the Kinect, the Wiimote combined with a tilt-compensated compass, a head-mounted stereoscopic display, and some old Sun SPOTs can build a truly immersive application.

To simplify the development of the interface components, the presentation uses the latest JavaFX 2.0 &quot;pure Java&quot; implementation. The session starts with an overview of the different components being used and explains how they are all brought together to enable the user to interact with interfaces in ways never before possible. It also looks at the potential of 3-D interfaces to build some demos that will amuse and amaze.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Interfacing with the Interface: JavaFX 2.0, Wiimote, Kinect, and More', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22480', 'Contexts and Dependency Injection (CDI) for Java EE is an elegant set of services for Java that draws upon ideas from JBoss Seam and Google Guice. Although many of the features provided (dependency injection, contextual lifecycle, configuration, interception, event notification) are familiar, the innovative use of meta-annotations is uniquely expressive and type-safe.

This session briefly introduces CDI and uses a simple example to illustrate how it enhances the Java EE programming model. It then discusses the new features planned for CDI 1.1, such as multitenancy support and better alignment with other Java EE specifications, showing how this will benefit Java EE 7.', 'Java EE Web Profile and Platform Technologies', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Introducing Contexts and Dependency Injection 1.1', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25009', 'FXML is a scriptable, XML-based markup language for constructing JavaFX user interfaces. The hierarchical structure of an XML document closely parallels the structure of the JavaFX scene graph, making it easy to visualize the resulting output. Event handlers can be written with any JVM-compatible scripting language, such as JavaScript, Groovy, or Clojure. Additional features include on-the-fly localization, dynamic data binding, and code modularization. Learn more in this session.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Introducing FXML', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25802', 'With the advent of increased processing and memory in even the simplest devices, plus the rollout of IPv6 (internet of things), the potential exists for billions of devices to interact, providing &quot;applications&quot; to consumers, businesses, or M2M. This session provides an overview of real-world experiences with &quot;app-enabling&quot; these kinds of devices with Java and OSGi (an open industry standard that is itself based on Java enabling &quot;write once, run anywhere&quot; implementation). It also summarizes a few examples of applications in widely divergent vertical segments such as smart grid energy management, media/content sharing and management, smart home, connected vehicle telematics, telehealth, transportation, and smart farming.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Java and OSGi Enable Many Applications on Many End Devices', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24742', 'JSON is a lightweight data-exchange format that has been increasingly used in RESTful Web services by highly visible Websites (Facebook, Twitter, Amazon, and so on). The format is easy for humans and machines to read and write. JSON is quickly becoming developers&apos; primary choice for consuming and creating Web services. 

The Java API for JSON JSR intends to create a standard Java API for JSON so that the applications that use this API are smaller in size and portable. The goals of the API are to produce/consume JSON text in a streaming fashion and to build a Java object model for JSON text. Attend this session for an overview and discussion of how to utilize this API in applications.', 'Java EE Web Profile and Platform Technologies', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Java API for JSON', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25013', 'Find out what&apos;s new in the upcoming update release of Java Card Classic Edition 3.0.4. This session explores important new features such as support for strings, nested transactions, and flexible cryptoalgorithms. It also goes over tools that are part of or work with the the Java Card Development Kit, such as the trimming tool, the new tool designed specifically to support and enhance the Java Card S program.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Card 3.0.4 and  Java Card Tools', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23453', 'M2M is currently gaining huge momentum. It encompasses
many different vertical domains such as e-health, smart grid, automotive, and environment. M2M devices are extending from sensors to remote controls, from cars to public transportation, from homes to smart cities. However, these devices will face very challenging, heterogeneous, and hostile environments in terms of expected lifetime, location, maintenance cycles, and security constraints.

This session describes the need for virtual machines in M2M, considering the increasing security, flexibility, and extensibility requirements in this arena, and how they are driving Java Card technology in new directions and into new markets.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Card Platform: Embracing M2M and Other New Markets', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('37780', 'The Java Community Keynote gives JavaOne attendees the chance to stretch their minds, find inspiration, and learn from colleagues who are stretching the boundaries of the Java frontier. Java luminaries from Oracle and JavaOne Diamond Sponsor IBM showcase and discuss Java innovation.', NULL, 'Core Java Platform', 105, 'Introductory', 'Approved', 'JavaOne', 'Java Community Keynote', 'Core Java Platform', 'Keynote');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19380', 'This session uses animation to visually explore the building blocks of concurrency in the Java concurrency library. At the heart of the presentation is a series of interactive animations that visualize the functionality, timings, and interactions of each concurrency component. Each animation features buttons that correspond to the method calls associated with that component. You&apos;ll see how the threads interact with each other in real time as they contend for access to some blocking structure. The session, aimed at intermediate-level Java developers, covers executors, fork and join, and everything in between. So if you&apos;re still using constructs such as new thread start or wait/notify, please attend this session.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Concurrent Animated', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25098', 'Spend time with the Java Deployment team to solve problems you have encountered, validate your design approach, and have your questions answered. This session covers troubleshooting, changes in Java 7, JavaFX deployment, and anything else about deployment you have questions about.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Java Deployment: Meet the Team', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25233', 'Java EE 6 development has never been easier in Eclipse. This session shows how the Eclipse Platform easily enables Java EE 6 application development, deployment, and debugging for GlassFish. The GlassFish application server implements the latest Java EE platform technologies, such as Servlet 3.0, JSF 2.0, dependency injection, Bean Validation, the Metro Java API JAX-WS Web services, and Enterprise JavaBeans (EJB) 3.1.

This demonstration-driven session covers common cases such as configuring Java EE 6 projects for GlassFish deployment, debugging, and administration; mapping database entities with JPA 2.0; packing EJBs in a Web application; and visual JSF 2.0 UI development.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE 6 Development in Eclipse', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25065', 'This tools-oriented BOF session provides a brief introduction to current tools support for Java EE 6 in NetBeans, Eclipse, and IntelliJ. Then in the main part of the BOF, the attendees and the presenters will discuss what could be added to, improved, or even removed from the tools area to better serve Java EE developers.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Java EE 6 Tools Support: What Do You Need?', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21641', 'Java EE should be renamed Java Cool Edition. It comes with a small footprint, powerful features, and very short turnaround cycles. This session demos nonobvious Java EE 6 tricks and techniques such as the following:

&amp;bull; Flexible configuration
&amp;bull; Implementing plug-ins with convention over configuration
&amp;bull; Generic logger injection
&amp;bull; Integration of legacy POJOs
&amp;bull; Observer and factory pattern killers
&amp;bull; Stateful components and always-attached JPA entities
&amp;bull; Implementing schedulers and asynchronous events
&amp;bull; Comet with Servlet 3, EJB 3.1, and CDI
&amp;bull; Easy monitoring with JMX and JAX-RS
&amp;bull; Using transactions for speed and consistency
&amp;bull; @Singleton, the perfect cache
&amp;bull; Automatically starting dependent services', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE 6: The Cool Parts', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24161', 'This session compares the Spring and Java EE stacks in terms of Web frameworks. It re-examines the motivations behind the Spring framework and explores the emergence of the Java EE  programming model to meet the challenges posed. The presentation provides insight into when Spring and/or Java EE is appropriate for a building Web applications and if they can coexist.', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE and  Spring/MVC Shoot-out', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24421', 'Behavior-driven development (BDD) is an evolution of test-driven development (TDD). It shifts the vocabulary from being test-based to behavior-based and positions itself as a design philosophy. JBehave is a Java framework for BDD, and this session explores how to write integration tests for your Java EE apps with JBehave. It also demonstrates how to leverage the Context and Dependency Injection (CDI) APIs to implement your tests.

This session is a must-see for all Java EE developers who want a better way to write integration tests aligned with the intended behavior.', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE Behave!: Behavior-Driven Development with Java EE', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22522', 'Java EE application servers implement various strategies for managing clusters. Some use a centralized model with a domain administration server that manages the configuration for the whole cluster. Others enable instances to be managed directly, with the responsibility for cluster coordination being outside of the application server itself. Cluster management strategies vary with respect to availability, scalability, performance, ease of use, monitoring, and resource consumption. This presentation explores various cluster management strategies, providing a survey of which strategies are implemented in popular application servers and an analysis of what deployment considerations can influence the choice of a strategy to use.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE Cluster Management Strategies', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24100', 'With the advent of multicore processors, Java experts in the blogosphere and at conferences have been preaching the need to develop applications with concurrency in mind. This has led to the widespread misconception that everyone must write complicated code to utilize all cores as efficiently as possible, which, in turn, has meant buggy and even slow Java EE applications. This session demonstrates common concurrency-related issues of programming in a Java EE environment. For each mistake, it suggests how to harness the Java EE platform to achieve multicore utilization while maintaining simplicity and  focusing on functionality. Leave the difficult work (vertical and horizontal scaling) to the application server.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Java EE Concurrency Misconceptions', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24346', 'Google App Engine (GAE) is among the most popular cloud application platforms today, offering decent service at a low price point or even for free. Unfortunately, however, its Java environment is also fairly restrictive.

This session presents several tips and tricks on how to use top Java EE specs&amp;mdash;CDI, JPA, JSF2, and Bean Validation, for instance&amp;mdash;within GAE&apos;s restrictive sandbox while still benefiting from the highly scalable environment it provides and maintaining portability to other Java EE containers. It demonstrates how CDI can be used to abstract from GAE&apos;s services and how state-of-the-art testing frameworks such as ShrinkWrap and Arquillian can be made to work with a GAE application.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE on Google App Engine: CDI to the Rescue', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22340', 'The focus of this session is the Servlet 3.1 feature set and what Oracle is doing to optimize the use of the Java EE Web container in the cloud. The presentation discusses the feature set targeted for Java EE 7, the main theme of which is platform as a service (PaaS), and what Oracle is doing in the Web container to enable support for the same in Web applications.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE Web Container in the Cloud', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('17340', 'Learn how to eliminate security vulnerabilities commonly targeted by malicious attackers. This session won&apos;t simply talk about the ways issues such as cross-site scripting (XSS) and cross-site request forgery (CSRF) affect your Java Web applications but will also show how hackers abuse these potentially devastating defects by finding and exploiting vulnerabilities in a real-world open source Web application built in Java. The session proceeds to walk through the source code and actually fixes these issues, using secure coding techniques. It also discusses best practices for building security into your SDLC.

Java developers and architects will learn how to find and fix security issues in their applications before hackers do.', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Java EE Web Security by Example', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24029', 'Many artifacts are available that compare the performance of Java and C++. Yet few, if any, offer any practical advice a developer or architect can use for making a good decision about which technology is best for an application. This session does exactly that: it offers practical advice that can be used to decide which is best for an application in which performance is one of the most important requirements.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Java or C++: Practical Advice You Can Use', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24923', 'In this community-oriented BOF session with members of the JPA 2.1 expert group, you can meet the experts, ask questions, and provide feedback on the features and improvements you&apos;d like to see added to JPA. Come prepared for a lively discussion.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Java Persistence API 2.1 BOF', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24981', 'Work on the latest release of the Java Persistence API began earlier this year and is now well under way. This session provides an up-to-the-minute update on work in progress in the JPA expert group, an overview of new features added to the JPA specification, and a preview of what&apos;s still to come.

Among the topics covered:
&amp;bull; New JPQL and criteria API features, including support for stored procedures, downcasting, and more-generalized function support
&amp;bull; Runtime improvements such as unsynchronized persistence contexts, support for read-only entities and queries, transformation mappings, and custom types
&amp;bull; JPA use in PaaS environments and options for supporting multitenancy', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Persistence API 2.1: What&apos;s New and What&apos;s Coming', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24521', 'The Java Persistence API (JSR 317), the Java standard for object-relational database access, has been widely adopted and has succeeded in defining a vendor-neutral API that enables application portability and implementation choice for developers. The same cannot be said for data grid and NoSQL products and open source frameworks. Each product provides a proprietary API that precludes portability and prevents it from being used from existing applications without significant rewrites.     

This session explores the challenges and benefits of using the JPA with data grids to scale JPA applications and examines the approaches taken by emerging solutions such as Oracle TopLink&apos;s Grid feature and Hibernate Object/Grid Mapper (OGM).', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Persistence API on the Grid', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24355', 'This session discusses Java&apos;s potential in millions of embedded devices in the smart grid ecosystem. It explains
&amp;bull; The potential smart grid devices hold for Java
&amp;bull; Where Java stands today in this ecosystem
&amp;bull; How Java could easily be the platform of choice on smart grid devices
&amp;bull; How Java developers stand to gain from this market

The presentation also describes the Java technology requirements for smart grid devices: what will be pervasive and what will be mandatory. It highlights the technical challenges Java developers may face in this ecosystem. It also outlines Oracle&apos;s offerings for smart grid devices and describes use cases that they power currently.', 'Core Java Platform', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Powering Smart Grid Devices', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24642', 'This hands-on lab enables attendees to create their own Java gateway services and Java client access to services such as lights, appliance switches and controls, security deadbolt keypad/lock control, smart plug energy monitoring, thermostat control, and monitoring of live video from selected cameras. Participants will combine two or more services with authentication&amp;mdash;for example, unlock a door remotely based on a video feed from outside the door. Java SE for Embedded Devices allows for the Java programming environment in embedded applications in the smart grid, such as home gateways, data concentrators, and other clients that can participate in the smart grid and utilities ecosystem.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java ME, Mobile, Embedded, and Devices', 120, 'Introductory', 'Approved', 'JavaOne', 'Java SE for Embedded Devices for Connected Smart Grid', 'Java ME, Mobile, Embedded, and Devices', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24685', 'In embedded Java software development, as opposed to the nonembedded case, the development and deployment systems are usually different&amp;mdash;moreover, the deployment system (OS, hardware) is usually still under development during much of the software development. These and other characteristics of embedded Java software development introduce a unique set of requirements, constraints, and challenges for troubleshooting embedded Java software. This session focuses on Java SE for Embedded Devices troubleshooting, an area that enjoys growing interest among embedded Java developers yet is still largely uncharted to date. It provides comprehensive in-depth coverage of this niche subject, plus examples and a demo to illustrate the key takeaway points.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Java SE for Embedded Tools and Troubleshooting for Development and Deployment', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24966', 'Come to this BOF session to hear about Oracle&apos;s roadmap for Java security. The presentation provides an overview of the new security features in JDK 7 and what is planned for JDK 8, including the security features of Project Jigsaw. This is followed by an open Q&amp;A period in which you can ask questions or share your ideas on anything related to Java security. You will also see a demo of how to generate and install signed module files.', 'Core Java Platform', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Java Security Roadmap and Q&amp;A', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24162', 'Traditionally, Java performance is focused on throughput: how fast can the application run once it is warmed up? But there are two other key performance metrics: startup duration (agility) and memory size (footprint). Hear from one of the IBM JVM experts on the topic of application startup performance tuning. This session covers some of the approaches, tools, and features of the JVM you can use to understand and improve on these two important metrics. You will learn why real-world performance must balance throughput, agility, and footprint and where to start to make improvements in your application.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Startup Performance', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24022', 'This session looks at some strange and bizarre exceptions, error messages, and performance measurements. It discusses each of them and tries to resolve them.

You are invited to chip in, offer solutions, ask questions, and learn about some of the more obscure corners of Java.', 'Java EE Web Profile and Platform Technologies', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Java Tuning Puzzles', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23828', 'Worried that you&apos;re not getting every last ounce of performance out of your application running on the JVM? Not really sure where to start? Come hear JVM implementers describe how to tune your application until it flies. This presentation provides insights into different approaches to performance tuning, from low-level profiling up through application instrumentation. Of course, it delivers healthy doses of tools and tips too. In 2011 this session gets hands-on with more tools and some dynamic instrumentation techniques for unlocking new levels of performance from your apps. You will leave with an appreciation of how the JVM team analyzes and solves many performance bottlenecks.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Unleashed &quot;2&quot;: More JVM Tuning from the Pros', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('30440', 'This session is an open discussion of how Java user groups (JUGs) and the Java Community Process (JCP) can work together to make the Java platform stronger. It also goes over how the user groups can help promote the JCP within their organizations to bring an awareness of what the JCP has to offer JUG members.', NULL, 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Java User Groups and the JCP', 'The Java Frontier', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24701', 'Emerging platform as a service (PaaS) providers now offer Java as part of their runtime services. Challenges such as autoscaling, dynamic service provisioning, and insulating applications from platform deployment specifics will be critical for the success of Java in the cloud. This session focuses on how these issues are addressed by the Cloud Foundry platform, an open source PaaS from VMware, and compares how these issues are also addressed by other platforms.', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Workloads in the Cloud', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24328', 'A home gateway is used as the modem/router to provide the necessary broadband internet connection of the home. It may bring much more interesting and useful services and work as a hub for connecting all smart devices/appliances via ZigBee or other protocols in the home (home internet of things), thus helping make the next-generation smart home a reality. The smart home will greatly improve people&apos;s living standards. The Java-powered home gateway is the major trend in home gateways&amp;mdash;Java
technology with OSGi is suitable for this usage scenario.

This session introduces the latest technologies and one real home gateway device powered by Oracle Java Embedded Client.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Java-Powered Home Gateway: Basis of the Next-Generation Smart Home', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('29400', 'In the world of over-the-top (OTT) video, solutions abound when it comes to bringing content to internet devices. However, as the OTT industry matures, manufacturers of devices, rights owners, and service providers are now realizing that OTT is mostly about IP video distribution, with solid distribution and monetization technologies to make it a real business.

In this environment, Java is proving, in its Blu-ray Disc Java (BD-J) variant, to be the most robust, largest standards-based worldwide footprint for this IP video distribution. In this session, you&apos;ll learn how RCDb and Oracle are enabling the world of OTT and IP video with a long-term, standards-based approach to business, distribution, and partnerships.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Java: The Largest Worldwide Footprint for Standards-Based OTT Services', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('39540', 'The Harris Corporation&apos;s OS/COMET product line supports government as well as commercial satellite operations centers flying everything from 1950s satellites to the latest concept space vehicles. This session looks at the factors driving Harris to select JavaFX and Java 7 for the development of its Mission Planning application, relying on Oracle&apos;s promise at JavaOne 2010 to deliver JavaFX 2.0 within a year of its announcement. This software is intended to assist Harris customers&apos; planning departments in visualizing when and where satellite contact opportunities will occur, establishing desired tasking, and collaborating through ground systems to ensure the successful completion of those communications.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX . . . in T Minus 5, 4, 3, 2, 1', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25362', 'JavaFX 2.0 Early Access on desktop and tablet devices provides a modern rich client framework for connecting applications to social networking, home monitoring and automation, and enterprise applications. Participants in this hands-on lab will use JavaFX 2.0 Early Access to develop JavaFX applications that connect to and combine various services, depending on which services are configured and available to the lab environment over the internet or through actual devices such as sensors or appliances.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 120, 'Introductory', 'Approved', 'JavaOne', 'JavaFX 2.0 Early Access Rich Client Applications', 'Java SE, Client Side Technologies, and Rich User Experiences', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24566', 'The event system has been reworked in JavaFX 2.0 to make it more flexible and powerful. This session discusses those changes and what they mean for developers. It shows how the event system API can be used at various levels&amp;mdash;from the easy and convenient methods to the more complex and powerful ones. After these general topics, it focuses specifically on the keyboard and mouse events and how their delivery and handling have been influenced by the event system changes. It also looks at some common use case scenarios and recommended solutions for them. Anybody who wants to learn how to take advantage of the wide capabilities of the new event system API should consider attending.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'JavaFX 2.0 Event System Walk-through', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24569', 'JavaFX is powerful, but how do you leverage it quickly and efficiently? Development of complex visual JavaFX 2.0 applications can be greatly simplified with the help of upcoming dedicated tools. This session demonstrates a simple JavaFX game development workflow, starting from Adobe Creative Suite and ending with NetBeans FXML editing, previewing, and Java coding.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'JavaFX 2.0 Visual Workflow Editor', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('17960', 'JavaFX 2.0 is the next version of a revolutionary rich client platform for developing immersive desktop applications. One of the new features in JavaFX 2.0 is a set of pure Java APIs that can be used from any JVM language, opening up tremendous possibilities. This presentation demonstrates the potential of using JavaFX 2.0 together with alternative languages such as Groovy, Scala, and Visage.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX 2.0 with Alternative Languages', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26200', 'This session highlights an ongoing intelligence community application development effort that uses JavaFX, Java, Hibernate, and MySQL to implement a facial and object recognition system. The presentation demonstrates the user interface and its model view controller architecture and takes a detailed look at the interfaces built to communicate between the JavaFX layer, Java, Hibernate, and MySQL.

The intended audience is intermediate Java and JavaFX developers.

The session shows how
&amp;bull; To develop a friendly JavaFX front end for a complicated process
&amp;bull; JavaFX and Java were integrated into an automated face- and object-recognition system
&amp;bull; The application serves the intelligence community in both a peacetime and wartime capacity', 'Java SE, Client Side Technologies, and Rich User Experiences', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX and Its Front-End Ticket to the Theater of War', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25781', 'Come to this session to talk directly to the experts about the JavaFX architecture and programming model.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'JavaFX Architecture and Programming Model', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22080', 'Many applications require the visualization of different kinds of data, often represented in formats such as XML, JSON, or CSV or stored in arrays, databases, or remote Web services.

This session gradually introduces a library that abstracts the bulk of this work, removing the complexities of having to massage data into a UI and enabling developers to focus on more-important tasks. It includes examples with source code.

The presentation
&amp;bull; Introduces the JavaFX 2.0 ListView, TableView, and TreeView controls
&amp;bull; Briefly defines some datasources (characteristics, classification, and so on)
&amp;bull; Demonstrates how to use the datasources library with various datasources
&amp;bull; Discusses visualizing dynamic data
&amp;bull; Discusses retrieving data &quot;on demand&quot;', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX Datasources: Getting Real-World Data into JavaFX Controls', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24349', 'WebGL is an emerging standard for powerful 3-D graphics running in browsers. It gives you the speed and fluency of hardware-accelerated rendering, so it is a promising platform for JavaFX. This presentation shows you how WebGL can be utilized by JavaFX as an alternative graphics renderer.', 'Java ME, Mobile, Embedded, and Devices', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'JavaFX on Top of WebGL', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24350', 'This session details the work the speaker has been doing at Credit Suisse on JavaFX development for a research application. He has been working with teams there to build and deploy JavaFX components in an existing Java Swing application used by companies globally. Called Locus, this application is a key financial research and analytics application with a large user base across a large set of financial markets. The teams have deployed JavaFX 1.3.1 successfully and are moving to JavaFX 2.0, having been in the Early Access program. The presentation describes how they integrated JavaFX into Swing, how it&apos;s driving increased Locus usage, the future planned expansion of JavaFX inside Credit Suisse, and how it enhances the user experience.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX on Wall Street', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23422', 'Two of the most important and appreciated innovations of JavaFX Script were properties and the ability to bind them to arbitrary expressions. In JavaFX 2.0, this functionality is provided by JavaFX properties and the binding API.

This session takes an in-depth look at properties, their functionality, and how you can define them in your own classes. It examines the high-level binding API, which provides a simple way to assemble binding expressions. The last section covers the low-level binding API, which enables you to define your own arbitrary bindings, thus unleashing the full power of the binding API.

After this presentation, you will know everything there is to know about JavaFX 2.0 properties and the binding API.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX Properties and Bindings for Experts (and Those Who Want to Become Experts)', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24313', 'This session introduces the new JavaFX Web component, which brings modern Web standards and technologies to the JavaFX platform. You can embed a WebKit-based browser in your application and manage it with W3C DOM and other Java APIs. Take a tour of API and features, and then study a real-life interactive application.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX Web Component at a Glance', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25880', 'This session looks under the hood of JavaFX to reveal Prism, WebView, the media engine, the application model, and threading.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'JavaFX: Under the Hood', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22120', 'Building the next generation of enterprise Web applications is now easier than ever. This presentation shows you how to use Spring Roo to quickly develop high-performance rich internet applications in Java with a UI of your choice. 

It covers
&amp;bull; How Java offers an easy, high-performance, tooling-optimized development experience
&amp;bull; Reverse-engineering an existing database to build an application with an MVC, JSF, or GWT front end in minutes
&amp;bull; Using important standards such as JPA, JavaBeans validation, and EJB 3 annotations
&amp;bull; Easily round-tripping changes between your UI, middle tier, and database
&amp;bull; Deploying to clouds such as CloudFoundry, VMforce, Google App Engine, or AWS Elastic Beanstalk', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Enterprise Applications in the Cloud: Fast, Fun, and Easier Than Ever', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('39041', 'With hundreds of billions of lines of COBOL code supporting billions of transactions a day across many of world&apos;s largest financial institutions, COBOL assets remain pervasive in most core-banking IT shops. As more and more IT shops look at migration plans to move from COBOL to Java, a distinct and interesting set of problems is evolving. For instance, it is typically impractical for most IT shops to perform rip-and-replace across their entire COBOL application portfolio. As such, a majority of modernization roadmaps involve a lengthy coexistence of Java and COBOL assets, creating new and distinct patterns of interlanguage operation for Java. This session provides an overview of the evolution of this mixed-language space and delves into various gaps and challenges that have been observed.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Java for Legacy Code Re-engineering', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24926', 'This session aims to establish how Java is powering digital entertainment in millions of homes today and how it is inspiring the future of infotainment.

This session discusses the key role Java plays in the digital TV market. It explains the Java ME technology that has powered a wide variety of TV use cases and is an integral part of many specifications worldwide. It focuses on the innovations made in Java technology to meet the infotainment needs of the modern era: Java for mass market devices, enabling 3-D graphics, and so on.

The presentation addresses the areas of possible innovation for creating a better Java platform for future infotainment needs. It demonstrates the latest Java ME-based offerings for infotainment.', 'Core Java Platform', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Java Is Digital Entertainment', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25363', 'Java ME and Ginga-J applications on TV provide a framework for developing interactive TV applications with Java. Participants in this hands-on lab will use the Ginga-J SDK to develop interactive Java TV applications that connect to and combine various services, depending on which services are configured and available to the lab environment over the internet or through actual devices such as sensors or appliances.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 120, 'Introductory', 'Approved', 'JavaOne', 'Java ME and Ginga-J TV Applications', 'Java ME, Mobile, Embedded, and Devices', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24102', 'Nowadays people are connected to the network at all times via their mobile devices. This opens a huge number of possibilities for developing social network applications, because it enables you, as a developer, to create mobile applications that can deliver real-time information about anything. Imagine that your users act like sensors of a system: they send updates about the system and its behavior, and other users can benefit from it. In this session, you will discover how the users of a public transportation system in a developing country can access real-time information about the behavior of the system when this information is submitted by other users via their mobile devices with Java ME.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Java ME and You: Discovering the Power of Mobile Masses&apos; Inputs', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24682', 'Java ME Lightweight User Interface Toolkit 1.5 on mobile phones (Java ME CLDC) and TV (Java ME CDC) provides embedded-client/mobile-client frameworks for connecting to social networking, home monitoring and automation, and enterprise applications. Participants in this hands-on lab will use Java ME LWUIT 1.5 (either in Oracle Java Micro Edition Software Development Kit for Embedded and Media Clients 3.x or devices provided by a partner) to develop Java applications that connect to and combine various services, depending on which of the above services are configured and available to the lab environment over the internet or actual devices such as sensors or appliances in the lab.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 120, 'Introductory', 'Approved', 'JavaOne', 'Java ME LWUIT 1.5', 'Java ME, Mobile, Embedded, and Devices', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22700', 'From the perspective of countries such as India, South Africa, and Brazil, this session explores ways developers are utilizing Java ME coupled with back-end and service enablers and Nokia Series 40 phones to move beyond existing apps and app stores to envision some refreshingly new business models.

From sharing content and apps in innovative ways to utilizing data where there is little or no connectivity and optimizing power at all stages of the ecosystem, the challenge can be viewed as a collaborative effort that crosses many different technologies, partners, and even industries.

Highlighted use cases revisit important aspects of emerging markets innovation not typically seen as relevant, viable, or worthwhile in developed countries.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Java Moving Out of the Box in Emerging Markets', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('39044', 'System z has been IBM&apos;s premier enterprise computing platform for more than 47 years. In the last 12 years, Java has grown to become a first-class citizen on the platform. Java-based containers have been introduced across middleware and information management systems. The IBM JVM has been augmented to enable interoperation with z/OS services, and specialty engines have been introduced to ensure competitive pricing of Java workloads on z/OS. Beyond this, Linux for System z continues to emerge as a platform of choice for extreme consolidation and virtualization of Java workloads. This session provides an overview of System z and how the platforms and Java have evolved together.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Java on System z', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23720', 'At last year&apos;s JavaOne conferencer, Oracle laid out a long-term roadmap for JavaFX to make it a premier rich client platform. JavaFX 2.0, a major update to the JavaFX platform, is a significant milestone in fulfilling this vision. Starting with this version, developers can create JavaFX applications completely in the Java programming language, using standard Java development tools. It also introduces several new features to the JavaFX platform: integration with Swing applications, hardware-accelerated graphics, the ability to embed Web content, stable media playback, and an improved UI controls library. With the help of code examples and demos, this session explores key new features and discusses use cases and benefits for Java developers of using JavaFX.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Introduction to JavaFX 2.0', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25780', 'This session covers animation, scene graph, design patterns, and best practices for the JavaFX programming model.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Introduction to JavaFX Programming Model, Part II', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24943', 'The JavaFX Visual Tool is a forthcoming product that will make it possible to develop JavaFX user interfaces graphically. In this session, the lead designer and the lead engineer for the product present a sneak preview of its principal features.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Introduction to the JavaFX Visual Tool', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24441', 'This BOF session focuses on the Turmeric SOA project. Turmeric, a SOA originally developed and used by eBay, was designed with speed in mind. The runtime framework itself is designed to have, at most, 2 to 3 milliseconds of overhead. The purpose of the BOF is to communicate with a wider community and encourage feedback about the project.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Introduction to Turmeric', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23443', '2011 is the year in which all IPv4 addresses will be exhausted. IPv6 support is no longer a &quot;nice to have&quot; item, and engineers will all be tasked to support this protocol within their systems and applications. Compliance is not limited to hardware and OS tiers but also affects the entire software stack, including server-side and client-side Java. 

This session covers everything you will need to know to fully support IPv6 for your application, including
&amp;bull; Java&apos;s built-in support for IPv6
&amp;bull; Programming gotchas related to parsing, data structures, data storage, and more
&amp;bull; Domain name and DNS strategies for testing, supporting, and migrating clients and services
&amp;bull; IPv6 dual-stack networking support for IPv4 and IPv6', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'IPv6: The Problem That Can No Longer Be Ignored', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23941', 'Platform as a service has gained in popularity over the past two years, with many vendors talking about having to rewrite the middleware handbook and discard existing investments such as Java EE. However, as this session demonstrates, reality is quite different. Not only does Java EE have a critical role to play in Java-based PaaS but it can also be used in cloud middleware for other languages, such as Ruby.

As the session shows, the definition of PaaS today is of very little value to real-world applications, beyond simplistic examples. Therefore, the presentation defines enterprise PaaS and discusses how it is relevant to the majority of today&apos;s cloud deployments. It then shows that Java EE 6 and beyond are the obvious building blocks.', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Is Java EE Relevant to the Cloud?', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24880', 'Cloud infrastructure services and software as a service are pretty familiar experiences today for the public and industry insiders alike. Platform cloud services, on the other hand, are a fierce battleground for thought leadership&amp;mdash;whether to champion or change the category&apos;s defining characteristics. In this session, IBM, Oracle, Red Hat, and VMware present a lively examination of application servers and their place in the constellation of cloud platform services. Be prepared for some lively debate and surprises as the panel examines issues pertaining to multitenancy, platform as a service, Java virtualization, and more, reflecting the different perspectives of these industry leaders.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Is There Fresh Air in the Cloud for Application Servers?', 'Enterprise Service Architectures and the Cloud', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('18920', 'JavaServer Faces is seen by most developers as a markup-based server-side stateful Web UI framework. In fact, JSF is and always has been underpinned by a Java API that&apos;s suitable, with just a few tweaks, to programming the UI directly in Java code without markup, as in the popular Web frameworks Vaadin and Wicket and the commercial product CaptainCasa.

This presentation explores the Java language API for JSF and the  changes necessary to make it a first-class view declaration language. The advantages of using this approach include the ability to take advantage of the variety of JSF components already on the market while enabling both Java-based and markup-based authoring experiences to coexist in the same project.', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Java and JSF: JSF Has Never Been Just About Markup', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25029', 'The Java Persistence API is elegant, straightforward, and easy to use. This is undeniably true for simple domain models, but what about more-complex ones? It turns out that with complex domain models, you usually run into interesting JPA issues relating to performance or correctness.

This session presents several puzzles involving JPA and Hibernate to illustrate tricky use cases that have interesting side effects, lead to incorrect behavior, or impose significant performance overhead. Come and see if you can solve them.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'JPA Puzzlers', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25147', 'JSF is the most successful Java UI component technology, judging by the vitality and variety of components available and the number of successful component vendors. The extra value brought to the Java EE platform by combining JSF with new Java EE 6 technologies such as CDI and Bean Validation, and non-Java EE technologies such as SpringRoo, give developers a hyperproductive out-of-the-box software stack.

This session shares the latest insights into the JSF 2.2 specification and provides a forum for giving input to the JSF community leaders.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'JSF Status and Community Input', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23346', 'Imagine building Java ME-based user interfaces with known Web technologies such as XHTML, SVG, and ECMAScript; featuring DOM-based communication between the ECMAScript and Java runtimes; and accessing all Java ME technology-based APIs such as camera, location, networking, audio/video, PIM, and telephony. 
The Java Language &amp; XML User Interface Markup Integration API (JSR 290) enables the creation of Java ME-based applications that combine the ease of authoring and graphical richness of Web UI with the power, flexibility, and breadth of the Java ME platform. 

This session dives into the API, demoing many use cases as well as JSR 290-related development processes and tools', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'JSR 290: Empower Web User Interfaces for Mobile Java Technology', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24401', 'Hundreds of millions of server, desktop, and mobile computers have shipped with the Trusted Platform Module (TPM) to improve system and application security. Still, there is currently no standard trusted computing API for Java SE.

This session, after an introduction to the technology, presents the JSR 321 API and its design rationale. In contrast to similar interfaces, the API offers an easy-to-use interface for accessing TPM features. This is demonstrated in live programming examples. The presentation shows how trusted computing can improve the security of Java applications and services locally as well as in  the cloud. The final release of the Trusted Computing standard is expected in time for JavaOne 2011.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'JSR 321: Trusted Computing API for Java', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24580', 'JMS is a key part of Java EE, despite its not having been updated since 2002. There is therefore no shortage of ideas for updating it, which is why in 2011 the JMS community has come together in JSR 343 to define JMS 2.0. 

JMS 2.0 will define new facilities to support Java EE 7 and the needs of the cloud. It will also include features to improve ease of use, updates to clarify the relationship with other Java EE specifications, a mandatory API for integration with application servers, and many other changes that that have been proposed following nearly a decade of use. 

This session is presented by members of the JSR 343 expert group. Come hear what will be in the early draft of JMS 2.0, and join the subsequent discussion.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'JSR 343: What&apos;s Coming in Java Message Service 2.0', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25124', 'You&apos;ve written applications for the Java Virtual Machine, using various frameworks and maybe even various languages. You understand how to rig up the classpath, get .class files to load, compile source, and set up an IDE. But you&apos;ve always wanted a better understanding of the plumbing underneath. How does JVM bytecode work? How does the JVM itself work? This presentation walks you through JVM and JVM bytecode basics, with lots of examples of how to bend the JVM to your whims.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'JVM Bytecode for Dummies (and the Rest of Us Too)', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22723', 'Troubleshooting issues such as instances of OutOfMemoryError, performance problems, and various exceptions is a common task for anyone developing or deploying an application. This deep dive session presents a hands-on demo of using open source IBM tools such as Monitoring and Diagnostic Tools for Java, Extended Memory Analyzer Tool, and the Support Assistant. Come learn how to diagnose these common problem types.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'JVM Flight Simulator: Debugging Java Deployments', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23923', 'With more and more programming languages running on the JVM, interest in reusing the best libraries and features of all of them inside one application is increasing. This session demonstrates how to do this inside a mature application framework with NetBeans RCP. The presentation uses live coding with, for example, Groovy and Scala on top of NetBeans RCP.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'JVM Language Mashup Using NetBeans RCP', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24741', 'Retail and industrial sites all have zones restricted to authorized personnel. Counters and cash registers, stock, and other security-critical areas can be open to access by intruders when complete physical isolation is not possible. This session describes an application, rolling out to multiple retail sites in 2011, that fuses laser measurement sensors and RFID to detect when authorized employees with RFID tags and unauthorized intruders without RFID tags enter a secure zone. It examines the details of this novel 100 percent Java-based approach to fusing laser and RFID sensors for zone security in the front office along with integration with back-office security systems. Sample Java code, video, and a live demo augment the presentation.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'LaserTag: Fusing Laser and RFID for Perimeter Security', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25297', 'This session showcases several unit testing libraries and frameworks that make it possible to write the most-effective unit and integration tests. It also highlights some of the most underused features of JUnit 4.8, including Theories, parameterized tests, and Hamcrest matchers.

Among the libraries it covers: Unitils, Spring Test, DbUnit, XMLUnit, Dumpster, Mockito, and JBehave. The presentation supplies code examples and discusses TDD/BDD best practices.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Le Tour de xUnit', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22481', 'Wmode&apos;s subsidiary Widality developed Momentem, one of the most popular B2B applications/services on the BlackBerry platform, and of course the application was developed in Java.

In taking Momentem from an idea into a subscription application that has been downloaded 300,000 times in more than 100 countries, Wmode learned a lot about what it takes to build and roll out a successful application that users utilize all day, every day in their businesses.

This presentation focuses on lessons learned along the way and gives developers and solutions companies lots of ideas that will help them get to profitability faster.

A similar theme presented by Wmode was the most popular presentation at RIM&apos;s Devcon 2010.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Lessons Learned in Rolling Out a Successful BlackBerry Application/Service', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24864', 'Although demand for open source is currently increasing, this session studies the implications of a future peak in supply. This is a familiar situation in the fossil fuel industry, which makes it possible for this session to draw amusing and interesting parallels while taking a deeper look at the economic underpinnings of (peer-based) open source production.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Life After Peak Open Source? Don&apos;t Panic!', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23645', 'In this session, hear from some current JSR spec leads moving through the JCP program about subjects such as a platform JSR update for Java SE, Java EE, and Java ME.', 'Java EE Web Profile and Platform Technologies', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Lightning Talks: JSRs in Progress', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24721', 'LincVolt is a 1959 Lincoln Continental owned by rock legend Neil Young that has been converted to an extended-range electric vehicle (ER-EV). Building upon the platform introduced during the 2009 JavaOne conference, this session describes the work performed since then to turn LincVolt into the world&apos;s first fully autonomous self-driving ER-EV. Tricked out with sensors, advanced self-navigation, and obstacle avoidance capability, Young&apos;s &quot;Thinkin&apos; Lincoln&quot; leverages the Java platform and a sophisticated Java-based robotics software platform to achieve autonomous self-driving capability. This presentation brings the attendees up to date with an overview of LincVolt&apos;s ER-EV features and then dives deep into the details of LincVolt&apos;s robotic driving behaviors.', 'Java ME, Mobile, Embedded, and Devices', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'LincVolt: A Robotic Electric 1959 Lincoln', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22207', 'LMAX has open-sourced a framework that can provide 4 - 10X throughput improvements over what is available in java.util.concurrent. The current libraries, particularly queue implementations, did not allow LMAX to build a financial exchange capable of &gt;100K TPS with less than 1 ms latency. It was not possible to get predictable latency, or sufficient throughput, with lock-based data structures. Also, the currently available implementations generated too much garbage. This session covers the design of the LMAX Disruptor framework, with its lock-free data structures and an understanding of modern CPUs that made it possible to build the world&apos;s highest-performance financial exchange.', 'Core Java Platform', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'LMAX Disruptor: High-Performance Concurrent Programming Framework', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23380', 'This BOF discusses the JSR 347 spec, along with how it relates to Java EE. Data grids provide a highly scalable, in-memory distributed data structure offering low-latency storage. Despite industry reliance on data grids for close to a decade now, this important technology has yet to be formalized in Java EE.

JSR 347 attempts to standardize data grids, with a goal of inclusion in Java EE, crucial to Java EE&apos;s effort to become the cloud application platform of choice. The BOF covers standard and async APIs, the relationship with JSR 107, behavior in distributed and transactional environments, Map/Reduce, and interoperability with other Java EE standards. Audience participation will help shape this standard.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Making Java EE Cloud-Friendly: JSR 347, Data Grids for the Java Platform', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24312', 'Desktop software is different. Teams are dealing with different operating systems and Java versions, the integration of nonstandardized APIs with a visually consistent application, and the complexities of automated UI testing, to name just a few of the challenges. This presentation discusses how frameworks such as Eclipse RCP and the NetBeans Platform can help make the development process calculable and amenable to planning.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Manage Java Desktop Complexity', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26501', 'Mapping and location check-in are some of the hottest features on mobile platforms. Unfortunately for most J2ME developers, there doesn&apos;t seem to be an out-of-the-box solution. This BOF session covers some of the different methods you can use to integrate mapping and location check-in in your applications. With bandwidth being extremely expensive outside of North America, mapping can be integrated with SMS and other alternative services. Feature phones rarely have GPS, but have no fear: carriers have started to open their location APIs. The presentation demonstrates how to integrate with a carrier&apos;s location. When you leave this session, you should be ready to start having some fun with mapping and J2ME.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Mapping and Checking In with Java ME', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21761', 'The 21st Century Communications and Video Accessibility Act includes requirements for mobile device accessibility for people with disabilities. Oracle is addressing these requirements by adding accessibility features to LWUIT&amp;mdash;its open source Lightweight User Interface Toolkit&amp;mdash;and to Oracle Java Wireless Client. 

LWUIT has become the de facto standard for writing Java ME applications and supports many of the UI concepts needed for accessibility. LWUIT will be embedded within Oracle Java Wireless Client, which will include other enhancements for accessibility. 

This session describes the work being done within Oracle, what developers need to know about accessibility, and how can they use LWUIT to provide accessibility to their customers.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Mobile Accessibility with LWUIT', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22840', 'Should you build a mobile app or a Web app? Attend this session to learn the details of a hybrid approach that enables you to develop with the Enterprise Java standards you know while taking advantage of rich mobile device features.

You will be taken rapidly through the basics of ICEfaces 2.0, JSF 2.0, and Ajax Push. You will then learn how to make use of extended browser capabilities on iPhone/iOS, Android, and BlackBerry devices to build a JSF application with camera, audio, and device look and feel. The session also presents related techniques that do not require JSF.', 'Java ME, Mobile, Embedded, and Devices', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Mobile Ajax Push with ICEfaces 2.0', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24643', 'Mobile Java 3D (M3G&amp;mdash;JSR 184) is one of the most interesting APIs for game developers targeting mass-market nobile Java devices. It is very compact and expressive and gives you a fast development pace and the feeling of true object-oriented mobile 3-D. Unfortunately, you used to have to compromise because of device limitations to avoid performance hits. However, during last year, this situation has dramatically changed with new Nokia devices, especially at the low end. This session discusses the capabilities and advantages of such devices for developers using JSR 184; includes demonstrations, practical tips, and guidelines for creating 3-D worlds; and brings attention to new market opportunities.', 'Emerging Languages, Tools, and Techniques', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Mobile Java 3D (M3G&amp;mdash;JSR 184) Opportunities', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24353', 'Mobile-enabling the workforce plays a key role in efficiently running a modern-day organization. Many organizations that have implemented ERP systems and other enterprisewide information systems have failed to reap the benefits, due to the unavailability of last-mile connectivity to their field force. This session explores the key architectural challenges in implementing a mobile workforce solution and examines how Java ME was leveraged by one organization to deliver a cost-effective yet powerful and efficient mobile application to customers. 

Topics covered:
&amp;bull; Java ME Web services or WSA (JSR 172)
&amp;bull; User interface development with LWUIT
&amp;bull; On-device data persistence with RMS
&amp;bull; Location-based services', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Mobile-Enabling the Enterprise Workforce: Harnessing the Power of Java ME', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24881', 'Are your applications ready for multiple cores? Attend this session to get an overview of the options for writing concurrent programs on the Java platform.

Multiple cores are our reality, and the number of cores keeps growing. The Java platform provides the foundation for creating scalable concurrent applications, but which abstractions will best lend themselves to the task? The presentation looks at constructs and abstractions available for concurrent programming on the Java platform. From threads to actors, through concurrent collections and transactional memory, it compares and contrasts how well each model lends itself to writing real concurrent applications and getting it right, while also keeping an eye on how well each solution performs.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Models for Concurrent Programming', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19860', 'Most people agree that modularity is a good thing, and with the impending &quot;modularity revolution&quot; coming to Java, many enterprise developers have been anxiously awaiting the benefits of modules in Java EE. This presentation discusses the fundamentals of enterprise modularity and demonstrates how it will affect Java EE application development. It covers dependencies and how they can be expressed, as well as the packaging and metadata issues that come into play. And it also goes over some of the relevant trade-offs that influence the solutions. Attendees will go away feeling better informed about what to expect and how to prepare for a module-based Java EE 7 environment. No experience is necessary, and questions are encouraged.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Modularity in the Enterprise', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23648', 'Module systems are gaining momentum in the industry. Some of their claimed benefits include improved divisibility of work, functional extensibility, and customizability. Acquiring these benefits for your legacy application is not a question of whether a module system is used but, rather, how it is used. This session addresses this topic by discussing the motivation and the technical means of modularizing legacy applications along the boundaries of functional concerns. It includes a case study of using the Featureous feature-centric-analysis tool for finding, analyzing, and migrating the user-identifiable features of the NDVis neuroscience application to the NetBeans module system.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Modularizing Features of Your Legacy Application for Fun and Profit', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21920', 'Monitoring a large infrastructure brings unique challenges that require blending development and operations concepts. This session discusses how Dell Inc. used Clojure to develop a data-flow-based monitoring system that stores, evaluates, and acts on hundreds of thousands of metrics. 

It covers 
&amp;bull; Real-world applications of Clojure&apos;s parallel programming constructs to take advantage of multiple cores available in today&apos;s systems
&amp;bull; Using Clojure&apos;s homoiconic nature to create DSLs
&amp;bull; Taking advantage of Clojure running on the JVM to use the Java ecosystem
&amp;bull; How DevOps takes advantage of the JVM dynamic languages to develop new monitoring tools', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Monitoring a Large-Scale Infrastructure with Clojure', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22122', 'The Web revolution has moved logic from the server to the client. Advanced applications are now utilizing technologies such as JavaFX and HTML5 to build immersive customer experiences for consumer and enterprise markets. This session explains how to utilize the features and capabilities of the JavaFX 2.0 platform and the latest HTML5 advances.', 'Java EE Web Profile and Platform Technologies', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Moving to the Client: JavaFX and HTML5', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25123', 'With multicore processors becoming more prevalent in embedded systems, developers are increasingly being challenged to effectively code for these processors. This session gives developers concrete methods and guidance for developing and debugging Java applications on multicore systems. Using Freescale QorIQ processors and Java SE for Embedded Devices, the presentation covers various multicore configuration options, challenges of using multiple cores, and how to successfully develop and debug a Java application that maximizes core and pipeline utilization. It looks at Java development and debug tools as well as platform tools from Freescale and third parties and includes a demonstration of the tools and methods discussed.', 'Emerging Languages, Tools, and Techniques', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Multicore Java Development and Debug Techniques on Freescale QorIQ Processors', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25215', 'NetBeans is an incredibly powerful and rich IDE. It can be used for building everything from Java EE apps to rich desktop clients, native applications using C++, and PHP Web applications. It is extremely flexible and has many different project types and templates. If you&apos;re working on an existing project, one of the biggest hurdles to switching to NetBeans can be figuring out how to import and work with an existing source code tree. This presentation guides you through the numerous project types and options and explains how they work. By the end of the session, you will be an expert on setting up and managing NetBeans projects.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'NetBeans Project Management', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22102', 'Network API is a set of APIs provided by network operators to enable client/server access to major cellular network functionality such as  messaging, location, and payment. It requires only the basic functionality of the mobile terminal, allowing for wide deployment in emerging markets such as BRICA.
 
The Java ME platform is deployed on billions of feature phones, being ideal for Network API client implementation. MIDlets on lower-end phones, hybrid applications on powerful feature phones&amp;mdash;all can use Network API to enable a full range of related applications.

This session covers technology aspects as well as implementation details of Network API for Java ME-empowered phones. Several use cases are considered and illustrated by demos.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Network API for Java ME Phones', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('38260', 'Historically, developers have experienced limitations in extracting value from their networks, due to a closed innovation model. Juniper Networks&apos; programmable application platforms are bringing innovation to the forefront through software development kits (SDKs) that open access to application development for the network. Attend this session to discover how to develop applications for network devices, network management, and network endpoints. Programmability across these layers creates opportunities for software solutions that incorporate new services and increase security and optimizations, creating new value in service provider and enterprise networks. The presentation covers APIs for the platforms and real-world examples of successfully deployed applications.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Network Innovation with Open Software', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('38366', 'The current interest in cloud computing, elastic infrastructure, and &quot;big data&quot; tools shares two common themes: the need to create business value out of large data and reliance on global, complex networks. Information drives success; richer information drives better connections to customers, partners, and suppliers. Network elements are generating increasing amounts of data about applications and their network consumption and dependencies. Demand for better, more timely information increases the need for developers and deployers to understand each others&apos; environments. There is opportunity in new software strategies and products that drive network innovation&amp;mdash;on the network, across the network, and to end user devices. Learn more in this session.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Networks as Information Factories', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24467', 'Java DB is a free, feature-rich SQL database that is bundled with the Java 7 JDK. Using Java DB, developers can build and test complex, data-rich applications for deployment in production on enterprise databases. An early version of Java DB was cobundled with the original Java 6 JDK. Since then, many exciting features have been added to Java DB, such as substantial improvements in the Java API, including the new JDBC 4.1 changes; robustness; performance, including scalability; in-memory operation; SQL coverage; security; large object handling; and administration/diagnostics. This session surveys the improvements to Java DB since Java 6.', 'Java EE Web Profile and Platform Technologies', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'New Java DB Features in JDK 7', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24034', 'With JavaFX 2.0&apos;s having returned to using a Java API, a lot of different languages are able to leverage the power of the API. Can APIs implemented in other languages on top of JavaFX 2.0 be more powerful? This session shows alternative approaches to solving this problem, analyzes the differences, and discusses the opportunities and challenges of utilizing the power of JavaFX 2.0, with examples using Scala.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Next-Generation UI: JavaFX 2.0 and Scala?!', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('18183', 'Relational databases have provided unparalleled features out of the box, such as ACID, in-memory query processing, and automated tuning. On the other hand, you&apos;ve heard that NoSQL databases such as Cassandra, MongoDB, and Neo4J are the future because they provide newer, faster, and Web-scale ways to store your application&apos;s data. Before you decide to ditch Oracle, MySQL, and SQL Server in favor of the new guard, it is important that you understand the pros and cons of these architectures so you can choose the right platform for your application.

In this session, you will see how the NoSQL architectures stack up against the relational database as the presentation explores the limits of each of these platforms in detail.', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'NoSQL Versus Relational Database: Showdown Between a Java Developer and a DBA', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22721', 'There have been many explorations into ways to spur innovative services and experiences in emerging markets. This panel discussion takes a deep dive into some of the latest trends, spin-offs, and surprises in the emerging markets mobile space, ranging from uses of Java ME to innovating device capabilities; approaches to local network infrastructure; power and business challenges; and changes in perceptions of building ad hoc, cross-cultural, and cross-border ecosystems.

Come to this session to learn about the opportunities in regions such as India with hundreds of millions subscribers, what services are consumed, how the food chain works, and how and why Java ME is the natural choice in these areas.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Open Discussion on Emerging Markets', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25097', 'The Java Language and Virtual Machine Specifications define the core model and rules of the Java SE platform. They form the basis of compliance tests for every Java compiler and runtime. This BOF session describes how the specs are maintained and how they are structured for maximum testability. Flexibility in the face of new language and VM features is also crucial.

The BOF welcomes attendee views on how Oracle can increase the openness and speed of spec evolution and discusses novel applications for specs within tools that become possible when specs are maintained in modern, open formats.', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Open Specs for an Open Source World', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23880', 'This BOF session is for developers who would like to learn more about OpenJDK.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'OpenJDK BOF', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('18020', 'This presentation discusses current OpenJDK development procedures such as building, testing, doing a code review, creating a changeset, and integrating that changeset into a team repository. It also covers &quot;OpenJDK Developers&apos; Guide&quot; topics and includes actually integrating a change.', 'Core Java Platform', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'OpenJDK Development Best Practices', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22681', 'Come to this session to find out the latest about the Mac OS X port of OpenJDK. It discusses the status of the project, how you can use it to deploy your application on the Macintosh platform, and how you can contribute.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'OpenJDK Port for Mac OS X', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24940', 'In this session, members of the JavaFX 2.0 client performance team provide tips, techniques, and guidance to help you get the most performance out of your JavaFX 2.0 application. It also offers insights into performance work that has gone into the JavaFX 2.0 platform itself.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Optimizing Performance for JavaFX Applications', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25041', 'This session introduces virtualization concepts to the attendees by providing tips on how to use Oracle GlassFish Server in the virtual world. It reviews how to change applications so they can leverage virtualized environments to achieve automatic procurement of services as well dialing the services instances up or down, depending on load factors. It also includes a demonstration of such capabilities on open source software stacks.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Oracle GlassFish Server in the Virtual World', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25063', 'Oracle Java Micro Edition Embedded Client is a modern deployment-ready implementation of the Oracle Java Micro Edition Connected Device Configuration solution and related Java technologies designed for embedded consumer and industrial applications.

This session shows how the constituent Java technologies can be used to quickly develop different kinds of embedded applications and how the choice of platform may lower the total cost of your application. It explains how developers can write applications today, using a binary version of the platform and inexpensive, readily available development boards. It includes examples of deployment of the Oracle Java Micro Edition Embedded Client technology and discusses future Java platform trends for the mobile and embedded space.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Oracle Java Micro Edition Embedded Client', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19623', 'In this session, engineers from Oracle&apos;s Java VM and Performance teams field questions about Java SE performance, HotSpot, and Oracle JRockit. Have performance questions? Want to know what VM changes and enhancements are new in JDK 7? Come ask! Perhaps you have observations, ideas, or suggestions you want to share. This is an open, two-way discussion in which the participants drive the discussion.', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Oracle Java SE: VM and Performance Technologies', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24541', 'The NetBeans Platform, a framework for modular Java/Swing applications, is usually shown with its Ant-based build harness. However, large applications with reusable parts and complex dependencies can benefit from the structure and power of Apache Maven, working smoothly with many IDEs and build servers.

In this session, hear how to use nbm-maven-plugin to assemble a mixture of NetBeans components, libraries, and modules you write while linking Maven&apos;s versioning and dependency management to the NetBeans runtime and network update system. Other topics include scaling development to hundreds of modules by collaborating via a repository manager; OSGi integration; branding and localization; application packaging, including Java Web Start; and UI testing.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Mavenize Your NetBeans Rich Client Platform Application', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23641', 'Attending this session is your opportunity to meet the newly elected EC members from the 2011 JCP EC special election (Goldman Sachs, SouJava, London JUG, and Alex Terrazas) plus the candidates in the annual JCP EC elections taking place later in October. There are 10 seats up for ratification/election in 2011 (5 on the ME EC and 5 on the SE/EE EC).', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the Executive Committee Candidates', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23166', 'This session is an opportunity to meet the members of the EJB 3.2 expert group, ask questions about existing and upcoming features, and provide input on the features that will be useful for your project or discuss a pet peeve you&apos;ve always been wondering about.', 'Java EE Web Profile and Platform Technologies', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the Experts: EJB 3.2 Expert Group', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24632', 'The Java and JavaFX user experience team crafts the user interface of the Java lifecycle as seen by your end users. This includes the install, update, and default app deployment processes as well as the default look and feel of the user interface components. A well-designed user experience greatly benefits your end users and increases the value of the Java technology you use. Come to this session to meet the user experience designers and discuss the work being done to enhance how users interact with Java technology.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the Java and JavaFX User Experience Team', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23200', 'The Java DB team will be available during this session to answer your questions about the latest developments in JDK 7, including new JDBC 4.1 changes, SQL coverage, security, large object handling, performance, robustness, and administration/diagnostics. It will be a very interactive session, so come armed with your questions or learn just by listening to the experiences of others.', 'Java EE Web Profile and Platform Technologies', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the Java DB Team', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25121', 'Come to this session to meet Oracle&apos;s Java language team, discuss new features in Java SE 7, and hear about new Java language features under consideration.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the Java Language Team', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21301', 'Join the Java Posse for a live episode as it records a sit-rep from JavaOne 2011. Fun and merriment.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the Java Posse', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25148', 'Meet the JDK project leads, who will be available to answer your questions about the latest developments in JDK 7, including the VM, core libraries, Java language, client, and deployment areas.

This will be a very interactive session, so come armed with your questions or just learn by listening to the experiences of others.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the JDK Project Leads', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24962', 'In this BOF session, Oracle&apos;s Nashorn team discusses the latest work on a new JavaScript engine for the Java platform.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Meet the Nashorn JavaScript Team', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24354', 'Enterprise mobile applications often include more data-entry-intensive screens and more screen transitions than regular consumer applications. Also the data in a mobile phone is required to be in sync with the data in a back-end server. Due to the limitation in memory capacity for low-end devices, the application design must be highly optimized to avoid any out-of-memory errors during application usage. 

This session closely examines the challenges and offers solutions for memory management issues, based on the experience of implementing a field force automation solution for emerging markets.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Memory-Optimizing Java ME Applications', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25241', 'Mirah is a JVM language that takes a pragmatic approach. These days we have dynamic languages offering higher productivity and fancy Web frameworks, functional languages promising to save us from concurrency headaches, and statically typed languages, resulting in almost infinitely extensible type systems. Mirah is different, delivering a rich set of language features with no runtime dependencies. It borrows Ruby&apos;s syntax for clean code, but it is statically typed with optional dynamic typing like C#. It supports macro expansions like C, making it more fluid and extensible. The type system is almost identical to Java, and the compiler can output class files as well as Java source files. Come to this session to see why Mirah may be your next JVM language.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Mirah: A New Way to Look at JVM Languages', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('37761', 'Since its inception, Java has expanded relentlessly in bringing the power of secure, connected computing to the activities of everyday life. Java is the force behind applications and devices important to every aspect of both our professional and personal worlds&#8212;from desktops to mobile phones and handheld devices, to entertainment and navigation systems, to mission-critical enterprise software. In this JavaOne Strategy Keynote, Oracle presenters will share Oracle&#8217;s vision for strengthened investment and innovation in Java and describe how Java will continue to grow as the most powerful, scalable, secure, and open platform for the global developer community.', NULL, 'Core Java Platform', 90, 'Introductory', 'Approved', 'JavaOne', 'JavaOne Strategy Keynote', 'Core Java Platform', 'Keynote');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('37760', 'Java as a language and a platform has come a long way in 16 years. From its humble beginnings as a tool for programming small interactive devices, it has evolved into a high-performance, general-purpose virtual machine, language, and set of libraries used in applications ranging from the desktop to the cloud. This technical keynote focuses on the next steps in this evolutionary path. Areas covered include Java SE advancements, implementation of non-Java languages that target the Java Virtual Machine, modularization of the platform, building immersive desktop applications using JavaFX, principles guiding the design of the Java EE platform and cloud-based opportunities, new Java technologies and approaches for the embedded market, a fresh look at Java ME and mobile improvements, and more.', NULL, 'Core Java Platform', 120, 'Introductory', 'Approved', 'JavaOne', 'JavaOne Technical Keynote', 'Core Java Platform', 'Keynote');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22800', 'JAX-RS 1.X has been a hugely successful Java API, and a lot of real-world experience has resulted in proposals of several new features. JSR 339 was created in early 2011, with the objective of exploring and scoping all these proposals. The purpose of this technical session is to elaborate on all the new features being discussed.

The most commonly requested feature for JAX-RS 2.0 is a client API. Client APIs can range from low-level, just above HttpURLConnection, to high-level, often including support for IoC and hyperlinking. Other features this presentation covers are hypermedia, MVC, validation, interceptors, improved content negotiation, and better integration with other specifications such as JSR 330.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'JAX-RS 2.0: What&apos;s in JSR 339?', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23647', 'The JCP plays a critical role in the evolution of Java. This session explains how the JCP is structured and how JSRs are developed. It discusses the relationship between the JCP and open source development processes, emphasizing the value of transparency and participation. It also explores upcoming changes to the process, explaining how you can get involved. Bring your questions, suggestions, and concerns. Your active participation in the advancement of the Java platform is encouraged. JCP executive committee members, Java Champions, and JUG leaders engage with the audience and the JCP chair during a panel discussion/community brainstorm on how to influence the development of Java technologies through JCP program participation.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'JCP and the Developer Community', 'Core Java Platform', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('33961', 'Attend this meet-and-greet session with the JCP executive committee for JUG leaders, Java Champions, and Java Community members.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'JCP Executive Committee Meet and Greet', 'Core Java Platform', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('32561', 'This session is a meet-and-greet with the JCP executive committee for JUG leaders, Java Champions, and Java Community members.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'JCP Executive Committee Meet-and-Greet', 'Core Java Platform', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23481', 'This BOF session brings together members of the JDBC Expert Group and other people interested in discussing JDBC and rowsets.

The session provides an opportunity to gather input on features to be considered for future JDBC releases to support the latest features added to the SQL standard or that are available in other client APIs.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'JDBC and Rowset Community Discussion', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25295', 'JavaOne attracts a lot of people from all over the world, and this BOF session would like to welcome all the users and developers from the Jenkins community to discuss where we are and what we should be working on. The BOF highlights various efforts from the community and includes a Q&amp;A period.', NULL, 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Jenkins Community Meetup', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22021', 'JFXtras, the open source JavaFX control and extensions project, is back for JavaFX 2.0. In this session, you will learn about the latest changes in JFXtras 2.0, including new components and features that integrate with the JavaFX 2.0 libraries.

Expect to meet the JFXtras core team members as well as other interesting client RIA implementers and developers. Now that JavaFX is coded in Java, we may even let a few server-side hackers in the door.  ;)', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'JFXtras 2.0: Open Source Extensions for JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21685', 'PaaS, cloud. How to store data is the real question. In a NoSQL store? Could we do that with familiar APIs?

The goal of Hibernate OGM is to explore how we could reuse the Java Persistence API (a known domain model-centric API) to store entities in NoSQL stores. It offers a JPA front end (object manipulation and JP-QL query) to applications while storing and querying data from a key/value grid (and other NoSQL later).

In this session, you will
&amp;bull; See an overview of (No)SQL and how JPA can fit some use cases
&amp;bull; Learn how to persist entities and associations into a key/value store and its compromises
&amp;bull; See how to implement JP-QL queries on top of a nonqueryable technology (key/value store) and how much can be covered
&amp;bull; See live demos', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'JPA on NoSQL: An Approach with Hibernate OGM', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22820', 'Value-added services are very important for mobile network operators looking to boost their average revenue per user. At the same time, discovery by the user and the interface of these services are poor, due to the limitations of the SIM Application Toolkit. This session describes the new Oracle Java Services Bridge product, which enables operators to personalize handsets with value-added services with rich UIs and the opportunity for ISVs to develop carrier-based services. It considers the Oracle Java Services Bridge design and architecture, demonstrates such services, and discusses all the steps required from the operator to deploy services on customer phones.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Oracle Java Services Bridge: Rich UI SIM Services on Feature Phones', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22741', 'Oracle Java Wireless Client is a high-performance Java ME runtime implementation for mass market mobile phones. Oracle Java Wireless Client, created by the inventors of Java, opens the world of high-performance, compelling applications for low-end mobile platforms.

This presentation starts with an overview of the architecture and main components of Oracle Java Wireless Client. It discusses and demonstrates the new features, tools, and capabilities Oracle Java Wireless Client offers to Java ME application developers and also looks ahead to the future of the platform.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Oracle Java Wireless Client: A Java ME Optimized Stack for Low-End Platforms', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24502', 'Oracle Java Wireless Client Release 3.0&apos;s Oracle Mobile Developer APIs feature is a set of extensions filling the gap between the Mobile Information Device Profile (MIDP) and real user needs. It propagates frequently asked features from the platform to the Java layer and makes them available for MIDlets. This extends application capability and provides a solid user experience with the phone OS. Learn more in this session.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Oracle Mobile Developer APIs', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24809', 'The purpose of this BOF session is to bring together people who are interested in OSGi.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'OSGi BOF', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24081', 'Libra (www.eclipse.org/libra) is an open source project under the Eclipse Web Tools Platform Container Project. It provides standard tools for OSGi Enterprise application development, particularly tools that integrate the existing WTP and PDE tooling so that OSGi Enterprise applications can be developed with both toolings at the same time. Libra will bring the well-known WTP development methodologies to OSGi development, enabling regular Java developers to develop OSGi applications on demand.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'OSGi for Earthlings: Meet Eclipse Libra', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('17581', 'Despite all the buzz and hype about Web apps over the last eight years, the fact is that desktop applications are still found in many places, especially in the enterprise. But the legends are true: building desktop applications is a hard job. But it does not have to be. Enter Griffon.

Griffon aims to bring the fun and productivity back to desktop application development in the same way Grails did (and continues to do) on the Web. Griffon is rooted in the JVM but has Grails in its DNA. This means you&apos;ll find yourself right at home if you&apos;re a Java veteran and/or have made the jump to Grails. This session covers the basics to get you started with Griffon.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Painless Desktop Application Development: The Griffon Experience', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23320', 'Designing a framework with APIs is different from creating an in-house project. Hoping you can apply the practices of regular software development to API design is like hoping you can design the universe because you know how to design a house.

There are many things to talk about when it comes to the topic of API design, but compressing them into an hour-long session is hard. After some experiments, this session&apos;s speaker decided to concentrate on paradoxes. In the end, it is exactly the paradoxical things that attract attention.

Attend this session to hear about 10 important paradoxes you need to be aware of to become good API designer.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Paradoxes of API Design', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23321', 'Based on a case study of Norwegian Public Service Pension Fund&apos;s rewrite of its most business-critical batch from C to Java with Spring Batch, this interactive session iterates over different versions of the batch design. 

Each version of the design solves one problem but introduces (at least) one new problem, until the final version solves the issues and runs in production. This session discusses the issues experienced and encourages the attendees to spot the issues in each version. Overzealous exception handling, deadlocks, retries, and ORM are among issues it covers. 

The final version of the design uses mass parallelization and runs for 16 hours, a massive improvement from the one-week single-threaded C version.', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Parallel Batch Processing with Spring Batch: Lessons Learned', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('29621', 'In this session, learn about community contributions, get the latest news about new product features, and hear from fellow contributors about their experiences with GlassFish Server Open Source Edition.  

The GlassFish Community boasts thousands of active members, providing not only a vibrant forum for activity but also the foundation upon which future releases of GlassFish and Java EE are devised. Members of the GlassFish Community have the opportunity to help shape the future of the community, contribute to the code directly, develop enterprise Java applications, access the latest Java EE enhancements, and meet key members of the Oracle GlassFish team.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 120, 'Introductory', 'Approved', 'JavaOne', 'Part 1: GlassFish Community&amp;mdash;The Foundation for Opportunity', 'Java EE Web Profile and Platform Technologies', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22220', 'This tutorial looks at some common problems and pitfalls in Java applications. It focuses on noninvasive profiling and diagnostics of running production systems. 

Problems tackled:
&amp;bull; Excessive GC
&amp;bull; Finding hotspots and optimizing them
&amp;bull; Optimizing the choice of data structures
&amp;bull; Synchronization problems
&amp;bull; Finding out where exceptions are thrown
&amp;bull; Finding memory leaks

The presentation demonstrates all problems and solves them, running both the bad-behaving applications and the tools to analyze them from within the Eclipse Java IDE with the upcoming Oracle JRockit Mission Control Release 4.1.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 120, 'Introductory', 'Approved', 'JavaOne', 'Production-Time Problem Solving', 'Emerging Languages, Tools, and Techniques', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23000', 'Apache Wicket is a mature and highly productive Web framework for the Java platform. Based on a POJO data model and a refreshing lack of XML configuration, it emphasizes separation between layout and logic and makes it easy to componentize Web user interface elements. These features make Wicket an ideal companion to Java EE 6. 

This session introduces Web development with Apache Wicket by contrasting its approach with the JavaServer Faces approach (the same demo application is implemented in both technologies and then compared). It focuses on the integration between Wicket and CDI (Contexts and Dependency Injection&amp;mdash;JSR 299).', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Productively Fun Web Development with Apache Wicket and Java EE 6', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24085', 'JavaFX 2.0 is a major shift of emphasis from JavaFX Script, simply because there is a lot more code to write in Java. If you&apos;re a developer, how do you bridge the knowledge gap between relatively easy scripting in the old version of JavaFX and the new world? If you are new to JavaFX, how do you write long-lasting components for your enterprise? Progressive JavaFX 2.0 custom components teach you how to write user interface elements practically and pragmatically. The last aspect is very important, because your JavaFX 2.0 code can be then accessed by developers in alternative JVM languages. Avoid becoming the new legacy. This session shows you how to get it right the first time and right on time.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Progressive JavaFX 2.0 Custom Components', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25028', 'Java SE 7 introduces several new language features in Project Coin. How do these features measure up when used in real code? To find out, the Oracle technical staff updated the JDK core library code to use the new Coin features. This provided feedback to Project Coin, and it helped the staff members gain experience with using the features in actual code. Using the Coin features improved the quality and robustness of the code while simultaneously making it clearer and more concise.

This presentation describes Project Coin, with an emphasis on its &quot;try with resources&quot; feature. It shows code examples drawn from actual changes that have been made in OpenJDK. Attendees will learn how using the Java 7 Project Coin features can improve the quality and clarity of their own code.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Project Coin in Action: Using New Java SE 7 Language Features in Real Code', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25200', 'This session provides a step-by-step guide to getting started with the Jigsaw module system, complete with examples and demonstrations.', 'Core Java Platform', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Project Jigsaw: Find the Corner Pieces First', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25186', 'Project Jigsaw aims to create a simple, friendly, and scalable standard module system for the Java platform. This session explains its key goals and design choices, demonstrates its use, and shows its application to the Java platform itself.', 'Core Java Platform', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Project Jigsaw: Putting It Together', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25201', 'Don&apos;t miss this open-ended Q&amp;A session with the Jigsaw development team.', 'Core Java Platform', 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Project Jigsaw: Q&amp;A', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('27400', 'This session covers the primary new language features for Java SE 8&amp;mdash;lambda expressions, method references, and extension methods&amp;mdash;and explores how existing as well as future libraries will be able to take advantage of them to make client code simultaneously more performant and less error-prone.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Project Lambda: To Multicore and Beyond', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20320', 'The new JavaFX 2.0 introduces a new dimension to graphical user interface development. Not restricted by the old JavaFX script, new paradigms can be used to develop applications in Java or any other JVM language.

User interfaces have significantly changed in recent years, gaining a lot of dynamic content. Hence, developers must aim more for better performance to create smoother and more responsive interfaces.

This session aims to show common patterns and antipatterns in Java-based JavaFX programming, focusing on performance. It also looks at the outdated JavaFX script patterns and introduces new, faster alternatives in Java.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Put Your JavaFX App on a High-Speed Track', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25101', 'JavaFX developers are eagerly awaiting the availability of JavaFX 2.0 capabilities in Java, but many long for the beauty and ease of use of the JavaFX Script language. The open source Visage project answers this wish for developers wanting the richness of the JavaFX Script language. And although NetBeans 7.0 no longer provides JavaFX support, it is the perfect platform for providing Visage support through the Visage plug-in. This presentation examines the plug-in and its capabilities.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Putting a Visage on NetBeans: Using NetBeans 7.0 to Develop Visage Applications', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23452', 'Stop reinventing the wheel! As a Java desktop programmer, you can build applications on existing application frameworks just as Web developers have done for years. You can benefit from proven and tested features of the NetBeans platform: the cross-platform burden disappears, together with the need to create common desktop features, such as a window system, over and over again for each of your applications.

This hands-on lab shows how you can easily create the most common corporate-type&amp;mdash;that is, CRUD (create, read, update, and delete)&amp;mdash;applications based on the NetBeans platform while leveraging all of its rich and interesting features.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 120, 'Introductory', 'Approved', 'JavaOne', 'Rapid Corporate Desktop Development', 'Java SE, Client Side Technologies, and Rich User Experiences', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19940', 'JavaFX 2.0 is an ideal solution for developing a new generation of fluid, rich enterprise applications that make users say, &quot;Wow!&quot; and make bosses think, &quot;Promotion!&quot;This session demonstrates best practices, tips, and techniques based on several years of experience with writing enterprise apps in previous versions of JavaFX. It also reveals secrets of the JavaFX experts.The weapon of choice for this presentation is Griffon, an application framework famous for its productivity-enhancing qualities and its ability to help you get your new project off the ground in minutes. If you are starting, or are thinking about starting, a new project that utilizes the next-generation JavaFX client platform, you owe it to your project to attend this session.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Rapid Development of Enterprise Client Apps with JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24440', 'Java ME is a great platform, with many JSRs and proprietary APIs to help, but there are still certain useful classes and methods for wrapping the raw platform that experienced mobile developers use. Using Tantalum is one very light approach to providing a library to enable beginning Java ME developers to perform common tasks, such as RMS, XML parsing, and HTTP requests, on a utility thread model. After this hands-on introduction, you can rip off a copy of the library to quickly build your own high-performance applications in less time, with details such as proper threading and exception handling elegantly taken care of for you.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Rapid Java ME Development with the Open Source Tantalum Java ME Library', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24808', 'Rapidly designing, prototyping, and implementing Web applications is critical to most projects. However, many projects stall, stuck doing big up-front design related to front-end interface and databases. 

Apache Jackrabbit is an implementation of the Java Content Repository (JCR) standard that defines a flexible, hierarchical data storage mechanism. Apache Sling is a RESTful Web framework backed by a JCR instance. These two projects, combined, provide a platform for rapidly developing Web applications. By using Jackrabbit to store your application&apos;s data, you can evolve your data architecture easily over time. Sling then provides a flexible, easily understood interface for manipulating the data in your JCR instance, using basic CRUD principles. Learn more in this session.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Rapid RESTful Web Applications with Apache Sling and Jackrabbit', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23813', 'This presentation unveils the missing link in enterprise Java development: simple, portable integration tests. It introduces a solution in the first half of the session and demonstrates it in the second.

Unit tests and mocks get you only so far. Eventually you need to verify that your components operate and interact correctly in their intended environment&amp;mdash;you need integration tests. Yet writing integration tests has meant taking on the barrier of bootstrapping the necessary infrastructure.

Arquillian, a container-oriented testing framework built on TestNG and JUnit, tears down this barrier. It enables you to write portable tests that invoke real components using real enterprise services in a real runtime. In other words, you can write real tests.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Real Java Enterprise Testing', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25060', 'Few things help boost developer productivity more than speeding the delivery of code into running environments. Dynamic languages help by shortening development lifecycles and simplifying application models, and tools provide similar benefits for static languages such as Java and Scala, but these options are fundamentally partial workarounds.

This session details how Clojure&amp;mdash;a dynamic, compiled JVM language&amp;mdash;facilitates hot code deployment that completely eliminates turnaround time for developing locally, updating remote production servers, and even modifying code running on mobile devices. The presentation uses an open source, IDE-agnostic tool chain to demonstrate these capabilities and how they accelerate common development practices.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Real-Time Hot Code Deployment with Clojure', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25940', 'Through the years, Web user interfaces have longed for the rich experience of traditional desktop applications. HTML5 has introduced a set of Web communication APIs that have brought the &quot;Web experience&quot; closer to the rich desktop. This session introduces techniques for using the HTML5 Web communication APIs in Web applications. The presentation uses JSF as the user interface model.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Real-Time Web Communication Techniques for User Interfaces', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24800', 'Current JAX-WS deployments are tightly coupled with a container&apos;s runtime. JAX-WS 2.2 proposed an HTTP SPI that enables a deployment to use any available Web services runtime for HTTP transport. Now that JAX-WS 2.2 is integrated into JDK 7, Java EE 6 Web profile vendors can support 109 deployments by using the Web services runtime in JDK 7. These implementations won&apos;t have to worry about implementing the whole Web services runtime. They can use a Servlet 3.0 extension that does the 109 deployments by reading deployment descriptors and hand off the request processing to the Web services runtime in JDK 7. This BOF session shows how to use the Web services runtime in JDK 7 for various deployments.', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Reusing JDK 7&apos;s JAX-WS Runtime', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21881', 'Gradle is an Apache-licensed open source tool that provides a revolutionary way of implementing build solutions in the Java ecosystem by leveraging a mature build DSL instead of XML. It builds on top of the previously best-of-breed options allowing the freedom of Apache Ant and the dependency management and build conventions of Apache Maven. Gradle surpasses these predecessors in innovative ways, providing solutions necessary for streamlining complex enterprise automation environments.
  
Come to this session to see why some of the leading open source projects, such as Grails, Spring Integration, Hibernate, and Tapestry, have all moved to Gradle as their build system.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Rocking the Gradle', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('29680', 'This session covers issues of relevance to national, regional, and continental JUGs. In particular, it focuses on the issues JUG-AFRICA faces and how it solves them. Regional and continental umbrella JUGs are relatively new structures. 

They have specific global and local concerns such as
&amp;bull; Language and cross-cultural communication (French, English, Portuguese, and Arabic)
&amp;bull; Coordination
&amp;bull; Accessing technical resources
&amp;bull; Getting speakers and sponsors
&amp;bull; Remote training
&amp;bull; Running synchronized events across a continent
&amp;bull; School and education programs
&amp;bull; Importance of technical labs', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Running a Successful Umbrella JUG or Regional JUG', 'Core Java Platform', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22060', 'Scripting languages that run on the JVM and have taken Java to new frontiers are represented by their gurus in this session, a sequel to the highly popular shootout at previous JavaOne conferences.

Returning from 2010 are language gurus representing Clojure, Groovy, JRuby, and Scala. After attending this fun-filled and technically invigorating session, attendees will be able to judge for themselves which scripting language supplements their Java platform best. They&apos;ll also be able to compare and contrast the respective languages and possibly spark some thought-provoking discussions with the panelists that will be beneficial to the entire Java community. And best of all, the audience will participate in selecting this year&apos;s winner.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Script Bowl 2011: A Scripting Languages Shootout', 'Core Java Platform', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25164', 'The Java SE environment contains several APIs and implementations for securing communications. The Java Secure Socket Extension (JSSE) provides secure communications using SSL/TLS, and Java Generic Security Services (JGSS) provides access to services such as Kerberos. Both mechanisms have undergone a lot of change in JDK 7. This session reviews the significant changes, explores the current state of the oft-discussed and much-feared &quot;man-in-the-middle&quot; (MITM) SSL/TLS protocol vulnerability, and looks at some of the potential features for future releases.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Secure Communications Enhancements in JDK 7', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21300', 'Programmers using any language must be aware of the many threats, attacks, and vulnerabilities associated with the language they are using and design security up-front to help mitigate these issues. This session takes a detailed look at possible security issues associated with programming in Java and provides example code and best practices that programmers can immediately use to increase the robustness and security of their code. Through code examples and demonstrations, it discusses specific common functionality such as the use of input/output parameters, classes and object construction, password length, complexity and encryption, serialization, and access control.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Secure Programming in Java: Best Practices for Mitigating Threats', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20861', 'This session covers Oracle GlassFish Server Release 3.1 support for the Java EE security model, including declarative (application- and component-level security) and programmatic security. It also discusses additional security features specific to Oracle GlassFish: message security and single sign-on. It explains security realm configuration for connecting to an LDAP directory with an OpenDS server.
 
The presentation also covers auditing capabilities in Oracle  GlassFish and how to implement a custom pluggable audit module. The discussion includes message security for Web services using the encryption techniques. It looks at monitoring of security components with the VisualVM tool. All the security features discussed in the session are demonstrated with a sample Java application.', NULL, 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Securing Enterprise Java Applications in Oracle GlassFish Server Release 3.1', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25261', 'With the increased use of JVM-based scripting languages, a closer look at security is needed to make sure that malicious and invalid code does not disrupt your running applications. This risk is especially prevalent in that scripting languages such as Groovy allow uncompiled scripts to be executed from a running application.  

This presentation uses a combination of slides and demonstrations in Groovy to show you techniques for better securing your code and safeguarding your applications when using JVM-based scripting languages.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Securing JVM-Based Scripting Languages', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24606', 'Java serialization is a powerful core technology used by many applications and as an underpinning for many sophisticated Java technologies such as RMI, EJB, SDO, JPA, and distributed caching. Yet its implications for the design of Java systems are often overlooked. This presentation explains the continuing relevance of Java serialization. Whether for designing a system specifically concerned with serialization, developing reusable components, or updating code in which serializable objects exist, a good understanding of serialization considerations is invaluable. Learn about common serialization pitfalls and techniques for their solution, and get tips on optimizing the efficiency of serialized data.', 'Java EE Web Profile and Platform Technologies', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Serialization: Tips, Traps, and Techniques', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25361', 'A PaaS offering typically facilitates application deployment without the cost and complexity of managing infrastructure, by providing all of the facilities required to build and deliver services. Current Java EE deployment models assume that the deployer provisions the various dependent services of an application. 

To support PaaS deployment scenarios, GlassFish is working to provide a simplified application provisioning and deployment interface to users, with the runtime handling the discovery of service dependencies, provisioning services, and associating service references with these services. 

This BoF session details how Java EE containers can provide such service orchestration capabilities to PaaS application deployers and solicits feedback.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Service Orchestration Requirements for Java EE PaaS Runtimes', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24925', 'This session presents and demonstrates a small device leveraging Java SE for Embedded Devices on a Linux/ARM board and how the speakers transformed it into a small server appliance. They present the service-oriented framework used as the basis for their proof-of-concept server device: a data concentrator, used in smart power grid networks. The data concentrator is a set of embedded services that leverage the framework and use different Java-based stacks, such as JAX-WS or JAX-RS, or products, such as embedded Grizzly or Oracle Berkeley DB Java Edition. In conclusion, they review their design goals and explain the benefits of using Java-based stacks running on Java SE for Embedded Devices versus an alternative architecture such as an application server.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Service-Oriented Architecture with Java SE for Embedded Devices: A Smart Meter Use Case', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22704', 'This session discusses the Serviceability Agent Plugin (SA-Plugin) for VisualVM. Serviceability Agent (SA) is an out-of-process snapshot debugger for HotSpot, and SA-Plugin brings the powerful features of SA to VisualVM. SA-Plugin has been made available for use through the VisualVM Plugins Center. This tool can greatly help developers and enterprises debug and troubleshoot their problems in Java applications and HotSpot as well as students in understanding the HotSpot technology.

More on SA-Plugin here:
http://visualvm.java.net/saplugin.html', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Serviceability Agent Plug-in for VisualVM', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24805', 'The OSGi service platform is a standard that specifies a comprehensive model of modules that communicate through a powerful, no-overhead, intermodule communication mechanism, OSGi services. OSGi enforces module-level isolation that forbids ad hoc cross-module class loading, but this conflicts with prevalent Java software patterns that assume application-wide class visibility. OSGi Connect proposes the OSGi programming model without the module-level isolation. This presentation shows how you can use OSGi Connect to begin to modularize your existing applications with the OSGi programming model with a minimal upfront investment.', 'Enterprise Service Architectures and the Cloud', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Services-First Migration to OSGi', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24027', 'For server-side development, several prominent frameworks such as EJB, Ruby on Rails, Grails, and Lift are implemented in different languages. For rich client development, there are several advanced rich client platforms, but up to now, they have been focused solely on Java-based implementations. This session shows how to leverage the power of an existing platform by adding new APIs specially designed to be used by a different language. For example, Scala APIs on top of NetBeans RCP are presented to show how existing frameworks can be reused and extended with non-Java languages.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Setting Sail: Opening New Horizons in RCP Development', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23832', 'Ever wanted to see the experts from each of the major JVM vendors on stage at the same time? This debate-style session brings together senior members of the Oracle HotSpot, IBM J9, and Oracle JRockit teams to talk about their various approaches to implementing JVMs. It addresses new Java 7 features such as invokedynamic and includes ruminations on emerging technical challenges. Come to learn more about the various JVM technologies available&amp;mdash;and ask a question!', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Showdown at the JVM Corral: Java 7 Edition', 'Core Java Platform', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22585', 'Spring greatly simplifies JMS messaging, handling common scenarios for you by providing facilities for both synchronous and asynchronous messaging. This dramatically lowers the barrier to building message-driven applications. Apache ActiveMQ is an open source JMS message broker that provides client access from many different languages and offers many advanced features necessary for enterprise-level messaging. This session examines the use of Spring JMS and ActiveMQ for easily building message-driven applications.', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'Simplify Your JMS Code with Spring', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24101', 'In this session, a group of &quot;Student Forum Nokia&quot; developer experts&amp;mdash;students in one of India&apos;s most prestigious technology universities, supported by Nokia&amp;mdash;present use cases for small-screen innovation&quot; that represent a trend in Java ME: developers seeking to reach billions of people who will be discovering many new applications, services, and experiences on phones such as those offered on Nokia&apos;s internet-capable, Java-enabled Series 40 platform.The group explores challenges it faced, especially in rural India, showcasing examples of some code it used to build light, local, innovative Java applications as it balanced Java ME with the latest advances in Series 40 capabilities found even on phones with the smallest screens.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Small Screens Playing a Big Boys&apos; Game: A Playbook for Java ME in Emerging Markets', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22742', 'SOA has been part of the IT landscape for the better part of a decade now. The tools of traditional SOA, such as the enterprise service bus, are well known, yet many IT organizations continue to struggle with realizing its promised benefits. This session, presented by the author of &lt;i&gt;Java SOA Cookbook&lt;/i&gt;, a recognized expert in SOA, doesn&apos;t rehash the basics. Instead, it tackles head-on the key strategic and implementation questions that differentiate the winners from the losers.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'SOA Optimization: Strategy and Execution', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26260', 'Solr is an open source, Lucene-based search platform originally developed by CNET and used by the likes of Netflix, Yelp, and StubHub. It has been rapidly growing in popularity and features during the last few years. Learn how Solr can be used as a Not Only SQL (NoSQL) database along the lines of Cassandra, Memcached, and Redis. 

This presentation quickly covers the fundamentals of NoSQL data stores, the basics of Lucene, and what Solr brings to the table. Then it dives into the technical details (including real-world examples) of making Solr your primary query engine on large-scale Web applications, thus relegating your traditional relational database to little more than a simple key store.', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Solr Power for the Win', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23449', 'Building a database-connected Java application can be intimidating&amp;mdash;particularly when RDBMS-specific options and best practices must be considered. This session discusses and provides solutions for the most common problems seen in MySQL-enabled Java applications. From classpath errors to communication exceptions, from MySQL Connector/J extension points to useful (or not useful) configuration options, it will help you get the most out of your MySQL-enabled Java application.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Solving Common JDBC Problems with MySQL', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24543', 'JavaFX 2.0 provides plenty of visual effects that developers can use to easily enhance the look of their JavaFX applications. These effects add various decorations to the original visual representation of the scene graph nodes, such as reflection, shadow, and lighting.

This session presents an overview of existing effects, the most typical use cases, performance tips, and best practices. In addition, it offers advanced tips on how to chain effects together and combine effects with other JavaFX features, such as transformations and animations.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Spice Up Your JavaFX 2.0 Application with Visual Effects', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24200', 'To squash security vulnerabilities, we must engineer security into our applications. This BOF session takes a fresh look at the various vulnerabilities and strategies for addressing them from the viewpoint of a fictitious solution-focused developer. It covers the vulnerabilities exposed and leads the discussion on methods that could have been used to avoid them. 

Among the security elements covered:
&amp;bull; Network security
&amp;bull; Java SE security
&amp;bull; Password security
&amp;bull; Enterprise Java security
&amp;bull; Channel-based authentication/authorization
&amp;bull; Data validation
&amp;bull; Container configuration

The goal of the BOF is to have an open and honest discussion on enhancing the security of Java applications.', NULL, 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Squashing the Vulnerabilities: Engineering Security into Your Applications', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24783', 'SSL certificate revocation checking has become increasingly important, with the proliferation of attacks on network infrastructure, such as man-in-the-middle attacks. This session reviews the various certificate revocation checking methods and the facilities available in the JDK for performing certificate revocation checking. It dives into the details of Online Certificate Status Protocol (OCSP), certificate revocation lists (CRLs), and the use of distribution points (DPs). It also discusses typical implementation issues such as performance and handling large CRLs. Finally, it provides guidance for extending certificate revocation checking through the use of the Java public key infrastructure framework.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'SSL Certificate Revocation Checking in Java', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24844', 'State data is everywhere. In Java EE, the servlet container deals with session and request state. Web services deal with this plus conversational state. The list goes on and on. Surprisingly, there is no standard describing the state management, machinery, API, SPI, or QoS of providers.

This session introduces a state management proposal and the requirements it must support. It looks at the challenges for introducing a standard as well as new capabilities that are made possible, such as for cloud computing. The session includes a presentation of concepts and requirements and a real-life Web services example from Oracle. Platform providers (Java EE and non-Java EE) are encouraged to attend.

This session has a corresponding BOF open discussion session.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'State Management in Java', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23600', 'Java developers wear a lot of hats these days: they manage builds, develop applications, write command-line scripts, and must master all tiers. If only there were a way to make these tasks simple and fun. Enter JRuby. Build engineers can write or enhance builds with Ruby, never losing a thing they depend on from Ant or Maven. Ruby offers several elegant testing options that work great with JRuby. Web developers can create Rails applications in minutes, effortlessly incorporating the latest Web technologies. GUI developers can use beautiful frameworks for JRuby. Need native code? JRuby supports binding native libraries. Command-line scripts? They&apos;re easy with JRuby&apos;s system-level features. Come to this session to learn how JRuby makes you a happy developer.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Real-World JRuby', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25293', 'In 2006 the Dataverse Network team at the Institute for Quantitative Social Science at Harvard University was an early adopter of Java EE 5 technology on GlassFish. To experienced Java EE developers, the simplification of the Java EE 5 model was striking. Today&apos;s Java EE 6 programming goes much further to simplify application development. A simpler programming model is important for involving members of the community in development. 

This presentation looks at the Java EE 6 programming model from the point of view of what can be improved in existing Java EE code. It uses Java EE 5 and Java EE 6 code samples to illustrate implementation differences.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Refactoring Java EE 5 Code to Take Advantage of Java EE 6 Features', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('37260', 'When it comes to building solutions that are heavy on content, a relational back end typically just isn&apos;t enough. Attend this session to find out how a Java-based rich content repository such as Alfresco can be used as a core building block in your architecture to provide functionality&amp;mdash;such as versioning, security, metadata management, search, check-in/checkout, likes/ratings, and workflow&amp;mdash;that&apos;s fully standards-compliant and open-source. Don&apos;t worry. This isn&apos;t a sales pitch. The goal is to explore different patterns of implementation for these types of applications and get you pointed in the right direction so that you can begin to leverage this type of technology in your next project.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Relational Won&apos;t Cut It: Architecting Content-Centric Applications for Java', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24609', 'Hypermedia as the Engine of Application State (HATEOAS) is one of the core concepts in the RESTful architecture. The Java API for RESTful Web Services (JAX-RS) is a very useful API for building RESTful applications in Java, but HATEOAS support is missing in the current version, effectively preventing implementation of &quot;true&quot; REST with standard Java APIs.

This session shares a solution containing the missing building blocks required for successful implementation of robust REST/HATEOAS applications with JAX-RS, along with a very useful JavaScript tool that utilizes the &quot;browsable&quot; nature of HATEOAS to simplify manual testing of a REST/HATEOAS application, something that is normally quite difficult to visualize.', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'REST and Hypermedia as the Engine of Application State with Standard Java APIs', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22320', 'Real SOA is hard. This is the sad truth that most practitioners have discovered through countless hours of time lost in dealing with contract mismatches, standards incompatibility, and dueling data standards. REST promises a better, simpler way: with it, many of these problems simply melt into the basic functioning of the Web itself.

But for many, REST is too loose and too poorly defined in some ways for true &quot;enterprise-level SOA.&quot; In reaction, significant work, such as the Richardson Maturity Model and Hypertext As The Engine Of Application State (HATEOAS), has been done to address these issues. This session explores some of these concepts and tools, providing API advice, code samples, and architecture recommendations for adopting REST in an enterprise-level environment.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'RESTing Hard: Enterprise-Strength REST for Java', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21622', 'Although you can build Java EE 6 applications with only a fraction of the code that&apos;s necessary with J2EE, many projects are still based on bloated and exaggerated J2EE patterns and best practices. This session discusses how to build lean applications in a productive and maintainable way.

It covers the following pragmatic tools, patterns, and best practices with working source code:

&amp;bull; Mixing CDI, JPA, EJB, JSF, and JAX-RS to save code
&amp;bull; Mocking, unit testing, stress testing, and integration testing
&amp;bull; Continuous integration and build (Maven 3, Git)
&amp;bull; Efficient data access without DAOs
&amp;bull; Asynchronous CDI events for decoupling and pub/sub
&amp;bull; JMX monitoring instead of logging
&amp;bull; Removing layers and indirections for maintainability', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Rethinking Best Practices with Java EE 6', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24820', 'Development of parallel programs is typically slow and difficult, even though Java and most modern programming languages support all keywords necessary for parallel programs and despite the regular appearance of new languages designed for parallel programs. The lack of progress indicates that the problem is not a computer language problem but, rather, a larger problem: a human-to-parallel program interface problem. 

This session begins with a discussion of this problem and then demonstrates how Java has been used in the Avian Computing project to change how we think about parallel programs. It presents a simple solution to the classic dining philosophers problem as well as possible solutions to other classes of parallel problems.', NULL, 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Rethinking How We Think About Parallel Programming', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('29643', 'Continue the dialogue with fellow members of the GlassFish Community, GlassFish architects, and Java EE spec leads in this exciting session. Take this opportunity to meet the development team and provide feedback on what you&apos;d like to see in the product going forward. Your feedback and direct participation are desired, so the agenda will be driven by you in an unconference format. Help shape the future of GlassFish and Java EE.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 90, 'Introductory', 'Approved', 'JavaOne', 'Part 2: GlassFish Unconference&amp;mdash;Let Your Voice Be Heard', 'Java EE Web Profile and Platform Technologies', 'User Group Forum (Sunday Only)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20181', 'As the adoption of the Contexts and Dependency Injection (CDI) for Java EE API grows, it is important to understand how to use CDI effectively to maximize the benefits of using a loosely coupled, type-safe, annotation-driven dependency injection solution.

This session outlines the best practices for using CDI, such as annotations versus XML, @Named as a qualifier, qualifier type safety versus verbosity, effective use of producers/disposers, using scopes properly, best practices for using conversations, defining effective stereotypes, interceptors versus decorators, static versus dynamic injection/lookup, using alternatives, CDI versus Java EE resource injection, using CDI with EJB 3.1, CDI/JSF 2 integration patterns, and CDI/JPA 2 usage patterns.', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Patterns and Best Practices for CDI', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19720', 'Module systems such as Jigsaw, OSGi, and NetBeans Platform provide solutions for building well-structured software that consists of decoupled, reusable components. By examining some real-world modular architectures, it is possible to extract generic solutions for common software design issues. These problem/solution pairs are considered to be modularity patterns.

This session, for Java architects and advanced developers, catalogs the patterns and antipatterns and clearly defines the principles for evaluating them. 

You will learn about
&amp;bull; Modularity patterns best practices
&amp;bull; Evaluation principles for modularity patterns
&amp;bull; Modularity antipatterns', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Patterns for Modularity II: Revenge of the Patterns', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24802', 'Realistic physics can add a new dimension to many traditional games and enable a lot of new and creative game concepts. This presentation shows how to integrate an existing physics engine into JavaFX games and applications; explains basic concepts such as gravity, collisions, and joints; and elaborates on how to use them in JavaFX. It also discusses performance, graphics optimization, and what&apos;s required for building a real game. At the end of the presentation, the attendees will see a simple, yet good-looking, game incorporating all the topics covered.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Physics in JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25045', 'Developers: You received a high-fidelity Photoshop file from the visual designer. How do you transform it into JavaFX-CSS? 

Designers: You created a pixel-perfect Photoshop mockup for the developer. How do you provide specs for your visuals? 

This session shows you how to do both. You will learn techniques for translating visual designs into working JavaFX components; how to create Photoshop images for easier implementation in JavaFX; and how to translate gradients, fonts, 9-slice scaling, and more into JavaFX-ready specs. The presentation demystifies JavaFX-CSS and shares techniques for using it to style JavaFX regions/backgrounds/borders, derived colors and palettes, padding/spacing, and more. The session includes live demos.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Pixel-Perfect JavaFX: Designer/Developer Workflow', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24280', 'In this session, JavaOne 2010 Rock Star speaker Graeme Rocher demonstrates how you can deploy Grails applications in the cloud and take advantage of the new age of polyglot persistence on the Java EE platform.

Demonstrating persistence techniques on a variety of data stores&amp;mdash;including Redis, MongoDB, and an RDBMS&amp;mdash;the presentation demonstrates how specific use cases can benefit from a polyglot approach to persistence allowing for scalable, cloud-based Java EE applications.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Polyglot Persistence in the Cloud with Grails and Java EE', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26503', 'This session reviews the physics library created for last year&apos;s JavaOne demos. It covers problems encountered and lessons learned and discusses future possibilities. It specifically addresses Nvidia PhysX, JBullet, and JNI.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Postmortem: Physics in JavaFX', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('28500', 'Effectively improving performance is hard and requires a disciplined approach. The pain is worth it, however.

From the deployment architecture through the Java EE stack (persistence, container, threading) and out through the content delivery network, speakers from the National Football League share their journey in making the platform significantly faster and more stable under higher load. They address issues found in all layers of the system.

The intended audience is Java developers looking to convert
their users into fans.

Key points:
&amp;bull; Creating a plan&amp;mdash;a must 
&amp;bull; Small, safe changes yielding substantial impact
&amp;bull; Taming the environment monster
&amp;bull; Knowing when you&apos;ve done enough', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Practical Performance: How We Made the NFL Faster', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24341', 'Many Java developers have come to appreciate Groovy for its conciseness and scripting capabilities, but not many use the language to its fullest extent. This presentation goes through some of Groovy&apos;s lesser-known features by means of live coding. If you seek to make your life as a Java programmer easier by improving your Groovy kung fu, this session is for you.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Pro Groovy', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25026', 'We know that an RCP offers certain techniques and components for visualizing data in various ways. The most common forms of visualization are trees, tables, and lists. The NetBeans RCP offers these visualizations with Swing in the form of, for example, TreeView, TableView, and ListView. With the availability of JavaFX 2.0 and its Java APIs, it is time to rethink how these visualizations represent data.

This session demonstrates how using UI controls available with JavaFX 2.0 APIs can help you improve the visualization of data inside a standard Swing application as with the NetBeans RCP itself. Using the power of JavaFX 2.0, the presentation gives the most common representation an extreme makeover and shows a few new ones.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'The Enterprise RCP: NetBeans RCP with JavaFX 2.0 Controls', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24241', 'This presentation distills what the speaker has learned from 10 years of scaling Java. It starts with a performance problem and leads you through solving it with caching, discovering the problems of distributed caching and their solution along the way. It will equip you with the tools to analyze a performance situation and see whether a cache will help and what type of cache to apply.

Topics include
&amp;bull; The nature of system load
&amp;bull; Desirable properties of scalable systems
&amp;bull; Caching as a solution for offload, scale-out, and performance
&amp;bull; Why caching works
&amp;bull; Tiered cache design
&amp;bull; SOR coherency problem and solutions
&amp;bull; N * problem and solutiond
&amp;bull; Cache cluster topologies
&amp;bull; CAP and PACELC constraints
&amp;bull; Resulting design trade-offs', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'The Essence of Caching', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24822', 'Today rich client development on the JVM is dominated by Swing and SWT. Swing is considered to be the more portable UI framework and SWT the one with the more &quot;native platform look and feel.&quot; The best-known usages are probably NetBeans RCP for Swing and Eclipse RCP for SWT. With JavaFX 2.0 again available with a real Java API, it is now time to ponder the question &quot;Is there space for one more RCP and one more UI toolkit?&quot;Reusing parts, design patterns, and principles of these two large RCP frameworks, this session will give you an impression of what such a new JavaFX UI platform may look like, its advantages and drawbacks, and opportunities and challenges.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'The Final Frontier: Rich Client Platform with JavaFX 2.0', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25302', 'Not long ago, we built and deployed Java applications with brittle scripts and builds invoked from developers&apos; desktops. Given the complexity of today&apos;s applications and the shift of the deployment destination from datacenter to cloud, Java build is due for an overhaul. The growing roles of DevOps, agile planning, and ALM are putting new requirements on the automation needed in the modern build stack, and the rapid adoption of Hudson is highlighting the central role of CI as the hub of Java application development and deployment. 

In this session, a panel debates approaches to modernizing your build, CI, and ALM infrastructure to help scale the productivity of your teams and leverage the latest crop of build, test, and deployment solutions.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'The Future of Java Build and Continuous Integration', 'The Java Frontier', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('36160', 'This session introduces key members of the Nashorn engineering team. The presentation discusses the current status of the Nashorn project and implementation and introduces key JDK 7 features such as InvokeDynamic, method handles, and JIT strategy. Finally, it shows how the Nashorn implementation offers developers programming advantages. Attendees will get the opportunity to ask questions and offer input.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'The Future of JavaScript in the JDK', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('37940', 'Ever wondered whether you should use a weak reference or a phantom reference? If you answered &quot;yes&quot; or &quot;phantom who?&quot; this is the session for you. It covers

&amp;bull; The java.lang.ref API
&amp;bull; Its failure modes
&amp;bull; Reference handling patterns, APIs, and best practices
&amp;bull; MapMaker, a concurrent map builder with support for strong, soft, or weak keys and/or values
&amp;bull; And more

Walk in with a working knowledge of the language, and walk out an expert in references, referents, reclamation, and other garbage collection necromancy.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'The Ghost in the Virtual Machine: A Reference to References', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22641', 'Come learn about the new language features in JDK 7 added by Project Coin/JSR 334. This session demos the new features in an IDE and shares experiences in developing the changes.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'The Heads and Tails of Project Coin', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23401', 'Does your application suffer from stalls and stutters? Does it pause occasionally, and you don&apos;t know why? Does your application fail due to out-of-memory exceptions even though you know you have enough? The JVM is a fantastic tool we all take for granted. Sometimes, though, you really need to look under the covers to understand what it really does for you. This session will help you understand more about how your application is behaving and what performance issues you may be facing. Practical demonstrations of freely available tools commonly used to help solve specific problems show how to solve some of these perennial issues.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'The Hidden World of Your Java Application and What It Is Really Doing', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21688', 'The NetBeans platform is a  framework beneath many corporate and scientific Java SE applications. It saves years of development time in building any large desktop application, via predefined features and a modular framework that simplifies both developing and updating desktop applications. Boeing, Northrop Grumman, UNESCO, and at least hundreds of other large organizations in the corporate sector, as well as open source communities, are using the NetBeans platform. In this session, you will find out why this framework has been chosen by so many organizations. You will learn about the main NetBeans APIs and see a demo showing how to create a corporate application by using best practices from Java SE combined with the NetBeans platform.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'The Hitchhiker&apos;s Guide to NetBeans RCP', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23640', 'With Java&apos;s own module system just around the corner, module systems are here to stay. In order to truly benefit from modularizing a legacy application, it is, however, not sufficient to just promote its architectural units to modules. In order to improve divisibility of work, functional extensibility, and customizability, the modules must encapsulate functional rather than technical concerns. This session presents multiple angles on the process of modularizing monolithic code bases, including a study of using the Featureous tool for migrating the features of the NDVis neuroscience application to the NetBeans module system. The attendees will gain a better understanding of the challenges and principles of modularizing legacy applications.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'The How-To of Migrating Legacy Applications to Module Systems', 'Emerging Languages, Tools, and Techniques', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24841', 'If you have questions about file or socket I/O and/or new or old I/O, bring them along to this BOF session. Engineers from the JDK team working in the core libraries and networking area will form a panel to take questions and talk about the many new additions in JDK 7 and maybe more.', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'The I/O BOF', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25171', 'This technical session discusses the Java Identity API and the related attribute service architecture, a new Java standard that defines standard identity interfaces and interaction models to sustain portable use of identity by applications and in access control decisions.', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'The Java Identity API', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23723', 'JavaFX 2.0 represents a significant shift for the JavaFX platform. JavaFX Script has been replaced with Java. All the JavaFX functionality is now available through Java APIs, and there is a strong emphasis on simplifying development of enterprise business applications. Also, several new features have been introduced in JavaFX to simplify development of rich client applications. This BOF session offers an opportunity to talk directly with the members of the JavaFX engineering and product teams and discuss technical questions, share experiences, express concerns, and go over anything else that might help JavaFX developers considering a switch to JavaFX 2.0.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'The JavaFX 2.0 SuperHappyDev BOF', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25184', 'As technology evolves, multicore becomes commonplace, and the cloud is a reality, a new world of integrated live applications is developing. One notorious example is Brazil, where the government has been gradually replacing all paper-based processes with electronic-document-based systems, forcing even small companies to deal with digital certificates, asynchronous Web services, XML signatures, and redundant systems for failover just to perform their core activities.

In this session, seasoned developers who face similar challenges will learn from a real-world use case covering
&amp;bull; How Java EE 6 technologies such as JMS, CDI, and JAX-WS can be used to build integrated live applications
&amp;bull; How an actor-based approach can tackle this problem space
&amp;bull; A comparison of both approaches', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'The Massive Challenge: Java Technologies for Modern Enterprise Applications', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24223', 'In this session, the two spec leads for JSR 107 walk you through this important new caching standard, which will form part of Java EE 7. 

You will learn how to
&amp;bull; Abstract your caching implementation, much as with JDBC
&amp;bull; Use the rich and modern API
&amp;bull; Use the new caching annotations
&amp;bull; Use the API before Java EE 7 is released within the Java SE, Java EE 6, and Spring environments
&amp;bull; Apply JCache to common caching scenarios', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'The New JSR 107 Caching Standard', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25182', 'It seems that everyone is in search of the Next Big Thing to replace Java. Much of the attention centers on Scala these days, but no one said there has to be only one Next Big Thing, and it certainly doesn&apos;t &lt;i&gt;have&lt;/i&gt; to be Scala. This session introduces you to several alternatives&amp;mdash;fantom, mirah, and gosu&amp;mdash;that extend the Java platform. It then looks at one application rewritten in each language in order to compare and contrast. The presentation covers what makes each option great and looks at some potential gotchas as well.', 'Java EE Web Profile and Platform Technologies', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'The Not-Java That&apos;s Not Scala: Alternatives for Java EE Development', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22523', 'JavaFX 2.0 and Java application deployment technologies are enabling the return of rich-client Java. This session brings the attendees up to speed on the JavaFX 2.0 API and best practices for developing rich-client applications with it. It also presents application deployment strategies that are palatable to users who expect applications to be available from Web pages. Along the way, it also explores best practices for coding JavaFX applications, including property binding capabilities and a declarative programming style.', 'The Java Frontier', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'The Return of Rich-Client Java', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23621', 'In addition to all the JavaFX 1.3-based UI controls, JavaFX 2.0 offers a greater variety of UI controls for building rich applications: TreeView, TableView, menus, TabView, Accordion&amp;mdash;to name a few. The Charts package has been redesigned to include features such as autoranging, animation, and CSS styling of internal components, thus offering a very convenient approach to data visualization. 

This session gives you a tour of all the JavaFX 2.0 controls, including features such as drag-and-drop, filtering and sorting of table data, and the marriage of charts and tables together for common data.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'UI Controls and Charts: Drag-and-Drop, Filtering, Sorting, Table Hookup with Charts', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23457', 'The JDK includes classes representing special types of Java references: soft, weak, and phantom. Used correctly, reference objects provide a powerful control mechanism for garbage collection of data structures to optimize performance and memory usage. Incorrectly used, they may not have the intended effect or, worse, applications can fail randomly and unexpectedly.

This session describes the different types of reference objects; intended uses, with code samples; potential pitfalls; and how to avoid them. The Eclipse Memory Analyzer Tool recognizes Java reference objects and can help diagnose some associated problems.  The session includes a demo with Memory Analyzer to examine heap dumps including reference objects.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Understanding, Using, and Debugging Java Reference Objects', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26060', 'Oracle Coherence is becoming the optimal elastic data grid solution for the enterprise. While you enjoy the successful implementation and deployment of your enterprisewide grid project, there is something you may leave behind unintentionally. What about security, logging, and transactional tracking? In this session, you will learn how to use aspect-oriented programming (AOP) to bring security and transaction visibility into your application grid.', 'Enterprise Service Architectures and the Cloud', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Unleash Aspect-Oriented Programming into Oracle Coherence Application Grid', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22040', 'Kinect is an innovative system that brings new ways to interact with Xbox 360 video games. 

To play, you don&apos;t use a traditional controller but, rather, your body, nothing else. Your body becomes the controller.

The good news is that Kinect is not limited to game consoles anymore. This session shows how to use Kinect in the Java world. To illustrate this, the presenters use Processing, an open source, easy-to-use, JVM-based language that makes it possible to easily and quickly write visually attractive applications.

The session covers the following topics:
&amp;bull; Introduction to Kinect principles
&amp;bull; Introduction to Processing
&amp;bull; Blob detection
&amp;bull; Motion tracking
&amp;bull; Advanced techniques such as skeleton detection

It also includes live demos.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Use Your Body to Interact with the JVM: Or How to Use Kinect on the JVM', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('26521', 'Camel is one of the leading components used inside the ServiceMix container that is primarily OSGi-based. But deploying Camel endpoints in an OSGi container can pose several obstacles and hurdles. These hurdles manifest themselves through the heavy use of Spring and Spring DM and the reliance on the Spring application contexts. In this session, the Savoir team covers best practices for deploying Camel in an OSGi container, with an emphasis on Blueprint as a solution for stable endpoint deployments.

The session culminates in the lessons learned from a high-profile FAA application moved to Apache Aries Blueprint with OpenJPA, Camel Blueprint, Aries TX/JNDI from Spring DM, and Hibernate.', 'The Java Frontier', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Using Apache Camel and Java EE in an OSGi World', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25212', 'Ever since the early releases of Java, building GUI-based desktop applications has been a painful endeavor. Finally, after years of bloated Java code, a magic cloud has appeared and Griffon has emerged. Griffon enables you to quickly and easily build Groovy-based applications. This session goes over the fundamentals of Griffon and, using a combination of slides and a demonstration, shows you how to transform your Java applications quickly and easily to Griffon.  

It covers the following topics:
&amp;bull; History of Griffon
&amp;bull; How to install Griffon
&amp;bull; Benefits of Griffon
&amp;bull; How to transform your Java application to Griffon 
&amp;bull; Core Griffon concepts', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Using Griffon to Build Groovy-Based, GUI-Based Desktop Applications Like a Wizard', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21040', 'The continuous integration server Hudson is suitable for a wide range of tasks beyond running builds. Learn about some of the use cases from the authors of the authoritative Hudson book, and find lots of reasons to start using Hudson now:
&amp;bull; Build applications written in other JVM languages such as Scala, Groovy, or JRuby
&amp;bull; Build an Android application, and run tests on the device
&amp;bull; Automate release builds to a one-click step
&amp;bull; Create print-quality documentation in HTML and PDF format, and deploy it to a Web server 
&amp;bull; Publish deployment files, Javadoc documentation, and test results
&amp;bull; Create staging and production releases, and get them deployed

This presentation makes a compelling case that Hudson is about more than compiling Java code and running unit tests.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Using Hudson for a Lot More Than Just Continuous Integration', 'Emerging Languages, Tools, and Techniques', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25010', 'Ever wanted to develop a plug-in for Hudson but don&apos;t have time to learn about its plug-in development framework? Is there a feature you would like to implement for your server or donate back to the Hudson community? The Hudson continuous integration system is highly extensible and provides extension points for developing plug-ins.

In this HOL, you will get hands-on experience with
&amp;bull; Creating a Hudson plug-in with the Maven HPI (Hudson plug-in interface)
&amp;bull; Extending a Hudson plug-in to provide your own implementation
&amp;bull; Writing your own configuration for the extension point
&amp;bull; Using the NetBeans IDE to run, edit, and debug the created extension with the bundled Jetty server
&amp;bull; Using Sonatype OSS to deploy your plug-in and publish to the Maven central repository', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 120, 'Introductory', 'Approved', 'JavaOne', 'Using Hudson&apos;s Development Framework to Build Your First Hudson Plug-in', 'Emerging Languages, Tools, and Techniques', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22382', 'Predicting the future is dangerous business. Is Java up to the task? This session discusses and demonstrates a fun and understandable stock-picking system built with Java 6 and various Java-based open source projects. The discussion ranges from machine learning concepts (specifically genetic algorithms) and core Java development with specific code examples to trading system back-testing. Attendees are sure to come away excited, ready to tackle that next hard big-money problem, and confident that Java is a capable partner.', 'Core Java Platform', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Using Java and Genetic Algorithms to Beat the Market', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22121', 'Many Java applications&amp;mdash;including IDEs, J2EE containers, and code analyzers&amp;mdash;require programmatic access to structural representations of Java source code. For this purpose, JSRs 199 and 269 were introduced. The JDK&apos;s Java compiler, javac, supports these APIs and can serve as an awesome library for Java source code modeling. This BOF session demonstrates how to use javac as a source modeling library and how is it used in the NetBeans IDE.

Intended audience: Java tools developers

What will be learned:
&amp;bull; APIs for Java source code modeling
&amp;bull; How to use javac as a library for this modeling
&amp;bull; How to improve javac&apos;s capabilities for even better support of tools', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Using Java Compiler Source Modeling APIs in Java Applications', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22123', 'One of the key new features in JavaFX 2.0 is the ability to use JavaFX UI controls with existing Java UI toolkits such as Swing and Standard Widget Toolkit (SWT). This BOF goes over the details of how to embed your new JavaFX UI in these legacy toolkits and includes sample code and demos.', 'Emerging Languages, Tools, and Techniques', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Using JavaFX 2.0 UIs with Swing and SWT', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24761', 'OAuth is becoming a broadly accepted standard for API authentication and is widely used for securing RESTful Web services. This session provides a short introduction to OAuth and the open source technologies you can use to build secure RESTful Web services in Java.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 120, 'Introductory', 'Approved', 'JavaOne', 'Using OAuth with RESTful Web Services', 'Enterprise Service Architectures and the Cloud', 'HOL (Hands-on Lab)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21740', 'JavaScript is a highly advanced language, but it is missing some of the tools modern developers have come to rely on for best practices. Luckily, tools that greatly enhance JavaScript development have recently been added. This session focuses on augmenting development environments to fill in the gaps, including adding tools to ensure that your JavaScript code meets industry and enterprise standards and that your solutions are performant, reliable, and scalable. Tools running in Java SE and Java EE include Ant, IDEs (Eclipse, NetBeans), Rhino, and javax.script (JSR 223).  

The session also covers debugging, JSLint, minifiers (Uglify, Google Closure Compiler), testing (JS Test Driver, Jasmine, JUnit), performance, and continuous integration (Jenkins/Hudson, Cruise Control).', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Using Rhino to Ensure JavaScript Best Practices', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25081', 'The growth of Over-the-Top (OTT) or open network IPTV is transforming the media and entertainment industry. Many new and traditional service providers are beginning to offer open services, and device makers are offering Smart TV to connect directly to their consumers. Java ME is used widely in TV/media device standards as a secure, extensible platform for interactivity. New Java-based media standards such as Blu-ray Live and GEM 1.3 enabling OTT services are now being deployed commercially.

This session describes how the Blu-ray Live Java ME platform enables developers to create interactive HD media applications and games. The presentation includes a demo of a Java ME application with full Blu-ray-quality HD content streaming over the internet on an off-the-shelf Blu-ray Live player.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Utilizing Blu-ray Live Java ME to Create Over-the-Top IPTV Services', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24480', 'Get an introduction to the Vaadin framework from one of its core developers. Vaadin provides a desktop-like programming model on the server for creating RIAs in plain Java&amp;mdash;without the need for HTML, XML, plug-ins, or JavaScript. 

This session lays out the key concepts of the server-side RIA development model and compares it with client-side RIA. To demonstrate the use of the framework, the session includes the step-by-step development of an example application. The presentation concludes with pointers on how to start developing your own applications with the Apache-licensed Vaadin framework.

You&apos;ll learn
&amp;bull; To create a desktop-like Web application in Java
&amp;bull; How Vaadin can be extended with Google Web Toolkit', 'The Java Frontier', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Vaadin: Rich Web Apps in Server-Side Java Without Plug-ins or JavaScript', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24924', 'Quantifying and understanding an embedded application&apos;s static and dynamic footprint is the concern of every embedded application developer. Verrazano is a platform-agnostic analysis tool that provides an in-depth view of an application&apos;s use of classes, methods, and fields and the Java Runtime Environment (JRE). In controlled and closed deployments, Verrazano is a valuable tool in creating an application-specific runtime. By removing unused and dead code, it can shrink both the static and dynamic footprint, thus reducing the BOM requirements. This session discusses the feature set the tool provides and how it analyzes applications, and it presents real-world use cases.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Verrazano, a Java Runtime Analysis Tool', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22101', 'Nowadays it is becoming more popular and widespread to use different communications services for audio/video chatting. Some of these services have clients for high-powered smartphones and tablet devices, enabling us to use this communications method almost everywhere. But what about the huge market of feature phones? Is there any way to bring this type of communications to them?

This session demonstrates how Oracle Java Wireless Client, with its Oracle Mobile Developer API feature, can be used to create an audio/video chat client, using the Google Talk service&amp;mdash;one of the most popular communication services built on top of the open XMPP specification&amp;mdash;as an example.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Video Calls Using Popular Communications Services on Feature Phones with Java ME', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('21860', 'This session takes the main computing resources used by Java applications&amp;mdash;such as memory, CPU, disk I/O, and network I/O&amp;mdash;and explains in technical detail what the effect of virtualizing all of this means. Because most Java developers are concerned with their applications&apos; performance, the session provides best practices derived from many deployments, so the attendees can avoid any pitfalls in virtualizing their enterprise Java-based applications. It presents examples, along with the benefits of virtualizing Java applications.', 'Core Java Platform', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Virtualizing Your Java Applications: Best Practices', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22780', 'This session presents an efficient visual way of debugging Java Swing applications with the visual debugger in the NetBeans IDE. It enables debugging without the need to look into the source code and helps inspect the application structure and execution flow in terms of GUI objects. You will learn how to resolve typical issues in Swing applications, explore the component hierarchy, view events and event listeners, and have control of changes in the UI.

This tool is suitable either for beginners who are learning how Swing works or for advanced developers who need to inspect how applications with a complex GUI are assembled, check how events drive the GUI&apos;s execution, and get fast entry points into the appropriate source code.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'Visual Java Swing Debugging', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23283', 'The JavaFX 1.3.1 platform provides the visual capabilities needed for rendering advanced map data. By leveraging the Java SE platform, some advanced data processing can also be achieved.

Map data can be very generic. This session presents examples using geo-map data as well as examples using topic-map data.

The session shows how the JavaFX 2.0 platform enables rich and interactive visualization of map data. Code examples show how functionality achieved with the JavaFX 1.3.1 platform can be realized with the JavaFX 2.0 platform. It also explores how the JavaFX 2.0 platform makes it easier to combine data processing
and data visualization.', NULL, 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'Visualization of Geomaps and Topic Maps with JavaFX 2.0', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23361', 'Web technologies have become an integral part of the mobile world. With the new Web applications standard&amp;mdash;Wholesale Applications Community (WAC) 2.0&amp;mdash;Web developers can create HTML5 Web apps with rich multimedia capabilities and access to a wide set of mobile-specific functionality such as camera, location service, address book, file system, and messaging. The WAC 2.0 Widgets Runtime, built on MSAs, brings Web technologies to the wide range of phones empowered by Java ME. Web developers gain access to the millions of fully compliant devices, and OEMs and operators get a unified Java and Web environment that works consistently across platforms.

This session dives into the implementation and includes use cases and several live demos of Web widgets supported by the Java ME stack.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'WAC Widgets: New Direction for Java ME Phones', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25291', 'With the increased use of Web services and publicized security breaches, applications need to pay more attention to securing their applications and infrastructures. This session focuses on how to better secure Web services within your application.   

The presentation covers the following topics:  
&amp;bull; Why you should care about securing Web services 
&amp;bull; Infrastructure approaches to Web service security 
&amp;bull; Restricting user access 
&amp;bull; Controlling how other systems access Web services 
&amp;bull; Securing the data transmitted with Web services 
&amp;bull; Controlling cross-server-level access to Web services', 'Core Java Platform', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Web Services Security', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23702', 'Scala is a JVM programming language that blends object-oriented and functional concepts. However, based on the buzz, you might get an impression that Scala is a good fit only for problems that need to be solved in a pure functional style. Which is, fortunately, far from being true. The goal of this presentation is to show that Scala is not only about functional programming but also has another side that can immensely benefit regular Java developers.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 45, 'Introductory', 'Approved', 'JavaOne', 'What Functional Purists Don&apos;t Want You to Know About Scala', 'Emerging Languages, Tools, and Techniques', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22142', 'The famous statement &quot;Premature optimization is the source of all evil&quot; applies not only to coding and performance. Architecture, coding standards, and development processes are other areas in which early decisions made with minimal information often cause serious problems later in development. In this BOF session, you will learn how to use three modern tools: Jackpot 3 (declarative, en masse checking and refactoring of code), Archie (crafting and enforcing of architectures and designs), and Codeviation (business intelligence for code) to free your development from solving the hard problems too soon with too little information.

Intended audience: people working on midsize to large Java systems, architects, tech leads, developers, and managers', NULL, 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'The Right Decisions at the Right Time with Jackpot 3, Codeviation, and Archie', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23423', 'After a successful Java EE panel at JavaOne 2010 with participants from all the major vendors but also from renowned independent consultants, it&apos;s time to start talking about Java EE 7 and the work that is already well on its way in the form of several JSRs in the JCP.

With a similar panel of participants, this session covers topics such as 
&amp;bull; The current state of Java EE 6 adoption
&amp;bull; The motivations for Java EE 7
&amp;bull; What the cloud really means for Java EE 7
&amp;bull; Modularity in Java EE.next
&amp;bull; Better streamlined component models
&amp;bull; Status of ongoing work in the JCP

The attendees are encouraged to submit hard questions to the panel of experts.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'The Road to Java EE 7: Is It All About the Cloud?', 'Java EE Web Profile and Platform Technologies', 'Panel');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('17300', 'A guided tour through the many language features and paradigms Scala offers, this presentation is meant to serve as a &quot;look before you leap&quot; guide for developers interested in Scala who may have been been discouraged when they first tried to jump into programming with Scala.', 'Emerging Languages, Tools, and Techniques', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'The Scala Language Tour', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25222', 'The enterprise service bus has become synonymous with integration. Although the ESB grew from the needs of enterprise integration, the landscape has changed and not every project that needs integration requires an ESB. Increasingly, Web application developers need to integrate with public as well as enterprise services, to the extent that the presentation/logic/data tier model is limited due to applications&apos; need to be connected to other applications and services.

This presentation provides insights into when to select an ESB and when not to. It also looks at other alternatives for integration such as Web and REST services and other frameworks.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'To ESB or Not to ESB?', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24308', 'Let&apos;s face it: creating a modern GUI for the desktop with Java SE is a tough job. Even for a simple application, a developer has to do a lot of infrastructure &quot;plumbing.&quot; This session discusses the top 10 common problems of developers in desktop application development:

&amp;bull; Deployment
&amp;bull; UI persistence
&amp;bull; Modularity
&amp;bull; Configurability
&amp;bull; Service infrastructure
&amp;bull; UI synchronization
&amp;bull; Performance and UI responsiveness
&amp;bull; Visual consistency
&amp;bull; Options and settings management
&amp;bull; OS dependence and native libraries 

The presentation takes a look at individual libraries for solving some of these problems and examines frameworks that claim to solve all of them at once.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 45, 'Introductory', 'Approved', 'JavaOne', 'Top 10 Common Problems in Java Desktop Applications', 'Java SE, Client Side Technologies, and Rich User Experiences', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24860', 'Want to build faster and more feature-rich Java ME applications? There are many free tools and libraries that can help, but which ones to choose? This BOF session introduces the top 10 (or maybe 12) best free tools and libraries and shows you how to use them.', 'Java ME, Mobile, Embedded, and Devices', 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Top 10 Free Tools and Libraries for Building Better Java ME Applications', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24789', 'JavaFX architecture differs considerably from Swing, SWT, and AWT. Developers can benefit from examples of good practices and antipatterns in designing UIs with JavaFX. VisualVM has a decent set of plug-ins. There are several add-ons for the Tracer plug-in, which exposes application-level data (Java Collections framework, NIO, Swing/AWT). This session shows a new plug-in oriented to gathering JavaFX characteristics/events and demonstrates its full capabilities by presenting some examples. Such a plug-in adds value to both JavaFX and VisualVM. It simplifies JavaFX application development through increased developer awareness about what&apos;s going on in their applications while broadening the applicability of the VisualVM tool itself.', NULL, 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'Troubleshooting JavaFX-Specific Problems with VisualVM', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('18246', 'This session demonstrates how to troubleshoot the common problems that lead to hung and slow Java applications by going through case studies derived from actual problems the profiled organization has seen on its production systems. Each case study is accompanied by a live demo of the tool best suited for troubleshooting that particular problem. The presentation discusses the approach of the speaker&apos;s team to troubleshooting hung and slow Java applications and demonstrates the tools it uses to monitor and troubleshoot some common problems it has come across that lead to hung and slow Java applications. There will also be a general Q&amp;A and open discussion at the end so attendees can share their favorite tools, tricks, and/or best practices.', NULL, 'Core Java Platform', 45, 'Introductory', 'Approved', 'JavaOne', 'Troubleshooting Slow or Hung Java Applications', 'Core Java Platform', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('20960', 'Coming back with more high-performance Java goodness, the OptionsCity team brings tales of threading (and your trusty friend, the ThreadPoolExecutor), concurrency (how to make it less likely that you&apos;ll shoot yourself [or your team] in the foot), and memory leaks (and the tale of the barely legal objects). Plus how to test for Swing lag automatically. If you&apos;re in the business of working in submillisecond response times, this session is for you!', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Stories from the Field: Running a Trading Platform for the Fourth Year', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25145', 'Deployment environments can be unforgiving, and stressed applications can come up short if scalability isn&apos;t carefully considered. This presentation focuses on scaling Java Persistence applications and walks through strategies and best practices for  caching, concurrency management, query optimization, and provider extensions with the Java Persistence API (JPA). A few best practices early on can really aid with scalability later.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Strategies and Best Practices for Highly Scalable Java Persistence Applications', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('40147', 'Survey Test Session', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Survey Test Session', 'Core Java Platform', 'General Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24625', 'Java developers have an opportunity to reach out to their local community and have fun teaching programming by using Alice (http://alice.org), free software from CMU. This BOF session introduces using Alice 2 and Alice 3 with students learning the Java programming language for the first time. Alice is a 3-D environment in which students create stories and games by using a graphical drag-and-drop 3-D tool in their first exposure to programming and Java SE. The BOF covers the Alice forum and related community of educators as well as the &quot;Programming with Alice&quot; resources and demonstrates them. Participants are encouraged to bring their laptops and try Alice.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Teaching Java by Using Alice', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24633', 'Java developers have an opportunity to reach out to their local community and have fun teaching programming by using Scratch (http://scratch.mit.edu) and Greenfoot (http://greenfoot.org). This BOF session introduces the use of Scratch and Greenfoot with students who are learning programming for the first time. Scratch is a drag-and-drop programming tool for early learners interested in creating their own 2-D games and stories. Greenfoot is a Java counterpart of Scratch: it makes it possible to write Java code to create 2-D games and stories in a manner similar to what can be done in Scratch. The session also covers the resources and related community of educators. Participants are encouraged to try the tools covered.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Teaching Java with Scratch and Greenfoot', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25143', 'A recent trend in the embedded device environment is for operational data to be collected on the device and streamed to servers where is it used for new services for the device owners, proactive maintenance analysis, and analysis for building better devices. Another trend is synchronization of data between servers and devices in the field. Streaming measured data from automobiles to the auto company is an example of telemetry, and TV guide information is an example of synchronization. This presentation shows developers how they can accomplish both telemetry and data synchronization very easily, often with just a few lines of code, using embedded Java, embedded Oracle Berkeley DB, and Oracle Database Mobile Server.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Telemetry and Synchronization with Embedded Java and Berkeley DB', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25180', 'Come to this session to see how Jersey Test Framework (JTF) makes it easy to create reliable, well-designed RESTful Web services with test-driven development (TDD). JTF tests run in an in-memory app server automatically started and stopped by JTF, so tests are blazingly fast. This speed makes it possible to develop Web services with TDD. This session demonstrates this by writing a test, then writing a Web service client, and finally writing the service the client calls. At every step, JTF provides immediate feedback. The session also shows how to write &quot;sample&quot; client code so consumers know exactly how to call the service. Finally, the presentation uses JTF to quickly show sophisticated aspects of Jersey RESTful Web services such as filters, JAXB resolvers, and exception mappers.', 'Emerging Languages, Tools, and Techniques', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'Test-Driven Development of RESTful Web Services with the Jersey Test Framework', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('19820', 'There are hundreds of HotSpot command-line options, yet there are only a select few you need to know when performance-tuning the HotSpot. This session covers the set of command-line options you need to know to realize optimal Java performance, but, more importantly, you will hear when they are applicable. With every command-line option it presents, the presentation describes what it does and when to consider using it.', NULL, 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'The Definitive Set of HotSpot Performance Command-Line Options', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25303', 'The Diabolical Developer hosts this in(famous) session in which he challenges &lt;i&gt;everything&lt;/i&gt; the modern Java developer holds to be good and true. The Java developer today stands in a sea of APIs, frameworks, best practices, software development methodologies, and more. The developers who sent mankind into outer space did not have all of this. Makes you think, doesn&apos;t it?

The session takes you through practical steps (the right attitude, self-learning, using the right tools, sticking to Java 1.4, and the like) you can take to free yourself from the chains the industry has put on you. You will leave empowered and will get back to doing what you love the most, hacking Java code.', 'Emerging Languages, Tools, and Techniques', 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'The Diabolical Developer (Redux)', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25083', 'This session covers what a platform as a service (PaaS) should be. Is it infrastructure as a service (IaaS) plus middleware or something more? Should PaaS be restrictive or allow open standards such as Java EE? Bringing software to life is a series of high-friction activities touching developers, QA, and IT. What friction points should a PaaS remove?
 
The session offers a definition of PaaS that focuses on developers and open standards. It looks at solutions on the market such as Google App Engine, Redhat OpenShift, and CloudBees&apos; PaaS to help you decide on a PaaS for your organization. It also walks through a developer&apos;s use case of building and operationalizing a Java EE Web profile application and continuously building and deploying it to CloudBees&apos; PaaS and on to Google App Engine.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'What Is a PaaS, After All?', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25102', 'JSF is the standard UI technology in Java EE, but on its own, it lacks tools for effectively building real-world rich enterprise applications. RichFaces 4, an open source extension for JSF, fills this development gap. RichFaces Core provides major enhancements for Ajax request customization, rendering and execution options, the JSF client queue, and more. RichFaces UI provides a large number of rich out-of-the-box components. RichFaces Skins makes it possible to change the look and feel of entire applications on the fly. The RichFacesComponent Development Kit streamlines building custom components. 

This session explores these different aspects of RichFaces to see how each part, in turn, makes it easier to build cool enterprise JSF applications.', 'Core Java Platform', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'What You Need for Building Cool Enterprise Applications with JSF', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23442', 'A lot of new features have been added to the Metro Web Services stack since Oracle GlassFish Server Release 3.0 became available, ranging from a completely revamped transaction implementation to high availability for reliable messaging, significantly easier configuration, and many security improvements and additions.

The Metro Web Services stack is part of the open source GlassFish
community and provides the GlassFish SOAP implementation but can also be used outside GlassFish. This session provides a complete overview of and instructions on how to utilize Metro&apos;s new features.', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s Hot in Metro Web Services', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24262', 'In this session, JavaOne 2010 Rock Star speaker Graeme Rocher delivers an update on the latest and greatest features of the Grails framework&amp;mdash;a dynamic Web application framework based on the Groovy language and designed for Java EE. He covers all the new features of Grails 1.4, including agent-based reloading, unit testing mix-ins, and the latest enhancements that support Servlet 3.0. 

Attendees will gain key knowledge of the latest techniques for building Grails applications on the Java EE platform.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s New in Grails 1.4?', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23940', 'With the recent release of Groovy, 1.8, the latest major milestone of the popular and successful dynamic language for the JVM, it is a great opportunity to discover and discuss its latest features.

In the spotlight in this session: improved syntax for readable domain-specific languages with &quot;command chains,&quot; new runtime performance improvements for primitive calculations, support for concurrency and parallelism, and built-in support for parsing and producing JSON payloads. The presentation finishes the journey with the newest boilerplate code busters with &quot;AST transformations&quot; that will help you further streamline your code and make it more concise and powerful.', 'The Java Frontier', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s New in Groovy 1.8', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24607', 'This BOF session discusses some additions to Project Jersey that have been accomplished this year and looks at what can still be improved.

All Jersey users are encouraged to take the opportunity to meet with the people from the Project Jersey team for a discussion
of how they use Jersey, what they like, what could be improved, and so on.

The session covers
&amp;bull; The new monitoring/management SPI
&amp;bull; Client injection (server-side)
&amp;bull; Asynchronous client request execution
&amp;bull; Uses of WADL on the client side
&amp;bull; Anything else you&apos;d like to suggest', 'Java EE Web Profile and Platform Technologies', 'Enterprise Service Architectures and the Cloud', 45, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s New in Jersey? Production-Ready RESTful Framework That Implements JAX-RS', 'Enterprise Service Architectures and the Cloud', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24026', 'LWUIT, Oracle&apos;s Lightweight User Interface Toolkit, has become the de facto standard for developing Java ME applications. LWUIT features a full UI builder, HTML rendering capabilities, and rich UI controls&amp;mdash;and these can all be combined to create powerful apps.

This session reviews some cool and new features in LWUIT: the GUI builder, the new ads component, the new Facebook API, and more.', 'The Java Frontier', 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s New in LWUIT?', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22261', 'After the JavaOne 2010 declaration that Oracle JRockit Mission Control technology will be part of the converged Oracle JRockit + HotSpot, interest in Oracle JRockit Mission Control has peaked. This session discusses what is new in Oracle JRockit Mission Control and how the product will develop in the near future. It also demonstrates new technologies such as the built-in DTrace recorder and the Oracle JRockit Mission Control DTrace event generation language.', 'Core Java Platform', 'Emerging Languages, Tools, and Techniques', 60, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s New in Oracle JRockit Mission Control?', 'Emerging Languages, Tools, and Techniques', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24804', 'OSGi has been around for more than a decade, enabling modularity in the Java world, but modifying a code base to be truly modular is hard work. OSGi is widely established as the de facto standard for modularity in Java, proven in mature products such as virtually all Java EE application servers, IDEs such as Eclipse, build tools such as Maven, and numerous embedded systems. However, despite this widespread adoption, there are misconceptions about what OSGi is trying to achieve. OSGi has established a software component model that some said was impossible. 

This presentation explains why OSGi should be in your future development plans, outlining the vision and the road ahead to off-the-shelf component-based systems.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'Why OSGi?', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24243', 'This session features a discussion of the role of women in Java and in IT in general, with a meet-and-greet for women and a short presentation about jDuchess (http://jduchess.org). Duchess is a global organization for women in Java technology. It provides a platform that enables women who work with Java to connect with each other and get involved in the greater Java community. It aims to make women&apos;s role and individual women&apos;s contributions visible in the Java community and to teach the benefits of diversity in any team environment, whether corporate or open-source.', NULL, 'The Java Frontier', 45, 'Introductory', 'Approved', 'JavaOne', 'Women in Java: An Unconference', 'The Java Frontier', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24122', 'Since its inception, Java has been associated with the Web. As a result, a lot of frameworks are available today, which makes it hard to pick the right one. How do developers choose from such a plethora of frameworks? Often subjective criteria are used: ease of use, preference of the architect. Seldom is performance of the framework taken into account. Nonetheless, responsive applications can make the online experience effective, even enjoyable. This session presents updated results of Sujoe Bose&apos;s JavaOne 2008 presentation: most frameworks have had a major release (Spring 3, JSF 2.1); others have gotten more traction (GWT, Wicket). On top of that, the focus has shifted toward a richer user experience: Ajax, bookmarkability.', NULL, 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'WWW: World Wide Wait? A Performance Comparison of Java Web Frameworks', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('23560', 'While rolling out its large-scale SOA initiative, eBay has seen a need for a rich set of data formats: SOAP, REST, JSON, and high-performance binary. XML Schema (XSD) and JAXB can provide a seamless solution based on a common data model and API. The Turmeric open source SOA project used XSD and JAXB to unify XML, URL encoding, and JSON into a portfolio of interchangeable data formats. Recent work has added Google protocol buffers bridged support.

This session presents eBay&apos;s vision for unified data formats; how eBay implemented a solution in JAXB; its design challenges in protocol buffers integration; and the benchmark results, showing significant speed improvements over other XML serialization methods.', NULL, 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'XML Unified Field Theory: Putting XML, JSON, and Protocol Buffers Under One Roof', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('22125', 'Java EE 6 provides a simplified developer experience, enabling you to build Web applications without complicated XML deployment descriptors. JavaFX 2.0 is a next-generation rich client platform, providing immersive client experiences with controls, animation, and multimedia, using pure Java code. Together, they make a lethal combination to provide a killer interface to your enterprise application, all without making you strain to type angle brackets.

In this session, the Back-End Guy implements the business logic with Java EE 6 APIs and the Front-End Guy creates the user interface with JavaFX for a typical three-tier Web application. The session also discusses the end-to-end deployment strategies for such applications.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', 'XML-Free Programming: Java Server and Client Development Without &lt;&gt;', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24811', 'Many people are drawn into OSGi because it provides class loaders on steroids, but one of the often overlooked features of OSGi is the service registry and the (&#181;)service model. &#181;Services provide a much more powerful alternative to the traditional Java factories and listeners in your code or XML, which are the usual culprits for class loading headaches. Alas, you need to migrate your application to OSGi first in order to take advantage of &#181;Services. 

The idea of PojoSR (a.k.a. OSGi Lite) is to remedy this situation by providing OSGi without the module layer. It runs in any standard Java environment&amp;mdash;from the class path, inside a WAR, wherever your current Java runs&amp;mdash;because it never touches a class loader. Learn more in this session.', 'Emerging Languages, Tools, and Techniques', 'Java EE Web Profile and Platform Technologies', 60, 'Introductory', 'Approved', 'JavaOne', '&#181;Services for the Rest of Us', 'Java EE Web Profile and Platform Technologies', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24624', 'JDK 6 started the revival of Java on the desktop, which continued with JDK 6 update 10. Now JDK 7 is finally shipping, after several years of development, and it adds to the great improvements of those releases. The improvements include new APIs to create a more compelling user experience, such as shaped windows, translucent windows, mixing, a new Swing JLayer component, a new pipeline to improve X11 performance, and a new sound engine. There&apos;s also better integration with Linux platforms for OpenJDK. There are open source replacements for closed libraries in the OpenJDK 7 reference implementation. In this session, senior engineers from the AWT, Swing, and Java 2D teams cover the APIs and how to use them and discuss internals and implementation.', 'Core Java Platform', 'Java SE, Client Side Technologies, and Rich User Experiences', 60, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s New on the JDK 7 Desktop?', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24327', 'SIP servlets are fundamental to adding communication capabilities to enterprise Java applications. With the advent of Long Term Evolution (LTE) deployments by telecom carriers in different parts of the world, VoIP and thus SIP servlets have taken a more central place in the enterprise communication technology space. Similarly, with the new focus on cloud computing, Java EE 7 has given enterprise Java a fresh direction. This session explores the proposed enhancements to SIP servlets technology and considers the possible extensions, which may include VoLTE, new RFCs, high-level services, leveraging of asynchronous servlets, enhanced application composition, and alignment with Java EE 7, among other things.', 'Enterprise Service Architectures and the Cloud', 'Java EE Web Profile and Platform Technologies', 45, 'Introductory', 'Approved', 'JavaOne', 'What&apos;s Next: Looking Beyond SIP Servlet 1.1', 'Java EE Web Profile and Platform Technologies', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24310', 'Many of us develop for app stores, but there is another developer world of embedded Java applications that come with your phone. This session reveals this world of high-end mobile consulting, discussing the structure of the market, how projects get started, the steps along the way, what the differences and pain points are, and what it takes to make mobile Java apps cool enough to be loved by millions. It illustrates several Nokia Java applications with sometimes-funny behind-the-scenes examples. The presentation also offers a glimpse of how J2ME platforms are changing and growing, with an emphasis on the great design and commercial opportunities.', NULL, 'Java ME, Mobile, Embedded, and Devices', 45, 'Introductory', 'Approved', 'JavaOne', 'Where Do the Killer Java Applications Preloaded on Your Phone Come From?', 'Java ME, Mobile, Embedded, and Devices', 'BOF (Birds-of-a-Feather)');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24061', 'This session presents Javeleon, a tool that facilitates full class redefinition in Java, removing all the limitations of HotSwap. Javeleon significantly boosts productivity by allowing extensive code changes at runtime and permits changes to declarative resources and dependencies. It supports state-preserving and immediate updates, including changes to the type hierarchy of classes, without modification of the JVM. 

This session compares Javeleon with HotSwap and its competitors such as JRebel and presents a live demo of developing with Javeleon while showing the added value compared to offline updating. And although Java EE support is in the planning phase, it highlights all the main principles in Java SE throughout the demos.', 'Emerging Languages, Tools, and Techniques', 'Core Java Platform', 60, 'Introductory', 'Approved', 'JavaOne', 'Who Said Runtime Class Reloading Is Hard in Java?', 'Core Java Platform', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('24020', 'In the dynamic languages, it&apos;s a given. In .NET, the problem is much smaller. But Java EE applications take from 15 seconds to as long as 10 minutes to build and redeploy after every change, no matter how small. IDEs automate the process but still require the wait. Why is that, and how can it be solved?

In recent years, JRebel has risen to prominence as the answer to this issue. Challengers such as Oracle WebLogic Server&apos;s FastSwap feature and Javeleon are also available. And instant turnaround is one of the core attractions of the Play! framework, Grails, and Tapestry 5.  

This session reviews the technical and conceptual challenges involved in solving this issue and the options available today, including the tools mentioned. It also covers some social aspects.', NULL, 'The Java Frontier', 60, 'Introductory', 'Approved', 'JavaOne', 'Why Doesn&apos;t Java Have Instant Turnaround?', 'The Java Frontier', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25146', 'It is common to see scripting and dynamic languages used to automate large-scale and cloud deployments, but this overlooks the power of Java/JVM and the benefit of strong static typing you can get with libraries such as jclouds on the JVM. Provisioning and automation are notoriously hard to test, and a strong VM and static typing can provide confidence and correctness at a scale that other tools cannot&amp;mdash;jclouds is one example of this, building on the wide Java community.', 'Java SE, Client Side Technologies, and Rich User Experiences', 'Enterprise Service Architectures and the Cloud', 60, 'Introductory', 'Approved', 'JavaOne', 'Why Java Is an Ideal Platform for DevOps Automation', 'Enterprise Service Architectures and the Cloud', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION (ID, ABZTRACT, OPTIONALTRACK, PRIMARYTRACK, SEZZIONLENGTH, SEZZIONLEVEL, STATUS, STREAM, TITLE, TRACK, "TYPE") 
	VALUES ('25021', 'Members of the Unified Testing Initiative&amp;mdash;AT&amp;T, LG, Motorola, Nokia, Oracle, Orange, Samsung, and Vodafone&amp;mdash;firmly believe that the quality of applications they make available to consumers needs to be of a high standard. If they&apos;re not, it will reflect badly on them. In this session, some of the UTI members talk about the importance and nature of quality&amp;mdash;for embedded applications as well as apps distributed through their app stores&amp;mdash;and explain why they are collectively encouraging the widespread adoption of sound working practices to increase the quality of mobile applications. They take you through their shared requirements and best practices, reflecting upon the experience gained within the Java Verified testing and signing program.', NULL, 'Java ME, Mobile, Embedded, and Devices', 60, 'Introductory', 'Approved', 'JavaOne', 'Why Operators and Manufacturers Are Passionate About Application Quality', 'Java ME, Mobile, Embedded, and Devices', 'Conference Session');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '1 Hour', '58', 'Hilton San Francisco - Yosemite A/B/C', '12:30', '19380');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 04, 2011', '45 Minutes', '8', 'Hotel Nikko - Nikko Ballroom I', '16:30', '25098');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 05, 2011', '1 Hour', '56', 'Parc 55 - Embarcadero', '13:00', '25233');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '45 Minutes', '21', 'Parc 55 - Market Street', '19:00', '25065');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '178', 'Hilton San Francisco - Imperial Ballroom A', '12:30', '21641');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '132', 'Hilton San Francisco - Imperial Ballroom A', '15:30', '24161');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 04, 2011', '1 Hour', '28', 'Hotel Nikko - Nikko Ballroom I', '10:30', '24421');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '24', 'Hilton San Francisco - Imperial Ballroom B', '11:00', '22522');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '45 Minutes', '52', 'Hotel Nikko - Monterey I/II-', '21:00', '24100');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '1 Hour', '35', 'Hilton San Francisco - Plaza A/B', '13:30', '24346');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '53', 'Hilton San Francisco - Imperial Ballroom A', '14:30', '22340');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '1 Hour', '104', 'Hotel Nikko - Monterey I/II-', '12:00', '17340');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '58', 'Hilton San Francisco - Imperial Ballroom B', '10:30', '22120');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '22', 'Hilton San Francisco - Imperial Ballroom A', '16:30', '39041');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '1 Hour', '17', 'Parc 55 - Cyril Magnin I/II/III', '14:30', '24926');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 06, 2011', '2 Hours', '7', 'Hilton San Francisco - Franciscan Room A/B/C/D', '14:00', '25363');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 06, 2011', '1 Hour', '9', 'Parc 55 - Cyril Magnin I/II/III', '12:30', '24102');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 03, 2011', '2 Hours', '11', 'Hilton San Francisco - Franciscan Room A/B/C/D', '14:30', '24682');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '45 Minutes', '2', 'Parc 55 - Mission-', '19:30', '22700');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '1 Hour', '5', 'Hotel Nikko - Carmel I/II-', '15:00', '39044');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 06, 2011', '1 Hour', '40', 'Parc 55 - Market Street', '15:30', '24029');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '27', 'Hilton San Francisco - Imperial Ballroom A', '17:30', '24923');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '90', 'Hilton San Francisco - Imperial Ballroom A', '12:00', '24981');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '28', 'Hilton San Francisco - Imperial Ballroom B', '12:30', '24521');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 05, 2011', '1 Hour', '12', 'Parc 55 - Cyril Magnin I/II/III', '10:00', '24355');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 05, 2011', '2 Hours', '14', 'Hilton San Francisco - Franciscan Room A/B/C/D', '15:00', '24642');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '45 Minutes', '7', 'Parc 55 - Cyril Magnin I/II/III', '16:30', '24685');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '45 Minutes', '23', 'Hilton San Francisco - Golden Gate 6/7/8', '21:00', '24966');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 03, 2011', '1 Hour', '38', 'Parc 55 - Embarcadero', '11:00', '24162');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '45 Minutes', '62', 'Hilton San Francisco - Yosemite A/B/C', '20:30', '24022');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 05, 2011', '1 Hour', '71', 'Parc 55 - Market Street', '08:30', '23828');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '45 Minutes', '29', 'Moscone West - 2024', '14:30', '30440');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '1 Hour', '15', 'Hilton San Francisco - Golden Gate 6/7/8', '15:00', '24701');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '45 Minutes', '29', 'Parc 55 - Cyril Magnin I/II/III', '17:30', '24328');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 04, 2011', '45 Minutes', '1', 'Parc 55 - Powell I/II-', '18:30', '29400');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 05, 2011', '1 Hour', '3', 'Hotel Nikko - Carmel I/II-', '10:00', '39540');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 04, 2011', '2 Hours', '32', 'Hilton San Francisco - Franciscan Room A/B/C/D', '16:30', '25362');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '45 Minutes', '16', 'Hotel Nikko - Nikko Ballroom II/III', '17:30', '24566');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '45 Minutes', '21', 'Parc 55 - Market Street', '16:30', '24569');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 05, 2011', '1 Hour', '14', 'Hotel Nikko - Nikko Ballroom II/III', '16:30', '17960');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 06, 2011', '1 Hour', '19', 'Parc 55 - Divisidero', '15:30', '26200');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 03, 2011', '45 Minutes', '27', 'Hotel Nikko - Nikko Ballroom II/III', '19:00', '25781');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 05, 2011', '1 Hour', '22', 'Hotel Nikko - Monterey I/II-', '16:30', '22080');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '45 Minutes', '10', 'Hotel Nikko - Nikko Ballroom II/III', '16:30', '24349');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '1 Hour', '22', 'Hotel Nikko - Nikko Ballroom I', '17:30', '24350');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 05, 2011', '1 Hour', '19', 'Hotel Nikko - Nikko Ballroom II/III', '08:30', '23422');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '1 Hour', '22', 'Hotel Nikko - Carmel I/II-', '12:00', '24313');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '1 Hour', '27', 'Hotel Nikko - Nikko Ballroom II/III', '10:30', '25880');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('20000', 'October 04, 2011', '1 1/2 Hours', '5985', 'Hilton San Francisco - Grand Ballroom AB', '08:30', '37761');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('20000', 'October 03, 2011', '2 Hours', '5981', 'Hilton San Francisco - Grand Ballroom AB', '08:30', '37760');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '1 Hour', '46', 'Hilton San Francisco - Golden Gate 3/4/5', '16:00', '22800');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '1 Hour', '5', 'Hilton San Francisco - Golden Gate 6/7/8', '11:00', '23647');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '1 Hour', '15', 'Moscone West - 2024', '15:30', '33961');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '1 Hour', '13', 'Moscone West - 2022', '15:30', '32561');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '45 Minutes', '11', 'Hilton San Francisco - Imperial Ballroom A', '20:00', '23481');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 03, 2011', '45 Minutes', '14', 'Parc 55 - Powell I/II-', '20:00', '25295');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '45 Minutes', '11', 'Hotel Nikko - Nikko Ballroom II/III', '18:30', '22021');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '75', 'Hilton San Francisco - Imperial Ballroom A', '15:00', '21685');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '45 Minutes', '38', 'Hotel Nikko - Nikko Ballroom I', '21:00', '25029');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '45 Minutes', '24', 'Hilton San Francisco - Imperial Ballroom A', '19:00', '25147');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 05, 2011', '1 Hour', '10', 'Parc 55 - Mission-', '11:30', '23346');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 03, 2011', '1 Hour', '6', 'Parc 55 - Divisidero', '11:00', '24401');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '45 Minutes', '59', 'Hilton San Francisco - Plaza A/B', '16:30', '24580');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '1 Hour', '141', 'Hilton San Francisco - Yosemite A/B/C', '17:30', '25124');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 05, 2011', '1 Hour', '52', 'Hilton San Francisco - Golden Gate 6/7/8', '10:00', '22723');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '1 Hour', '5', 'Parc 55 - Market Street', '10:30', '23923');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '1 Hour', '4', 'Parc 55 - Cyril Magnin I/II/III', '15:00', '24741');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '1 Hour', '67', 'Hilton San Francisco - Golden Gate 6/7/8', '12:00', '25297');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 06, 2011', '1 Hour', '4', 'Parc 55 - Mission-', '12:30', '22481');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '1 Hour', '15', 'Parc 55 - Divisidero', '13:30', '24864');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 05, 2011', '1 Hour', '24', 'Hilton San Francisco - Golden Gate 6/7/8', '08:30', '23645');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 05, 2011', '1 Hour', '23', 'Parc 55 - Divisidero', '10:00', '24721');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 06, 2011', '1 Hour', '22', 'Parc 55 - Divisidero', '14:00', '22207');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '45 Minutes', '10', 'Hilton San Francisco - Plaza A/B', '21:00', '23380');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 04, 2011', '45 Minutes', '11', 'Hotel Nikko - Nikko Ballroom I', '17:30', '24312');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '45 Minutes', '3', 'Parc 55 - Cyril Magnin I/II/III', '21:00', '26501');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 04, 2011', '45 Minutes', '15', 'Hotel Nikko - Nikko Ballroom I', '18:30', '24541');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '45 Minutes', '4', 'Hilton San Francisco - Golden Gate 6/7/8', '19:00', '23641');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '45 Minutes', '7', 'Hilton San Francisco - Imperial Ballroom A', '21:00', '23166');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '45 Minutes', '14', 'Hotel Nikko - Monterey I/II-', '18:30', '24632');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '45 Minutes', '15', 'Hilton San Francisco - Golden Gate 6/7/8', '19:30', '23200');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '45 Minutes', '57', 'Hilton San Francisco - Golden Gate 6/7/8', '16:30', '25121');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 04, 2011', '45 Minutes', '82', 'Hilton San Francisco - Grand Ballroom B', '16:30', '21301');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '45 Minutes', '30', 'Hilton San Francisco - Plaza A/B', '20:30', '25148');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 04, 2011', '45 Minutes', '9', 'Parc 55 - Powell I/II-', '20:30', '24962');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 05, 2011', '1 Hour', '11', 'Parc 55 - Powell I/II-', '16:30', '24354');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '1 Hour', '10', 'Parc 55 - Market Street', '16:00', '25241');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 06, 2011', '1 Hour', '2', 'Parc 55 - Mission-', '14:00', '21761');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '1 Hour', '25', 'Hilton San Francisco - Golden Gate 6/7/8', '17:30', '22840');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 06, 2011', '1 Hour', '6', 'Parc 55 - Cyril Magnin I/II/III', '14:00', '24643');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 05, 2011', '1 Hour', '12', 'Parc 55 - Mission-', '15:00', '24353');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 05, 2011', '1 Hour', '117', 'Hilton San Francisco - Yosemite A/B/C', '16:30', '24881');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '69', 'Hilton San Francisco - Imperial Ballroom A', '10:00', '19860');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '45 Minutes', '18', 'Parc 55 - Market Street', '18:30', '23648');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '45 Minutes', '19', 'Parc 55 - Embarcadero', '19:30', '21920');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 03, 2011', '1 Hour', '55', 'Hotel Nikko - Nikko Ballroom II/III', '16:00', '22122');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 05, 2011', '1 Hour', '4', 'Parc 55 - Cyril Magnin I/II/III', '11:30', '25123');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 05, 2011', '1 Hour', '13', 'Parc 55 - Embarcadero', '11:30', '25215');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 03, 2011', '1 Hour', '7', 'Parc 55 - Mission-', '14:30', '22102');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '1 Hour', '3', 'Hotel Nikko - Carmel I/II-', '13:30', '38260');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 05, 2011', '1 Hour', '4', 'Hilton San Francisco - Plaza A/B', '11:30', '38366');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '1 Hour', '52', 'Hilton San Francisco - Yosemite A/B/C', '16:00', '24467');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '1 Hour', '26', 'Hotel Nikko - Monterey I/II-', '15:00', '24034');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '132', 'Hilton San Francisco - Imperial Ballroom B', '16:00', '18183');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '1 Hour', '3', 'Parc 55 - Mission-', '15:00', '22721');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '45 Minutes', '6', 'Hilton San Francisco - Plaza A/B', '20:00', '25097');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '45 Minutes', '25', 'Hilton San Francisco - Yosemite A/B/C', '19:00', '23880');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 05, 2011', '1 Hour', '39', 'Hilton San Francisco - Golden Gate 6/7/8', '15:00', '18020');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '45 Minutes', '44', 'Hilton San Francisco - Yosemite A/B/C', '20:00', '22681');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 06, 2011', '1 Hour', '12', 'Hotel Nikko - Nikko Ballroom II/III', '11:00', '24940');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '1 Hour', '14', 'Hilton San Francisco - Golden Gate 3/4/5', '12:30', '25041');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '1 Hour', '6', 'Parc 55 - Cyril Magnin I/II/III', '11:00', '25063');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '45 Minutes', '41', 'Hilton San Francisco - Yosemite A/B/C', '19:30', '19623');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 03, 2011', '1 Hour', '1', 'Parc 55 - Mission-', '16:00', '22820');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 03, 2011', '1 Hour', '3', 'Parc 55 - Mission-', '11:00', '22741');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '1 Hour', '10', 'Parc 55 - Mission-', '10:30', '24502');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '45 Minutes', '21', 'Hilton San Francisco - Golden Gate 6/7/8', '18:30', '24809');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 03, 2011', '45 Minutes', '16', 'Parc 55 - Powell I/II-', '19:00', '24081');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '1 Hour', '10', 'Hotel Nikko - Nikko Ballroom I', '12:30', '17581');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 05, 2011', '1 Hour', '123', 'Parc 55 - Market Street', '10:00', '23320');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '45 Minutes', '17', 'Hotel Nikko - Monterey I/II-', '20:30', '23321');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '2 Hours', '54', 'Moscone West - 2020', '12:30', '29621');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '1 1/2 Hours', '37', 'Moscone West - 2020', '15:00', '29643');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 05, 2011', '1 Hour', '112', 'Hilton San Francisco - Plaza A/B', '15:00', '20181');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 06, 2011', '1 Hour', '66', 'Hilton San Francisco - Yosemite A/B/C', '14:00', '19720');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 05, 2011', '1 Hour', '12', 'Hotel Nikko - Monterey I/II-', '11:30', '24802');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 06, 2011', '1 Hour', '19', 'Hotel Nikko - Nikko Ballroom II/III', '14:00', '25045');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 05, 2011', '1 Hour', '11', 'Hilton San Francisco - Plaza A/B', '16:30', '24280');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '45 Minutes', '5', 'Hotel Nikko - Nikko Ballroom I', '20:00', '26503');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '1 Hour', '44', 'Hilton San Francisco - Golden Gate 3/4/5', '17:30', '28500');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 03, 2011', '1 Hour', '33', 'Parc 55 - Embarcadero', '16:00', '24341');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 03, 2011', '2 Hours', '56', 'Hilton San Francisco - Franciscan Room A/B/C/D', '11:00', '22220');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 06, 2011', '1 Hour', '23', 'Hotel Nikko - Monterey I/II-', '11:00', '23000');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 03, 2011', '1 Hour', '7', 'Hotel Nikko - Nikko Ballroom II/III', '17:30', '24085');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 05, 2011', '1 Hour', '93', 'Hilton San Francisco - Grand Ballroom B', '10:00', '25028');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 03, 2011', '1 Hour', '54', 'Hilton San Francisco - Grand Ballroom B', '17:30', '25200');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 03, 2011', '1 Hour', '58', 'Hilton San Francisco - Grand Ballroom B', '16:00', '25186');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '45 Minutes', '21', 'Hilton San Francisco - Yosemite A/B/C', '17:30', '25201');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 03, 2011', '1 Hour', '103', 'Hilton San Francisco - Grand Ballroom B', '14:30', '27400');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 05, 2011', '1 Hour', '5', 'Hotel Nikko - Nikko Ballroom I', '16:30', '20320');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 05, 2011', '1 Hour', '2', 'Hotel Nikko - Monterey I/II-', '15:00', '25101');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 05, 2011', '2 Hours', '22', 'Hilton San Francisco - Franciscan Room A/B/C/D', '10:00', '23452');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 03, 2011', '1 Hour', '40', 'Hotel Nikko - Nikko Ballroom II/III', '14:30', '19940');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '45 Minutes', '6', 'Parc 55 - Mission-', '20:30', '24440');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 06, 2011', '1 Hour', '46', 'Hilton San Francisco - Plaza A/B', '15:30', '24808');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '1 Hour', '92', 'Parc 55 - Market Street', '12:00', '23813');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '1 Hour', '26', 'Parc 55 - Embarcadero', '13:30', '25060');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 06, 2011', '1 Hour', '43', 'Hilton San Francisco - Golden Gate 3/4/5', '14:00', '25940');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 05, 2011', '1 Hour', '44', 'Parc 55 - Market Street', '16:30', '23600');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 05, 2011', '1 Hour', '57', 'Hotel Nikko - Monterey I/II-', '08:30', '25293');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 05, 2011', '1 Hour', '37', 'Parc 55 - Divisidero', '08:30', '37260');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 06, 2011', '1 Hour', '31', 'Hilton San Francisco - Golden Gate 3/4/5', '15:30', '24609');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 06, 2011', '1 Hour', '108', 'Hotel Nikko - Carmel I/II-', '12:30', '22320');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '143', 'Hilton San Francisco - Imperial Ballroom A', '13:00', '21622');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 05, 2011', '1 Hour', '55', 'Parc 55 - Divisidero', '11:30', '24820');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '30', 'Hilton San Francisco - Imperial Ballroom A', '19:30', '24800');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 06, 2011', '1 Hour', '36', 'Parc 55 - Market Street', '12:30', '21881');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '45 Minutes', '5', 'Moscone West - 2024', '13:30', '29680');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 05, 2011', '1 Hour', '70', 'Hilton San Francisco - Grand Ballroom B', '08:30', '22060');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 05, 2011', '1 Hour', '61', 'Hilton San Francisco - Grand Ballroom B', '15:00', '25164');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 05, 2011', '1 Hour', '124', 'Hilton San Francisco - Yosemite A/B/C', '13:00', '21300');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '45 Minutes', '11', 'Hilton San Francisco - Golden Gate 3/4/5', '21:00', '20861');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '45 Minutes', '19', 'Parc 55 - Embarcadero', '16:30', '25261');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 06, 2011', '1 Hour', '89', 'Hilton San Francisco - Golden Gate 6/7/8', '14:00', '24606');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '45 Minutes', '3', 'Hotel Nikko - Carmel I/II-', '20:30', '25361');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '45 Minutes', '17', 'Parc 55 - Cyril Magnin I/II/III', '19:30', '24925');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '45 Minutes', '5', 'Hilton San Francisco - Golden Gate 6/7/8', '17:30', '22704');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '1 Hour', '33', 'Hilton San Francisco - Plaza A/B', '15:00', '24805');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 05, 2011', '1 Hour', '6', 'Parc 55 - Market Street', '15:00', '24027');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 05, 2011', '1 Hour', '29', 'Hilton San Francisco - Plaza A/B', '10:00', '23832');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '45 Minutes', '64', 'Hilton San Francisco - Golden Gate 3/4/5', '19:00', '22585');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '45 Minutes', '4', 'Parc 55 - Cyril Magnin I/II/III', '18:30', '24101');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '66', 'Hilton San Francisco - Imperial Ballroom B', '11:00', '22742');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 06, 2011', '1 Hour', '43', 'Parc 55 - Embarcadero', '11:00', '26260');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 05, 2011', '1 Hour', '36', 'Hilton San Francisco - Yosemite A/B/C', '15:00', '23449');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 03, 2011', '45 Minutes', '16', 'Hotel Nikko - Nikko Ballroom II/III', '20:00', '24543');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '45 Minutes', '77', 'Hotel Nikko - Carmel I/II-', '17:30', '24200');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 06, 2011', '1 Hour', '27', 'Hilton San Francisco - Grand Ballroom B', '15:30', '24783');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '1 Hour', '29', 'Hilton San Francisco - Plaza A/B', '14:30', '24844');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '1 Hour', '23', 'Hilton San Francisco - Golden Gate 6/7/8', '10:30', '20960');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '115', 'Hilton San Francisco - Imperial Ballroom A', '15:00', '25145');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('0', 'October 01, 2011', '1 Hour', '0', 'Test Room', '06:00', '40147');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 03, 2011', '45 Minutes', '11', 'Parc 55 - Divisidero', '20:00', '24625');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '45 Minutes', '28', 'Parc 55 - Divisidero', '19:30', '24633');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '1 Hour', '2', 'Parc 55 - Cyril Magnin I/II/III', '10:30', '25143');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '45 Minutes', '40', 'Hotel Nikko - Nikko Ballroom II/III', '20:30', '25180');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '1 Hour', '55', 'Hilton San Francisco - Yosemite A/B/C', '11:00', '19820');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 05, 2011', '1 Hour', '104', 'Parc 55 - Divisidero', '15:00', '25303');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 05, 2011', '1 Hour', '10', 'Hotel Nikko - Monterey I/II-', '10:00', '25026');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '1 Hour', '78', 'Parc 55 - Divisidero', '10:30', '24241');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '1 Hour', '30', 'Hotel Nikko - Monterey I/II-', '14:30', '24822');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 03, 2011', '1 Hour', '62', 'Hotel Nikko - Nikko Ballroom II/III', '11:00', '25302');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 05, 2011', '1 Hour', '36', 'Parc 55 - Powell I/II-', '08:30', '36160');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '1 Hour', '53', 'Hilton San Francisco - Plaza A/B', '12:30', '37940');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '1 Hour', '76', 'Hilton San Francisco - Yosemite A/B/C', '13:30', '22641');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '1 Hour', '102', 'Parc 55 - Market Street', '14:30', '23401');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 06, 2011', '1 Hour', '20', 'Hotel Nikko - Nikko Ballroom I', '11:00', '21688');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 06, 2011', '1 Hour', '20', 'Parc 55 - Embarcadero', '12:30', '23640');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '45 Minutes', '36', 'Hilton San Francisco - Yosemite A/B/C', '18:30', '24841');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 05, 2011', '1 Hour', '51', 'Hilton San Francisco - Golden Gate 3/4/5', '11:30', '25171');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '45 Minutes', '17', 'Hotel Nikko - Nikko Ballroom II/III', '19:30', '23723');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 06, 2011', '1 Hour', '30', 'Hotel Nikko - Monterey I/II-', '12:30', '25184');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '72', 'Hilton San Francisco - Imperial Ballroom A', '13:30', '24223');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 05, 2011', '1 Hour', '45', 'Parc 55 - Embarcadero', '10:00', '25182');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '1 Hour', '28', 'Hotel Nikko - Nikko Ballroom I', '16:00', '22523');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '45 Minutes', '19', 'Parc 55 - Divisidero', '16:30', '22142');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '70', 'Hilton San Francisco - Imperial Ballroom A', '11:30', '23423');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '1 Hour', '60', 'Parc 55 - Embarcadero', '10:30', '17300');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 05, 2011', '1 Hour', '77', 'Hotel Nikko - Carmel I/II-', '15:00', '25222');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '45 Minutes', '47', 'Hotel Nikko - Monterey I/II-', '19:00', '24308');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '45 Minutes', '27', 'Parc 55 - Mission-', '16:30', '24860');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 06, 2011', '1 Hour', '0', 'Parc 55 - Embarcadero', '14:00', '24789');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '45 Minutes', '77', 'Hilton San Francisco - Golden Gate 6/7/8', '20:30', '18246');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 06, 2011', '1 Hour', '24', 'Hotel Nikko - Nikko Ballroom II/III', '12:30', '23621');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 06, 2011', '1 Hour', '70', 'Hilton San Francisco - Plaza A/B', '12:30', '23457');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '45 Minutes', '13', 'Parc 55 - Market Street', '20:30', '26060');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 06, 2011', '1 Hour', '41', 'Parc 55 - Divisidero', '12:30', '22040');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '1 Hour', '34', 'Hilton San Francisco - Plaza A/B', '16:00', '26521');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '45 Minutes', '15', 'Hotel Nikko - Nikko Ballroom I', '19:00', '25212');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 05, 2011', '1 Hour', '65', 'Parc 55 - Embarcadero', '08:30', '21040');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 04, 2011', '2 Hours', '10', 'Hilton San Francisco - Franciscan Room A/B/C/D', '10:30', '25010');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '45 Minutes', '53', 'Parc 55 - Divisidero', '20:30', '22382');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 03, 2011', '45 Minutes', '27', 'Parc 55 - Embarcadero', '19:00', '22121');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '1 Hour', '24', 'Hotel Nikko - Monterey I/II-', '17:30', '22123');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 04, 2011', '2 Hours', '71', 'Hilton San Francisco - Franciscan Room A/B/C/D', '13:30', '24761');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 05, 2011', '1 Hour', '40', 'Parc 55 - Market Street', '11:30', '21740');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 05, 2011', '1 Hour', '3', 'Parc 55 - Cyril Magnin I/II/III', '13:00', '25081');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 05, 2011', '1 Hour', '44', 'Hilton San Francisco - Golden Gate 3/4/5', '15:00', '24480');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '45 Minutes', '20', 'Parc 55 - Mission-', '18:30', '24924');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '45 Minutes', '4', 'Parc 55 - Cyril Magnin I/II/III', '19:00', '22101');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '1 Hour', '56', 'Hotel Nikko - Carmel I/II-', '10:30', '21860');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '45 Minutes', '32', 'Parc 55 - Market Street', '17:30', '22780');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 06, 2011', '1 Hour', '19', 'Hotel Nikko - Nikko Ballroom I', '14:00', '23283');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 05, 2011', '1 Hour', '6', 'Parc 55 - Mission-', '16:30', '23361');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '45 Minutes', '148', 'Hotel Nikko - Carmel I/II-', '18:30', '25291');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 03, 2011', '45 Minutes', '42', 'Parc 55 - Embarcadero', '20:00', '23702');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '1 Hour', '16', 'Hilton San Francisco - Golden Gate 6/7/8', '14:30', '25083');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '1 Hour', '53', 'Hilton San Francisco - Golden Gate 3/4/5', '10:30', '25102');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '18', 'Hilton San Francisco - Imperial Ballroom B', '16:30', '23442');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '1 Hour', '22', 'Hilton San Francisco - Plaza A/B', '12:00', '24262');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '1 Hour', '30', 'Parc 55 - Embarcadero', '12:00', '23940');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '45 Minutes', '45', 'Hilton San Francisco - Imperial Ballroom B', '19:00', '24607');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 03, 2011', '1 Hour', '7', 'Parc 55 - Mission-', '12:30', '24026');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '1 Hour', '25', 'Parc 55 - Market Street', '13:30', '22261');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '1 Hour', '65', 'Hotel Nikko - Monterey I/II-', '12:30', '24624');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '45 Minutes', '8', 'Hilton San Francisco - Plaza A/B', '19:30', '24327');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '45 Minutes', '18', 'Parc 55 - Cyril Magnin I/II/III', '20:00', '24310');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 06, 2011', '1 Hour', '47', 'Hilton San Francisco - Golden Gate 6/7/8', '15:30', '24061');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 03, 2011', '1 Hour', '17', 'Parc 55 - Divisidero', '16:00', '24020');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '12', 'Hilton San Francisco - Imperial Ballroom B', '08:30', '25146');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 06, 2011', '1 Hour', '5', 'Parc 55 - Mission-', '11:00', '25021');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '66', 'Hilton San Francisco - Imperial Ballroom A', '08:30', '24804');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 03, 2011', '45 Minutes', '8', 'Parc 55 - Divisidero', '19:00', '24243');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 06, 2011', '1 Hour', '71', 'Hotel Nikko - Monterey I/II-', '14:00', '24122');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 06, 2011', '1 Hour', '42', 'Hotel Nikko - Carmel I/II-', '14:00', '23560');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '1 Hour', '30', 'Hilton San Francisco - Plaza A/B', '17:30', '22125');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '1 Hour', '15', 'Hotel Nikko - Monterey I/II-', '10:30', '24811');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '45 Minutes', '17', 'Moscone West - 2022', '14:30', '30460');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 06, 2011', '1 Hour', '124', 'Hilton San Francisco - Yosemite A/B/C', '12:30', '21682');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 05, 2011', '1 Hour', '4', 'Parc 55 - Powell I/II-', '10:00', '24306');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '1 Hour', '30', 'Hotel Nikko - Monterey I/II-', '13:30', '24221');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 03, 2011', '1 Hour', '40', 'Parc 55 - Powell I/II-', '11:00', '24060');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '1 Hour', '17', 'Parc 55 - Mission-', '12:00', '22920');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 05, 2011', '1 Hour', '51', 'Hilton San Francisco - Golden Gate 3/4/5', '10:00', '23382');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 05, 2011', '1 Hour', '24', 'Parc 55 - Embarcadero', '15:00', '25284');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 05, 2011', '1 Hour', '22', 'Hotel Nikko - Nikko Ballroom I', '10:00', '25067');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '1 Hour', '101', 'Parc 55 - Market Street', '15:00', '18180');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 03, 2011', '45 Minutes', '25', 'Parc 55 - Embarcadero', '21:00', '24315');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '1 Hour', '27', 'Parc 55 - Divisidero', '12:00', '25044');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 05, 2011', '1 Hour', '8', 'Parc 55 - Cyril Magnin I/II/III', '16:30', '24567');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 05, 2011', '1 Hour', '30', 'Hotel Nikko - Nikko Ballroom II/III', '13:00', '22703');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '1 Hour', '139', 'Hilton San Francisco - Golden Gate 3/4/5', '14:30', '24780');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '45 Minutes', '7', 'Hilton San Francisco - Golden Gate 3/4/5', '20:30', '23927');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 06, 2011', '1 Hour', '30', 'Hilton San Francisco - Golden Gate 3/4/5', '11:00', '23680');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '26', 'Hilton San Francisco - Imperial Ballroom B', '17:30', '25240');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '45 Minutes', '126', 'Hilton San Francisco - Plaza A/B', '17:30', '24466');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '1 Hour', '12', 'Parc 55 - Cyril Magnin I/II/III', '12:30', '24242');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '1 Hour', '34', 'Hotel Nikko - Monterey I/II-', '11:00', '24121');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 05, 2011', '1 Hour', '43', 'Hotel Nikko - Carmel I/II-', '13:00', '24301');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 05, 2011', '1 Hour', '105', 'Hilton San Francisco - Golden Gate 6/7/8', '16:30', '20580');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 05, 2011', '1 Hour', '11', 'Hotel Nikko - Nikko Ballroom I', '13:00', '24641');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 03, 2011', '1 Hour', '23', 'Hotel Nikko - Carmel I/II-', '11:00', '26462');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '45 Minutes', '24', 'Hotel Nikko - Monterey I/II-', '20:00', '24089');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '1 Hour', '25', 'Hilton San Francisco - Golden Gate 6/7/8', '12:30', '23459');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 04, 2011', '1 Hour', '54', 'Hilton San Francisco - Golden Gate 6/7/8', '13:30', '25581');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 06, 2011', '1 Hour', '16', 'Parc 55 - Divisidero', '11:00', '20343');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '45 Minutes', '48', 'Hilton San Francisco - Golden Gate 3/4/5', '18:30', '24507');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 03, 2011', '2 Hours', '0', 'Hilton San Francisco - Franciscan Room A/B/C/D', '19:30', '23421');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 04, 2011', '2 Hours', '95', 'Hilton San Francisco - Franciscan Room A/B/C/D', '19:30', '23421');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '48', 'Hilton San Francisco - Imperial Ballroom A', '11:00', '24423');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '45 Minutes', '21', 'Hilton San Francisco - Golden Gate 6/7/8', '20:00', '23106');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '119', 'Hilton San Francisco - Imperial Ballroom A', '16:30', '25364');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '1 Hour', '73', 'Hilton San Francisco - Yosemite A/B/C', '15:00', '18540');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 05, 2011', '1 Hour', '42', 'Hilton San Francisco - Yosemite A/B/C', '10:00', '25141');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '1 Hour', '58', 'Hilton San Francisco - Golden Gate 3/4/5', '15:00', '25144');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '36', 'Hilton San Francisco - Imperial Ballroom B', '19:30', '23926');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 06, 2011', '1 Hour', '54', 'Parc 55 - Market Street', '14:00', '22521');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 06, 2011', '1 Hour', '24', 'Parc 55 - Embarcadero', '15:30', '21801');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '1 Hour', '63', 'Parc 55 - Divisidero', '15:00', '25172');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 03, 2011', '45 Minutes', '38', 'Hotel Nikko - Carmel I/II-', '21:00', '17381');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '72', 'Hilton San Francisco - Imperial Ballroom B', '12:30', '25208');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 06, 2011', '1 Hour', '49', 'Parc 55 - Cyril Magnin I/II/III', '11:00', '25088');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 06, 2011', '1 Hour', '134', 'Hotel Nikko - Carmel I/II-', '15:30', '25229');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 05, 2011', '1 Hour', '37', 'Hotel Nikko - Carmel I/II-', '08:30', '25260');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '1 Hour', '9', 'Hotel Nikko - Nikko Ballroom I', '14:30', '25205');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 06, 2011', '1 Hour', '53', 'Hilton San Francisco - Yosemite A/B/C', '11:00', '25066');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '70', 'Hilton San Francisco - Imperial Ballroom A', '17:30', '28380');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 03, 2011', '45 Minutes', '131', 'Hotel Nikko - Carmel I/II-', '20:00', '24021');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '45 Minutes', '61', 'Hilton San Francisco - Imperial Ballroom B', '21:00', '22500');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 06, 2011', '1 Hour', '32', 'Hilton San Francisco - Golden Gate 6/7/8', '11:00', '23509');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '45 Minutes', '22', 'Moscone West - 2022', '13:30', '29460');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 03, 2011', '1 Hour', '24', 'Hotel Nikko - Carmel I/II-', '12:30', '25002');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 06, 2011', '1 Hour', '20', 'Hotel Nikko - Nikko Ballroom II/III', '15:30', '23400');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '37', 'Hilton San Francisco - Imperial Ballroom A', '12:30', '19941');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '1 Hour', '201', 'Hilton San Francisco - Golden Gate 3/4/5', '11:00', '21280');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 05, 2011', '1 Hour', '6', 'Parc 55 - Mission-', '08:30', '23223');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '1 Hour', '28', 'Parc 55 - Embarcadero', '15:00', '25165');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 05, 2011', '1 Hour', '72', 'Hilton San Francisco - Golden Gate 3/4/5', '16:30', '25151');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '32', 'Hilton San Francisco - Imperial Ballroom B', '15:00', '22580');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '65', 'Hilton San Francisco - Imperial Ballroom B', '12:00', '24445');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 06, 2011', '1 Hour', '61', 'Hilton San Francisco - Grand Ballroom B', '14:00', '24621');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '30', 'Hilton San Francisco - Imperial Ballroom B', '10:00', '26041');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '45 Minutes', '88', 'Hilton San Francisco - Yosemite A/B/C', '21:00', '25040');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '1 Hour', '110', 'Hilton San Francisco - Golden Gate 3/4/5', '13:30', '17461');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 04, 2011', '45 Minutes', '25', 'Parc 55 - Powell I/II-', '19:30', '29401');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 03, 2011', '1 Hour', '61', 'Parc 55 - Embarcadero', '12:30', '25290');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 03, 2011', '1 Hour', '16', 'Parc 55 - Divisidero', '12:30', '24321');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '26', 'Hilton San Francisco - Imperial Ballroom B', '15:30', '25301');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '1 Hour', '46', 'Parc 55 - Mission-', '13:30', '25111');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 03, 2011', '1 Hour', '30', 'Hotel Nikko - Monterey I/II-', '16:00', '26527');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 04, 2011', '1 Hour', '29', 'Hotel Nikko - Nikko Ballroom I', '13:30', '22360');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 06, 2011', '1 Hour', '18', 'Parc 55 - Cyril Magnin I/II/III', '15:30', '33860');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 05, 2011', '1 Hour', '19', 'Hotel Nikko - Monterey I/II-', '13:00', '23240');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '1 Hour', '46', 'Hotel Nikko - Nikko Ballroom II/III', '15:00', '24140');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 05, 2011', '1 Hour', '64', 'Hotel Nikko - Carmel I/II-', '16:30', '24003');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '1 Hour', '145', 'Hilton San Francisco - Yosemite A/B/C', '10:30', '23225');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 06, 2011', '1 Hour', '26', 'Hotel Nikko - Carmel I/II-', '11:00', '24788');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '39', 'Hilton San Francisco - Imperial Ballroom A', '11:00', '25288');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 05, 2011', '1 Hour', '4', 'Parc 55 - Mission-', '10:00', '21380');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '1 Hour', '30', 'Hotel Nikko - Nikko Ballroom II/III', '12:00', '24980');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '99', 'Hilton San Francisco - Imperial Ballroom B', '18:30', '24640');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 03, 2011', '1 Hour', '65', 'Parc 55 - Mission-', '17:30', '25089');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 05, 2011', '2 Hours', '84', 'Hilton San Francisco - Franciscan Room A/B/C/D', '12:30', '19120');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 05, 2011', '1 Hour', '25', 'Hotel Nikko - Nikko Ballroom I', '15:00', '23513');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 04, 2011', '45 Minutes', '35', 'Hotel Nikko - Carmel I/II-', '16:30', '25006');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 06, 2011', '1 Hour', '165', 'Hilton San Francisco - Plaza A/B', '11:00', '19220');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 06, 2011', '1 Hour', '113', 'Hilton San Francisco - Plaza A/B', '14:00', '19200');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 04, 2011', '45 Minutes', '94', 'Parc 55 - Market Street', '19:30', '25299');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 03, 2011', '1 Hour', '160', 'Hilton San Francisco - Golden Gate 6/7/8', '16:00', '25149');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '45 Minutes', '68', 'Hotel Nikko - Monterey I/II-', '16:30', '24722');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 05, 2011', '1 Hour', '27', 'Parc 55 - Market Street', '13:00', '24988');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '45 Minutes', '27', 'Parc 55 - Market Street', '20:00', '24143');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 05, 2011', '1 Hour', '3', 'Parc 55 - Cyril Magnin I/II/III', '15:00', '23364');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '45 Minutes', '51', 'Hilton San Francisco - Imperial Ballroom B', '20:00', '21304');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 05, 2011', '1 Hour', '7', 'Parc 55 - Mission-', '13:00', '22740');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 04, 2011', '45 Minutes', '37', 'Parc 55 - Powell I/II-', '17:30', '25244');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 03, 2011', '1 Hour', '47', 'Parc 55 - Divisidero', '14:30', '23932');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 04, 2011', '45 Minutes', '10', 'Hotel Nikko - Monterey I/II-', '17:30', '24320');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 03, 2011', '45 Minutes', '13', 'Parc 55 - Mission-', '21:00', '25061');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '74', 'Hilton San Francisco - Imperial Ballroom A', '16:00', '23180');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '1 Hour', '33', 'Hilton San Francisco - Golden Gate 3/4/5', '12:00', '24784');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 05, 2011', '1 Hour', '74', 'Hilton San Francisco - Golden Gate 6/7/8', '13:00', '20262');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '1 Hour', '98', 'Hilton San Francisco - Plaza A/B', '10:30', '37941');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 05, 2011', '1 Hour', '6', 'Hilton San Francisco - Plaza A/B', '08:30', '24815');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '18', 'Hilton San Francisco - Imperial Ballroom B', '16:30', '26120');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '1 Hour', '52', 'Parc 55 - Market Street', '12:30', '21080');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '72', 'Hilton San Francisco - Imperial Ballroom B', '11:30', '22640');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '52', 'Hilton San Francisco - Imperial Ballroom A', '20:30', '22501');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 04, 2011', '1 Hour', '0', 'Parc 55 - Powell I/II-', '10:30', '35800');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 05, 2011', '1 Hour', '105', 'Hilton San Francisco - Yosemite A/B/C', '11:30', '23424');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '4', 'Hilton San Francisco - Imperial Ballroom B', '13:00', '22680');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('148', 'October 03, 2011', '45 Minutes', '43', 'Hotel Nikko - Carmel I/II-', '19:00', '25108');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 05, 2011', '1 Hour', '47', 'Hilton San Francisco - Plaza A/B', '13:00', '25213');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('216', 'October 05, 2011', '1 Hour', '213', 'Hilton San Francisco - Golden Gate 6/7/8', '11:30', '24001');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '1 Hour', '24', 'Parc 55 - Market Street', '17:30', '24582');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 05, 2011', '1 Hour', '29', 'Hilton San Francisco - Golden Gate 3/4/5', '13:00', '25209');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '45 Minutes', '26', 'Moscone West - 2022', '12:30', '32560');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('270', 'October 02, 2011', '45 Minutes', '18', 'Moscone West - 2024', '12:30', '33960');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 05, 2011', '1 Hour', '59', 'Hotel Nikko - Nikko Ballroom I', '08:30', '24787');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 06, 2011', '1 Hour', '13', 'Hilton San Francisco - Golden Gate 3/4/5', '12:30', '25023');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 05, 2011', '1 Hour', '29', 'Parc 55 - Divisidero', '13:00', '25281');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('95', 'October 03, 2011', '2 Hours', '70', 'Hilton San Francisco - Franciscan Room A/B/C/D', '17:00', '24605');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 05, 2011', '1 Hour', '38', 'Hilton San Francisco - Yosemite A/B/C', '08:30', '24002');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 05, 2011', '1 Hour', '2', 'Parc 55 - Powell I/II-', '11:30', '24326');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '1 Hour', '5', 'Parc 55 - Cyril Magnin I/II/III', '16:00', '26280');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '45 Minutes', '27', 'Hilton San Francisco - Imperial Ballroom A', '18:30', '23426');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 05, 2011', '1 Hour', '18', 'Hilton San Francisco - Imperial Ballroom B', '15:00', '25008');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 05, 2011', '1 Hour', '39', 'Parc 55 - Cyril Magnin I/II/III', '08:30', '19080');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('138', 'October 04, 2011', '45 Minutes', '40', 'Parc 55 - Mission-', '17:30', '20340');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '45 Minutes', '23', 'Parc 55 - Embarcadero', '20:30', '25230');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('171', 'October 06, 2011', '1 Hour', '15', 'Hotel Nikko - Monterey I/II-', '15:30', '38352');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '37', 'Hilton San Francisco - Imperial Ballroom B', '14:30', '22204');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 05, 2011', '1 Hour', '45', 'Hilton San Francisco - Grand Ballroom B', '16:30', '23805');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '5', 'Hilton San Francisco - Imperial Ballroom B', '14:00', '25360');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 05, 2011', '1 Hour', '71', 'Parc 55 - Embarcadero', '16:30', '25680');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '45 Minutes', '34', 'Hilton San Francisco - Golden Gate 3/4/5', '17:30', '19560');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 03, 2011', '1 Hour', '51', 'Hilton San Francisco - Yosemite A/B/C', '14:30', '22260');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 04, 2011', '45 Minutes', '60', 'Hilton San Francisco - Plaza A/B', '18:30', '19240');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 04, 2011', '1 Hour', '29', 'Hotel Nikko - Nikko Ballroom I', '12:00', '24120');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '1 Hour', '127', 'Parc 55 - Market Street', '11:00', '23360');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 05, 2011', '1 Hour', '9', 'Hotel Nikko - Nikko Ballroom I', '11:30', '23801');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 06, 2011', '1 Hour', '156', 'Parc 55 - Market Street', '11:00', '24821');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '45 Minutes', '116', 'Hilton San Francisco - Plaza A/B', '19:00', '24181');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '45 Minutes', '56', 'Hilton San Francisco - Yosemite A/B/C', '16:30', '24542');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 03, 2011', '1 Hour', '40', 'Parc 55 - Embarcadero', '14:30', '24563');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('500', 'October 03, 2011', '1 Hour', '18', 'Hilton San Francisco - Plaza A/B', '11:00', '22660');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('327', 'October 04, 2011', '1 Hour', '57', 'Hilton San Francisco - Yosemite A/B/C', '12:00', '23829');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '45 Minutes', '25', 'Parc 55 - Divisidero', '18:30', '22960');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 04, 2011', '45 Minutes', '1', 'Parc 55 - Divisidero', '17:30', '21540');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('134', 'October 03, 2011', '45 Minutes', '28', 'Parc 55 - Divisidero', '21:00', '24324');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 04, 2011', '45 Minutes', '35', 'Hilton San Francisco - Golden Gate 3/4/5', '19:30', '25087');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 04, 2011', '45 Minutes', '6', 'Parc 55 - Powell I/II-', '16:30', '25287');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 06, 2011', '1 Hour', '77', 'Hotel Nikko - Nikko Ballroom I', '12:30', '24944');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 03, 2011', '1 Hour', '64', 'Hilton San Francisco - Imperial Ballroom B', '17:30', '25242');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 03, 2011', '1 Hour', '3', 'Hotel Nikko - Nikko Ballroom I', '11:00', '24984');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('185', 'October 04, 2011', '45 Minutes', '7', 'Parc 55 - Embarcadero', '17:30', '23528');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 05, 2011', '1 Hour', '36', 'Hotel Nikko - Nikko Ballroom II/III', '10:00', '25860');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 05, 2011', '1 Hour', '19', 'Hotel Nikko - Nikko Ballroom II/III', '15:00', '25011');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '71', 'Hilton San Francisco - Imperial Ballroom A', '10:30', '22480');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('141', 'October 04, 2011', '1 Hour', '16', 'Hotel Nikko - Nikko Ballroom I', '15:00', '25009');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 03, 2011', '1 Hour', '69', 'Hotel Nikko - Nikko Ballroom II/III', '12:30', '23720');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 04, 2011', '1 Hour', '47', 'Hotel Nikko - Nikko Ballroom II/III', '13:30', '25780');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('358', 'October 05, 2011', '1 Hour', '33', 'Hotel Nikko - Nikko Ballroom II/III', '11:30', '24943');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('235', 'October 03, 2011', '45 Minutes', '13', 'Hilton San Francisco - Golden Gate 3/4/5', '20:00', '24441');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('214', 'October 03, 2011', '45 Minutes', '40', 'Parc 55 - Market Street', '21:00', '23443');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 04, 2011', '1 Hour', '50', 'Hilton San Francisco - Imperial Ballroom B', '13:30', '23941');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('1125', 'October 04, 2011', '1 Hour', '20', 'Hilton San Francisco - Grand Ballroom B', '15:00', '24880');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('275', 'October 06, 2011', '1 Hour', '40', 'Hilton San Francisco - Imperial Ballroom A', '14:00', '18920');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 03, 2011', '1 Hour', '10', 'Parc 55 - Cyril Magnin I/II/III', '17:30', '25802');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('89', 'October 03, 2011', '45 Minutes', '72', 'Parc 55 - Powell I/II-', '21:00', '24742');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '1 Hour', '7', 'Parc 55 - Cyril Magnin I/II/III', '12:00', '25013');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('455', 'October 04, 2011', '1 Hour', '6', 'Parc 55 - Cyril Magnin I/II/III', '13:30', '23453');
INSERT INTO CONFERENCE.SEZZION_SEZZIONTIMES (STCAPACITY, STDATE, STLENGTH, STREGISTERED, STROOM, STTIME, SEZZION_ID) 
	VALUES ('20000', 'October 06, 2011', '1 Hour 45 Minutes', '5916', 'Hilton San Francisco - Grand Ballroom AB', '08:45', '37780');

INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7152802CACF0AB2484AE4B5D8BC65588', 'IBM', 'Chris', 'Java Service Architect', 'Bailey');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6CE3AEA5520A3372A7E9CA2EFA10C4D6', 'Engine Yard', 'Nicholas', 'Software Developer', 'Sieger');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ECEB6BE32596A4C0889EC89669E62F6D', 'SouJava', 'Bruno', 'Developer', 'Souza');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DA0F5D1410060FF6D6951090CA05CFA1', 'Epsilon Information Technology', 'Martin', 'Consultant', 'Gunnarsson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('66728081ACE7A224C8CDE23D3AD45569', 'Jayway', 'P&#228;r', 'Consultant', 'Sik&#246;');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0F8FBF727D734DA1E874D65805EB928E', 'SAP', 'Krasimir', 'Development Achitect', 'Semerdzhiev');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9D615A33835514F92C704728E642699E', 'SAP AG', 'Borislav', 'developer', 'Kapukaranov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('648BCE984C0D9BE9B357F53C2CD7370D', 'Oracle Belgium', 'David', 'Principal Consultant', 'Delabassee');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('90BC14D1E31E91DDF50B8D1E2455A9A6', 'Oracle Germany', 'Terrence', 'Senior Technologist, Mobile &amp; Embedded', 'Barr');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0C516ADF9BB0BF589141195E5D3EE3F6', 'Nokia Corporation', 'Gorkem', 'Principal Engineer', 'Ercan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('14DF2E69F0672662D20635FB8BD5AEF2', 'Oracle Brazil', 'Jose Dimas', 'Sales Consultant', 'Oliveira');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6A15E534BBAFC1E529D2C7A1DAC19755', 'Oracle', 'Anil', 'VP Engineering', 'Gaur');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AB2C20E743EBC1D6606A9AA6569BB623', 'Oracle', 'Mitesh', 'Principle Member Of Technical Staff', 'Meswani');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('79D2540E7B84FAEAA51E86055DF82CAA', 'Red Hat', 'Wesley', 'Senior Developer', 'Hales');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FB1A678552669C1EDBD80989A4CFACE5', 'Oracle Israel', 'Martin', 'User Experience Lead', 'Lichtbrun');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0CE4475329F4057A14BD5775739791AB', 'Oracle Israel', 'Shai', 'Senior Developer', 'Almog');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A3B4AEE8B5FB8E862BBFFD3ADC52247C', NULL, 'Dan', 'Architect', 'Sline');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('01D623F6DD592F8D6480EF695A1DBD12', 'Oracle', 'Jim', 'Sales Consulting Senior Manager', 'Clarke');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('95A7195EED51385E7030D08D7A317B16', 'Virginia Tech Transportation Institute', 'Dean', 'Senior Research Associate', 'Iverson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('55823355CABCF96075FCA16696F77742', 'Oracle Canada', 'Mike', 'Architect', 'Keith');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4F1EE76834BFF067C9E2C189F01281B2', 'Accenture', 'Raghavan', 'Architect', 'Srinivas');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CA5342DDA5D2F6A42D8C0706A99AD807', 'Intuit', 'Jeff', 'Architect', 'Collins');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('51CA02B370B4EC70BBF21914581FF767', 'Microsoft', 'Vijay', 'Principal Group Program Manager for Windows Azure Platform &amp; Engineering Division', 'Rajagopalan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('96EAAFB35665ADD2F663774DF12FB0CC', 'Salesforce.com', 'Jesper', 'Sr. Director Product Management', 'Joergensen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0E0CF974897727FB19AA38C822B57666', 'Amazon.com', 'Jeff', 'Sr. Web Services Evangelist', 'Barr');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('71399FCB4B35AC7F9EDFA07B5A977F28', 'Oracle India', 'Jagadish', 'Software Engineer', 'Ramu');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B4A1F8B4E2171B519B01B5FE62ECDBA9', 'TWD Consulting', 'Howard', 'President', 'Lewis Ship');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FFA8BF90B3C1EEDBA10F98115965FFD8', 'Boston Technologies', 'Nermin', 'Principal Software Engineer', 'Serifovic');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CB7F427F57BDEFD8FAF4A0D9ED89C788', 'Oracle Sweden', 'Marcus', 'Consulting Member of Technical Staff', 'Hirt');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3FFCE15C6791F527839E363A2E8CB9FA', 'SysDesign GmbH', 'Martin', 'Software Engineer', 'Kl&#228;hn');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5BD823CD27B2B07526F837188E7B1759', 'Oracle Netherlands', 'Geertjan', 'Principal Product Manager in the Oracle Developer Tools group', 'Wielenga');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D068A5012C57B4B34AD3C1A4E61702FF', 'Oracle', 'Stoyan', 'Software Engineer', 'Vassilev');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C82981AAD05B20E7D184886DF0F0D169', 'Oracle', 'Jeffrey', 'Consulting Member of the Technical Staff', 'Stephenson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8F6BEFC14C73663DA588288D6CC7CDF3', 'Oracle', 'Bernard', 'Director Engineering', 'Traversat');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AF614F89BEF36DFDFE2920E85D9C00EA', 'INT, Inc.', 'James', 'Chief Computer Scientist', 'Velasco');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E7AB4D5C0225EB34426AA98E9A09B874', 'Oracle China', 'Xuelei', 'Senior Member of Technical Staff', 'Fan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B93465A51CD5780A48F771469A7C7EE7', 'Oracle Ireland', 'Michael', 'Software Engineer', 'McMahon');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CD19F5647B5CD2AF3657B92728886718', 'Oracle', 'Denis', 'Senior Director, Server Technologies', 'Tyrell');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6D8BF1C96908DFAF47C5A1A3A1A92A0D', 'Oracle United Kingdom', 'Susan', 'Product Manager', 'Duncan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4DBF70DA89A52E52C0BD1E92374928FB', 'IBM', 'John', 'IBM Distinguished Engineer &amp; Java CTO', 'Duimovich');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B9C4CB3767741104D9E88D0E2ECAB8D5', 'IBM', 'Jason', 'Director, Java Technologies', 'Gartner');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1FE745F74DC0F47F1C0130E9A91145EE', 'IBM', 'Trent', 'IBM Java 7 Technical Lead', 'Gray-Donald');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BBAC9E51CEA2DFA3416906D1F5BA38E9', 'Red Hat Canada Ltd.', 'Deepak', 'Principal Software Engineer', 'Bhole');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8367EA4D5DF12406DB72AFAB57DFE3CF', 'MATHEMA Software GmbH', 'Michael', 'CEO', 'Wiedeking');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FBE5F4EDAF67E7E20FE77E4FD6419672', 'Oracle', 'Ryan', 'Java Developer', 'Lubke');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3A2CCD11C653E53EEA0807D93C8A7584', 'Oracle Czech Republic', 'Oleksiy', 'Java Developer', 'Stashok');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0D0CE66C4B1C93E94A86F1AF485E8A3F', 'MATERA Systems', 'Danival', 'Java Developer', 'Calegari');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D10BBA839357840B16EE210CCCDB64B1', 'Softplan', 'Alberto', 'Senior Enterprise Architect', 'Lemos');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('51D981223319401983AAE9C99349A698', 'Oracle', 'Henry', 'Senior Engineer', 'Jen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('96C2BCBE4927CCB29F0E4DCD32B1AD3F', 'Oracle', 'Joe', 'Senior Engineering Manager', 'McGlynn');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9E682F3743CDC11E676BBDEBE8EA4499', 'Oracle', 'Andy', 'Senior Engineer', 'Herrick');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A4FD8747E8CD26FD15F59B7A9B4F8527', 'InfoQ Brazil', 'Leonardo', 'Chief Editor', 'Galvao');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F3611387CA71EBFD86B1ADDA776C14D8', 'Oracle', 'Will', 'WebLogic Security Architect', 'Hopkins');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6D328CAE67D8A84A2881E364C5615FFB', 'Oracle', 'Joseph', 'Graphics Engineer - JavaFX', 'Andresen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('95149BF63DB679EF3F71C95B23A6D52B', 'Oracle', 'Amy', 'Principal Member of Technical Staff', 'Fowler');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9EBB167A6BD11CE492D87FF1ED1EC945', 'Oracle United Kingdom', 'Simon', 'Technology Evangelist', 'Ritter');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A33D5D41CF96A55A3ADD9CC0558C1890', 'Oracle', 'Greg', 'Software Engineer, JavaFX Platform', 'Brown');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('653FD2C0D9B09F3DF89ACBBF9B52C1C6', 'Oracle', 'Jai', 'Principal Product Manager', 'Suri');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F506035D9F1A50B076FBED9C6047072C', 'Oracle', 'Richard', 'Chief Java Client Architect', 'Bair');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6C2AE6763E4936AA4ED5ED5327A1AA90', 'Java Client Tools', 'Eric', 'Software Developer', 'Le ponner');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FA2FDC3FD398ADE1B95FE18D8B41A2A2', 'Oracle United Kingdom', 'Andrew', 'designer', 'Allenson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('224BC0B4B20A3E9F824EF294F9B330DF', 'EBay', 'Sastry', 'Architect', 'Malladi');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('98AD987EF5886A2DFF280EE7EC4A3983', 'Intalio', 'David', 'Principal Software Engineer', 'Carver');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EFC838144E7F623B9B6EBB3A9CEF3A87', 'Verisign', 'James', 'Principal Engineer', 'Gould');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('26253018B6DF855FAECF179043AB8D01', 'VeriSign', 'Alex', 'Senior Software Engineer', 'Holmes');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FE160E927213BD6B05EA9140C173F355', 'Oracle', 'Cameron', 'VP, Development', 'Purdy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B2F793960ED24D3BFA45A2EDEC2F9854', 'VMware', 'Rod', NULL, 'Johnson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8FEF73E2C330B96D2D55EF6E602793EB', 'Oracle', 'Edward', 'Consulting Member of Technical Staff', 'Burns');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('94D7AF0C881B8A67102D7D535CBE0C37', 'Hitachi CTA', 'David', 'CTO', 'Foote');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7EEF862E4313697A9A5A0B5B291BE60E', 'Oracle', 'Jitendra', 'Principal Member of Technical Staff', 'Kotamraju');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('43B88724F5EECE980B8C7603FAAEC724', 'Oracle', 'Saqib', 'Software Engineer', 'Ahmad');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9B2A48C92D76DC0EC4DF8AB0FB73D071', 'Oracle', 'Maxim', 'software engineer', 'Sokolnikov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('082483DCD2C502EB983E2E491F1EAC16', 'Oracle France', 'Thierry', 'Senior Software Engineer', 'Violleau');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1C664F5D5A5B895EB98563A0454E43D9', 'Oracle Russia', 'Alexander', 'Senior Software Engineer', 'Glasman');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('667A5B1B634108AA90D0D2E5774F4D55', 'CREDIT SUISSE', 'Victor', 'Vice President', 'Grazi');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2E8E9A7DFF2B41B99D363E10EC872A1E', 'Oracle', 'Nam', 'Senior Engineer', 'Nguyen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('902E3A2A33BFA70997B8D48A77AFD1C9', 'Oracle', 'Audrey', 'Software Engineer', 'Lin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('292D4EBE5158A2D5CA32F5EEF848BB2F', 'Oracle', 'Calvin', 'Member of Technical Staff', 'Cheung');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8664E66D867D82C17DDF0B43E71BE7A7', 'Oracle', 'Greg', 'Sr Director Product Management', 'Stachnick');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0B5ADD252CFF312F4A7CA08E3D22DA90', 'Oracle', 'Vince', 'Software Developer', 'Kraemer');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('830BF348F1BF45AE9A75C38A0672A6DA', 'Oracle', 'Abhijit', 'Director', 'Kumar');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('45B7A6153591AE10029D2E66F190F151', 'Adam-Bien.com', 'Adam', 'Consultant', 'Bien');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9F18AB7857F3666FB81FC4887F844A23', 'base2services Pty Ltd', 'Aaron', 'Chief Scientist', 'Walker');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('511D15999555D57A4E1EF2979AC7ABAD', 'Oracle', 'Thomas', 'Principal Member of Technical Staff', 'Mueller');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('059A7B3E15299D595DB035B4F86E60AD', 'Oracle', 'Jennifer', 'Senior Member of Technical Staff', 'Chou');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('417F062187EC93F5CFA503B1DB6C3C7B', 'Oracle', 'Chris', 'Principal Member of Technical Staff', 'Kasso');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D9C7956BE598469B9329D73FAE716D5D', 'Whistler AB', 'Daniel', 'Senior Consultant', 'Pfeifer');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BD34309C077C4D0234C22D3AA2F504CE', 'Performize-IT Ltd.', 'Haim', 'Founder, Performance Expert', 'Yadid');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('675F9ADEAE8EFB1870F0C01E54C55E78', 'Red Hat inc.', 'Ales', 'Software Developer', 'Justin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('498DBFC28F11FBD93934117D7AF6AB47', 'Oracle', 'Rajiv', 'Consulting Member of Technical Staff', 'Mordani');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CDEDBEDD71A3B13CFA9295B354D15041', 'Oracle', 'Shing Wai', 'Principle MTS', 'Chan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F2AD0E0C590C44C90C82BACD78D983C0', 'Oracle', 'Dhiru', 'Software Development, Senior Manager', 'Pandey');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('72FFF0EE3DBA4E65D1777D3BECB3B6D2', 'ThinkSec', 'Frank', 'Principal', 'Kim');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4E624A2E0C7ED042DB05B5615AA4E6CB', 'VMware', 'Stefan', 'Software Engineer Spring Roo', 'Schmidt');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('40F3E67A870F6A115DE5A384E2F675A4', 'Chariot Solutions', 'Gordon', 'Consultant and Trainer', 'Dickens');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6B0FCE73E7BFE21E9AEC8E23174F20AA', 'IBM', 'Marcel', 'Senior Technical Staff Member', 'Mitran');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0D1F0A5DCE0631651E3AF967DA0C7587', 'Oracle India', 'Sourath', 'Engineering Manager', 'Roy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FF2947DE098FFC3D1F9692E7BAA13B22', 'Oracle', 'Daniel', 'Principal Sales Consultant', 'Green');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E5BE8BAC90D769BF66CBE35899D337B4', NULL, 'Antonio Carlos', NULL, 'Schaal');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5BA553ADC8D88E7746C2CDAD3D1BC9F6', 'Oratech', 'Alexis', 'Consultant', 'Lopez');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FFD092E62BB55AE03F3EDC96A6EEEA11', 'Nokia', 'Gregory', 'Technology Marketing Manager', 'Smiley');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3179789607C67A78B7C0395B057F5C92', 'Oracle', 'Linda', 'Consulting Member of Technical Staff', 'DeMichiel');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0612344F6B663B08998777EAEC35BB47', 'Oracle Canada', 'Gordon', 'Technical Lead EclipseLink Foundation &amp; JPA, TopLink Grid', 'Yorke');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AA49C0034BD492DF89DA860FB1E139CC', 'Oracle Israel', 'Yohan', 'Senior Business Development Manager', 'Albo');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('552F8E246FDC05629C0A1650CBCE305F', 'Oracle Canada', 'Carlos', 'Software Developer', 'Lucasius');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5A2E547396FC504ECFE75F150A744DCB', 'Oracle Ireland', 'Vincent', 'Software Engineer', 'Ryan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C63EFAE695D27F9A887D0A1A3250F805', 'Oracle', 'Sean', 'Principal Engineer', 'Mullan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A0C0E1BBAECB628B20AA355E050CC795', 'N/A', 'Martijn', 'Open source and Java advocate', 'Verburg');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2071143B65B247D7468664F171F5141C', 'SpringSource, a division of VMWare', 'Ramnivas', 'Senior Staff Engineer', 'Laddad');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('33D6CC2A85C8FB52A05C4E2D95D16425', 'VMware', 'Scott', 'Software Engineer', 'Andrews');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7229BEFF3C4EB53AD1EF871A73EEF86B', 'Oracle', 'Sunghoon', 'Software Developer', 'Lee');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ABA78DA39725BBCC0E414D9BD49F97E1', 'Oracle', 'oleg', 'sales consultant', 'kostukovsky');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AB223E041E33A9F7AFC76E5A5929852E', 'Hitachi CTA', 'Walt', 'Chief Architect, Senior Product Manager', 'Bowers');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B451AEB29B2455DCFA42A23A67AAA845', NULL, 'Herve', NULL, 'Utheza');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0AAAB8DFF8E0CAA1B4DB90B124812E1B', 'Harris Corp.', 'Victoria', 'Software Engineer 4', 'Vickers');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('91D5FA2D80E65B4A6225FEEF5C73B679', 'Oracle', 'Jim', 'Principal Sales Consultant', 'Connors');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('196D92B514EB09EE20D1C550553525FF', 'Oracle Czech Republic', 'Pavel', 'Software Developer', 'Safrata');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AA00B2E21436AF399997C79A20D5F0DE', 'Oracle Czech Republic', 'Lubomir', 'Software Developer', 'Nerad');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('102E4CAC224A1908A759A7BDF32A920E', 'Oracle France', 'Jean-Fran&#231;ois', 'Software Engineer', 'Denise');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A9E0DBC9332F70118AA830971A6EB4CB', 'Oracle Czech Republic', 'Anton', 'Software Engineer', 'Chechel');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D55F09398E5E77E64A7B7828CB111779', 'GXS', 'Stephen', 'Chief Agile Methodologist', 'Chin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('73648AB115C4E5D93A30F56D6D63DE26', 'Sierra Nevada Corporation', 'Steven', 'Software Engineer I', 'Koucouthakis');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B6C758BE44E940905A9AA3355188098C', 'Sierra Nevada Corporation', 'Robert', 'Associate Software Engineer', 'Stout');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9617ED967102354DA41E590F96C83B04', 'LodgON', 'Johan', 'CTO', 'Vos');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AAA174DD12294A9813041FF5FEF4384A', 'Oracle Czech Republic', 'Petr', 'Software Engineer', 'Vasenda');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5C5E98534D959AAF1AC150770DD5B943', 'Oracle Czech Republic', 'Oldrich', 'Software Engineer', 'Maticka');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D9DACC10B0DD1FA7691D2DBE93C83B50', 'Allure Technology, Inc', 'Eric', 'Architect', 'Bruno');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7108C4BA77081C84DF544E53305791E0', 'Oracle', 'Per', 'Engineer', 'Bothner');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5FC72B9AD7879CFCDA535D081917F79A', 'Oracle Russia', 'Peter', 'Engineer', 'Zhelezniakov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2E3D7B6C0252FA9D0404F7133EE1238A', 'Oracle Czech Republic', 'Marek', 'Principal Software Engineer', 'Potociar');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0482177ABF7360DC07C2C93630A16094', 'Oracle', 'Santiago', 'Principal Member of Technical Staff', 'Pericas-Geertsen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2B16689291E687B67281F0E6EBF719B6', 'JCP', 'Heather', 'Manager, JCP Program', 'VanCura');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FE269EC7B36779DABC51C12F6B69C4FB', 'Oracle', 'Mark', 'Consulting Member of Technical Staff', 'Matthews');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('525C09CEF20A71398F9C7A958DCFC18C', 'Oracle', 'Lance', 'Specification Lead', 'Andersen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F0CA70127140642CFA25DB7BB8D121B9', 'Oracle', 'Douglas', 'Consulting Member of Technical Staff', 'Surber');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('36A40981C2F76809DF552065EE4BA7A7', 'Progress Software', 'Mark', 'Software Architect', 'Biamonte');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E3257D71764008A697FC8218A3D3E426', 'Cloudera, Inc.', 'Andrew', 'Build Engineer', 'Bayer');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F7879F17781C4767D7F36CA6E851DE6F', 'JBoss by Red Hat', 'Emmanuel', 'Platform Architect', 'Bernard');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('80E41F473F6919BEAB68788375F6312B', 'Yonita Inc.', 'Patrycja', 'CTO', 'Wegrzynowicz');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9B4239F72313EE80D1B69FEB0979ABBE', 'Oracle Russia', 'Alexey', 'Software Engineer', 'Konstantinov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D704F8ED92A5BBA581BA5E2CA6530D02', 'Oracle Russia', 'Alexey', 'Staff Engineer', 'Bakhtin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D8783A58E2F5A3016B444F87A0526F2B', 'IAIK, Graz University of Technology', 'Ronald', 'Sr. Research Assistant', 'Toegl');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AB39FAC50B25B07A260749DED00FA5F4', 'Creative Arts &amp; Technologies', 'Werner', 'Founder/President', 'Keil');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('33BDE272B24170730AD1DC07F71BC9FD', 'Oracle United Kingdom', 'Nigel', 'Principal Member of Technical Staff', 'Deakin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('58D01EC3E4D26A37D27A121BDFF0E766', 'Red Hat', 'Clebert', 'Principal Developer and HornetQ project lead', 'Suconic');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('362CF0372943EF0BD843670DB1CA09B5', 'IBM', 'Rohit', 'Advisory Software Engineer', 'Kelapure');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('56632ED47742A3FCAFBC0099F21A9168', 'NetBeans Dream Team', 'Sven', 'Sr. System Engineer / Software Architect', 'Reimers');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6C01E171E05931C42969C9FECC577350', 'Perrone Robotics', 'Paul', 'Founder/CEO', 'Perrone');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('41A5DF1CB8C50EBEF83F9802C0D73F20', 'Perrone Robotics', 'Brian', 'Systems Designer', 'Geiger');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5ED89D6F24DFFD51C456C30DDFA57CF2', 'Peel.com', 'Abdelmonaim', 'Software Engineer', 'Remani');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('50459825D66ED5E6EBB0A96100833E18', 'Wmode', 'Tom', 'CTO', 'Mullen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F3CE419F9CF1240397BD83F9C4B783DD', 'Wmode', 'Terry', 'Head of Market Development', 'Hughes');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1EAEBE4D6480A6D748AE46B172E49186', 'Oracle Canada', 'Donald', 'Director of Product Management', 'Smith');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BA15444F2349D3516D78468C84A061FB', 'Oracle Germany', 'Dalibor', 'Java F/OSS Ambassador', 'Topic');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('517AAEF62D4201AA4F949B273AABD762', 'LincVolt', 'Tom', NULL, 'Schwenk');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('83FE4ECCC5D2B420E53A109F9F836201', 'LMAX', 'Martin', 'Chief Technology Officer', 'Thompson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2A81E2B4ABDE945CD6E15FB726B1F203', 'LMAX', 'Dave', 'Head of Software Development', 'Farley');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('78A7B3E6567774A08946650B74D74C73', 'Eppleton', 'Anton', 'Consultant', 'Epple');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6DF7A5FD03F59DA17937447838FE853C', 'deCarta', 'Steven', 'Technology Evangelist', 'Citron-Pousty');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('13BDBC6734B2F2908263DD23368AE76A', 'Oracle', 'Jesse', 'Principal Member of Technical Staff', 'Glick');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EA6B542CF9A2F8D4BD94D9414DFA042B', 'Oracle', 'Terri', 'User Experience Designer', 'Yamamoto');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B195F3D3A1C26F3EC979E1DD434D44F4', 'Oracle Norway', 'Knut Anders', 'Software Developer', 'Hatlen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0FA7831842B748C6D537E3F923430727', 'Oracle Norway', 'Kristian', 'Database engineer', 'Waagan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4BE50678423DF0E879EB18A2EDB8D59A', 'The Java Posse', 'Richard', 'Podcaster', 'Wall');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('763164155B4807B69238D730D68B9B2F', 'The Java Posse', 'Joe', 'Co-Host', 'Nuxoll');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C15511BF4CB81787A3DD2D82DCFE0462', 'Oracle', 'Philip', 'Consulting Engineer', 'Race');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BB89EAF419FC2F12C7DA7BD86AB80BC5', 'Oracle Sweden', 'Mikael', 'JVM Architect', 'Vidstedt');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C18AA83EDA63A448A2A0230BCA68EDCA', 'Oracle', 'Alex', 'Computational Theologist', 'Buckley');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AAAA7BFB3F59E016A22D2E0D2693A7BD', 'Oracle', 'Mandy', 'Principal Member of Technical Staff', 'Chung');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A27EF037F6E3FC7140EF282D2F36BE95', 'Oracle', 'Mark', 'Chief Architect, Java Platform Group', 'Reinhold');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('27F2567B95E9873006056134FF59E808', 'Oracle', 'Iris', '.', 'Clark');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5BF52E8521A08A484E7D67B153FA399F', 'Oracle', 'Akhil', 'Principal Member of Technical Staff', 'Arora');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('89BA320BB02A592B292628FEB41647B3', 'Experion Technologies India Pvt. Ltd.', 'Sreekumar', 'CTO', 'Pillai');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D7486F906E1DC3371510A89F2986D60D', 'Oracle', 'Peter', 'Accessibilty Principal', 'Korn');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9978DCA633B6A08FE8DDA9572245C0C7', 'Oracle Israel', 'Ofir', 'Developer', 'Leitner');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F1983402BD78B1717966721F6E25CD4B', 'ICEsoft Technologies, Inc.', 'Ted', 'Senior Software Architect', 'Goddard');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4A9CDFF4FE60CBCA97982D2A1A296E8E', 'Futurice', 'Michael', 'Head of Mobile Development', 'Samarin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8100E255400EEB37A68A1179AD4610BA', 'Experion Technologies', 'Manoj', 'Partner', 'Balraj');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E4F9C29BA97755B2871156F4996DBA6B', 'Neo Technology', 'Tobias', 'Software Developer', 'Ivarsson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('15310CBDAD7F87658A6D4BEAED02A576', 'MMMI', 'Andrzej', 'PhD student', 'Olszak');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6D917EE06D4DFF5BC0FC9914E5041676', 'Dell MessageOne', 'Dennis', 'Senior Software Developer', 'Rowe');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('096DF0175B95B5DD760D7D5F31B26A59', 'E*Trade', 'Kevin', 'Senior Manager', 'Nilson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('84079BEC74C06FCFC27BE051E3C13E09', 'Freescale', 'Bill', 'Software Product Manager', 'Mercer');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5052EE424536A5324A16D24C22FDAA18', 'Oracle', 'Guru', 'Principle Member Tech Staff', 'Sakaleshpura');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('83CD86D75CF66AE547D3B481E3E9BA17', 'Oracle', 'Alok', 'JAVA MOBILE PRODUCT MANAGER', 'Patel');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E33EC4A7597A08E8E8541DC4DAB47EE5', 'Juniper Networks', 'James', 'Solutions Business Development, Junos SDK', 'Kelly');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2DE2042C087E0FD3BAA4474A4E89F86A', 'Juniper Networks', 'Hal', 'VP &amp; Chief Architect, Developer Business Unit', 'Stern');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0169CE71012C0CA0A37813E23F6EE0A0', 'Oracle', 'Rick', 'Java DB Architect', 'Hillegas');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A680B3F2A2A4A23B3D6C7950E20EBD43', 'Oracle Norway', 'Dag', 'Senior database engineer', 'Wanvik');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9E8135AD2BD4BCF4902A4F95C5E48705', 'Verisign', 'Chethan', 'Database and Data Warehouse Architect', 'Thippeswamy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9DFEFAA767A8A9CB7544D34FCE3886E2', 'VeriSign', 'Karthik', 'Principal Engineer', 'Shyamsunder');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6B2DE380B3ABA46D16994A60BB065B67', 'Oracle', 'Roy', 'Chiect Architect', 'Ben Hayun');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B86AFF230EB08D9FDE4723FD04A0F678', 'Oracle', 'Kelly', 'Principal Member of Technical Staff', 'O&apos;Hair');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('476CDF54315BE4268CAFC7ED8365FCA0', 'Oracle Russia', 'Artem', 'Software developer', 'Ananiev');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ADD2071EC2ACEA2B0FFE6E95D7AE05EA', 'Oracle', 'Brent', 'Senior Member of Technical Staff', 'Christian');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A45D9732C0925DE8FA59C4F64EA431C3', 'Oracle', 'Jerome', 'Architect', 'Dochez');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('00F04A606A56725A72C5D53DF8FAF71E', 'Oracle', 'Peter', 'Software Developer', 'Jensen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('909111A1754161268B34BA349105843D', 'Oracle', 'Darryl', 'Principal Member of Technical Staff', 'Mocek');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3B3E9E88FF23082CC1D5834ABA0865A3', 'Oracle', 'Robert', 'Java Performance', 'Strout');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('52DA3506F54ADDAA30029C0DD9C5826E', 'Oracle', 'Jon', 'Principle member of technical staff', 'Masamitsu');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('661390EC56420C52703772AFFD6FBE5B', 'Oracle', 'Jerry', 'Director Java Performance Engineering', 'Driscoll');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DE25139C538A15CD38B1377FAA457DE9', 'Oracle', 'Renu', 'Principal Product Manager', 'Motwani');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2E1751C5634FC8FF8468A340D471F567', 'Oracle Russia', 'Konstantin', 'Sr. Engineering Manager', 'Zolotnikov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C0233B4D29D614FB38D74516D146C4FC', 'Oracle Russia', 'Mikhail', 'Engineering Manager', 'Popov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E811BC02BC3013DCBB2492D56BD980ED', 'OSGi', 'Peter', 'Technical Director', 'Kriens');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5632B94FE7FEF271372C89938AAD2100', 'IBM', 'Bentley', 'STSM', 'Hargrave');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A1F3DCD63D487F22233AFA24A52DE16B', 'Eteration', 'Murat', 'Software Consultant', 'Yener');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FB657AF971234884FA0D058185724D54', 'Canoo Engineering AG', 'Andres', 'Sr. Software Developer', 'Almiray');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EE8663071970D38CAC7E2A68F771842E', 'CCA', 'Ix-chel', 'IT Manager', 'Ruiz');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BF97338FA58355DF211AE8412D62A320', 'Oracle Czech Republic', 'Jaroslav', 'NetBeans Platform Architect', 'Tulach');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('80FE935C8BFC4A3DA249A1D5C9B6282C', 'Accenture', 'Morten', 'Manager', 'Andersen-Gott');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8FAFB3E6CA579793681C0FE055B50034', 'Jenzabar', 'Laird', 'Senior Software Architect', 'Nelson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5BBA088B37B9A2FBEB5D7AAF712A1FA3', 'RBS', 'Fabiane', 'Chief Architect', 'Nardon');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9CD13C520138C052349E88E30162AB27', 'BeJUG/Devoxx', 'Stephan', 'Chairman', 'Janssen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F4163A6F1D8DBDA80C89A0A467E27F80', 'Faculty of Organisational Sciences, University of Belgrade', 'Zoran', 'Teaching Assistant', 'Sevarac');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('46BABCA1117488287DF30A7ED959D224', 'Oracle', 'Eileen', 'Principal Visual Designer', 'Bugee');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('94FF8BC49778A726651016485DA6D11F', 'VMware - SpringSource Division', 'Graeme', 'Staff Engineer', 'Rocher');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D92BF0B7B591D11FC713C21AC19AA28D', 'National Football League', 'Paul', 'Senior Software Engineer', 'Giles');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('881D287B81D42286454EB5ABA5831FB8', 'National Football League', 'Earl', 'Senior Software Engineer', 'Nolan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4CB86B915F697EFA11C08C2CA2D7036F', 'Oracle', 'Erik', 'Senior Developer', 'Gahlin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E6464CBBA1B1BFA2C2B59CDFD56381C3', 'Logicstyle', 'Juliano', 'CTO', 'Viana');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0E1C27BDD16243FDE12AE3E5608465EA', 'N/A', 'Peter', 'Software Developer Designer', 'Pilgrim');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('02E62860AA4251BF3DF1D45337288050', 'Oracle', 'Stuart', 'Principal Member of Technical Staff', 'Marks');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6834C4DF1ACDC1BBC8D5D80C1D133CDD', 'Oracle', 'Daniel', 'Developer', 'Smith');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('75D5BBE7B86192F1673E0B1D446B818B', 'Oracle Czech Republic', 'Radko', 'Software Engineer', 'Najman');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4D91E21B8381021199CA78EFA76C6F5C', 'Oracle Czech Republic', 'Martin', 'Software Developer', 'Sladecek');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('16E8FEE2F7CAFCE71C9796C7BC4EC6FF', 'Burning Sun Enterprises', 'Eric', 'CEO', 'Smith');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CBD255C812F217A4E249708A8415CA30', 'Oracle Czech Republic', 'Jiri', 'Senior Developer', 'Rechtacek');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('820F8537B1FBFAD26D321C7D4B73064E', 'Oracle', 'Sharat', 'Principal Product Director', 'Chander');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9AFD9F50BE6D5986658EAA6BCF8709EC', 'Kaazing Corporation', 'Frank', 'Director of Technology', 'Greco');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2EAA1E3BBB93F733B6D94DEF0CA4DB4E', 'Avast Software a.s.', 'Zbynek', 'Developer', 'Slajchrt');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F108BA21E8741CF5EA871CBEF7759647', 'Futurice Ltd', 'Paul', 'Head of Mobile Development', 'Houghton');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B606412555A926EB399FEC9343BC28ED', 'headwire.com, Inc', 'Ruben', 'CTO', 'Reusser');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DF60EE96241E03B38238EB20A3E79778', 'Snowtide', 'Chas', 'Founder', 'Emerick');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D9E9C6797EEE2CA9E7B29E49296AEC4E', 'Oracle', 'Roger', 'Principal Member Technical Staff', 'Kitain');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EC4AEAE042FDD5F8A6354A3EC11A6E11', 'Engine Yard, Inc', 'Thomas', 'JRuby Architect', 'Enebo');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7ABF11D7EA346CD5CFFFF2F980BDBB31', 'Harvard University', 'Robert', 'Senior Software Architect and Engineer', 'Treacy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7C44B2F80B9CD1F52987A194BBEDCE98', 'Harvard University', 'Ellen', 'Technical Lead of Software Development', 'Kraffmiller');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('55A5C53C33BFF0074B5B9DC8F1C7AA61', 'Alfresco Software, Inc', 'Jeff', 'Chief Community Officer', 'Potts');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B0E2ED125BBFDCE80AF075A812062122', 'Jayway', 'Mattias', 'Senior Consultant', 'Hellborg Arthursson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1EC0FE2A966B6D68DCE96D7E3BB044AF', 'Jayway', 'Kalle', 'Consultant', 'Stenflo');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3C4ED0682783483EC7F8107C1FDF331E', 'Bank of America', 'Josh', 'Technology Strategist', 'Street');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('51F15C853C6C67020F2A6CE6ABB38730', 'None', 'Nelson', 'Generalist', 'Chamberlain');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('770FC0E8327C80AD823C8BD852F4387F', 'Code Mentor', 'Ken', 'CTO', 'Sipe');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F9B854BB01854E6BADE01356D58CB8C3', 'Fujitsu', 'Max', 'Senior consultant (Java/Oracle)', 'Bonbhel');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AB2C21D73D9E0D80083374A9AF41AF3B', 'Engine Yard, Incorporated', 'Dr. Nic', NULL, 'Williams');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('16784C6D2D015E1A54D96E5FB8FA5164', 'Relevance, Inc.', 'Aaron', 'Clojure/core', 'Bedra');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('51A071986AB30D62C83CC254E9F98F69', 'SpringSource, a division of VMware', 'Guillaume', 'Head of Groovy Development', 'Laforge');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B7C2EF1D84E6CBF791C0AA044CA4D02B', 'Java Posse, LLC', 'Dick', 'Software Engineer', 'Wall');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7862737AE04ADDC60F3B63BCF8A11BBF', 'Oracle China', 'Weijun', 'Software Developer', 'Wang');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5A48752490CBBCB7B2E3DD97A4F50C35', 'Blue Lotus Software', 'John', 'Principal', 'Yeary');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8D0149C225A019064267AFE96A265D0F', 'Oracle', 'Dave', 'Java Performance Engineer', 'Keenan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9587AB51112C1ECFD4008811BFA6AFB6', 'Oracle', 'Aleksey', 'Java Performance Engineer', 'Shipilev');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EA0C8466E121036C4ABE192DE14BE293', 'Oracle', 'Mikhail', 'Principal Member of Technical Staff', 'Gorshenev');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('798A04819111A4B535F118ECB38D81EA', 'Oracle', 'Jerry', 'Consulting Member, Technical Staff', 'Evans');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('007792F462BD9C752A4F1784BC3FCC3C', 'Oracle', 'Kevin', 'Consulting Member Tech Staff', 'Rushforth');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BF76CAB9900C49603E103E2294654CF4', 'Oracle', 'Chien', 'Senior Software Engineer', 'Yang');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DCE90398740A8B2B5530829E15B8B640', 'Oracle', 'Saraswathy', 'Sr Software Development Manager', 'Narayan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5EF90F558ABE2F9DC200EB7373B1982E', 'Intel Corporation', 'Khun', 'Staff Software Engineer', 'Ban');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('689043A978A585D651B3B1415D6AAABD', 'Oracle', 'Roger', 'Prinicipal Member Technical Staff', 'Brinkley');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('76B562CB7527976DF46E42ACF78959B6', 'Oracle', 'Sungmoon', 'Senior Product Manager', 'Cho');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A941A00AF553CDA6C6EABB4E5F36C414', 'Red Hat Inc.', 'Manik', 'Senior Principal Software Engineer', 'Surtani');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1BCBE8F77B99AE6D688333C5E55B5ADD', 'Engine Yard', 'Jacob', 'Director of Product Marketing', 'Lehrbaum');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('09401E1C4CC1AA681613AB9023531134', 'Engine Yard', 'Mike', 'Vice President, Product Management &amp; Marketing', 'Piech');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('51E3A14BE922D27CA72166FADD7BEFF6', 'Sinapto srl', 'Massimo', 'Software Engineer', 'Citterio');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('55EE842773173590DECC1F0CA14C9905', 'University of Edinburgh', 'Paolo', 'researcher', 'Besana');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3CEC72A9B1484C5F599942E11FEC2AD3', 'Systemtechnologie H&#252;ttermann', 'Michael', 'CEO', 'H&#252;ttermann');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('348ADA377B3BE267DEDFC5921F85638C', 'Oracle Czech Republic', 'Richard', 'Software Development Senior Manager', 'Gregor');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7A17E3C4CA3B86954E735AF378A73466', 'Oracle Czech Republic', 'David', 'Software Development Leader', 'Pulkrabek');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B888A619301EDEBA316175BF61A23552', 'Tasktop', 'Mik', 'CEO &amp; Co-Founder', 'Kersten');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('88FFD0CCE1CFC7ABF1CD1E0DFF4F21E3', 'Rockwell Automation', 'Paul', 'Senior Software Engineer', 'Schmirler');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CDA7F04B19568EC95C9772173F0C18BC', 'Rockwell Automation', 'Tim', 'Software Architect', 'Biernat');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F07468E5C162D3716FC0FED2D30CD231', 'Oracle', 'John', 'Principal Member of Technical Staff', 'Yoon');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('53148DAB938A236D730577C5BA645B2A', 'Oracle Czech Republic', 'Michael', 'Software Developer', 'Heinrichs');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0907E57662BA53DEE628A2E108B89758', 'DataStax, Inc', 'Nate', 'Software Developer', 'McCall');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2B96D8EA0D4B9E1A3BD53CF6462DAC3E', 'FuseSource', 'Ioannis', 'Software Architect', 'Canellos');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('39E354CF75D08608CF41AE8FA133E233', 'Apache Software Foundation', 'David', 'Member', 'Blevins');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('864E6DA0DAD4442EC34EB31FD5FFCF17', 'Microsoft', 'David', 'Architect', 'Chou');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ADE7FA8F451522AB5DF3CCC16515F2A6', 'Kodewerk Ltd.', 'Kirk', 'Performance Specialist', 'Pepperdine');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5FF3BD2258F6CB8126DB67DB7C3FFA4C', 'Oracle', 'Bob', 'Consulting Engineer', 'Vandette');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C8B72283F295BE7B3ADBBD15E13ABCC7', 'Oracle France', 'roland', 'Principal Member of Technical Staff', 'westrelin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C0225675CA1923F5E6EBAFA82910C8E6', 'ARM', 'Andrew', 'Consultant Engineer', 'Sloss');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('44B12C1263601FB9D168810FBF06302D', 'Red Hat, Inc.', 'Dan', 'Principal Software Engineer', 'Allen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CB199BA979364C6D793F1A2FED893BFF', 'Red Hat', 'Aslak', 'Senior Software Engineer', 'Knutsen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9DC58A4CF66140BB75D334A04C265514', 'Terracotta', 'Alex', 'Sr. Software Engineer', 'Snaps');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('769DB2CFA8D002E9FA613D4EF8EBCBCD', 'Oracle', 'Charlie', 'Java Performance Engineer', 'Hunt');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FF1B74F065E317FC9B3DEAD9080F69DA', 'Intel', 'Aleksey', 'Sr Software Engineer', 'Ignatenko');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F956ADC6147FD29D48A7AB7D58315DC7', 'Oracle Russia', 'Sergey', 'Software engineer', 'Grinev');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FBEFEDFC5673BAAEB575E8F82C15EF1E', 'Oracle Russia', 'Alexandre', 'Java quality architect', 'Iline');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F3E3E345A16183F2A501E258472C95CC', 'Oracle', 'Mahesh', 'CMTS', 'Kannan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9CDB3E13790C0FCC708B8B6E15321E95', 'Oracle GlassFish Server', 'Shreedhar', 'Senior Software Development Manager', 'Ganapathy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AA1A35F35FB813C4D60F837B13C71189', 'Oracle', 'Carla', 'Principal Member of Technical Staff', 'Mott');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('510C86433F48A92D4CA3E57223279A9C', 'LadyBug Studio', 'Mario', 'Java Architect', 'Torre');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('80ECA0EB515D8B44A8F492826231B1AB', 'MLZD', 'Monica Daniela', 'staff member', 'Udrea');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ACEEAEF6F0625D1B72F7BABED04FF091', 'IBM', 'Ryan', 'Senior Software Developer', 'Sciampacone');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('986508BE14011C61B1B2636E07758DE2', 'IBM', 'Mark', 'Senior Software Developer', 'Stoodley');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('65E23AC3BC7A099ABD6CE32172FA0FE2', 'RBS', 'Benjamin', 'Architect', 'Stopford');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A7E38652EB253603FC31FF731C14A076', 'Red Hat', 'Lincoln', 'Senior Software Engineer', 'Baxter III');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('497B0DE378CDBE43D89E60989B62F36F', 'Oracle France', 'Alexis', 'Java EE developer advocate', 'Moussine-Pouckine');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('183141919AF758EC86CD176399DF1009', 'Oracle', 'Ashwin', 'Product Management Group Manager', 'Rao');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F897A387B70C80121B6D44D55906D8FE', 'Serli', 'Pierre-Henri', 'Software Engineer', 'Dezanneau');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E8AF5C3ED56B9067AEFE156120E8A7DC', 'Luminis Technologies', 'Paul', 'Senior Software Engineer', 'Bakker');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('276135B90BEFD4BDA52A62B33A4DA025', 'Luminis', 'Bert', 'Fellow', 'Ertman');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('47A75D17099ABA425C661114A76FA501', 'IBM', 'Ali', 'Software Analyst', 'Manji');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('867B9A457C0574FDF98D0BC856438656', 'Oracle Czech Republic', 'Martin', 'Software Developer', 'Grebac');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F7086C6959FAD9DC0DC173323F804655', 'Intel Corporation', 'Shirish', 'Engineering Manager', 'Aundhe');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EAA0EBA4689C54615CDB6204AF48491E', 'Engine Yard, Incorporated', 'Charles', 'JRuby Architect', 'Nutter');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6B401A9EA39303040F3DE18B4D2F1246', 'Oracle', 'Brian', 'Senior Principal Solutions Architect', 'Oliver');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1861A9D1468DD93B1869B45E349392E1', 'Oracle', 'Noah', 'Development Manager', 'Arliss');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AC06F72B9F5144B7911358F7068C13DC', 'Platfora', 'SriSatish', 'cto &amp; co-founder', 'Ambati');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3B57560656E14614EB1E0EE97D66775B', 'Splunk', 'Rob', 'Chief Architect and Co-Founder', 'Das');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('077BA88D32B8A16DEE891E6C7E1DB99E', 'Lockheed Martin', 'Frederick', 'Software Engineer', 'Platten');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CA5B0188EF93A52C15ECFFB45936E67E', 'Dassault Systemes', 'Ryan', 'e-Formulation Analyst', 'Cuprak');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('112244CFF608DE16FB95BA29FEAB4E79', 'SpringSource/VMWare', 'Oleg', 'Senior Software Engineer', 'Zhurakousky');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1BCA46F07378AD7520AC2350C69C7686', 'Shutterfly.com, Inc.', 'Raymond', 'Staff Software Engineer', 'Feng');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2A3610B8702F2F9FE32D5286E49092D0', 'Shutterfly', 'Luciano', 'Staff Software Engineer', 'Resende');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('25E48C8EBD1AB59ACD52564DC6D513DB', 'HP', 'Josh', 'Developer Advocate', 'Marinacci');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('07B165C1847CA14619D88EBB869BA386', 'Salesforce.com', 'Richard', 'Lead Engineer', 'Pack');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EED3AA2CEE148ED8F112AEB70855DF2D', 'Lift Web Framework', 'David', 'Feeder of the Bears', 'Pollak');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2466129C74EFB2308052CE94146A28CD', 'TwoPiRadian Infotech', 'Indrajit', 'Technology Head', 'Raychaudhuri');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D34DF617509E406DAD84F9E748945702', 'Oracle', 'Mike', 'Principal Member of Technical Staff', 'Duigou');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('15CA6020A4E40739E66C10E69ADB89B4', 'Oracle', 'Jeff', 'CMTS', 'Trent');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0AA6FE41C2DD18474E86B5AB1A89F3C1', 'IBM', 'Chris', 'Senior Technical Staff Member', 'Vignola');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3B999C40E0BC11410E7D5F886D44A588', 'Java-monitor.com', 'Kees Jan', 'Founder', 'Koster');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CA8D96E85428F0F6D116B5C67E504F3F', 'SpringSource, division of VMware', 'Costin', 'Staff Engineer', 'Leau');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2CDA7362D72A6835F4F752C222D5998F', 'eBay Inc.', 'Sangjin', 'Distinguished Engineer', 'Lee');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FAC966CD974876240EDE53CD49BDCD8F', 'eBay', 'Debashis', 'Senior Director', 'Saha');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9BDCAE89C15F599A0B1700C12CABA6CB', 'Elastic Path', 'Eddie', 'Software Engineer', 'Chan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('85BE4DDA5B56B9FB0C218875670FC6BE', 'Elastic Path', 'Ronald', 'Software Engineer', 'Chen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AF8AD12905754664618643B4B967A799', 'Cambridge Technology Partners', 'Thomas', 'Engineer', 'Hug');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('50B5DA7CF463DD398A9C76DA9BD81737', 'Cambridge Technology Partners', 'Daniel', 'Group Manager', 'Kaeppeli');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('78F3830469225D7DAE43C73FA9AE156A', 'Oracle India', 'Sivakumar', 'Senior Staff Engineer', 'Thyagarajan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('54F75F13CBA5D3A9CBA5AF1FC3EE6C8E', 'Oracle', 'Arun', 'Java EE &amp; GlassFish Evangelist', 'Gupta');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('508A819E177E9AC86FB99FF5A04FFFA1', 'Red Hat, Inc.', 'Peter', 'Principal Software Engineer', 'Muir');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F8FE7B3291FE1A891AA3C1A8D9CABB80', 'Caucho Technology', 'Reza', 'Senior Software Engineer/Community Outreach Activist', 'Rahman');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CD5093D20B2CAFC6E1ACEEB0BCCC2000', 'Oracle', 'Pavel', 'Software engineer', 'Petroshenko');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('600E329DAB74D8EB7DF553C50131422F', 'Heroku', 'Mark', 'Runtime Engineering Lead', 'McGranaghan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('05D6C7140678111B227BEED03FD5D0FA', 'salesforce.com', 'Pat', 'Principal Developer Evangelist', 'Patterson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('91CB03CE24CDF76465830BBE3D81545E', 'S4HC', 'Aleksandar', 'Managing Director', 'Seovic');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2F42B67C7E117977EA8F4957378DAE03', 'Cloudsoft Corporation, Ltd.', 'Adrian', 'Chief Evangelist', 'Cole');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4BFEE5E962EC58CBEA438B8DA186DE65', 'Oracle Canada', 'Shaun', 'Principal Product Manager Oracle TopLink', 'Smith');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4BE0972A491E0FD405CB3C293FEAA7F4', 'Oracle Canada', 'Doug', 'Director of Product Management, Oracle TopLink', 'Clarke');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A5EDDAAF29CA48D5CED29A3B05CE91D4', 'RedHat', 'Mark', 'Senior Engineering Manager', 'Little');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D6454E2515D3CC33C5BCCDE4D34EDB77', 'Dr&#243;tposta Consulting Ltd.', 'Mark', 'architect', 'Erdei');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('795A5FFB7B3687FAE58A71BC723E0FE2', 'Dr&#243;tposta Consulting Ltd.', 'Peter', 'architect', 'Varga');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E2E1C556223E93225B0615151193BF5F', 'FuseSource', 'Robert', 'CTO', 'Davies');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('619F71BB70EEC8A9F80211578DB05D86', NULL, 'mike', NULL, 'malcy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0F5849D30928A3366C7CB2401A203DFF', 'Alticast', 'Anne', 'Director of Tecnical Strategy and Product', 'Dirkse');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CC7A48683E5D8B3E5DD284F0927D04C3', 'CloudBees, Inc.', 'Kohsuke', 'Architect', 'Kawaguchi');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('684AE0D772F605E5C85393A50F3DDB33', 'Johannes Kepler University, Linz, Austria', 'Lukas', 'Researcher', 'Stadler');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B51FCF15ACA15298E4E05CEEEDC57E8D', 'Couchbase, Inc.', 'Matthew', 'Community Manager and Software Engineer', 'Ingenthron');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0717D5CEEEDF55DB1A9AB552D76A5760', 'Oracle', 'Hinkmond', 'Principal Member of Technical Staff', 'Wong');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C1143C94ECF7CDEC688E0158C50EF6A1', 'Fluke Networks, Inc.', 'Michael', 'Software Architect', 'Walters');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('74F9FA98C1E1C41AAB5F7A1A76630B28', 'Department of Defense', 'Andrew', 'Scientist', 'Niepraschk');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4E0653A86F133BE771BC8D2877C3A665', 'Verizon', 'Paul', 'DMTS', 'Schultz');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DE4B253F861825876C9CD862B5B658B6', 'Verizon', 'Bob', 'DMTS', 'Sartini');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3A4325F950391AE53755BD53580914BB', 'Raith GmbH', 'Gerrit', 'Teamleader Software', 'Grunwald');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6994C6B9F2FAE0CC8B0A7BCC88A5BCF7', 'Oracle', 'Jasper', 'Developer Experience Architect', 'Potts');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C974C910FAFD392EAE57233046C0ED48', 'Oracle Australia', 'Jonathan', 'Software Engineer', 'Giles');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D1D78B8F4D71C3941DD0DB37D26FE723', 'C2B2', 'Steve', 'Director', 'Millidge');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1A04DE5A68942BAA2818185B2FCBC0EC', 'Oracle Australia', 'David', 'Principle Member of Technical Staff', 'Holmes');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0D73861EB08A63646C2F0FCA4F9D3BB4', 'craigsdickson.com', 'Craig', 'Enterprise Software Consultant', 'Dickson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A870DECED9EE5DED8DE1071EFC4AB104', 'JBoss by Red Hat', 'Andrew', 'Senior Software Engineer', 'Rubinger');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BC4F768D64C6AFF6DEC5C8368425EB06', 'Oracle China', 'Max', 'Senior Staff of Technical Member', 'Mu');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DED5E695DC74768199A93281708B1C0B', 'Oracle Germany', 'Jean-Yves', 'Principal Member of Technical Staff', 'Bitterlich');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3A5190EC16C41CA9A854EF00637B41D8', 'Alipay.com', 'Yan', 'Chief Architect of Alipay Mobile', 'Hu');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C793682D8CD2184921A20BCA9ED9840C', 'Oracle', 'Thomas', 'Software Engineer', 'Ng');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4B2084D17A3B2D5DDA529AB15EC753A6', 'Oracle', 'Igor', 'Principle Software Engineer', 'Nekrestyanov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E6B9C4FF3422D40B85DD3A2DA1552688', 'Oracle', 'Jeff', 'User Experience Developer', 'Hoffman');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C419ABBE0A691446C3E4FC3227878F38', 'Oracle Czech Republic', 'Jakub', 'Senior Software Engineer', 'Podlesak');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AC9F7E1F440B68FB761A6F974956A73E', 'Avast Software', 'Pavel', 'IT Infrastructure architect', 'Ku&#269;era');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8CF33AA0179565107CE16214B49F5956', 'Avast Software', 'Lukas', 'QA Director', 'Hasik');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DA6B28C623465E6492AB390BB3B37620', 'Oracle Israel', 'Rafi', 'Software Engineer', 'Tayar');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('58C081379E91C3AAB2C1DE4CF7B84F52', 'Oracle', 'Bruce', 'Architect', 'Kilgore');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3DAB1D75F0BCF7F8B049D13609EBFAA2', 'Oracle', 'Noel', 'Consulting MTS', 'Poore');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2D6B2F22620B13BD89A77A385331EF71', 'Oracle', 'SRINI', 'Senior Development Manager', 'INDLA');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('675B48079878CE56E86C11615D2842A8', 'Oracle', 'Melissa', 'Senior Product Manager', 'Jacobus');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('466F3229526B8E00D107992BCFC48842', 'Oracle', 'Byron', 'PMTS', 'Nevins');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('807DC685151EA84CD7430336F5C7484F', 'Larsen Consulting', 'Bob', 'Consultant', 'Larsen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('802671E0144D808F2F3B465D50ADDDBF', 'Nanuma Consulting', 'James', 'Principal Consultant', 'Wright');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9CEA4A8165667D48E6FECC2897FBD961', 'Systronix Incorporated', 'Bruce', 'President and Senior Engineer', 'Boyes');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A0462B2F2881A497015DD339C715D60B', 'Oracle', 'David', 'Software Engineer', 'DeHaven');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9084C2420F8A83FE5098C932AECCD38F', 'Oracle', 'Brian', 'Software Developer', 'Burkhalter');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('65EBAA16CBBC64CA4D80FACDA7A23D86', 'BMC Software', 'Debabrata', 'Product Management Lead', 'Panda');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DAE48D109D412CA38CF977E6F598AC80', 'ZeroTurnaround', 'Jevgeni', 'CTO', 'Kabanov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AA12ADFF7A227B96B19DD7988B132761', 'LinkedIn', 'Yegor', 'Software Architect', 'Borovikov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E65CCF0DF814A76071C832FB6DE2AAC8', 'CERT/SEI', 'Robert', 'Secure Coding Team Lead', 'Seacord');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0C798C32618025242490714AB8890D30', 'SEI/CERT', 'Dean', 'Senior Software Security Engineer', 'Sutherland');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6616B4084BA7ED4E0B422B07871F9F71', 'AMIS', 'Lucas', 'Java Enterprise Developer &amp; Architect', 'Jellema');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EB6BC2C709F8B16BB0A77462CAD08272', 'Kennard Consulting', 'Richard', 'Principal', 'Kennard');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('082C867160A931A405DFB28F70C7B6B2', 'Oracle', 'James', 'Consulting Member of Technical Staff', 'Driscoll');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('499EF9D8E2FF1B7274D2D5B3C2604025', 'Oracle Germany', 'Michael', 'Principal Member of Technical Staff', 'Lagally');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B4DCCA8416B60099F8894AFD78F11510', 'Mediaset S.p.A.', 'Angelo', 'Head of DTT Content Factory', 'Pettazzi');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('62D4259F9D33B2E4026F1A363E89C63C', 'Mediaset', 'Antonio', 'Project Manager', 'Gioia');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('182B8A56C0BFC5EE81DE7CFDBE280DC6', 'UMUC', 'James', 'Program Director', 'Robertson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9AAB02F5F55BBD7304BE273D2D0C89E2', 'Drew University', 'Barry', 'Professor', 'Burd');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('321F077055883EEAB2C23B765E62F378', 'Oracle', 'Oleg', 'Software engineer', 'Pliss');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('36100975C5AC421A38682AD293E511AF', 'Forrester Research', 'Mike', 'Principal Analyst', 'Gualtieri');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BC4EBE62AEC2A6532B8205064CE2D04E', 'Oracle Russia', 'Sergey', 'Engineer', 'Malenkov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('30403A7DB3A86E9F56BA46EFF3DBD570', 'Oracle', 'Anki', 'Principal Member Of Technical Staff', 'Nelaturu');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('72FD103219F15AA837D8D367C1781244', 'Oracle', 'marina', 'Principal Member of Technical Staff', 'vatkina');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('0C7555C14C46832D3D27C57F981292F7', 'Oracle', 'Harold', 'Web Service Technology Architect', 'Carr');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('27112897E88E3D3605ABF225DDA52660', 'Goldman Sachs', 'Sunny', 'Executive Director', 'Chan');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BFCFEE8504EDB27DB9B0B5706BFACEBD', 'Twitter, Inc.', 'Attila', 'Software Engineer', 'Szegedi');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('758E39AB161A88D02DB4648A663CAAA2', 'Intel', 'Anil', 'Sr. Staff Performance Engineer', 'Kumar');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('188E53275DD44D34595679E3776AD042', 'Red Hat Inc', 'Scott', 'Vice President - Technology', 'Stark');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B4CBF586AB07A445849853240646B63F', 'Red Hat Inc', 'Anil', 'Lead Middleware Security Architect', 'Saldhana');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('87A140263453B51770E967C9CB42C0B9', 'Canoo Engineering AG', 'Dierk', 'Fellow', 'K&#246;nig');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AA4A8C57E826A0D9DFDCD5B723296CC6', 'Kaazing Corporation', 'Christopher', 'Visionary Zinger', 'Barrow');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('472A72D7CA4F03935D8404F694AA8726', 'Oracle', 'Scott', 'Software Developer/Architect', 'Oaks');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C65C38A16706F4B60845766A39393CCB', 'Intel Corp.', 'Troy (Peng-fei)', 'Sr. System Performance Engineer', 'Chuang');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ED5733B8E62988951C486D1B23EE0EF8', 'Intel', 'Kingsum', 'Principal Engineer', 'Chow');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DB619145BE021AC18415734157FB3B28', 'Oracle Ireland', 'Alan', 'Software Engineer', 'Bateman');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('83C5F24D4C47F80C493343767519C855', 'Sinapto Srl', 'Mauro', 'Software architect', 'Perego');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5738CC998B3CD7E0A7C32BB1977F3817', 'MuleSoft', 'Ross', 'CTO and Founder', 'Mason');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A9C4495860849AF92C7B2C8D246EC8A1', 'Oracle', 'Bradford', 'Principal Member of Technical Staff', 'Wetmore');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BE455CB24A6B602347C8FBABAB9AD3EF', 'University of California, Berkeley', 'Bob', 'Professor', 'Jacobsen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E07812DF861B264D00EDCE6A80A05213', 'INFOQ', 'SRINI', 'Editor', 'PENCHIKALA');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('336612B8993438B2EA27356F9E6A8E98', 'IBM', 'Steve', 'Software Engineer', 'Poole');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('AF984788B44B22FDD063065CD640B097', 'Oracle India', 'Prasad', 'Software Engineering Manager', 'Subramanian');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A0AD339ECE026994FD50785D851418C2', 'Oracle India', 'Bhavanishankar', 'Staff Engineer', 'Sapaliga');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('CF7B34EA12400CC43415AAB61C7C7B06', 'Oracle France', 'Christophe', 'Sales Consultant', 'Vaille');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('18136C3158CAE755021644ED84FF30B9', 'Oracle France', 'Frederic', 'Java Sales Consultant', 'Vaute');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D8BCCE1A20E696E51C4AE9FAB91261D9', 'Oracle India', 'Poonam', 'Staff Engineer', 'Bajaj');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BF60794DA9632980BF8CDCB31E6E390F', 'Oracle', 'Paul', 'Java SE JVM', 'Hohensee');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B1C59A4E1294A1DC944BB219EE32A41A', 'SpringSource, a division of VMware', 'Bruce', 'Senior Software Engineer', 'Snyder');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D9075A8EE1EFDFA5F5867F559BA7FEE3', 'Forum Nokia', 'Ram', 'Founder and lead Student Forum Nokia', 'Kashyap BJ');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('04112E1DB218881F85C5B6A42BE40998', 'Choice Hotels International', 'Eben', 'Senior Director, Systems Architecture', 'Hewitt');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B9FAA4ABADA8EF6B3DBBD9966F07C883', 'Bazaarvoice', 'Michael', 'Software Engineering Lead', 'Norman');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('5FCBBDAC15EDB78DAF39E85FBF71DA61', 'Oracle', 'Todd', 'MySQL Support Director', 'Farmer');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DAF13A575FD4A48F1E1511C3B9F162A8', 'Oracle Croatia', 'Tonci', 'Sofware Developer', 'Grgin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('541EE185893B519A5A2633617C1197BF', 'Oracle Czech Republic', 'Eva', 'Software Developer', 'Krej&#269;&#237;&#345;ov&#225;');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('D7BEB854BC426FF0BC11CBC49EEDA658', 'Oracle Czech Republic', 'Jan', 'Software Engineer', 'Valenta');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7F66F2DF9687F64A65A92562236B75A7', 'Verisign', 'Lin', 'Engineer IV', 'Jia');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E78A6EF9256916604968D3BA5DE25ACC', 'Oracle', 'Alex', 'Senior Member Technical Staff', 'Kosowski');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8BA27D15B26B6121A9D12FE79385CEDA', 'Oracle', 'Mitch', 'Engineering', 'Upton');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8AC79BE17B304CA46D683DF0B35F0E49', 'OptionsCity Software, Incorporated', 'Victor', 'V.P. of Development &amp; CTO', 'Glava');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('77C2646B632970C0D673C515F9CCCF6F', 'Optionscity Software Inc', 'Freddy', 'Director of Client Technology', 'Guime');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B993B578E993378438E85E8A5B1676B7', 'testtest', 'testtest', 'testtest', 'testtest');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1B807200B225B7541572A1BDF5728439', 'test', 'Test', 'test', 'test');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('447095C1171D90D18995950F8FA61C7C', 'Oracle', 'Gregory', 'Chief Architect, Embedded Java', 'Bollella');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('43C5FAA82519FFD06406EF3AFFED1A0D', 'Oracle', 'Eric', 'Principal Product Manager', 'Jensen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7307C02D38C12AD19CF0367B3775D191', 'McWest', 'Brian', 'Consultant', 'Westrich');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3841A6DF6F430CF13250960785E5458E', 'Terracotta', 'Greg', 'CTO Ehcache', 'Luck');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('A01BEC2984BE2D5A94B45E5D30B15439', 'Oracle', 'Ted', 'Chief Architect / SVP', 'Farrell');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7B8A53D519BB2C152FC9915ACFBD76A7', 'Oracle Canada', 'Jim', 'Software Engineer', 'Laskey');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('E36BFCDBE4D8226FA953225E76357401', 'Square Inc.', 'Bob', 'CTO', 'Lee');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3F2E52D630EF11CD6B084A8F2EDCA917', 'Oracle', 'Joseph', 'Member of the Technical Staff', 'Darcy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2BE00517F929793D581B52174B617A37', 'VisiTrend, LLC', 'John', 'President and Principal Scientist', 'Langton');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('096B8B9C7F50F18514BC58C2CBF15AFC', 'Oracle Ireland', 'Chris', 'Principle Software Engineer', 'Hegarty');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('3B0DB287B932A00CD02FB468E76EB479', 'Oracle', 'Ron', 'Consulting Member of Technical Staff', 'Monzillo');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4E2239FE8D428EC02C90DD741A1F2522', 'Summa Technologies do Brasil Ltda', 'Michael', 'Sr. Technical Consultant', 'Santos');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B3111896757BADD1DA3A6B86447C0865', 'Oracle', 'Justin', 'Principal Member of Tech Staff', 'Lee');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('550E4D31B27A5AE7D1B5CAD8062A8281', 'JMentor', 'James', 'Java/JavaFX Developer/Author', 'Weaver');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('1EA9F93A028690F80BE58727808082AF', 'Oracle Czech Republic', 'Jan', 'Software Developer', 'Lahoda');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('986548DD424B3AFA302E155808E39AD2', 'Grind Software Inc.', 'Craig', 'Director', 'Tataryn');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9D2BCD3A6E2C353633DBD578C73EC2FE', 'Oracle Russia', 'Vladimir', 'Software Engineer', 'Ivanov');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C09D2C0A69D40CBF47C7DF15CCB500C7', 'Oracle', 'srikalyan', 'Sr Member Technical Staff', 'chandrashekar');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('38D8D8215430BE881AFA737C77997818', 'CBS Interactive', 'Bill', 'Principal Software Engineer', 'Au');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6EE979A0A6535F5AC4EEA722A3A506A1', 'Oracle', 'Paru', 'principle memeber of technical staff', 'Somashekar');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('64A91BDBF2F82EAB184DB17F316FF82A', 'Oracle', 'Beide', 'Solution Archiect', 'Wang');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DEA0E93647B7630FC06B5556C3CEE2D3', 'Savoir Technologies', 'Jeff', 'Principal', 'Genender');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('92D0AAAC9D2D4AAD81F43D97B7CCFBA3', 'Savoir Technologies', 'Carl Johan Erik', 'Senior SOA Architect', 'Edstrom');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('59C87335087F079C18B9A9663129D1AA', 'Discursive', 'Tim', 'Consultant', 'O&apos;Brien');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6A0F5FD54EBCF0D7BF0FB3125730E2CC', 'simpligility technologies inc.', 'Manfred', 'Founder/Owner', 'Moser');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('B2BC9DC2E65217C5F774B9ADEFE373D7', 'Oracle', 'Yong', 'Software Development Senior Manager', 'Li');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('EB825E265298282688838465096B4E66', 'Oracle', 'Winston', 'Consulting Member of Technical Staff', 'Prakash');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F314C8F9BA6121BDA80DC23045A9424C', 'Edline', 'Matthew', 'Sr. Software Engineer', 'Ring');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4D3BCB987C1C992C6FA79285C6DE6263', 'Oracle Canada', 'Steve', 'Client Architect', 'Northover');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F3CD4A0E61FBF2D80C55D9B08C1E2C60', 'Oracle Czech Republic', 'Pavel', 'Senior Software Engineer', 'Bucek');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('854EAA7C4394DA8C05DB49F7B60DDD1A', 'Oracle Czech Republic', 'Martin', 'SW Development Sr. Manager', 'Matula');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('BF04D86C842C5E242DE1352B74868604', 'Oracle', 'Kari', 'Senior Member of Technical Staff', 'Hotchkiss');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('59141E864BA1236F464EF01598125D0A', 'Oracle', 'Nathan', 'Principal Member of Technical Staff', 'Lipke');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9FA8ABD5D24D53D698D85A97D9005477', 'Oracle', 'Mark', 'Master Principal Sales Consultant', 'Iskra');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7BC5AD2EB6B189D7DB25D701CAB2833D', 'RCDb', 'Doug', 'Director, Embedded Software Projects', 'Clarke');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('78B33136A862A19A90051CCA73654430', 'Vaadin Ltd', 'Joonas', 'CEO', 'Lehtinen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('9ED37AD6E3A8D4411C5B4244A2F976EB', 'Oracle', 'Mohamed', 'Principal Architect', 'Abdelaziz');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('39DBFF07BE2FD4ADB66FF717A8DDD0A8', 'Oracle Russia', 'Roman', 'Senior Software Engineer', 'Zubarevich');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('31B370BCBAEC8A557C0DEA8CB3C1B683', 'Oracle Russia', 'Denis', 'Software Developer', 'Magda');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4789FD73313756E0EB9632F7415675F8', 'VMware', 'Justin', 'Technologist', 'Murray');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('84C3D8D2FDBCD71DD407C81802D02512', 'Oracle Czech Republic', 'Martin', 'Software Developer', 'Entlicher');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F2F78B5E64495EB15C7E94ACB90008B1', 'CloudBees, Inc', 'Spike', 'Developer &amp; Architect', 'Washburn');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('F7FF171B3833C5336C9A561E09746F10', 'CloudbBees, Inc', 'Harpreet', 'Sr Director, Product Management', 'Singh');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('236520BA628C41B783020B0ACD806BD8', 'Exadel', 'Max', 'Senior Systems Engineer', 'Katz');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('8EC5B2FF18B7FF336D8C53249633A87A', 'Oracle India', 'Nithya', 'Senior Member of Technical Staff', 'Subramanian');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('925BC66C008C79FE2D60B428EAEFF6B2', 'Oracle', 'Paul', 'Consultant Member Technical Staff', 'Parkinson');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('C919A08E77ECDB54F62DCF4D59A31C2E', 'Oracle Israel', 'chen', 'Senior Developer', 'fishbein');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('15BCB0AD8F1B75C420CCB86045D24A46', 'Oracle Russia', 'Alexander', 'Engineer', 'Potochkin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('847ADF6019BBFE22E30755AFDF8CD631', 'Oracle', 'Amitha', 'Principal Product Manager', 'Pulijala');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DEA27EC094B46A647BF2D63A56DE0DDA', 'Oracle India', 'Binod', 'Senior Principal Member Technical Staff', 'PG');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ADC79B1BDC6BAC776280E285524BBCD3', 'University of Southern Denmark', 'Allan', 'post.doc.', 'Gregersen');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('2C77F351EB44EF3765DCE662C41C8615', 'CloudBees', 'Michael', 'Engineer', 'Neale');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7EDEEECD0937874306E1E3C27F043137', 'Orange', 'Martin', 'Director of developer services', 'Wrigley');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('FFED93B70C070EF9893E70520A369AA8', 'Nokia', 'Risto', 'Senior Manager, Testing &amp; Device Access', 'Helin');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('093D4872E2052F82C09E649A13C60AD9', 'AT&amp;T', 'Peter', '3rd Party Developer Tools', 'Rembiszewski');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('251CA4DA7ADD77B6BECAC6DA53586DF4', 'iPROFS / Duchess', 'Regina', 'Senior Java Developer / Java Champion', 'ten Bruggencate');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('7C8E37411E727891E28E57F4E4E2F010', 'CoreLogic Dorado', 'Clara', 'Java Champion / JUG leader', 'Ko');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('DEF7C4AFA6909348496B466227A93323', 'ACA IT-Solutions', 'Ward', 'Solution Engineer', 'Vijfeijken');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('6F0BFEA8561FA12639C9CE077BE873E9', 'ACA IT-Solutions', 'Guy', 'Solution Engineer', 'Veraghtert');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('ACBE57239924952E378E3AC17C0F9160', 'eBay', 'Ron', 'Sr. PD Manager, Kernel Engineering', 'Murphy');
INSERT INTO CONFERENCE.SPEAKER (ID, COMPANY, FIRSTNAME, JOBTITLE, LASTNAME) 
	VALUES ('4E25C32FA8B8826D59725DEEDB3F42AD', 'luminis', 'Karl', 'fellow', 'Pauls');

INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('01D623F6DD592F8D6480EF695A1DBD12', '25362');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('91D5FA2D80E65B4A6225FEEF5C73B679', '25362');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('196D92B514EB09EE20D1C550553525FF', '24566');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AA00B2E21436AF399997C79A20D5F0DE', '24566');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('102E4CAC224A1908A759A7BDF32A920E', '24569');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A9E0DBC9332F70118AA830971A6EB4CB', '24569');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D55F09398E5E77E64A7B7828CB111779', '17960');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('95A7195EED51385E7030D08D7A317B16', '17960');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('73648AB115C4E5D93A30F56D6D63DE26', '26200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B6C758BE44E940905A9AA3355188098C', '26200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F506035D9F1A50B076FBED9C6047072C', '25781');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C974C910FAFD392EAE57233046C0ED48', '22080');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9617ED967102354DA41E590F96C83B04', '22080');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AAA174DD12294A9813041FF5FEF4384A', '24349');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5C5E98534D959AAF1AC150770DD5B943', '24349');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D9DACC10B0DD1FA7691D2DBE93C83B50', '24350');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('53148DAB938A236D730577C5BA645B2A', '23422');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7108C4BA77081C84DF544E53305791E0', '24313');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5FC72B9AD7879CFCDA535D081917F79A', '24313');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('007792F462BD9C752A4F1784BC3FCC3C', '25880');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2E3D7B6C0252FA9D0404F7133EE1238A', '22800');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0482177ABF7360DC07C2C93630A16094', '22800');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0C0E1BBAECB628B20AA355E050CC795', '23647');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2B16689291E687B67281F0E6EBF719B6', '23647');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F8FE7B3291FE1A891AA3C1A8D9CABB80', '23647');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5A48752490CBBCB7B2E3DD97A4F50C35', '33961');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FE269EC7B36779DABC51C12F6B69C4FB', '23481');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('525C09CEF20A71398F9C7A958DCFC18C', '23481');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F0CA70127140642CFA25DB7BB8D121B9', '23481');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('36A40981C2F76809DF552065EE4BA7A7', '23481');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CC7A48683E5D8B3E5DD284F0927D04C3', '25295');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E3257D71764008A697FC8218A3D3E426', '25295');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D55F09398E5E77E64A7B7828CB111779', '22021');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('95A7195EED51385E7030D08D7A317B16', '22021');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F7879F17781C4767D7F36CA6E851DE6F', '21685');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('80E41F473F6919BEAB68788375F6312B', '25029');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8FEF73E2C330B96D2D55EF6E602793EB', '25147');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9B4239F72313EE80D1B69FEB0979ABBE', '23346');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D704F8ED92A5BBA581BA5E2CA6530D02', '23346');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D8783A58E2F5A3016B444F87A0526F2B', '24401');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AB39FAC50B25B07A260749DED00FA5F4', '24401');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('33BDE272B24170730AD1DC07F71BC9FD', '24580');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F8FE7B3291FE1A891AA3C1A8D9CABB80', '24580');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('58D01EC3E4D26A37D27A121BDFF0E766', '24580');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EAA0EBA4689C54615CDB6204AF48491E', '25124');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('362CF0372943EF0BD843670DB1CA09B5', '22723');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('56632ED47742A3FCAFBC0099F21A9168', '23923');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6C01E171E05931C42969C9FECC577350', '24741');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('41A5DF1CB8C50EBEF83F9802C0D73F20', '24741');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5ED89D6F24DFFD51C456C30DDFA57CF2', '25297');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('50459825D66ED5E6EBB0A96100833E18', '22481');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F3CE419F9CF1240397BD83F9C4B783DD', '22481');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1EAEBE4D6480A6D748AE46B172E49186', '24864');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BA15444F2349D3516D78468C84A061FB', '24864');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0C0E1BBAECB628B20AA355E050CC795', '23645');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2B16689291E687B67281F0E6EBF719B6', '23645');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('517AAEF62D4201AA4F949B273AABD762', '24721');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6C01E171E05931C42969C9FECC577350', '24721');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('83FE4ECCC5D2B420E53A109F9F836201', '22207');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2A81E2B4ABDE945CD6E15FB726B1F203', '22207');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A941A00AF553CDA6C6EABB4E5F36C414', '23380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('508A819E177E9AC86FB99FF5A04FFFA1', '23380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('78A7B3E6567774A08946650B74D74C73', '24312');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6DF7A5FD03F59DA17937447838FE853C', '26501');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('13BDBC6734B2F2908263DD23368AE76A', '24541');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0C0E1BBAECB628B20AA355E050CC795', '23641');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2B16689291E687B67281F0E6EBF719B6', '23641');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('72FD103219F15AA837D8D367C1781244', '23166');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EA6B542CF9A2F8D4BD94D9414DFA042B', '24632');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E6B9C4FF3422D40B85DD3A2DA1552688', '24632');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B195F3D3A1C26F3EC979E1DD434D44F4', '23200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0FA7831842B748C6D537E3F923430727', '23200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8F6BEFC14C73663DA588288D6CC7CDF3', '25121');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4BE50678423DF0E879EB18A2EDB8D59A', '21301');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('763164155B4807B69238D730D68B9B2F', '21301');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C63EFAE695D27F9A887D0A1A3250F805', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C15511BF4CB81787A3DD2D82DCFE0462', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BB89EAF419FC2F12C7DA7BD86AB80BC5', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C18AA83EDA63A448A2A0230BCA68EDCA', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AAAA7BFB3F59E016A22D2E0D2693A7BD', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F506035D9F1A50B076FBED9C6047072C', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A27EF037F6E3FC7140EF282D2F36BE95', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('27F2567B95E9873006056134FF59E808', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4B2084D17A3B2D5DDA529AB15EC753A6', '25148');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8F6BEFC14C73663DA588288D6CC7CDF3', '24962');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BF52E8521A08A484E7D67B153FA399F', '24962');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('89BA320BB02A592B292628FEB41647B3', '24354');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EAA0EBA4689C54615CDB6204AF48491E', '25241');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D7486F906E1DC3371510A89F2986D60D', '21761');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9978DCA633B6A08FE8DDA9572245C0C7', '21761');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F1983402BD78B1717966721F6E25CD4B', '22840');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4A9CDFF4FE60CBCA97982D2A1A296E8E', '24643');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('89BA320BB02A592B292628FEB41647B3', '24353');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8100E255400EEB37A68A1179AD4610BA', '24353');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E4F9C29BA97755B2871156F4996DBA6B', '24881');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('55823355CABCF96075FCA16696F77742', '19860');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('15310CBDAD7F87658A6D4BEAED02A576', '23648');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6D917EE06D4DFF5BC0FC9914E5041676', '21920');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('096DF0175B95B5DD760D7D5F31B26A59', '22122');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D55F09398E5E77E64A7B7828CB111779', '22122');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('552F8E246FDC05629C0A1650CBCE305F', '25123');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('84079BEC74C06FCFC27BE051E3C13E09', '25123');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CA5B0188EF93A52C15ECFFB45936E67E', '25215');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5052EE424536A5324A16D24C22FDAA18', '22102');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('83CD86D75CF66AE547D3B481E3E9BA17', '22102');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E33EC4A7597A08E8E8541DC4DAB47EE5', '38260');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2DE2042C087E0FD3BAA4474A4E89F86A', '38366');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0169CE71012C0CA0A37813E23F6EE0A0', '24467');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A680B3F2A2A4A23B3D6C7950E20EBD43', '24467');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('56632ED47742A3FCAFBC0099F21A9168', '24034');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9E8135AD2BD4BCF4902A4F95C5E48705', '18183');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9DFEFAA767A8A9CB7544D34FCE3886E2', '18183');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6B2DE380B3ABA46D16994A60BB065B67', '22721');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FFD092E62BB55AE03F3EDC96A6EEEA11', '22721');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C18AA83EDA63A448A2A0230BCA68EDCA', '25097');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1EAEBE4D6480A6D748AE46B172E49186', '23880');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BA15444F2349D3516D78468C84A061FB', '23880');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B86AFF230EB08D9FDE4723FD04A0F678', '18020');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('476CDF54315BE4268CAFC7ED8365FCA0', '22681');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ADD2071EC2ACEA2B0FFE6E95D7AE05EA', '24940');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A45D9732C0925DE8FA59C4F64EA431C3', '25041');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('00F04A606A56725A72C5D53DF8FAF71E', '25063');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('909111A1754161268B34BA349105843D', '25063');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3B3E9E88FF23082CC1D5834ABA0865A3', '19623');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('52DA3506F54ADDAA30029C0DD9C5826E', '19623');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('661390EC56420C52703772AFFD6FBE5B', '19623');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('689043A978A585D651B3B1415D6AAABD', '22820');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9B2A48C92D76DC0EC4DF8AB0FB73D071', '22820');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DE25139C538A15CD38B1377FAA457DE9', '22741');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CD5093D20B2CAFC6E1ACEEB0BCCC2000', '22741');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2E1751C5634FC8FF8468A340D471F567', '22741');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C0233B4D29D614FB38D74516D146C4FC', '22741');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6B2DE380B3ABA46D16994A60BB065B67', '24502');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E811BC02BC3013DCBB2492D56BD980ED', '24809');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5632B94FE7FEF271372C89938AAD2100', '24809');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A1F3DCD63D487F22233AFA24A52DE16B', '24081');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FB657AF971234884FA0D058185724D54', '17581');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EE8663071970D38CAC7E2A68F771842E', '17581');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BF97338FA58355DF211AE8412D62A320', '23320');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('80FE935C8BFC4A3DA249A1D5C9B6282C', '23321');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('54F75F13CBA5D3A9CBA5AF1FC3EE6C8E', '29621');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8FAFB3E6CA579793681C0FE055B50034', '29621');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('45B7A6153591AE10029D2E66F190F151', '29621');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9617ED967102354DA41E590F96C83B04', '29621');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('54F75F13CBA5D3A9CBA5AF1FC3EE6C8E', '29643');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BBA088B37B9A2FBEB5D7AAF712A1FA3', '29643');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9CD13C520138C052349E88E30162AB27', '29643');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CA5B0188EF93A52C15ECFFB45936E67E', '20181');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F8FE7B3291FE1A891AA3C1A8D9CABB80', '20181');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BF97338FA58355DF211AE8412D62A320', '19720');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F4163A6F1D8DBDA80C89A0A467E27F80', '19720');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('78A7B3E6567774A08946650B74D74C73', '19720');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DA0F5D1410060FF6D6951090CA05CFA1', '24802');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('66728081ACE7A224C8CDE23D3AD45569', '24802');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('46BABCA1117488287DF30A7ED959D224', '25045');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6994C6B9F2FAE0CC8B0A7BCC88A5BCF7', '25045');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('94FF8BC49778A726651016485DA6D11F', '24280');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6994C6B9F2FAE0CC8B0A7BCC88A5BCF7', '26503');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6D328CAE67D8A84A2881E364C5615FFB', '26503');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D92BF0B7B591D11FC713C21AC19AA28D', '28500');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('881D287B81D42286454EB5ABA5831FB8', '28500');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('87A140263453B51770E967C9CB42C0B9', '24341');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4CB86B915F697EFA11C08C2CA2D7036F', '22220');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CB7F427F57BDEFD8FAF4A0D9ED89C788', '22220');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E6464CBBA1B1BFA2C2B59CDFD56381C3', '23000');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0E1C27BDD16243FDE12AE3E5608465EA', '24085');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('02E62860AA4251BF3DF1D45337288050', '25028');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DB619145BE021AC18415734157FB3B28', '25200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AAAA7BFB3F59E016A22D2E0D2693A7BD', '25200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A27EF037F6E3FC7140EF282D2F36BE95', '25200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A27EF037F6E3FC7140EF282D2F36BE95', '25186');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C18AA83EDA63A448A2A0230BCA68EDCA', '25201');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AAAA7BFB3F59E016A22D2E0D2693A7BD', '25201');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DB619145BE021AC18415734157FB3B28', '25201');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A27EF037F6E3FC7140EF282D2F36BE95', '25201');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6834C4DF1ACDC1BBC8D5D80C1D133CDD', '27400');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C18AA83EDA63A448A2A0230BCA68EDCA', '27400');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('75D5BBE7B86192F1673E0B1D446B818B', '20320');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4D91E21B8381021199CA78EFA76C6F5C', '20320');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('16E8FEE2F7CAFCE71C9796C7BC4EC6FF', '25101');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('183141919AF758EC86CD176399DF1009', '23452');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CBD255C812F217A4E249708A8415CA30', '23452');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BD823CD27B2B07526F837188E7B1759', '23452');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('820F8537B1FBFAD26D321C7D4B73064E', '23452');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9AFD9F50BE6D5986658EAA6BCF8709EC', '23452');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2EAA1E3BBB93F733B6D94DEF0CA4DB4E', '23452');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('95A7195EED51385E7030D08D7A317B16', '19940');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F108BA21E8741CF5EA871CBEF7759647', '24440');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B606412555A926EB399FEC9343BC28ED', '24808');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0D73861EB08A63646C2F0FCA4F9D3BB4', '24808');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('44B12C1263601FB9D168810FBF06302D', '23813');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CB199BA979364C6D793F1A2FED893BFF', '23813');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DF60EE96241E03B38238EB20A3E79778', '25060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D9E9C6797EEE2CA9E7B29E49296AEC4E', '25940');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EC4AEAE042FDD5F8A6354A3EC11A6E11', '23600');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EAA0EBA4689C54615CDB6204AF48491E', '23600');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7ABF11D7EA346CD5CFFFF2F980BDBB31', '25293');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7C44B2F80B9CD1F52987A194BBEDCE98', '25293');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('55A5C53C33BFF0074B5B9DC8F1C7AA61', '37260');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B0E2ED125BBFDCE80AF075A812062122', '24609');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1EC0FE2A966B6D68DCE96D7E3BB044AF', '24609');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3C4ED0682783483EC7F8107C1FDF331E', '22320');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('45B7A6153591AE10029D2E66F190F151', '21622');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('51F15C853C6C67020F2A6CE6ABB38730', '24820');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7EEF862E4313697A9A5A0B5B291BE60E', '24800');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('770FC0E8327C80AD823C8BD852F4387F', '21881');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F9B854BB01854E6BADE01356D58CB8C3', '29680');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AB2C21D73D9E0D80083374A9AF41AF3B', '22060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('16784C6D2D015E1A54D96E5FB8FA5164', '22060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4F1EE76834BFF067C9E2C189F01281B2', '22060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('51A071986AB30D62C83CC254E9F98F69', '22060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B7C2EF1D84E6CBF791C0AA044CA4D02B', '22060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7862737AE04ADDC60F3B63BCF8A11BBF', '25164');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A9C4495860849AF92C7B2C8D246EC8A1', '25164');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('182B8A56C0BFC5EE81DE7CFDBE280DC6', '21300');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BE455CB24A6B602347C8FBABAB9AD3EF', '21300');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E07812DF861B264D00EDCE6A80A05213', '20861');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A3B4AEE8B5FB8E862BBFFD3ADC52247C', '25261');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('336612B8993438B2EA27356F9E6A8E98', '24606');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AF984788B44B22FDD063065CD640B097', '25361');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0AD339ECE026994FD50785D851418C2', '25361');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CF7B34EA12400CC43415AAB61C7C7B06', '24925');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('18136C3158CAE755021644ED84FF30B9', '24925');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D8BCCE1A20E696E51C4AE9FAB91261D9', '22704');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E811BC02BC3013DCBB2492D56BD980ED', '24805');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5632B94FE7FEF271372C89938AAD2100', '24805');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BD823CD27B2B07526F837188E7B1759', '24027');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('56632ED47742A3FCAFBC0099F21A9168', '24027');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BB89EAF419FC2F12C7DA7BD86AB80BC5', '23832');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BF60794DA9632980BF8CDCB31E6E390F', '23832');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1FE745F74DC0F47F1C0130E9A91145EE', '23832');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B1C59A4E1294A1DC944BB219EE32A41A', '22585');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D9075A8EE1EFDFA5F5867F559BA7FEE3', '24101');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FFD092E62BB55AE03F3EDC96A6EEEA11', '24101');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('04112E1DB218881F85C5B6A42BE40998', '22742');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B9FAA4ABADA8EF6B3DBBD9966F07C883', '26260');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5FCBBDAC15EDB78DAF39E85FBF71DA61', '23449');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DAF13A575FD4A48F1E1511C3B9F162A8', '23449');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('541EE185893B519A5A2633617C1197BF', '24543');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D7BEB854BC426FF0BC11CBC49EEDA658', '24543');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7F66F2DF9687F64A65A92562236B75A7', '24200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EFC838144E7F623B9B6EBB3A9CEF3A87', '24200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E78A6EF9256916604968D3BA5DE25ACC', '24783');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8BA27D15B26B6121A9D12FE79385CEDA', '24844');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('15CA6020A4E40739E66C10E69ADB89B4', '24844');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8AC79BE17B304CA46D683DF0B35F0E49', '20960');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('77C2646B632970C0D673C515F9CCCF6F', '20960');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4BE0972A491E0FD405CB3C293FEAA7F4', '25145');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0612344F6B663B08998777EAEC35BB47', '25145');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B993B578E993378438E85E8A5B1676B7', '40147');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1B807200B225B7541572A1BDF5728439', '40147');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FF2947DE098FFC3D1F9692E7BAA13B22', '24625');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FF2947DE098FFC3D1F9692E7BAA13B22', '24633');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('447095C1171D90D18995950F8FA61C7C', '25143');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('43C5FAA82519FFD06406EF3AFFED1A0D', '25143');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7307C02D38C12AD19CF0367B3775D191', '25180');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('769DB2CFA8D002E9FA613D4EF8EBCBCD', '19820');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8D0149C225A019064267AFE96A265D0F', '19820');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0C0E1BBAECB628B20AA355E050CC795', '25303');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('56632ED47742A3FCAFBC0099F21A9168', '25026');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3FFCE15C6791F527839E363A2E8CB9FA', '25026');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3841A6DF6F430CF13250960785E5458E', '24241');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('56632ED47742A3FCAFBC0099F21A9168', '24822');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3FFCE15C6791F527839E363A2E8CB9FA', '24822');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A01BEC2984BE2D5A94B45E5D30B15439', '25302');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B888A619301EDEBA316175BF61A23552', '25302');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8F6BEFC14C73663DA588288D6CC7CDF3', '36160');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7B8A53D519BB2C152FC9915ACFBD76A7', '36160');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BF52E8521A08A484E7D67B153FA399F', '36160');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E36BFCDBE4D8226FA953225E76357401', '37940');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3F2E52D630EF11CD6B084A8F2EDCA917', '22641');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7152802CACF0AB2484AE4B5D8BC65588', '23401');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BD823CD27B2B07526F837188E7B1759', '21688');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BF97338FA58355DF211AE8412D62A320', '23640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BD823CD27B2B07526F837188E7B1759', '23640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2BE00517F929793D581B52174B617A37', '23640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('15310CBDAD7F87658A6D4BEAED02A576', '23640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('096B8B9C7F50F18514BC58C2CBF15AFC', '24841');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DB619145BE021AC18415734157FB3B28', '24841');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3B0DB287B932A00CD02FB468E76EB479', '25171');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('653FD2C0D9B09F3DF89ACBBF9B52C1C6', '23723');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4E2239FE8D428EC02C90DD741A1F2522', '25184');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FE160E927213BD6B05EA9140C173F355', '24223');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3841A6DF6F430CF13250960785E5458E', '24223');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B3111896757BADD1DA3A6B86447C0865', '25182');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('550E4D31B27A5AE7D1B5CAD8062A8281', '22523');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1EA9F93A028690F80BE58727808082AF', '22142');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('497B0DE378CDBE43D89E60989B62F36F', '23423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('39E354CF75D08608CF41AE8FA133E233', '23423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('45B7A6153591AE10029D2E66F190F151', '23423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F8FE7B3291FE1A891AA3C1A8D9CABB80', '23423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0F8FBF727D734DA1E874D65805EB928E', '23423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F7879F17781C4767D7F36CA6E851DE6F', '23423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('986548DD424B3AFA302E155808E39AD2', '17300');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5738CC998B3CD7E0A7C32BB1977F3817', '25222');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('78A7B3E6567774A08946650B74D74C73', '24308');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('90BC14D1E31E91DDF50B8D1E2455A9A6', '24860');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9D2BCD3A6E2C353633DBD578C73EC2FE', '24789');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C09D2C0A69D40CBF47C7DF15CCB500C7', '24789');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('38D8D8215430BE881AFA737C77997818', '18246');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6EE979A0A6535F5AC4EEA722A3A506A1', '23621');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C974C910FAFD392EAE57233046C0ED48', '23621');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('336612B8993438B2EA27356F9E6A8E98', '23457');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('64A91BDBF2F82EAB184DB17F316FF82A', '26060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('648BCE984C0D9BE9B357F53C2CD7370D', '22040');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DEA0E93647B7630FC06B5556C3CEE2D3', '26521');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('92D0AAAC9D2D4AAD81F43D97B7CCFBA3', '26521');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A3B4AEE8B5FB8E862BBFFD3ADC52247C', '25212');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('59C87335087F079C18B9A9663129D1AA', '21040');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6A0F5FD54EBCF0D7BF0FB3125730E2CC', '21040');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CD19F5647B5CD2AF3657B92728886718', '25010');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B2BC9DC2E65217C5F774B9ADEFE373D7', '25010');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6D8BF1C96908DFAF47C5A1A3A1A92A0D', '25010');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EB825E265298282688838465096B4E66', '25010');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F314C8F9BA6121BDA80DC23045A9424C', '22382');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1EA9F93A028690F80BE58727808082AF', '22121');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4D3BCB987C1C992C6FA79285C6DE6263', '22123');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('476CDF54315BE4268CAFC7ED8365FCA0', '22123');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F3CD4A0E61FBF2D80C55D9B08C1E2C60', '24761');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('854EAA7C4394DA8C05DB49F7B60DDD1A', '24761');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BF04D86C842C5E242DE1352B74868604', '21740');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('59141E864BA1236F464EF01598125D0A', '21740');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9FA8ABD5D24D53D698D85A97D9005477', '25081');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7BC5AD2EB6B189D7DB25D701CAB2833D', '25081');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('78B33136A862A19A90051CCA73654430', '24480');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9ED37AD6E3A8D4411C5B4244A2F976EB', '24924');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('39DBFF07BE2FD4ADB66FF717A8DDD0A8', '22101');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('31B370BCBAEC8A557C0DEA8CB3C1B683', '22101');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4789FD73313756E0EB9632F7415675F8', '21860');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('84C3D8D2FDBCD71DD407C81802D02512', '22780');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9617ED967102354DA41E590F96C83B04', '23283');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('550E4D31B27A5AE7D1B5CAD8062A8281', '23283');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9B4239F72313EE80D1B69FEB0979ABBE', '23361');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D704F8ED92A5BBA581BA5E2CA6530D02', '23361');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A3B4AEE8B5FB8E862BBFFD3ADC52247C', '25291');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FFA8BF90B3C1EEDBA10F98115965FFD8', '23702');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F2F78B5E64495EB15C7E94ACB90008B1', '25083');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F7FF171B3833C5336C9A561E09746F10', '25083');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('236520BA628C41B783020B0ACD806BD8', '25102');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8EC5B2FF18B7FF336D8C53249633A87A', '23442');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('925BC66C008C79FE2D60B428EAEFF6B2', '23442');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('94FF8BC49778A726651016485DA6D11F', '24262');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('51A071986AB30D62C83CC254E9F98F69', '23940');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F3CD4A0E61FBF2D80C55D9B08C1E2C60', '24607');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C419ABBE0A691446C3E4FC3227878F38', '24607');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C919A08E77ECDB54F62DCF4D59A31C2E', '24026');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0CE4475329F4057A14BD5775739791AB', '24026');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CB7F427F57BDEFD8FAF4A0D9ED89C788', '22261');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C15511BF4CB81787A3DD2D82DCFE0462', '24624');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('476CDF54315BE4268CAFC7ED8365FCA0', '24624');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('15BCB0AD8F1B75C420CCB86045D24A46', '24624');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('847ADF6019BBFE22E30755AFDF8CD631', '24327');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DEA27EC094B46A647BF2D63A56DE0DDA', '24327');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F108BA21E8741CF5EA871CBEF7759647', '24310');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BD823CD27B2B07526F837188E7B1759', '24061');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ADC79B1BDC6BAC776280E285524BBCD3', '24061');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DAE48D109D412CA38CF977E6F598AC80', '24020');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2C77F351EB44EF3765DCE662C41C8615', '25146');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7EDEEECD0937874306E1E3C27F043137', '25021');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FFED93B70C070EF9893E70520A369AA8', '25021');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('093D4872E2052F82C09E649A13C60AD9', '25021');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E811BC02BC3013DCBB2492D56BD980ED', '24804');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5632B94FE7FEF271372C89938AAD2100', '24804');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('251CA4DA7ADD77B6BECAC6DA53586DF4', '24243');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7C8E37411E727891E28E57F4E4E2F010', '24243');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DEF7C4AFA6909348496B466227A93323', '24122');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6F0BFEA8561FA12639C9CE077BE873E9', '24122');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('224BC0B4B20A3E9F824EF294F9B330DF', '23560');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ACBE57239924952E378E3AC17C0F9160', '23560');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('54F75F13CBA5D3A9CBA5AF1FC3EE6C8E', '22125');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D55F09398E5E77E64A7B7828CB111779', '22125');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4E25C32FA8B8826D59725DEEDB3F42AD', '24811');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5A48752490CBBCB7B2E3DD97A4F50C35', '30460');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8D0149C225A019064267AFE96A265D0F', '21682');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9587AB51112C1ECFD4008811BFA6AFB6', '21682');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EA0C8466E121036C4ABE192DE14BE293', '24306');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('798A04819111A4B535F118ECB38D81EA', '24306');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('007792F462BD9C752A4F1784BC3FCC3C', '24221');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BF76CAB9900C49603E103E2294654CF4', '24221');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DCE90398740A8B2B5530829E15B8B640', '24060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5EF90F558ABE2F9DC200EB7373B1982E', '24060');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('689043A978A585D651B3B1415D6AAABD', '22920');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('76B562CB7527976DF46E42ACF78959B6', '22920');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A941A00AF553CDA6C6EABB4E5F36C414', '23382');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1BCBE8F77B99AE6D688333C5E55B5ADD', '25284');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('09401E1C4CC1AA681613AB9023531134', '25284');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('51E3A14BE922D27CA72166FADD7BEFF6', '25067');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('55EE842773173590DECC1F0CA14C9905', '25067');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3CEC72A9B1484C5F599942E11FEC2AD3', '18180');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('348ADA377B3BE267DEDFC5921F85638C', '24315');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7A17E3C4CA3B86954E735AF378A73466', '24315');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B888A619301EDEBA316175BF61A23552', '25044');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('88FFD0CCE1CFC7ABF1CD1E0DFF4F21E3', '24567');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CDA7F04B19568EC95C9772173F0C18BC', '24567');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F07468E5C162D3716FC0FED2D30CD231', '22703');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('53148DAB938A236D730577C5BA645B2A', '22703');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0907E57662BA53DEE628A2E108B89758', '24780');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2B96D8EA0D4B9E1A3BD53CF6462DAC3E', '23927');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('39E354CF75D08608CF41AE8FA133E233', '23680');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('864E6DA0DAD4442EC34EB31FD5FFCF17', '25240');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ADE7FA8F451522AB5DF3CCC16515F2A6', '24466');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5FF3BD2258F6CB8126DB67DB7C3FFA4C', '24242');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C8B72283F295BE7B3ADBBD15E13ABCC7', '24242');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C0225675CA1923F5E6EBAFA82910C8E6', '24242');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('44B12C1263601FB9D168810FBF06302D', '24121');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CB199BA979364C6D793F1A2FED893BFF', '24121');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9DC58A4CF66140BB75D334A04C265514', '24301');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('769DB2CFA8D002E9FA613D4EF8EBCBCD', '20580');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FF1B74F065E317FC9B3DEAD9080F69DA', '20580');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F956ADC6147FD29D48A7AB7D58315DC7', '24641');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FBEFEDFC5673BAAEB575E8F82C15EF1E', '24641');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F3E3E345A16183F2A501E258472C95CC', '26462');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9CDB3E13790C0FCC708B8B6E15321E95', '26462');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AA1A35F35FB813C4D60F837B13C71189', '26462');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('510C86433F48A92D4CA3E57223279A9C', '24089');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('80ECA0EB515D8B44A8F492826231B1AB', '24089');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ACEEAEF6F0625D1B72F7BABED04FF091', '23459');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('986508BE14011C61B1B2636E07758DE2', '25581');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('65E23AC3BC7A099ABD6CE32172FA0FE2', '20343');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A7E38652EB253603FC31FF731C14A076', '24507');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('497B0DE378CDBE43D89E60989B62F36F', '23421');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('183141919AF758EC86CD176399DF1009', '23421');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F897A387B70C80121B6D44D55906D8FE', '23421');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E8AF5C3ED56B9067AEFE156120E8A7DC', '24423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('276135B90BEFD4BDA52A62B33A4DA025', '24423');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('47A75D17099ABA425C661114A76FA501', '23106');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('867B9A457C0574FDF98D0BC856438656', '25364');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8D0149C225A019064267AFE96A265D0F', '18540');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F7086C6959FAD9DC0DC173323F804655', '18540');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EAA0EBA4689C54615CDB6204AF48491E', '25141');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6B401A9EA39303040F3DE18B4D2F1246', '25144');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1861A9D1468DD93B1869B45E349392E1', '25144');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AC06F72B9F5144B7911358F7068C13DC', '23926');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3B57560656E14614EB1E0EE97D66775B', '22521');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('077BA88D32B8A16DEE891E6C7E1DB99E', '21801');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CA5B0188EF93A52C15ECFFB45936E67E', '25172');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('112244CFF608DE16FB95BA29FEAB4E79', '17381');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1BCA46F07378AD7520AC2350C69C7686', '25208');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2A3610B8702F2F9FE32D5286E49092D0', '25208');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('25E48C8EBD1AB59ACD52564DC6D513DB', '25088');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('07B165C1847CA14619D88EBB869BA386', '25229');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EED3AA2CEE148ED8F112AEB70855DF2D', '25260');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2466129C74EFB2308052CE94146A28CD', '25260');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CA5B0188EF93A52C15ECFFB45936E67E', '25205');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D34DF617509E406DAD84F9E748945702', '25066');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('15CA6020A4E40739E66C10E69ADB89B4', '28380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0AA6FE41C2DD18474E86B5AB1A89F3C1', '28380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3B999C40E0BC11410E7D5F886D44A588', '24021');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CA8D96E85428F0F6D116B5C67E504F3F', '22500');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2CDA7362D72A6835F4F752C222D5998F', '23509');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FAC966CD974876240EDE53CD49BDCD8F', '23509');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5A48752490CBBCB7B2E3DD97A4F50C35', '29460');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9BDCAE89C15F599A0B1700C12CABA6CB', '25002');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('85BE4DDA5B56B9FB0C218875670FC6BE', '25002');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AF8AD12905754664618643B4B967A799', '23400');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('50B5DA7CF463DD398A9C76DA9BD81737', '23400');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('78F3830469225D7DAE43C73FA9AE156A', '19941');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('54F75F13CBA5D3A9CBA5AF1FC3EE6C8E', '19941');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('508A819E177E9AC86FB99FF5A04FFFA1', '19941');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F8FE7B3291FE1A891AA3C1A8D9CABB80', '19941');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('39E354CF75D08608CF41AE8FA133E233', '19941');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('07B165C1847CA14619D88EBB869BA386', '21280');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('689043A978A585D651B3B1415D6AAABD', '23223');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CD5093D20B2CAFC6E1ACEEB0BCCC2000', '23223');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('600E329DAB74D8EB7DF553C50131422F', '25165');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('05D6C7140678111B227BEED03FD5D0FA', '25165');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6B401A9EA39303040F3DE18B4D2F1246', '25151');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('91CB03CE24CDF76465830BBE3D81545E', '25151');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2F42B67C7E117977EA8F4957378DAE03', '22580');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4BFEE5E962EC58CBEA438B8DA186DE65', '24445');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4BE0972A491E0FD405CB3C293FEAA7F4', '24445');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A5EDDAAF29CA48D5CED29A3B05CE91D4', '24621');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D6454E2515D3CC33C5BCCDE4D34EDB77', '26041');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('795A5FFB7B3687FAE58A71BC723E0FE2', '26041');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D34DF617509E406DAD84F9E748945702', '25040');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E2E1C556223E93225B0615151193BF5F', '17461');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('619F71BB70EEC8A9F80211578DB05D86', '29401');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0F5849D30928A3366C7CB2401A203DFF', '29401');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CC7A48683E5D8B3E5DD284F0927D04C3', '25290');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('684AE0D772F605E5C85393A50F3DDB33', '24321');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B51FCF15ACA15298E4E05CEEEDC57E8D', '25301');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0717D5CEEEDF55DB1A9AB552D76A5760', '25111');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C1143C94ECF7CDEC688E0158C50EF6A1', '26527');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('74F9FA98C1E1C41AAB5F7A1A76630B28', '22360');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4E0653A86F133BE771BC8D2877C3A665', '33860');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DE4B253F861825876C9CD862B5B658B6', '33860');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3A4325F950391AE53755BD53580914BB', '23240');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6994C6B9F2FAE0CC8B0A7BCC88A5BCF7', '24140');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C974C910FAFD392EAE57233046C0ED48', '24140');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D1D78B8F4D71C3941DD0DB37D26FE723', '24003');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1A04DE5A68942BAA2818185B2FCBC0EC', '23225');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0D73861EB08A63646C2F0FCA4F9D3BB4', '24788');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A870DECED9EE5DED8DE1071EFC4AB104', '25288');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BC4F768D64C6AFF6DEC5C8368425EB06', '21380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DED5E695DC74768199A93281708B1C0B', '21380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3A5190EC16C41CA9A854EF00637B41D8', '21380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C793682D8CD2184921A20BCA9ED9840C', '24980');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4B2084D17A3B2D5DDA529AB15EC753A6', '24980');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E6B9C4FF3422D40B85DD3A2DA1552688', '24980');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C419ABBE0A691446C3E4FC3227878F38', '24640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AC9F7E1F440B68FB761A6F974956A73E', '24640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8CF33AA0179565107CE16214B49F5956', '24640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DA6B28C623465E6492AB390BB3B37620', '25089');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('58C081379E91C3AAB2C1DE4CF7B84F52', '25089');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3DAB1D75F0BCF7F8B049D13609EBFAA2', '25089');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2D6B2F22620B13BD89A77A385331EF71', '25089');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0717D5CEEEDF55DB1A9AB552D76A5760', '25089');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('675B48079878CE56E86C11615D2842A8', '19120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('54F75F13CBA5D3A9CBA5AF1FC3EE6C8E', '19120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('466F3229526B8E00D107992BCFC48842', '19120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('807DC685151EA84CD7430336F5C7484F', '19120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('802671E0144D808F2F3B465D50ADDDBF', '19120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9CEA4A8165667D48E6FECC2897FBD961', '19120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0462B2F2881A497015DD339C715D60B', '23513');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9084C2420F8A83FE5098C932AECCD38F', '23513');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F07468E5C162D3716FC0FED2D30CD231', '23513');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('65EBAA16CBBC64CA4D80FACDA7A23D86', '25006');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DAE48D109D412CA38CF977E6F598AC80', '19220');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DAE48D109D412CA38CF977E6F598AC80', '19200');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AA12ADFF7A227B96B19DD7988B132761', '25299');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E65CCF0DF814A76071C832FB6DE2AAC8', '25149');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0C798C32618025242490714AB8890D30', '25149');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6616B4084BA7ED4E0B422B07871F9F71', '24722');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EB6BC2C709F8B16BB0A77462CAD08272', '24988');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('44B12C1263601FB9D168810FBF06302D', '24988');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('082C867160A931A405DFB28F70C7B6B2', '24143');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('499EF9D8E2FF1B7274D2D5B3C2604025', '23364');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B4DCCA8416B60099F8894AFD78F11510', '23364');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('62D4259F9D33B2E4026F1A363E89C63C', '23364');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('182B8A56C0BFC5EE81DE7CFDBE280DC6', '21304');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9AAB02F5F55BBD7304BE273D2D0C89E2', '21304');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CD5093D20B2CAFC6E1ACEEB0BCCC2000', '22740');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('321F077055883EEAB2C23B765E62F378', '22740');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('39E354CF75D08608CF41AE8FA133E233', '25244');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('36100975C5AC421A38682AD293E511AF', '23932');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BC4EBE62AEC2A6532B8205064CE2D04E', '24320');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('30403A7DB3A86E9F56BA46EFF3DBD570', '25061');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('72FD103219F15AA837D8D367C1781244', '23180');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0C7555C14C46832D3D27C57F981292F7', '24784');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('27112897E88E3D3605ABF225DDA52660', '20262');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BFCFEE8504EDB27DB9B0B5706BFACEBD', '37941');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8D0149C225A019064267AFE96A265D0F', '24815');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9587AB51112C1ECFD4008811BFA6AFB6', '24815');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('758E39AB161A88D02DB4648A663CAAA2', '24815');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('188E53275DD44D34595679E3776AD042', '26120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B4CBF586AB07A445849853240646B63F', '26120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('87A140263453B51770E967C9CB42C0B9', '21080');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AA4A8C57E826A0D9DFDCD5B723296CC6', '22640');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CA8D96E85428F0F6D116B5C67E504F3F', '22501');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('472A72D7CA4F03935D8404F694AA8726', '35800');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C65C38A16706F4B60845766A39393CCB', '35800');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ED5733B8E62988951C486D1B23EE0EF8', '35800');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DB619145BE021AC18415734157FB3B28', '23424');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('986508BE14011C61B1B2636E07758DE2', '22680');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('83C5F24D4C47F80C493343767519C855', '25108');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5738CC998B3CD7E0A7C32BB1977F3817', '25213');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7152802CACF0AB2484AE4B5D8BC65588', '24001');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6CE3AEA5520A3372A7E9CA2EFA10C4D6', '24582');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('39E354CF75D08608CF41AE8FA133E233', '25209');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5A48752490CBBCB7B2E3DD97A4F50C35', '32560');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ECEB6BE32596A4C0889EC89669E62F6D', '33960');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DA0F5D1410060FF6D6951090CA05CFA1', '24787');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('66728081ACE7A224C8CDE23D3AD45569', '24787');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0F8FBF727D734DA1E874D65805EB928E', '25023');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9D615A33835514F92C704728E642699E', '25023');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('648BCE984C0D9BE9B357F53C2CD7370D', '25281');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('90BC14D1E31E91DDF50B8D1E2455A9A6', '24605');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ACEEAEF6F0625D1B72F7BABED04FF091', '24002');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0C516ADF9BB0BF589141195E5D3EE3F6', '24326');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('14DF2E69F0672662D20635FB8BD5AEF2', '26280');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6A15E534BBAFC1E529D2C7A1DAC19755', '23426');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('497B0DE378CDBE43D89E60989B62F36F', '23426');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AB2C20E743EBC1D6606A9AA6569BB623', '25008');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('79D2540E7B84FAEAA51E86055DF82CAA', '19080');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FB1A678552669C1EDBD80989A4CFACE5', '20340');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0CE4475329F4057A14BD5775739791AB', '20340');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A3B4AEE8B5FB8E862BBFFD3ADC52247C', '25230');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('01D623F6DD592F8D6480EF695A1DBD12', '38352');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('95A7195EED51385E7030D08D7A317B16', '38352');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('55823355CABCF96075FCA16696F77742', '22204');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4F1EE76834BFF067C9E2C189F01281B2', '22204');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CA5342DDA5D2F6A42D8C0706A99AD807', '22204');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('51CA02B370B4EC70BBF21914581FF767', '22204');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('96EAAFB35665ADD2F663774DF12FB0CC', '22204');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0E0CF974897727FB19AA38C822B57666', '22204');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('44B12C1263601FB9D168810FBF06302D', '23805');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('78F3830469225D7DAE43C73FA9AE156A', '25360');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('71399FCB4B35AC7F9EDFA07B5A977F28', '25360');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B4A1F8B4E2171B519B01B5FE62ECDBA9', '25680');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FFA8BF90B3C1EEDBA10F98115965FFD8', '19560');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CB7F427F57BDEFD8FAF4A0D9ED89C788', '22260');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DAE48D109D412CA38CF977E6F598AC80', '19240');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3FFCE15C6791F527839E363A2E8CB9FA', '24120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BD823CD27B2B07526F837188E7B1759', '23360');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D068A5012C57B4B34AD3C1A4E61702FF', '23801');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C82981AAD05B20E7D184886DF0F0D169', '23801');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8F6BEFC14C73663DA588288D6CC7CDF3', '24821');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AF614F89BEF36DFDFE2920E85D9C00EA', '24181');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E7AB4D5C0225EB34426AA98E9A09B874', '24542');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B93465A51CD5780A48F771469A7C7EE7', '24542');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CD19F5647B5CD2AF3657B92728886718', '24563');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6D8BF1C96908DFAF47C5A1A3A1A92A0D', '24563');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4DBF70DA89A52E52C0BD1E92374928FB', '22660');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B9C4CB3767741104D9E88D0E2ECAB8D5', '22660');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1FE745F74DC0F47F1C0130E9A91145EE', '23829');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('80ECA0EB515D8B44A8F492826231B1AB', '22960');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('510C86433F48A92D4CA3E57223279A9C', '22960');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BBAC9E51CEA2DFA3416906D1F5BA38E9', '21540');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8367EA4D5DF12406DB72AFAB57DFE3CF', '24324');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FBE5F4EDAF67E7E20FE77E4FD6419672', '25087');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3A2CCD11C653E53EEA0807D93C8A7584', '25087');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0D0CE66C4B1C93E94A86F1AF485E8A3F', '25287');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D10BBA839357840B16EE210CCCDB64B1', '25287');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('51D981223319401983AAE9C99349A698', '24944');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('96C2BCBE4927CCB29F0E4DCD32B1AD3F', '24944');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9E682F3743CDC11E676BBDEBE8EA4499', '24944');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ECEB6BE32596A4C0889EC89669E62F6D', '25242');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A4FD8747E8CD26FD15F59B7A9B4F8527', '25242');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F3611387CA71EBFD86B1ADDA776C14D8', '24984');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6D328CAE67D8A84A2881E364C5615FFB', '23528');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0462B2F2881A497015DD339C715D60B', '23528');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('95149BF63DB679EF3F71C95B23A6D52B', '25860');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9EBB167A6BD11CE492D87FF1ED1EC945', '25011');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('508A819E177E9AC86FB99FF5A04FFFA1', '22480');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A33D5D41CF96A55A3ADD9CC0558C1890', '25009');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('653FD2C0D9B09F3DF89ACBBF9B52C1C6', '23720');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F506035D9F1A50B076FBED9C6047072C', '25780');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6C2AE6763E4936AA4ED5ED5327A1AA90', '24943');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FA2FDC3FD398ADE1B95FE18D8B41A2A2', '24943');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('224BC0B4B20A3E9F824EF294F9B330DF', '24441');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('98AD987EF5886A2DFF280EE7EC4A3983', '24441');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('EFC838144E7F623B9B6EBB3A9CEF3A87', '23443');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('26253018B6DF855FAECF179043AB8D01', '23443');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A5EDDAAF29CA48D5CED29A3B05CE91D4', '23941');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FE160E927213BD6B05EA9140C173F355', '24880');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B2F793960ED24D3BFA45A2EDEC2F9854', '24880');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4DBF70DA89A52E52C0BD1E92374928FB', '24880');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A5EDDAAF29CA48D5CED29A3B05CE91D4', '24880');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8FEF73E2C330B96D2D55EF6E602793EB', '18920');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('94D7AF0C881B8A67102D7D535CBE0C37', '25802');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7EEF862E4313697A9A5A0B5B291BE60E', '24742');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('43B88724F5EECE980B8C7603FAAEC724', '25013');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9B2A48C92D76DC0EC4DF8AB0FB73D071', '25013');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('DED5E695DC74768199A93281708B1C0B', '23453');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('082483DCD2C502EB983E2E491F1EAC16', '23453');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1C664F5D5A5B895EB98563A0454E43D9', '23453');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('667A5B1B634108AA90D0D2E5774F4D55', '19380');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2E8E9A7DFF2B41B99D363E10EC872A1E', '25098');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('902E3A2A33BFA70997B8D48A77AFD1C9', '25098');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('292D4EBE5158A2D5CA32F5EEF848BB2F', '25098');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('8664E66D867D82C17DDF0B43E71BE7A7', '25233');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0B5ADD252CFF312F4A7CA08E3D22DA90', '25065');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('830BF348F1BF45AE9A75C38A0672A6DA', '25065');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('45B7A6153591AE10029D2E66F190F151', '21641');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0AA6FE41C2DD18474E86B5AB1A89F3C1', '24161');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9F18AB7857F3666FB81FC4887F844A23', '24421');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('511D15999555D57A4E1EF2979AC7ABAD', '22522');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('059A7B3E15299D595DB035B4F86E60AD', '22522');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('417F062187EC93F5CFA503B1DB6C3C7B', '22522');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('D9C7956BE598469B9329D73FAE716D5D', '24100');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('BD34309C077C4D0234C22D3AA2F504CE', '24100');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('675F9ADEAE8EFB1870F0C01E54C55E78', '24346');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('498DBFC28F11FBD93934117D7AF6AB47', '22340');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('CDEDBEDD71A3B13CFA9295B354D15041', '22340');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('F2AD0E0C590C44C90C82BACD78D983C0', '22340');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('72FFF0EE3DBA4E65D1777D3BECB3B6D2', '17340');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4E624A2E0C7ED042DB05B5615AA4E6CB', '22120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('40F3E67A870F6A115DE5A384E2F675A4', '22120');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6B0FCE73E7BFE21E9AEC8E23174F20AA', '39041');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0D1F0A5DCE0631651E3AF967DA0C7587', '24926');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FF2947DE098FFC3D1F9692E7BAA13B22', '25363');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('E5BE8BAC90D769BF66CBE35899D337B4', '25363');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5BA553ADC8D88E7746C2CDAD3D1BC9F6', '24102');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FF2947DE098FFC3D1F9692E7BAA13B22', '24682');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FFD092E62BB55AE03F3EDC96A6EEEA11', '22700');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('6B0FCE73E7BFE21E9AEC8E23174F20AA', '39044');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('9587AB51112C1ECFD4008811BFA6AFB6', '24029');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('769DB2CFA8D002E9FA613D4EF8EBCBCD', '24029');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3179789607C67A78B7C0395B057F5C92', '24923');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3179789607C67A78B7C0395B057F5C92', '24981');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0612344F6B663B08998777EAEC35BB47', '24521');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4BFEE5E962EC58CBEA438B8DA186DE65', '24521');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('4BE0972A491E0FD405CB3C293FEAA7F4', '24521');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AA49C0034BD492DF89DA860FB1E139CC', '24355');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0D1F0A5DCE0631651E3AF967DA0C7587', '24355');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FF2947DE098FFC3D1F9692E7BAA13B22', '24642');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('552F8E246FDC05629C0A1650CBCE305F', '24685');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('5A2E547396FC504ECFE75F150A744DCB', '24966');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('C63EFAE695D27F9A887D0A1A3250F805', '24966');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('986508BE14011C61B1B2636E07758DE2', '24162');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('3B999C40E0BC11410E7D5F886D44A588', '24022');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('1FE745F74DC0F47F1C0130E9A91145EE', '23828');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A0C0E1BBAECB628B20AA355E050CC795', '30440');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('A3B4AEE8B5FB8E862BBFFD3ADC52247C', '30440');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('2071143B65B247D7468664F171F5141C', '24701');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('33D6CC2A85C8FB52A05C4E2D95D16425', '24701');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('7229BEFF3C4EB53AD1EF871A73EEF86B', '24328');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('ABA78DA39725BBCC0E414D9BD49F97E1', '24328');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('AB223E041E33A9F7AFC76E5A5929852E', '24328');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('B451AEB29B2455DCFA42A23A67AAA845', '29400');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('0AAAB8DFF8E0CAA1B4DB90B124812E1B', '39540');
INSERT INTO CONFERENCE.SEZZION_SPEAKER (SPEAKERS_ID, SESSIONS_ID) 
	VALUES ('FF2947DE098FFC3D1F9692E7BAA13B22', '25362');




