/*******************************************************************************
 * Copyright (c) 2013 Oracle Corporation
 ******************************************************************************/
package oracle.toplink.examples.live;

import java.util.List;
import java.util.Random;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.eclipse.persistence.dynamic.DynamicEntity;
import org.eclipse.persistence.jpa.dynamic.JPADynamicHelper;

/**
 * <b>Purpose</b>: Client that drives Bids for the first selected Auction in the auction demo.
 * <p>
 * <b>Description</b>: Based on natural ordering of Auctions in the database, this client predicts
 * what the first listed Auction will be in the demo and every 5 seconds adds a new Bid that is 5
 * units higher than the highest current bid. The user associated with this Bid is generated
 * randomly.
 * </p>
 *
 * @version 12.1.3
 */
public class AutoBidder {

	/**
	 * Main method of execution.
	 */
	public static void main(String[] args) throws InterruptedException {

		EntityManagerFactory emf = Persistence.createEntityManagerFactory("auction");
		JPADynamicHelper helper = new JPADynamicHelper(emf);
		Random randomGenerator = new Random();
		EntityManager em = emf.createEntityManager();

		while (true) {

			try {
				List<DynamicEntity> auctions = em.createNamedQuery("Auction.all", DynamicEntity.class).getResultList();
				DynamicEntity auction = auctions.get(randomGenerator.nextInt(3));
				double bid = em.createNamedQuery("Bid.maxForAuctionId", double.class).setParameter("auctionId", auction.get("id")).getSingleResult();
				em.getTransaction().begin();

				DynamicEntity bid1 = helper.newDynamicEntity("Bid");
				bid1.set("bid", bid + 5);
				bid1.set("userId", randomGenerator.nextInt(8) + 1);
				bid1.set("auctionId", auction.get("id"));
				bid1.set("time", System.currentTimeMillis() - (120 * 60000));
				em.persist(bid1);
				em.getTransaction().commit();
			}
			finally {
				em.clear();
			}

			Thread.sleep(2500);
		}
	}
}