package com.oracle.coherence.handson;
 
import java.sql.Date;
import java.util.Collections;
import java.util.Random;

import com.tangosol.util.Base;


/**
 * DataGenerator is a generator of sample contacts.
 */
public class DataGenerator {
    // ----- static methods -------------------------------------------------


    /**
     * Return a random name.
     */
    private static String getRandomName() {
        Random rand = Base.getRandom();
        int cCh = 4 + rand.nextInt(7);
        char[] ach = new char[cCh];

        ach[0] = (char)('A' + rand.nextInt(26));
        for (int of = 1; of < cCh; ++of) {
            ach[of] = (char)('a' + rand.nextInt(26));
        }
        return new String(ach);
    }

    /**
     * Return a random phone number.
     * The phone number includes access, country, area code, and local
     * number.
     *
     */
    private static int[] getRandomPhoneDigits() {
        Random rand = Base.getRandom();
        return new int[] { 11, // access code
                rand.nextInt(99), // country code
                rand.nextInt(999), // area code
                rand.nextInt(9999999) // local number
                } ;
    }

    /**
     * Return a random Phone.
     *
     */
    private static PhoneNumber getRandomPhone() {
        int[] anPhone = getRandomPhoneDigits();

        return new PhoneNumber((short)anPhone[0], (short)anPhone[1],
                         (short)anPhone[2], anPhone[3]);

    }

    /**
     * Return a random Zip code.
     */
    private static String getRandomZip() {
        return Base.toDecString(Base.getRandom().nextInt(99999), 5);
    }

    /**
     * Return a random state.
     */
    private static String getRandomState() {
        return STATE_CODES[Base.getRandom().nextInt(STATE_CODES.length)];
    }

    /**
     * Return a random date in millis before or after the epoch.
     */
    private static long getRandomDateInMillis() {
        return (Base.getRandom().nextInt(40) - 20) * Contact.MILLIS_IN_YEAR;
    }

    /**
     * Generate a Contact with random information.
     */
    public static Contact getRandomContact() {
        return new Contact("John", getRandomName(),
                           new Address("1500 Boylston St.", null,
                                       getRandomName(), getRandomState(),
                                       getRandomZip(), "US"),
                           new Address("8 Yawkey Way", null, getRandomName(),
                                       getRandomState(), getRandomZip(), "US"),
                           Collections.singletonMap("work", getRandomPhone()),
                           new Date(getRandomDateInMillis()));
    }

    // ----- constants ------------------------------------------------------

    /**
     * US Postal Service two letter postal codes.
     */
    private static final String[] STATE_CODES =
    { "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "OF", "DC", "FM",
      "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
      "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
      "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI",
      "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" };
}



