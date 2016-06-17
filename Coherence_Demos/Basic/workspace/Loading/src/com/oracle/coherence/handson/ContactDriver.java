package com.oracle.coherence.handson;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Map;
import java.util.HashMap;

public class ContactDriver {
    public ContactDriver() {
    }


    public static void main(String[] args) {
        NamedCache contact = CacheFactory.getCache("contact");

        Address homeAddress =
            new Address("4157 Wash Ave", "Suite 4", "Burlingame", "CA",
                        "94407", "USA");
        Address workAddress =
            new Address("500 Oracle Pkwy", "MS989", "Redwood Shores", "CA",
                        "94065", "USA");
        
        Calendar	birthdate = new GregorianCalendar(2009, 04, 01);
        
        PhoneNumber phone = new PhoneNumber((short) 11, (short)650, (short)506, 7000);
        Map<String, PhoneNumber> phones = new HashMap<String, PhoneNumber>();
        
        phones.put("home", phone);

        Contact con1 =
            new Contact("Tom", "Dunn", homeAddress, workAddress, phones, new java.sql.Date(birthdate.getTime().getTime()));

        contact.put(con1.getFirstName(), con1);

        Contact con2 = (Contact)contact.get(con1.getFirstName());
        
        if (con2.getFirstName().equals(con1.getFirstName())) {
            System.out.println("They are the same!");
        }
    }
}
