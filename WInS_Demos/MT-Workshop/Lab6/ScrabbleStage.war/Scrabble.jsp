<!DOCTYPE html>
<!-- Copyright (c) @COPYRIGHT_CURRENTYEAR, Oracle and/or its affiliates. All Rights Reserved.-->
<%@ page import="javax.naming.Context,
                 javax.naming.InitialContext,
                 java.lang.System,
                 java.io.PrintWriter,
                 java.util.Enumeration,
                 javax.management.MBeanServer,
                 javax.management.ObjectName" %>

<%!
  String serverName;
  String failoverMessage="";
  private static final String PREFIX_LABEL="SessionServlet.";

  private String getServerName() throws Exception {
    try {
      Context ctx = new InitialContext();
      MBeanServer mbeanServer = (MBeanServer)ctx.lookup("java:comp/env/jmx/runtime");
      String runtimeServiceName =  "com.bea:Name=RuntimeService,Type=weblogic.management.mbeanservers.runtime.RuntimeServiceMBean";

      // Create Objectname for the runtime service
      ObjectName runtimeService = new ObjectName(runtimeServiceName);

      // Get the ObjectName for the ServerRuntimeMBean ObjectName
      ObjectName serverRuntime = (ObjectName) mbeanServer.getAttribute(runtimeService,"ServerRuntime");

      // Get the name of the server
      String serverName = (String) mbeanServer.getAttribute(serverRuntime,"Name");        
      String serverVersion = (String) mbeanServer.getAttribute(serverRuntime,"WeblogicVersion");        
      if (serverName == null) return "";
      else return (serverName + " (" + serverVersion + ")");
    } catch (Exception e) {
      throw e;
    }
  }

  private String removePrefix(String name) {
    if (name.startsWith(PREFIX_LABEL))
      name = name.substring(PREFIX_LABEL.length());
    return name;
  }

  private String addPrefix(String name) {
    if (!name.startsWith(PREFIX_LABEL))
      name = PREFIX_LABEL + name;
    return name;
  }
%>

<html>
<head>
  <meta name="description" content="Oracle WebLogic Server">
  <meta name="keywords" content="Oracle WebLogic Server">
  
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- This is the main css file for the default Alta theme -->
  <link rel="stylesheet" href="css/libs/oj/v2.0.0/alta/oj-alta-min.css" type="text/css"/>

  <!-- RequireJS configuration file -->
  <script data-main="js/main" src="js/libs/require/require.js"></script>
  
  <script type="text/javascript" src="js/libs/oj/v2.0.0/debug/oj.js"></script>
  
  
  <title>Zero Downtime Patching Demo - Scrabble Example - Stage Mode - Version 1</title>
  <link rel="stylesheet"
        type="text/css"
        href="wls_examples.css"
        title="Oracle WebLogic Server">


    <script type="text/javascript">
    //<![CDATA[

  require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
    function(oj, ko, $) // this callback gets executed when all required modules are loaded
    {
      function ChartModel() {
          var self = this;
          
          /* toggle button variables */
          self.stackValue = ko.observable('off');
          self.orientationValue = ko.observable('vertical');
          
          var barSeries;
<%
      Enumeration graphNames = session.getAttributeNames();
      String graphName;
      if(!graphNames.hasMoreElements()) {   
%>          
          /* chart data */
          barSeries = [];
                           
<%
      } else {
        int i = 0;
    while(graphNames.hasMoreElements()) {
        graphName = (String)graphNames.nextElement();
        if (!graphName.startsWith(PREFIX_LABEL)) continue;
        if (removePrefix(graphName).length() < 1) continue;
%>
<%
      if (i > 0) {
%>
,
<%
          } else {
%>
      barSeries = [
<%
      }
%>      
      {name: '<%= removePrefix(graphName) %>', items: [<%= "" + session.getAttribute(graphName) %>]}
<%
          i++;
        } // end of while loop for session names
%>                           
      ];
<%
      } // end of else
%>                                
      self.barSeriesValue = ko.observableArray(barSeries);
      }
      
      var chartModel = new ChartModel();
      
      $(document).ready(
    function(){
              ko.applyBindings(chartModel, document.getElementById('chart-container'));
    }
      );
    }
  );
    //]]>
    </script>


</head>

<body bgcolor="#ffffff" link="#3366cc" vlink="#9999cc" alink="#0000cc">

<!-- top intro paragraph tables -->
<!-- RED LINE -->
<table cellspacing="0" cellpadding="0"  border="0" width="100%">
  <tr>
    <td  width="100%" bgcolor="#ff0000" height="1">
      <p class="small">&nbsp;</p>
    </td>
  </tr>
</table>


<!-- TITLE -->
<table border=0 cellspacing="18" cellpadding="0">
  <tr>
    <td valign="top">
      <a HREF="http://www.oracle.com"><IMG SRC="images/oracle_logo.gif" alt="Oracle Logo" border="0"></a>
      <h3>Zero Downtime Patching Demo - Scrabble Example - Stage Mode - <span style="color: green;">Version 1</span></h3>
      <h4>Illustrating session replication and continuous serviceability</h4>

    </td>
  </tr>
</table>

<!-- RED LINE -->
<table cellspacing="0" cellpadding="0"  border="0" width="100%">
  <tr>
    <td  width="100%" bgcolor="#ff0000" height="1">
      <p class="small">&nbsp;</p>
    </td>
  </tr>
</table>

<!-- EXAMPLE CONTENT -->
<table summary="EXAMPLES_CONTENT" border=0 cellspacing="18" cellpadding="0">
  <tr>
    <td valign="top">


<%
  try {
    serverName = getServerName();
%>
      <p>
      This Zero Downtime Patching Demo uses a JSP to demonstrate
      the use of replication of a session in memory, using an OTD load balancer front end.
      An end-user client adds or deletes words to a session.  The words are scored according to the rules of
      a popular board game and then displayed in the table.
      <i>Server affinity</i> allows WebLogic Server to retrieve the same session the next time the client visits the page.
      </p>
      <br>
    <br><br>
      <p>The server currently hosting this session is <B><%= serverName %></B><%= failoverMessage %></p>

<%
      if (request.getParameter("AddValue") != null) {
        String nameField = request.getParameter("NameField");
        if (nameField != null && nameField.trim().length() > 0) {

          String word = nameField.trim();
          int score = 0;
          char[] letters = word.toLowerCase().toCharArray();
          char letter;
          for(int i = 0; i < letters.length; i++) {
              letter = letters[i];
              switch(letter) {
                 case 'a': 
                 case 'e': 
                 case 'i': 
                 case 'l': 
                 case 'n': 
                 case 'o': 
                 case 'r': 
                 case 's': 
                 case 't': 
                 case 'u': 
                           score +=1;
                           break;
                 case 'd': 
                 case 'g': 
                           score +=2;
                           break;
                 case 'b': 
                 case 'c': 
                 case 'm': 
                 case 'p': 
                           score +=3;
                           break;
                 case 'f': 
                 case 'h': 
                 case 'v': 
                 case 'w': 
                 case 'y': 
                           score +=4;
                           break;
                 case 'k': 
                           score +=5;
                           break;
                 case 'j': 
                 case 'x': 
                           score +=8;
                           break;
                 case 'q': 
                 case 'z': 
                           score +=10;
                           break;
              }
             
          }


          session.setAttribute(addPrefix(nameField.trim()),score); 
        }
%>
    <script type="text/javascript">
    //<![CDATA[
          window.location = window.location.href;
    //]]>
    </script>
<%
      } else if (request.getParameter("DeleteValue") != null) {
        session.removeAttribute(addPrefix(request.getParameter("NameField").trim()));
%>
    <script type="text/javascript">
    //<![CDATA[
          window.location = window.location.href;
    //]]>
    </script>
<%

      }
%>
      <br>

      <center>
         <div id='chart-container'>  
       <div id="barChart" data-bind="ojComponent: {
                component: 'ojChart', 
                type: 'bar', 
                orientation: orientationValue,
                stack: stackValue,
                series: barSeriesValue, 
                groups: ['Powered by Oracle JET'],
                animationOnDisplay: 'auto',
                animationOnDataChange: 'auto',
                hoverBehavior: 'dim'
            }"
             style="max-width:500px;width:100%;height:350px;">
       </div>
     </div>

      </center>

  <br>

<center>
<form method="post" name="Session" action="Scrabble.jsp">
  <center>
  <table border="0" cellspacing="2" cellpadding="5" width="400">
    <tr>
      <td>Word to add/delete: <input label="ddd" type="text" name="NameField"></td>
    </tr>
    <tr>
      <td align=center> 
        <input type="submit" value="Add" name="AddValue">
        <input type="submit" value="Delete" name="DeleteValue">
      </td>
    </tr>
  </table>
  </center>
</form>
 
</center>

<%
  }
  catch (Exception ex) {
    ex.printStackTrace(new PrintWriter(out));
  }
%>

<%@ include file="ExamplesFooter.jsp" %>

