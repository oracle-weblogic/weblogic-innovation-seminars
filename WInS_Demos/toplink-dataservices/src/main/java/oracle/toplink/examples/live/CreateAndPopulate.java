/*******************************************************************************
 * Copyright (c) 2013 Oracle Corporation
 ******************************************************************************/
package oracle.toplink.examples.live;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.eclipse.persistence.dynamic.DynamicEntity;
import org.eclipse.persistence.jpa.dynamic.JPADynamicHelper;

/**
 * <b>Purpose</b>: Creates and populates the auction schema.
 * <p>
 * <b>Description</b>: Creates and populates the database schema for the auction live data demo
 * based on the settings defined in the <code>auction</code> persistence unit. This database
 * population class can be run multiple times as it also drops any existing schema before populating.</p>
 *
 * @version 12.1.3
 */
public class CreateAndPopulate {

	/**
	 * The name of the persistence unit.
	 */
	public static final String APP_NAME = "auction";

	/**
	 * The {@link EntityManagerFactory} to use.
	 */
	private EntityManagerFactory entityManagerFactory;

	/**
	 * Creates a new <code>CreateAndPopulate</code>.
	 *
	 * @param entityManagerFactory The {@link EntityManagerFactory} to use
	 */
	private CreateAndPopulate(EntityManagerFactory entityManagerFactory) {
		super();
		this.entityManagerFactory = entityManagerFactory;
	}

	/**
	 * Creates and populates the auction schema.
	 */
	public static void main(String[] args) {

		Map<String, Object> properties = new HashMap<String, Object>();
		properties.put("eclipselink.ddl-generation", "drop-and-create-tables");
		properties.put("eclipselink.ddl-generation.output-mode", "database");

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("auction", properties);

		CreateAndPopulate demo = new CreateAndPopulate(factory);
		demo.createUsers();
		demo.createAuctions();
		demo.createBids();
		factory.close();
	}

	private void createUsers() {

		EntityManager entityManager = entityManagerFactory.createEntityManager();
		entityManager.getTransaction().begin();
		JPADynamicHelper helper = new JPADynamicHelper(entityManagerFactory);

		DynamicEntity user1 = helper.newDynamicEntity("User");
		user1.set("name", "Jack");
		entityManager.persist(user1);

		DynamicEntity user2 = helper.newDynamicEntity("User");
		user2.set("name", "Jill");
		entityManager.persist(user2);

		DynamicEntity user3 = helper.newDynamicEntity("User");
		user3.set("name", "Peter");
		entityManager.persist(user3);

		DynamicEntity user4 = helper.newDynamicEntity("User");
		user4.set("name", "Hansel");
		entityManager.persist(user4);

		DynamicEntity user5 = helper.newDynamicEntity("User");
		user5.set("name", "Nat");
		entityManager.persist(user5);

		DynamicEntity user6 = helper.newDynamicEntity("User");
		user6.set("name", "Simon");
		entityManager.persist(user6);

		DynamicEntity user7 = helper.newDynamicEntity("User");
		user7.set("name", "Goldy");
		entityManager.persist(user7);

		DynamicEntity user8 = helper.newDynamicEntity("User");
		user8.set("name", "Cindy");
		entityManager.persist(user8);

		DynamicEntity user9 = helper.newDynamicEntity("User");
		user9.set("name", "Gretl");
		entityManager.persist(user9);

		entityManager.getTransaction().commit();
	}

	private void createAuctions() {

		EntityManager entityManager = entityManagerFactory.createEntityManager();
		entityManager.getTransaction().begin();
		JPADynamicHelper helper = new JPADynamicHelper(entityManagerFactory);

		DynamicEntity auction1 = helper.newDynamicEntity("Auction");
		auction1.set("name",        "Oracle Exalogic Elastic Cloud");
		auction1.set("image",       "images/im08t0-exalogic-x2-2-1-495530.jpg");
		auction1.set("description", "Exalogic is hardware and software engineered together to provide extreme performance, reliability and scalability for Oracle, Java and other applications, while delivering lower TCO, reduced risk, higher user productivity and one-stop support.");
		auction1.set("startPrice",  467856.00);
		auction1.set("endPrice",    467856.00);
		auction1.set("sold",        false);
		entityManager.persist(auction1);

		DynamicEntity auction2 = helper.newDynamicEntity("Auction");
		auction2.set("name",        "Sputnik Stereo Camera");
		auction2.set("image",       "images/600px-Sputnik_stereo_camera.jpg");
		auction2.set("description", "Sputnik stereo camera (Soviet Union, 1960s). Although there are three lenses present, only the lower two are used for the photograph – the third lens serves as a viewfinder for composition. The Sputnik produces two side-by-side square images on 120 film.");
		auction2.set("startPrice",  199.00);
		auction2.set("endPrice",    199.00);
		auction2.set("sold",        false);
		entityManager.persist(auction2);

		DynamicEntity auction3 = helper.newDynamicEntity("Auction");
		auction3.set("name",        "WRT54G Wireless Router");
		auction3.set("image",       "images/Linksys-Wireless-G-Router.jpg");
		auction3.set("description", "The legendary WRT54G wireless router supporting only 802.11b and 802.11g. Its OEM firmware gave birth to OpenWrt.");
		auction3.set("startPrice",  39.99);
		auction3.set("endPrice",    39.99);
		auction3.set("sold",        false);
		entityManager.persist(auction3);

		DynamicEntity auction4 = helper.newDynamicEntity("Auction");
		auction4.set("name",        "Apple II");
		auction4.set("image",       "images/Apple-II.jpg");
		auction4.set("description", "The Apple II (styled as apple ][) is an 8-bit home computer, one of the first highly successful mass-produced microcomputer products, designed primarily by Steve Wozniak, manufactured by Apple Computer (now Apple Inc.) and introduced in 1977. It is the first model in a series of computers which were produced until Apple IIe production ceased in November 1993.");
		auction4.set("startPrice",  180.00);
		auction4.set("endPrice",    180.00);
		auction4.set("sold",        false);
		entityManager.persist(auction4);

		DynamicEntity auction5 = helper.newDynamicEntity("Auction");
		auction5.set("name",        "3U Rackmount System");
		auction5.set("image",       "images/800px-Chassis-Plans-3U.jpg");
		auction5.set("description", "Computer servers designed for rack-mounting can include a number of extra features to make the server easy to use in the rack.");
		auction5.set("startPrice",  1999.00);
		auction5.set("endPrice",    1999.00);
		auction5.set("sold",        false);
		entityManager.persist(auction5);

		entityManager.getTransaction().commit();
	}

	/**
	 * Creates 3 bids for each auction item.
	 */
	@SuppressWarnings("unchecked")
	private void createBids() {

		EntityManager entityManager = entityManagerFactory.createEntityManager();
		entityManager.getTransaction().begin();
		JPADynamicHelper helper = new JPADynamicHelper(entityManagerFactory);

		List<DynamicEntity> users = entityManager.createNamedQuery("User.all").getResultList();
		List<DynamicEntity> auctions = entityManager.createNamedQuery("Auction.all").getResultList();
		int bidCount = users.size() / 2;

		for (DynamicEntity auction : auctions) {

			double price = (Double) auction.get("startPrice");
			double increase = (price / 50);

			for (int index = 0; index < bidCount; index++) {

				DynamicEntity bid = helper.newDynamicEntity("Bid");
				bid.set("bid",       price + (increase * (index + 1)));
				bid.set("userId",    users.get(index).get("id"));
				bid.set("auctionId", auction.get("id"));
				bid.set("time",      System.currentTimeMillis() - (120 * 60000));
				entityManager.persist(bid);
			}
		}

		entityManager.getTransaction().commit();
	}
}