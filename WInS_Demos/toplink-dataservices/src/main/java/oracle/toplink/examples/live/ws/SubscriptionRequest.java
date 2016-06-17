/*******************************************************************************
 * Copyright (c) 2013 Oracle Corporation
 ******************************************************************************/
package oracle.toplink.examples.live.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;

/**
 * This class represents a JSON request for Live Data notification for bids of
 * the specified auction.
 * <p>
 * JSON Format:
 * 
 * <pre>
 * { auction : 123 }
 * </pre>
 * 
 * @version 12.1.3
 */
@XmlAccessorType(XmlAccessType.FIELD)
public class SubscriptionRequest {

    private int auction;

    public int getAuction() {
        return auction;
    }

    public void setAuction(int auction) {
        this.auction = auction;
    }

    @Override
    public String toString() {
        return "SubscriptionRequest [auction=" + auction + "]";
    }
}