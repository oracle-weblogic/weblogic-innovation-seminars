package com.oracle.coherence.handson;


import com.tangosol.io.pof.annotation.Portable;
import com.tangosol.io.pof.annotation.PortableProperty;
import com.tangosol.util.InvocableMap;
import com.tangosol.util.processor.AbstractProcessor;


/**
* OfficeUpdater updates a contact's office address.
*
* @author modified by pc 2013.09.05
*/
@Portable
public class OfficeUpdater
        extends AbstractProcessor
    {
    // ----- constructors -------------------------------------------

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	/**
     * Default constructor (necessary for PortableObject implementation).
     */
    public OfficeUpdater()
        {
        }

    /**
     * Construct an OfficeUpdater with a new work Address.
     *
     * @param addrWork the new work address.
     */
    public OfficeUpdater(Address addrWork)
        {
        m_addrWork = addrWork;
        }

    // ----- InvocableMap.EntryProcessor interface ------------------

    /**
     * {@inheritDoc}
     */
    public Object process(InvocableMap.Entry entry)
        {
        Contact contact = (Contact) entry.getValue();

        contact.setWorkAddress(m_addrWork);
        entry.setValue(contact);
        return null;
        }

    // ----- constants ----------------------------------------------

    /**
     * The POF index for the WorkAddress property
     */
    public static final int WORK_ADDRESS = 0;


    // ----- data members -------------------------------------------

    /**
     * New work address.
     */
    @PortableProperty(WORK_ADDRESS)
    private Address m_addrWork;
    } 
