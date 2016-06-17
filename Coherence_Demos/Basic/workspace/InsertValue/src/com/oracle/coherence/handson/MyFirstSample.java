package com.oracle.coherence.handson;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;

public class MyFirstSample {
    public MyFirstSample() {
    }

    public static void main(String[] args) {
        
       // create or get a named cache called mycache 
       NamedCache myCache = CacheFactory.getCache("mycache");
       
       // put key, value pair into the cache. 
       myCache.put("Name", "Tim Middleton");
        
       System.out.println("Value in cache is " + myCache.get("Name"));
    }
}
