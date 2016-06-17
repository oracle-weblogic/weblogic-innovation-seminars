package cachestore.example;

import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;


public class CreateDatabase {
	
	public static void main(String[] args) throws UnknownHostException {

		// Pass properties to EclipseLink to drop and create
		// the necessary tables on the database.
		Map<String,Object> properties = new HashMap<String,Object>();
		properties.put("eclipselink.ddl-generation", "drop-and-create-tables");
		properties.put("eclipselink.ddl-generation.output-mode", "database");
		EntityManagerFactory emf = Persistence
				.createEntityManagerFactory("employee", properties);
		// Creating an EntityManager will trigger database login
		// and schema generation (because of the properties passed above)
		EntityManager em = emf.createEntityManager();
		em.close();		
		emf.close();
	}
}
