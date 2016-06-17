package com.oracle.coherence.handson;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;
import com.tangosol.net.cache.ContinuousQueryCache;
import com.tangosol.util.Filter;
import com.tangosol.util.extractor.IdentityExtractor;
import com.tangosol.util.filter.LikeFilter;

import java.util.Map;
import java.util.Set;

public class DatabaseCache {
    private NamedCache cache;

    public DatabaseCache() {
    }

    public void createCache() {
        cache = CacheFactory.getCache("DBBackedCache");
    }

    public void addEntries() {
    	System.out.println("Adding catalog3,4,&5");
    	
        cache.put("catalog3", "Tuning Grid Management");
        cache.put("catalog4", "Tuning Coherence");
        cache.put("catalog5", "Tuning Database");
    }

    public void retrieveEntry() {
        System.out.println("Retrieve catalog3: " + cache.get("catalog3"));
    }

    public void eraseEntry() {
    	System.out.println("Removing catalog3");
    	
        cache.remove("catalog3");
    }

    @SuppressWarnings("unchecked")
	public void queryCache() {
    	Set<Map.Entry<String, String>>	entrySet;
    	
    	// Query using a filter.
    	//
        Filter filter =
            new LikeFilter(IdentityExtractor.INSTANCE, "Tuning%", '\\', true);
        
        entrySet = cache.entrySet(filter);
        list("Filter like Tuning%", entrySet);
        
        // Get the mapping for a set of keys.
        //
        Set<String> keySet = cache.keySet(filter);
        
        Map<String, String>	map = (Map<String, String>) cache.getAll(keySet);
        
        list("Get keys", map.entrySet());
        
        // Query using continuous query cache.
        //
        ContinuousQueryCache queryCache = new ContinuousQueryCache(cache, filter);
        
        list("Query cache", queryCache.entrySet());
    }
    
    private void list(String title, Set<Map.Entry<String, String>> set) {
    	System.out.println(title);
    	
    	if (set.isEmpty())
    		System.out.println("  Empty");
    	
    	for (Map.Entry<String, String> entry : set)
            System.out.println("  Catalog ID: " + entry.getKey()
            		+ ", Title: " + entry.getValue());
    }


    public static void main(String[] args) {
        DatabaseCache databaseCache = new DatabaseCache();
        
        databaseCache.createCache();
        databaseCache.addEntries();
        databaseCache.retrieveEntry();
        databaseCache.eraseEntry();
        databaseCache.queryCache();
    }
}

