/**
 * @author Copyright (c) 2008,2013, Oracle and/or its affiliates. All rights reserved.
 *  
 */
package com.test;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import java.io.Serializable;
import java.util.HashMap;

/**
 * CDI Managed Bean Class
 */
@Named
@SessionScoped
public class AccountBean implements Serializable {

  private String name;
  
  private float amount;
  
  private String msg;

  //cache of the bank accounts
  private HashMap<String, Float> accountAmountPairs = new HashMap<String, Float>();
  
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public float getAmount() {
    return amount;
  }

  public void setAmount(float amount) {
    this.amount = amount;
  }

  public String getMsg() {
    return msg;
  }


  public void deposit() {
    float theSum = amount;
    if(accountAmountPairs.containsKey(name)) {
      theSum = accountAmountPairs.get(name).floatValue() + theSum;
    }
    accountAmountPairs.put(name, Float.valueOf(theSum));
    msg = "The money have been deposited to " + name + ", the balance of the account is " + theSum;
  }
}
