/*******************************************************************************
 * Copyright (c) 2013 Oracle Corporation
 ******************************************************************************/
package oracle.toplink.examples.live.ws;

import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import oracle.toplink.dataservices.DataServicePersistenceContext;

import org.eclipse.persistence.logging.SessionLog;

import weblogic.websocket.ClosingMessage;
import weblogic.websocket.WebSocketAdapter;
import weblogic.websocket.WebSocketConnection;
import weblogic.websocket.annotation.WebSocket;

/**
 * A Weblogic, websocket implementation that provides TopLink Live Data
 * notifications for the auction demo.
 * 
 * @since WebLogic 12.1.3
 */
@WebSocket(pathPatterns = "/auction/live-bids", timeout = 1000000)
public class LiveBidsWebSocket extends WebSocketAdapter {

    /**
     * Map of notifiers identified by connection.
     */
    private Map<WebSocketConnection, BidNotifier> connectionToNotifiers = new HashMap<>();
    
    /**
     * RESTful Data Service context
     */
    private DataServicePersistenceContext persistenceContext;


    /**
     * Unregisters the provided {@link WebSocketConnection} from QCN
     * notification.
     */
    @Override
    public void onClose(WebSocketConnection connection, ClosingMessage msg) {
        BidNotifier bidNotifier = this.connectionToNotifiers.get(connection);
        if (bidNotifier != null) {
            synchronized (this.connectionToNotifiers) {
                this.connectionToNotifiers.remove(connection);
            }
            bidNotifier.unsubscribe();
        }
    }

    /**
     * Treat timeout as close.
     */
    @Override
    public void onTimeout(WebSocketConnection connection) {
        onClose(connection, null);
    }

    /**
     * Takes an incoming message from a socket connection. If the message
     * conforms to a valid QCN subscription request, the provided
     * {@link WebSocketConnection} is registered for QCN notifications.
     */
    @Override
    public void onMessage(WebSocketConnection connection, String message) {
        log(connection + " message received: " + message);

        try {
            SubscriptionRequest request = PersistenceHelper.unmarshall(message);
            log("Received: " + request);

            BidNotifier notifier = new BidNotifier(getPersistenceContext(), request.getAuction(), connection);
            notifier.subscribe();

            synchronized (this.connectionToNotifiers) {
                this.connectionToNotifiers.put(connection, notifier);
            }
        } catch (Exception e) {
            log(connection + " exception processing message, closing socket");
            throw new RuntimeException(e);
        }
    }
    
    protected DataServicePersistenceContext getPersistenceContext() {
        if (this.persistenceContext == null) {
            try {
				this.persistenceContext = PersistenceHelper.lookupPersistenceContext();
			} catch (URISyntaxException e) {
				throw new RuntimeException(e);
			}
        }
        return this.persistenceContext;
    }

    /**
     * Logs the message.
     */
    private void log(String message) {
        getPersistenceContext().getJpaSession().getSessionLog().log(SessionLog.INFO, "TLDS Live::" + message);
    }
}