package servlets;

import org.junit.Test;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

/**
 * File: AddingServletIT.java
 * <p/>
 * Copyright (c) 1997-2012 Oracle and/or its affiliates. All rights reserved
 * <p/>
 * Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
 * <p/>
 * User: jeffrey.a.west Date: 1/4/12 Time: 3:28 PM
 */

public class DatabasePingServletIT
{

  @Test
  public void pingDatabase() throws Exception
  {
    String test = "http://wins-vbox:7001/weblogic-integration-test-example-12.1.3.0.0/DatabasePing";

    URL url = new URL(test);
    URLConnection conn = url.openConnection();
    BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));

    String response = reader.readLine();
    reader.close();

    assertTrue("Can't Connect to Database!  Error: " + response, response.equals("SUCCESS"));
  }
}
