package com.oracle.coherence.handson;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;

import com.tangosol.util.AbstractMapListener;
import com.tangosol.util.MapEvent;

import java.io.IOException;


/**
 * ObserverExample observes changes to contacts.
 */
public class ObserverExample {

    public ObserverExample() {
    }
    
    // ----- ObserverExample methods -------------------------------------

    public static void main(String[] args) {
        NamedCache cache = CacheFactory.getCache("ContactsCache");
        new ObserverExample().observe(cache);
        try {
            System.in.read();
        } catch (IOException e) {
        }
    }

    /**
     * Observe changes to the contacts.
     *
     * @param cache  target cache
     */
    public void observe(NamedCache cache) {
        cache.addMapListener(new ContactChangeListener());
    }

    // ----- inner class: ContactChangeListener -------------------------

    public class ContactChangeListener extends AbstractMapListener {
        // ----- MapListener interface ------------------------------------------

        public void entryInserted(MapEvent event) {
            System.out.println(event);
        }

        public void entryUpdated(MapEvent event) {
            Contact contactOld = (Contact)event.getOldValue();
            Contact contactNew = (Contact)event.getNewValue();
            StringBuffer sb = new StringBuffer();

            if (!contactOld.getHomeAddress().equals(contactNew.getHomeAddress())) {
                sb.append("Home address ");
            }
            if (!contactOld.getWorkAddress().equals(contactNew.getWorkAddress())) {
                sb.append("Work address ");
            }
            if (!contactOld.getPhoneNumbers().equals(contactNew.getPhoneNumbers())) {
                sb.append("Telephone ");
            }
            if (contactOld.getAge() != contactNew.getAge()) {
                sb.append("Birthdate ");
            }
            sb.append("was updated for ").append(event.getKey());
            System.out.println(sb);
        }

        public void entryDeleted(MapEvent event) {
            System.out.println(event.getKey());
        }
    }
}

