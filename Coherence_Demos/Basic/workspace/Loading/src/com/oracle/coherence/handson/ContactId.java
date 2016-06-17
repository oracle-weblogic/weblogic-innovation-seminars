package com.oracle.coherence.handson;


import com.tangosol.io.pof.annotation.Portable;
import com.tangosol.io.pof.annotation.PortableProperty;
import com.tangosol.util.Base;


/**
* ContactId represents a key to the contact for whom information is stored in
* the cache.
* <p/>
* The type implements PortableObject for efficient cross-platform
* serialization..
*
* @author modified by pc 2013.09.05
*/
@Portable
public class ContactId
    {
    // ----- constructors ---------------------------------------------------

    /**
    * Default constructor (necessary for PortableObject implementation).
    */
    public ContactId()
        {
        }

    /**
    * Construct a contact key.
    *
    * @param sFirstName  first name
    * @param sLastName   last name
    */
    public ContactId(String sFirstName, String sLastName)
        {
        m_sFirstName = sFirstName;
        m_sLastName  = sLastName;
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
    * Return the last name.
    *
    * @return the last name
    */
    public String getLastName()
        {
        return m_sLastName;
        }


    // ----- Object methods -------------------------------------------------

    /**
    * {@inheritDoc}
    */
    public boolean equals(Object oThat)
        {
        if (this == oThat)
            {
            return true;
            }
        if (oThat == null)
            {
            return false;
            }

        ContactId that = (ContactId) oThat;
        return Base.equals(getFirstName(), that.getFirstName()) &&
               Base.equals(getLastName(),  that.getLastName());
        }


    /**
    * {@inheritDoc}
    */
    public int hashCode()
        {
        return (getFirstName() == null ? 0 : getFirstName().hashCode()) ^
                (getLastName() == null ? 0 : getLastName().hashCode());

        }

    /**
    * {@inheritDoc}
    */
    public String toString()
        {
        return getFirstName() + " " + getLastName();
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
    }
