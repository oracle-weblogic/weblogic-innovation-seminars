package com.oracle.coherence.handson;


import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;
import com.tangosol.util.filter.EqualsFilter;

/**
 * ProcessorExample executes an example EntryProcessor.
 *
 */
public class ProcessorExample {
    public ProcessorExample() {

    }

    public static void main(String[] args) {
        NamedCache cache = CacheFactory.getCache("ContactsCache");
        new ProcessorExample().execute(cache);
    }
    
    // ----- ProcessorExample methods -----------------------------------

    public void execute(NamedCache cache) {
        // People who live in Massachusetts moved to an in-state office
        Address addrWork =
            new Address("200 Newbury St.", "Yoyodyne, Ltd.", "Boston", "MA",
                        "02116", "US");

        cache.invokeAll(new EqualsFilter("getHomeAddress.getState", "MA"),
                        new OfficeUpdater(addrWork));
    }

}
