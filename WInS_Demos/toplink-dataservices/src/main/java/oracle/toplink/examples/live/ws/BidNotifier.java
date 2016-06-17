/*******************************************************************************
 * Copyright (c) 2013 Oracle Corporation
 ******************************************************************************/
package oracle.toplink.examples.live.ws;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.core.MediaType;
import javax.xml.bind.JAXBException;

import oracle.toplink.dataservices.DataServicePersistenceContext;
import oracle.toplink.dataservices.livedata.Subscription;
import oracle.toplink.dataservices.livedata.SubscriptionFactory;
import oracle.toplink.dataservices.livedata.cache.CacheSubscriptionProvider;
import oracle.toplink.dataservices.livedata.notification.ClientNotifier;
import oracle.toplink.dataservices.livedata.notification.Notification;
import oracle.toplink.dataservices.livedata.notification.NotificationType;
import oracle.toplink.dataservices.livedata.qcn.QCNSubscriptionProvider;

import org.eclipse.persistence.jpa.rs.PersistenceContext;
import org.eclipse.persistence.logging.SessionLog;

import weblogic.websocket.WebSocketConnection;

/**
 * Represents a live data {@link ClientNotifier} that communicates changes
 * detected in TopLink or the Oracle database using WebSockets via JSON
 * messaging.
 * <p>
 * This class subscribes for query-based, QCN notifications with a given
 * {@link PersistenceContext}. As query results change notifications are
 * received, the changes and associated data objects are converted to JSON
 * messages. These messages are then sent to the associated
 * {@link WebSocketConnection}.
 * <p>
 * 
 * @see ClientNotifier
 * @see DataServicePersistenceContext
 * @see Notification
 * @see WebSocketConnection
 * 
 * @version 12.1.3
 */
public class BidNotifier implements ClientNotifier {

    /**
     * Id of the associated auction.
     */
    private int auctionId;

    private DataServicePersistenceContext persistenceContext;

    /**
     * The query subscription that listens to cache changes applied through
     * other clients talking to this application instance.
     */
    private Subscription cacheSubscription;

    /**
     * The query subscription that listens to LiveData changes from Oracle
     * database using QCN.
     */
    private Subscription qcnSubscription;

    /**
     * The {@link WebSocketConnection} associated with this query.
     */
    private WebSocketConnection websocket;

    /**
     * The name of the JPQL query that retrieves all the bids with a specific
     * auction id.
     */
    protected static final String BID_FOR_AUCTION_ID = "Bid.forAuctionId";

    /**
     * Constructor.
     * 
     * @param auctionId
     *            The id of the auction to listen for new bids on.
     * @param websocket
     *            the WebSocket to notify of new bid objects.
     */
    public BidNotifier(DataServicePersistenceContext persistenceContext, int auctionId, WebSocketConnection websocket) {
        this.auctionId = auctionId;
        this.websocket = websocket;
        this.persistenceContext = persistenceContext;
    }

    protected DataServicePersistenceContext getPersistenceContext() {
        return this.persistenceContext;
    }

    public int getAuctionId() {
        return this.auctionId;
    }

    @Override
    public void initialize() {
    }

    @Override
    public boolean isOpen() {
        return this.qcnSubscription != null;
    }

    /**
     * Serializes the <code>entity</code> to JSON and sends it on the WebSocket.
     */
    private void notify(Object entity, NotificationType notificationType) {
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        Notification notification = new Notification(notificationType, entity);

        try {
            getPersistenceContext().marshallEntity(notification, MediaType.APPLICATION_JSON_TYPE, stream);
            String message = stream.toString();
            this.websocket.send(message);
            log("WebSocket, Message Sent: [connection: " + this.websocket.toString() + "]: " + message);
        } catch (JAXBException | IllegalStateException | IOException e) {
            throw new RuntimeException("BidNotifier.notify failed for " + notification + " :: [connection: " + this.websocket.toString() + "]", e);
        }
    }

    @Override
    public void newObject(Object newObject) {
        notify(newObject, NotificationType.ADD);
    }

    @Override
    public void removedObject(String objectType, Object removedObjectId) {
        notify(removedObjectId, NotificationType.REMOVE);
    }

    @Override
    public void updatedObject(Object updatedObject) {
        notify(updatedObject, NotificationType.UPDATE);
    }

    /**
     * Subscribes with the associated {@link PersistenceContext} to listen to
     * query result change events.
     */
    public void subscribe() {
        log("Websocket, Registered [auction: " + getAuctionId() + ", persistence unit: " + this.persistenceContext.getName() + "]");
        SubscriptionFactory factory = getPersistenceContext().getSubscriptionFactory();

        Map<String, Object> properties = new HashMap<String, Object>();
        properties.put(SubscriptionFactory.SUBSCRIPTION_TYPE, QCNSubscriptionProvider.QCN);
        properties.put(CacheSubscriptionProvider.QUERY_NAME, BID_FOR_AUCTION_ID);

        Map<String, Object> params = new HashMap<String, Object>();
        params.put("auctionId", getAuctionId());
        properties.put(CacheSubscriptionProvider.QUERY_PARAMETERS, params);

        this.qcnSubscription = factory.getOrCreateSubscription(BID_FOR_AUCTION_ID, properties);

        // Register for query subscription
        this.qcnSubscription.addClientNotifier(this);
        properties.put(SubscriptionFactory.SUBSCRIPTION_TYPE, CacheSubscriptionProvider.CACHE);

        this.cacheSubscription = factory.getOrCreateSubscription(BID_FOR_AUCTION_ID, properties);

        // Register for type subscription
        this.cacheSubscription.addClientNotifier(this);
    }

    /**
     * Unsubscribes from the associated {@link PersistenceContext} from
     * listening to query result change events.
     */
    public void unsubscribe() {
        log("Websocket, Unregistered [auction: " + getAuctionId() + ", persistence unit: " + this.persistenceContext.getName() + "]");

        Map<String, String> params = new HashMap<String, String>();
        params.put("auctionId", Integer.toString(getAuctionId()));

        // Remove this notifier from subscriptions
        this.cacheSubscription.removeClientNotifier(this);
        this.qcnSubscription.removeClientNotifier(this);

        // Clean up unused subscriptions from the factory if needed
        SubscriptionFactory subscriptionFactory = getPersistenceContext().getSubscriptionFactory();

        if (this.cacheSubscription.getClientNotifiers().isEmpty()) {
            subscriptionFactory.removeSubscription(BID_FOR_AUCTION_ID, this.cacheSubscription);
        }

        if (this.qcnSubscription.getClientNotifiers().isEmpty()) {
            subscriptionFactory.removeSubscription(BID_FOR_AUCTION_ID, this.qcnSubscription);
        }

        this.cacheSubscription = null;
        this.qcnSubscription = null;
    }

    protected void log(String message) {
        getPersistenceContext().getJpaSession().getSessionLog().log(SessionLog.INFO, "TLDS Live::" + message);
    }

    @Override
    public String toString() {
        return "BidNotifier [auction = " + getAuctionId() + "]";
    }

}