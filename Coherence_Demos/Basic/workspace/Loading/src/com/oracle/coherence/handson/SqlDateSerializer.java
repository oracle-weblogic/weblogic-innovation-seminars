package com.oracle.coherence.handson;

import com.tangosol.io.pof.PofReader;
import com.tangosol.io.pof.PofSerializer;
import com.tangosol.io.pof.PofWriter;
import java.io.IOException;
import java.sql.Date;

/**
 * Example external serializer class for java.sql.Date
 * <p/>
 * Note that working with external PofSerializers requires use of read/writeRemainder,
 * but is not required when implementing the PortableObject interface in the domain
 * object when implementing read/writeExternal methods.
 * 
 * @author pc 2013.09.05
 */
public class SqlDateSerializer implements PofSerializer
{

    @Override
    public void serialize(PofWriter writer, Object o) throws IOException {
        Date sqldate = (Date)o;
        writer.writeDate(0, new java.util.Date(sqldate.getTime()));
        writer.writeRemainder(null);    //placeholder for future versions of this object
    }

    @Override
    public Object deserialize(PofReader reader) throws IOException {
        Date date = new Date(reader.readDate(0).getTime());
        reader.readRemainder();         //placeholder for future versions of this object
        return date; 
    }
    
} 