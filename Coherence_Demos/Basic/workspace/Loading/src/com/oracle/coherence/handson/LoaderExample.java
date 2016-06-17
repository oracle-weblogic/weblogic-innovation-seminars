package com.oracle.coherence.handson;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;


/**
 * LoaderExample loads contacts into the cache from a files.
 */
public class LoaderExample {
    /**
     * Load contacts.
     */
    public static void main(String[] args) throws IOException {
        String fileName = args.length > 0 ? args[0] : FILENAME;
        String cacheName = args.length > 1 ? args[1] : CACHENAME;

        System.out.println("input file: " + fileName);
        System.out.println("cache name: " + cacheName);

        new LoaderExample().load(CacheFactory.getCache(cacheName),
                                 new FileInputStream(fileName));
        CacheFactory.shutdown();
    }

    /**
     * Load cache from stream.
     */
    public void load(NamedCache cache, InputStream in) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(in));
        Map<ContactId, Contact> mapBatch = new HashMap<ContactId, Contact>(1024);
        String record;
        int recordCount = 0;
        
        // Read each line in turn.
        //
        while ((record = reader.readLine()) != null) {
            // parse record
            String[] parts = record.split(",");
            int partIdx = 0;
            
            String firstName = parts[partIdx++];
            String lastName = parts[partIdx++];
            
            ContactId id = new ContactId(firstName, lastName);
            
            Address addrHome = new Address(
                    /*streetline1*/parts[partIdx++],
                    /*streetline2*/parts[partIdx++],
                    /*city*/parts[partIdx++],
                    /*state*/parts[partIdx++],
                    /*zip*/parts[partIdx++],
                    /*country*/parts[partIdx++]);
            Address addrWork = new Address(
                    /*streetline1*/parts[partIdx++],
                    /*streetline2*/parts[partIdx++],
                    /*city*/parts[partIdx++],
                    /*state*/parts[partIdx++],
                    /*zip*/parts[partIdx++],
                    /*country*/parts[partIdx++]);
            
            Map<String, PhoneNumber> mapTelNum = new HashMap<String, PhoneNumber>();

            for (int c = parts.length - 1; partIdx < c; ) {
            	String	phoneType = parts[partIdx++];
            	PhoneNumber	phone = new PhoneNumber(
                        /*access code*/Short.parseShort(parts[partIdx++]),
                        /*country code*/Short.parseShort(parts[partIdx++]),
                        /*area code*/Short.parseShort(parts[partIdx++]),
                        /*local num*/Integer.parseInt(parts[partIdx++]));
            	
                mapTelNum.put(phoneType, phone);
            }
            
            Date birthdate = new Date(Long.parseLong(parts[partIdx]));
            
            // Create the contact and add it to the batch map.
            //
            Contact	contact = new Contact(firstName, lastName, addrHome, addrWork,
                    mapTelNum, birthdate);
            
            mapBatch.put(id, contact);
            ++recordCount;
            
            // If there are 1k entries read in, add them to the cache.
            //
            if (recordCount % 1024 == 0) {
                // load batch
                cache.putAll(mapBatch);
                mapBatch.clear();
                System.out.print('.');
                System.out.flush();
            }
        }

        // Add any remaining entries to the cache.
        //
        if (!mapBatch.isEmpty()) {
            cache.putAll(mapBatch);
        }

        System.out.println("Added " + recordCount + " entries to cache");
        System.out.println("The size of the cache is " + cache.size());
    }


    // ----- constants ------------------------------------------------------

    /**
     * Default cache name.
     */
    public static final String CACHENAME = "ContactsCache";

    /**
     * Default file name.
     */
    public static final String FILENAME = "contacts.csv";
}


