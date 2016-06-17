package com.test;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * File: AddingServlet.java
 * <p/>
 * Copyright (c) 1997-2012 Oracle and/or its affiliates. All rights reserved
 * <p/>
 * Oracle is a registered trademark of Oracle Corporation and/or its
 * affiliates.
 * <p/>
 * User: jeffrey.a.west
 * Date: 1/4/12
 * Time: 3:12 PM
 */
@WebServlet(name = "AddingServlet", urlPatterns = {"/AddingServlet"})
public class AddingServlet extends HttpServlet
{
  @Override
  protected void doGet(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException
  {
    handleRequest(httpServletRequest, httpServletResponse);
  }

  private void handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException
  {
    System.out.println("Adding...");
    int p1 = Integer.valueOf(request.getParameter("p1"));
    int p2 = Integer.valueOf(request.getParameter("p2"));

    PrintWriter writer = response.getWriter();

    try
    {
      writer.println(p1 + "+" + p2 + "=" + (p1 + p2));
    }
    finally
    {
      writer.close();
    }

  }

  @Override
  protected void doPost(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException
  {
    handleRequest(httpServletRequest, httpServletResponse);
  }

  @Override
  protected void doPut(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException
  {
    handleRequest(httpServletRequest, httpServletResponse);
  }

  @Override
  public String getServletInfo()
  {
    return "Servlet that Adds";
  }
}
