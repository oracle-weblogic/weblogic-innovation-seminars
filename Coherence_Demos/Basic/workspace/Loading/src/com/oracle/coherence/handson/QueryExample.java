package com.oracle.coherence.handson;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;
import com.tangosol.util.Filter;
import com.tangosol.util.aggregator.Count;
import com.tangosol.util.aggregator.DoubleAverage;
import com.tangosol.util.aggregator.LongMax;
import com.tangosol.util.aggregator.LongMin;
import com.tangosol.util.extractor.ChainedExtractor;
import com.tangosol.util.extractor.KeyExtractor;
import com.tangosol.util.extractor.ReflectionExtractor;
import com.tangosol.util.filter.AlwaysFilter;
import com.tangosol.util.filter.AndFilter;
import com.tangosol.util.filter.EqualsFilter;
import com.tangosol.util.filter.GreaterFilter;
import com.tangosol.util.filter.LikeFilter;
import com.tangosol.util.filter.NotEqualsFilter;

import java.util.Set;
import java.util.Map.Entry;


/**
 * QueryExample runs sample queries for contacts.
 */
public class QueryExample {

	NamedCache cache = CacheFactory.getCache("ContactsCache");

    public static void main(String[] args) {
        QueryExample	instance = new QueryExample();
        
        instance.addIndicies();
        instance.exampleQueries();
    }
    
    public void addIndicies() {
        // Add indices to make queries more efficient
        ReflectionExtractor reflectAddrHome =
            new ReflectionExtractor("getHomeAddress");

        // Add an index for the age
        cache.addIndex(new ReflectionExtractor("getAge"), true, null);

        // Add index for state within home address
        cache.addIndex(new ChainedExtractor(reflectAddrHome,
                                            new ReflectionExtractor("getState")),
                       true, null);

        // Add index for state within work address
        cache.addIndex(new ChainedExtractor(new ReflectionExtractor("getWorkAddress"),
                                            new ReflectionExtractor("getState")),
                       true, null);

        // Add index for city within home address
        cache.addIndex(new ChainedExtractor(reflectAddrHome,
                                            new ReflectionExtractor("getCity")),
                       true, null);
    }

    /**
     * Perform the example queries
     */
	public void exampleQueries() {
        // Find all contacts who live in Massachusetts
        //
        Filter	homeInMassFilter = new EqualsFilter("getHomeAddress.getState", "MA");
        
        Set<Entry<ContactId, Contact>> entrySet;
	
        entrySet = query(homeInMassFilter);
        printResults("MA Residents", entrySet);

        // Find all contacts who live in Massachusetts and work elsewhere.
        //
		Filter homeMaWorkOtherFilter = new AndFilter(homeInMassFilter,
				new NotEqualsFilter("getWorkAddress.getState", "MA"));
        
        entrySet = query(homeMaWorkOtherFilter);
        printResults("MA Residents, Work Elsewhere", entrySet);

        // Find all contacts whose city name begins with 'S'
        //
        Filter cityBeginSFilter = new LikeFilter("getHomeAddress.getCity", "S%");
        
        entrySet = query(cityBeginSFilter);
        printResults("City Begins with S", entrySet);

        // Find all contacts who are older than nAge
        //
        int		ageLimit = 42;
        Filter	olderThanFilter = new GreaterFilter("getAge", ageLimit);
        
        entrySet = query(olderThanFilter);
        printResults("Age > " + ageLimit, entrySet);

        // Find all contacts with last name beginning with 'S' that live
        // in Massachusetts. Uses both key and value in the query.
        //
		Filter nameSInMaFilter = new AndFilter(
				new LikeFilter(new KeyExtractor("getLastName"), "S%", (char) 0, false),
				homeInMassFilter);
		
        entrySet = query(nameSInMaFilter);
        printResults("Last Name Begins with S and home Is MA", entrySet);

        // Aggregations
        // Count contacts who are older than the limit.
        //
		System.out.println("count > " + ageLimit + ": "
			+ cache.aggregate(olderThanFilter, new Count()));

        // Find minimum age
		System.out.println("min age: "
			+ cache.aggregate(AlwaysFilter.INSTANCE, new LongMin("getAge")));

        // Calculate average age
        System.out.println("avg age: "
        	+ cache.aggregate(AlwaysFilter.INSTANCE, new DoubleAverage("getAge")));

        // Find maximum age
        System.out.println("max age: "
        	+ cache.aggregate(AlwaysFilter.INSTANCE, new LongMax("getAge")));
    }

	
	
	/**
	 * Query the cache to get a set of matching map entries.
	 * Cast the result to the correct parameterized type.
	 * Due to the nature of a Coherence cache it is not
	 * possible to be sure at compile time what kind of
	 * objects are used as keys and values in the cache.
	 * 
	 * @param	cache		the cache to query
	 * @param	filter		the filter to apply
	 * @return				set of map entries relating ContactId to Contact
	 */
	@SuppressWarnings("unchecked")
	private Set<Entry<ContactId, Contact>> query(Filter filter)
	{
		return cache.entrySet(filter);
	}
	
	
	
    /**
     * Print results of the query
     *
     * @param title			the title that describes the results
     * @param entries		a set of query results
     */
    private static void printResults(String title, Set<Entry<ContactId, Contact>> entries) {
        System.out.println(title);
        
        for (Entry<ContactId, Contact> entry : entries) {
        	System.out.println(entry.getValue());
        }
    }
}


