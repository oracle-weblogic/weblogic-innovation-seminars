<!DOCTYPE html>
<!-- Copyright (c) @COPYRIGHT_CURRENTYEAR, Oracle and/or its affiliates. All Rights Reserved.-->
<%@ page import="javax.naming.Context,
                 javax.naming.InitialContext,
                 java.lang.System,
                 java.io.PrintWriter,
                 java.util.Enumeration,
                 java.util.Vector,
                 javax.management.MBeanServer,
                 javax.management.ObjectName,
                 patching.SessionCompat" %>

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
  
  
  <title>Zero Downtime Patching Demo - Scrabble Example - Stage Mode - Version 2</title>
  <link rel="stylesheet"
        type="text/css"
        href="wls_examples.css"
        title="Oracle WebLogic Server">


  <style>

.textbox { 
    border: 1px solid blue; 
    -webkit-border-radius: 30px; 
    -moz-border-radius: 30px; 
    border-radius: 30px; 
    outline:0; 
    height:25px; 
    width: 175px; 
    padding-left:10px; 
    padding-right:10px; 

    transition: box-shadow 0.3s, border 0.3s;
  } 
.textbox :focus,
.textbox .focus {
  border: solid 1px blue;
  box-shadow: 0 0 5px 1px #969696;
}


.button {
   border-top: 1px solid #96d1f8;
   background: #2743cf;
   background: -webkit-gradient(linear, left top, left bottom, from(#416afc), to(#2743cf));
   background: -webkit-linear-gradient(top, #416afc, #2743cf);
   background: -moz-linear-gradient(top, #416afc, #2743cf);
   background: -ms-linear-gradient(top, #416afc, #2743cf);
   background: -o-linear-gradient(top, #416afc, #2743cf);
   padding: 5px 10px;
   -webkit-border-radius: 8px;
   -moz-border-radius: 8px;
   border-radius: 8px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: white;
   font-size: 14px;
   font-family: Georgia, serif;
   text-decoration: none;
   vertical-align: middle;
   }
.button:hover {
   border-top-color: #47aaed;
   background: #47aaed;
   color: #ffffff;
   }
.button:active {
   border-top-color: #1b435e;
   background: #1b435e;
   }



  </style>

  <style>
.RuleTable {
  margin:0px;padding:0px;
        width: 180px;
  box-shadow: 10px 10px 5px #888888;
  border:1px solid #000000;
  
  -moz-border-radius-bottomleft:0px;
  -webkit-border-bottom-left-radius:0px;
  border-bottom-left-radius:0px;
  
  -moz-border-radius-bottomright:0px;
  -webkit-border-bottom-right-radius:0px;
  border-bottom-right-radius:0px;
  
  -moz-border-radius-topright:0px;
  -webkit-border-top-right-radius:0px;
  border-top-right-radius:0px;
  
  -moz-border-radius-topleft:0px;
  -webkit-border-top-left-radius:0px;
  border-top-left-radius:0px;
}.RuleTable table{
    border-collapse: collapse;
        border-spacing: 0;
  width:100%;
  height:100%;
  margin:0px;padding:0px;
}.RuleTable tr:last-child td:last-child {
  -moz-border-radius-bottomright:0px;
  -webkit-border-bottom-right-radius:0px;
  border-bottom-right-radius:0px;
}
.RuleTable table tr:first-child td:first-child {
  -moz-border-radius-topleft:0px;
  -webkit-border-top-left-radius:0px;
  border-top-left-radius:0px;
}
.RuleTable table tr:first-child td:last-child {
  -moz-border-radius-topright:0px;
  -webkit-border-top-right-radius:0px;
  border-top-right-radius:0px;
}.RuleTable tr:last-child td:first-child{
  -moz-border-radius-bottomleft:0px;
  -webkit-border-bottom-left-radius:0px;
  border-bottom-left-radius:0px;
}.RuleTable tr:hover td{
  
}
.RuleTable tr:nth-child(odd){ background-color:#aad4ff; }
.RuleTable tr:nth-child(even)    { background-color:#ffffff; }.RuleTable td{
  vertical-align:middle;
  
  
  border:1px solid #000000;
  border-width:0px 1px 1px 0px;
  text-align:left;
  padding:7px;
  font-size:10px;
  font-family:Arial;
  font-weight:normal;
  color:#000000;
}.RuleTable tr:last-child td{
  border-width:0px 1px 0px 0px;
}.RuleTable tr td:last-child{
  border-width:0px 0px 1px 0px;
}.RuleTable tr:last-child td:last-child{
  border-width:0px 0px 0px 0px;
}
.RuleTable tr:first-child td{
    background:-o-linear-gradient(bottom, #005fbf 5%, #003f7f 100%);  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #005fbf), color-stop(1, #003f7f) );
  background:-moz-linear-gradient( center top, #005fbf 5%, #003f7f 100% );
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#005fbf", endColorstr="#003f7f");  background: -o-linear-gradient(top,#005fbf,003f7f);

  background-color:#005fbf;
  border:0px solid #000000;
  text-align:center;
  border-width:0px 0px 1px 1px;
  font-size:14px;
  font-family:Arial;
  font-weight:bold;
  color:#ffffff;
}
.RuleTable tr:first-child:hover td{
  background:-o-linear-gradient(bottom, #005fbf 5%, #003f7f 100%);  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #005fbf), color-stop(1, #003f7f) );
  background:-moz-linear-gradient( center top, #005fbf 5%, #003f7f 100% );
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#005fbf", endColorstr="#003f7f");  background: -o-linear-gradient(top,#005fbf,003f7f);

  background-color:#005fbf;
}
.RuleTable tr:first-child td:first-child{
  border-width:0px 0px 1px 0px;
}
.RuleTable tr:first-child td:last-child{
  border-width:0px 0px 1px 1px;
}


  </style>


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

      // only interested in attributes with the prefix
      Vector<String> filteredNames = new Vector<String>();
      while(graphNames.hasMoreElements()) {
      
            graphName = (String)graphNames.nextElement();
            if (!graphName.startsWith(PREFIX_LABEL)) continue;
            if (removePrefix(graphName).length() < 1) continue;
            filteredNames.addElement(graphName);  // leave the prefix because we need the whole name to read the value
      }
           
      if(filteredNames.size() == 0) {
%>          
          /* chart data */
          barSeries = [];
                           
<%
      } else {
        for(int i = 0; i < filteredNames.size(); i++) {
          graphName = filteredNames.elementAt(i);
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
      <h3>Zero Downtime Patching Demo - Scrabble Example - Stage Mode - <span style="color: blue;">Version 2</span></h3>
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
      <div style="height: 355px; width:80px; float:left"> </div>
      <div class="RuleTable" style="height: 355px; float:left">
      <table style="border-collapse: collapse;">
          <tr>
          <td colspan=6>
           Letter Values
          </td>
          </tr>
          <tr> <td style="text-align: right; border: none"> A </td> <td style="border: none"> 1 </td> <td style="text-align: right; border: none"> J </td> <td style="border: none"> 8 </td> <td style="text-align: right; border: none"> S </td> <td style="border: none"> 1 </td> </tr>
          <tr> <td style="text-align: right; border: none"> B </td> <td style="border: none"> 3 </td> <td style="text-align: right; border: none"> K </td> <td style="border: none"> 5 </td> <td style="text-align: right; border: none"> T </td> <td style="border: none"> 1 </td> </tr>
          <tr> <td style="text-align: right; border: none"> C </td> <td style="border: none"> 3 </td> <td style="text-align: right; border: none"> L </td> <td style="border: none"> 1 </td> <td style="text-align: right; border: none"> U </td> <td style="border: none"> 1 </td> </tr>
          <tr> <td style="text-align: right; border: none"> D </td> <td style="border: none"> 2 </td> <td style="text-align: right; border: none"> M </td> <td style="border: none"> 3 </td> <td style="text-align: right; border: none"> V </td> <td style="border: none"> 4 </td> </tr>
          <tr> <td style="text-align: right; border: none"> E </td> <td style="border: none"> 1 </td> <td style="text-align: right; border: none"> N </td> <td style="border: none"> 1 </td> <td style="text-align: right; border: none"> W </td> <td style="border: none"> 4 </td> </tr>
          <tr> <td style="text-align: right; border: none"> F </td> <td style="border: none"> 4 </td> <td style="text-align: right; border: none"> O </td> <td style="border: none"> 1 </td> <td style="text-align: right; border: none"> X </td> <td style="border: none"> 8 </td> </tr>
          <tr> <td style="text-align: right; border: none"> G </td> <td style="border: none"> 2 </td> <td style="text-align: right; border: none"> P </td> <td style="border: none"> 3 </td> <td style="text-align: right; border: none"> Y </td> <td style="border: none"> 4 </td> </tr>
          <tr> <td style="text-align: right; border: none"> H </td> <td style="border: none"> 4 </td> <td style="text-align: right; border: none"> Q </td> <td style="border: none"> 10 </td> <td style="text-align: right; border: none"> Z </td> <td style="border: none"> 10 </td> </tr>
          <tr> <td style="text-align: right; border: none"> I </td> <td style="border: none"> 1 </td> <td style="text-align: right; border: none"> R </td> <td style="border: none"> 1 </td> <td style="text-align: right; border: none">   </td> <td style="border: none">   </td> </tr>



         </table>
      </div>
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
      <td>Word to add/delete: <input class="textbox" placeholder="enter a word" type="text" name="NameField"></td>
    </tr>
    <tr>
      <td align=center> 
        <input class="button" type="submit" value="Add" name="AddValue">
        <input class="button" type="submit" value="Delete" name="DeleteValue">
      </td>
    </tr>
  </table>
  </center>
</form>
  

 <%
  SessionCompat ival = (SessionCompat)session.getValue("patching.counter");
  if (ival == null) 
    ival = new SessionCompat(new Integer(1));
  else 
    ival = new SessionCompat(new Integer(ival.intValue() + 1));
   session.putValue("patching.counter", ival);

  %>
  <p>The session counter is now <B><%= ival.toString() %></B></p>

</center>

<%
  }
  catch (Exception ex) {
    ex.printStackTrace(new PrintWriter(out));
  }
%>

<%@ include file="ExamplesFooter.jsp" %>

