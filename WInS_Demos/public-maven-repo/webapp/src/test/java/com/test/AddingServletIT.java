package com.test;

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
public class AddingServletIT
{

  public String runTest(int p1, int p2) throws Exception
  {
    int res = p1 + p2;
    String test = String.format("http://wins-vbox:7001/basicWebapp/AddingServlet?p1=%s&p2=%s", p1, p2);

    URL url = new URL(test);
    URLConnection conn = url.openConnection();
    BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));

    String response = reader.readLine();
    reader.close();
    return response;
  }

  @Test
  public void addingServletPositive() throws Exception
  {
    int p1 = 1;
    int p2 = 2;
    int res = 3;

    String response = runTest(p1, p2);

    String expect = String.format("%s+%s=%s", p1, p2, res);

    assertTrue("Strings do not Match but should: " + response + " | " + expect, expect.equals(response));
  }

  @Test
  public void addingServletNegative() throws Exception
  {
    int p1 = 1;
    int p2 = 2;
    int res = 4;

    String response = runTest(p1, p2);

    String expect = String.format("%s+%s=%s", p1, p2, res);

    assertFalse("Strings Match but should not: " + response + " | " + expect, expect.equals(response));
  }

  @Test
  public void addingServletALWAYSFAIL() throws Exception
  {
    int p1 = 1;
    int p2 = 2;
    int res = 4;

    String response = runTest(p1, p2);

    String expect = String.format("%s+%s=%s", p1, p2, res);

    assertFalse("This is supposed to fail: " + response + " | " + expect, expect.equals(response));
  }

}
