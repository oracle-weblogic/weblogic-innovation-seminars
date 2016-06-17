package com.oracle.coherence.handson;

import com.oracle.coherence.handson.Address;
import com.oracle.coherence.handson.Contact;
import com.oracle.coherence.handson.ContactId;
import com.tangosol.io.pof.reflect.SimplePofPath;
import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;
import com.tangosol.util.Filter;
import com.tangosol.util.ValueExtractor;
import com.tangosol.util.aggregator.Count;
import com.tangosol.util.extractor.PofExtractor;
import com.tangosol.util.extractor.PofUpdater;
import com.tangosol.util.filter.LikeFilter;
import com.tangosol.util.processor.ExtractorProcessor;
import com.tangosol.util.processor.UpdaterProcessor;

/**
* PofExample demonstrates how to use PofUpdater/Extractor to modify data in the
* cache.
*
* @author pc  2013.09.05
 */
public class PofExample {

    /**
    * Perform the example updates to contacts.
    *
    * @param cache  Cache
    */
    public void execute(NamedCache cache)
        {

        Contact   contact   = DataGenerator.getRandomContact();
        ContactId contactId = new ContactId(contact.getFirstName(),
                contact.getLastName());

        System.out.println("------PofExample begins------");
        // associate a ContactId with a Contact in the cache
        cache.put(contactId, contact);

        // retrieve the Contact associated with a ContactId from the cache
        contact = (Contact) cache.get(contactId);
        
        System.out.println("Contact added to cache: " + contact.toString());

        ValueExtractor extractor = new PofExtractor(String.class, Contact.FIRSTNAME);
        //optionally add an index on firstname field for Filter based query performance
        //if same index already exists, will ignore this addIndex request
        cache.addIndex(extractor, false, null);
        
        //calling a builtin entryprocessor (Updaterprocessor) to update one field in object
        cache.invoke(contactId, new UpdaterProcessor(new PofUpdater(Contact.FIRSTNAME), "Robert"));
        
        
        //calling builtin entryprocessor (ExtractorProcessor) to only pull out one field
        String s = (String)cache.invoke(contactId, new ExtractorProcessor(extractor));

        System.out.println("First name is :" + s);
        
        //use SimplePofPath w/ PofExtractor for nested attributes that normally use a ChainedExtractor
        extractor = new PofExtractor(String.class, new SimplePofPath(new int[] {Contact.WORK_ADDRESS,Address.STATE}));
        Filter filter = new LikeFilter(extractor, "N%", '\\', false);
        Integer count = (Integer)cache.aggregate(filter, new Count());
        
        System.out.println("Number of Contacts that work in NE, NV, NH, NJ, NM, NY: " + count);
        
        
        /**
         * Example code that uses Contact.java version 2 with POF.
         * <p/>
         * Keep the cache servers running and uncomment this block in the IDE.
         * Also uncomment the corresponding code in <code>Contact.java</code>
         * and run the client application again without this new
         * version in the cache servers' classpath.
         * 
         * @see com.tangosol.examples.pof.Contact#WORK_EMAIL
         *
        extractor = new PofExtractor(String.class, Contact.WORK_EMAIL);

        //calling a builtin entryprocessor (ExtractorProcessor) to only pull out one field
        s = (String)cache.invoke(contactId, new ExtractorProcessor(extractor));

        System.out.println("New uninitialized work email attribute is :" + s);
        
        s = contactId.getFirstName() + "." + contactId.getLastName() + "@yoyodynecorp.com";
        EntryProcessor updateWorkEmailProcessor = new UpdaterProcessor(new PofUpdater(Contact.WORK_EMAIL), s);
        //update the work email attribute using UpdaterProcessor
        cache.invoke(contactId, updateWorkEmailProcessor);
        
        //get just the work email attribute
        s = (String)cache.invoke(contactId, new ExtractorProcessor(extractor));
        System.out.println("Updated new Contact with work email: " + s);

        /**
         * End block of example code that uses Contact.java version 2 with POF
         */ 
        System.out.println("------PofExample completed------");
        }

    public static void main(String[] asArg)
    {
        new PofExample().execute(CacheFactory.getCache("contact"));
    }
    
    
}

