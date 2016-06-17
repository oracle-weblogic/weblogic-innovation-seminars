package com.oracle.coherence.handson;

import java.sql.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import com.tangosol.io.AbstractEvolvable;
import com.tangosol.io.pof.annotation.Portable;
import com.tangosol.io.pof.annotation.PortableProperty;


/**
* Contact represents information needed to contact a person.
* <p/>
* The type implements PortableObject for efficient cross-platform
* serialization..
*
* @author modified by pc 2013.09.05
*/
@Portable
public class Contact extends AbstractEvolvable
    {
    // ----- constructors ---------------------------------------------------

    /**
    * Default constructor (necessary for PortableObject implementation).
    */
    public Contact()
        {
        }

    /**
    * Construct Contact
    *
    * @param sFirstName      the first name
    * @param sLastName       the last name
    * @param addrHome        the home address
    * @param addrWork        the work address
    * @param mapPhoneNumber  map string number type (e.g. "work") to
    *                        PhoneNumber
    * @param dtBirth         date of birth
    */
    public Contact(String sFirstName, String sLastName, Address addrHome,
            Address addrWork, Map<String, PhoneNumber> mapPhoneNumber, java.sql.Date dtBirth)
        {
        m_sFirstName     = sFirstName;
        m_sLastName      = sLastName;
        m_addrHome       = addrHome;
        m_addrWork       = addrWork;
        m_mapPhoneNumber = mapPhoneNumber;
        m_dtBirth        = dtBirth;
        }


    // ----- accessors ------------------------------------------------------

    /**
    * Return the first name.
    *
    * @return the first name
    */
    public String getFirstName()
        {
        return m_sFirstName;
        }

    /**
    * Set the first name.
    *
    * @param sFirstName  the first name
    */
    public void setFirstName(String sFirstName)
        {
        m_sFirstName = sFirstName;
        }

    /**
    * Return the last name.
    *
    * @return the last name
    */
    public String getLastName()
        {
        return m_sLastName;
        }


    /**
    * Set the last name.
    *
    * @param sLastName  the last name
    */
    public void setLastName(String sLastName)
        {
        m_sLastName = sLastName;
        }

   /**
    * Return the home address.
    *
    * @return the home address
    */
    public Address getHomeAddress()
        {
        return m_addrHome;
        }

    /**
    * Set the home address.
    *
    * @param addrHome  the home address
    */
    public void setHomeAddress(Address addrHome)
        {
        m_addrHome = addrHome;
        }

    /**
    * Return the work address.
    *
    * @return the work address
    */
    public Address getWorkAddress()
        {
        return m_addrWork;
        }

    /**
    * Set the work address.
    *
    * @param addrWork  the work address
    */
    public void setWorkAddress(Address addrWork)
        {
        m_addrWork = addrWork;
        }

    /**
    * Get all phone numbers.
    *
    * @return a map of phone numbers
    */
    public Map<String, PhoneNumber> getPhoneNumbers()
        {
        return m_mapPhoneNumber;
        }

    /**
    * Set the list of phone numbers.
    *
    * @param mapTelNumber  a map of phone numbers
    */
    public void setPhoneNumbers(Map<String, PhoneNumber> mapTelNumber)
        {
        m_mapPhoneNumber = mapTelNumber;
        }

    /**
    * Get the date of birth.
    *
    * @return the date of birth
    */
    public Date getBirthDate()
        {
        return m_dtBirth;
        }

    /**
    * Set the date of birth.
    *
    * @param dtBirth  the date of birth
    */
    public void setBirthDate(Date dtBirth)
        {
        m_dtBirth = dtBirth;
        }

    /**
    * Get age.
    *
    * @return age
    */
    public int getAge()
        {
        return (int) ((System.currentTimeMillis() - m_dtBirth.getTime()) /
                MILLIS_IN_YEAR);
        }

    /**
     * AbstractEvolvable method
     * 
     * Determine the serialization version supported by the implementing class.
     * @return the version number
     */
    @Override
    public int getImplVersion() {
        return implVersion;
    }

    // ----- Object methods -------------------------------------------------

    /**
    * {@inheritDoc}
    */
    @Override
    public String toString()
        {
        StringBuffer sb = new StringBuffer(getFirstName())
                .append(" ")
                .append(getLastName())
                .append("\nAddresses")
                .append("\nHome: ").append(getHomeAddress())
                .append("\nWork: ").append(getWorkAddress())
                .append("\nPhone Numbers");

        for (Iterator<Entry<String, PhoneNumber>> iter = m_mapPhoneNumber.entrySet().iterator();
             iter.hasNext(); )
            {
            Map.Entry<String, PhoneNumber> entry = (Entry<String, PhoneNumber>) iter.next();
            sb.append("\n")
               .append(entry.getKey()).append(": ").append(entry.getValue());
            }
        return sb.append("\nBirth Date: ").append(getBirthDate()).toString();
        }


    // ----- constants -------------------------------------------------------

    /**
    * The POF index for the FirstName property
    */
    public static final int FIRSTNAME = 0;

    /**
    * The POF index for the LastName property
    */
    public static final int LASTNAME = 1;

    /**
    * The POF index for the HomeAddress property
    */
    public static final int HOME_ADDRESS = 2;

    /**
    * The POF index for the WorkAddress property
    */
    public static final int WORK_ADDRESS = 3;

    /**
    * The POF index for the PhoneNumbers property
    */
    public static final int PHONE_NUMBERS = 4;

    /**
    * The POF index for the BirthDate property
    */
    public static final int BIRTH_DATE = 5;


    // ----- data members ---------------------------------------------------

    /**
    * First name.
    */
    @PortableProperty(FIRSTNAME)
    private String m_sFirstName;

    /**
    * Last name.
    */
    @PortableProperty(LASTNAME)
    private String m_sLastName;

    /**
    * Home address.
    */
    @PortableProperty(HOME_ADDRESS)
    private Address m_addrHome;

    /**
    * Work address.
    */
    @PortableProperty(WORK_ADDRESS)
    private Address m_addrWork;

    /**
    *  Maps phone number type (such as "work", "home") to PhoneNumber.
    */
    @PortableProperty(PHONE_NUMBERS)
    private Map<String, PhoneNumber> m_mapPhoneNumber;

    /**
    * Birth Date.
    */
    @PortableProperty(BIRTH_DATE)
    private Date m_dtBirth;
        
    /**
    * Approximate number of millis in a year ignoring things such as leap
    * years. Suitable for example use only.
    */
    public static final long MILLIS_IN_YEAR = 1000L * 60L * 60L * 24L * 365L;

    private static int implVersion = 1;

    /**
     * Example code that demonstrates the use of Evolvable to version domain objects.
     * <p/>
     * Keep the cache servers running and uncomment this block in the IDE.
     * Also uncomment the corresponding code in <code>PofExample.java</code>
     * and run the client application again w/ this new version of Contact.java
     * without this new version in the cache servers' classpath.
     * <p/>
     * A production ready implementation would also add a new constructor
     * and update the <code>toString</code> method to add the new attributes.  
     * The goal is to show that the java class does not have to be deployed to
     * the cache servers if you use POF.  <code>Evolvable<code> allows the
     * decoupling of the domain objects with operations IT, deployment schedule 
     * and versioning across multiple apps.
     * 
     * @see com.tangosol.examples.contacts.PofExample#execute
     * @see com.tangosol.io.AbstractEvolvable
     *
  
    //The POF indexes for the new properties
    public static final int HOME_EMAIL = 6;
    public static final int WORK_EMAIL = 7;

    //Home Email
    @PortableProperty(HOME_EMAIL)
    private String m_sHomeEmail;
    
    //Work Email
    @PortableProperty(WORK_EMAIL)
    private String m_sWorkEmail;
    
    //we increment the Evolvable implVersion to 2
    static {
        implVersion = 2;
    }

    //Accessor methods for the new Home Email and Work Email properties
    public String getHomeEmail() {return m_sHomeEmail;}
    public void setHomeEmail(String sHomeEmail) { m_sHomeEmail = sHomeEmail;}

    public String getWorkEmail() {return m_sWorkEmail;}
    public void setWorkEmail(String sWorkEmail) { m_sWorkEmail = sWorkEmail;}
    /**
     * End block of example code that demonstrates the use of Evolvable to version domain objects
     */
}

