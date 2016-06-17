package com.oracle.coherence.handson;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Map;

import com.tangosol.net.cache.CacheStore;
import com.tangosol.util.Base;

public class DBCacheStore
    extends Base implements CacheStore {

    protected Connection m_con;
    protected String m_sTableName;

    private static final String DB_URL = "jdbc:oracle:thin:@localhost:1521:pdborcl";
    private static final String DB_USER = "hr";
    private static final String DB_PASS = "welcome1";

    public DBCacheStore(String sTableName) {
        m_sTableName = sTableName;

        configureConnection();
    }

    protected void configureConnection() {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            
            m_con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
            m_con.setAutoCommit(true);
        } catch (Exception e) {
            throw ensureRuntimeException(e, "Connection failed");
        }
    }

    public String getTableName() {
        return m_sTableName;
    }

    public Connection getConnection() {
        return m_con;
    }

    public Object load(Object oKey) {
    	System.out.println("DBCacheStore.load(" + oKey + ')');
    	
        Object oValue = null;
        Connection con = getConnection();
        String sSQL =
            "SELECT id, value FROM " + getTableName() + " WHERE id = ?";
        
        try {
            PreparedStatement stmt = con.prepareStatement(sSQL);

            stmt.setString(1, String.valueOf(oKey));
            ResultSet rslt = stmt.executeQuery();
            if (rslt.next()) {
                oValue = rslt.getString(2);
                if (rslt.next()) {
                    throw new SQLException("Not a unique key: " + oKey);
                }
            }
            stmt.close();
        } catch (SQLException e) {
            throw ensureRuntimeException(e, "Load failed: key=" + oKey);
        }
        return oValue;
    }

    public void store(Object oKey, Object oValue) {
    	System.out.println("DBCacheStore.store(" + oKey + ", " + oValue + ')');
    	
        Connection con = getConnection();
        String sTable = getTableName();
        String sSQL;

        if (load(oKey) != null) {
            sSQL = "UPDATE " + sTable + " SET value = ? where id = ?";
        } else {
            sSQL = "INSERT INTO " + sTable + " (value, id) VALUES (?,?)";
        }
        try {
            PreparedStatement stmt = con.prepareStatement(sSQL);
            int i = 0;
            stmt.setString(++i, String.valueOf(oValue));
            stmt.setString(++i, String.valueOf(oKey));
            stmt.executeUpdate();
            stmt.close();
        } catch (SQLException e) {
            throw ensureRuntimeException(e, "Store failed: key=" + oKey);
        }
    }

    public void erase(Object oKey) {
    	System.out.println("DBCacheStore.erase(" + oKey + ')');
    	
        Connection con = getConnection();
        String sSQL = "DELETE FROM " + getTableName() + " WHERE id=?";
        try {
            PreparedStatement stmt = con.prepareStatement(sSQL);

            stmt.setString(1, String.valueOf(oKey));
            stmt.executeUpdate();
            stmt.close();
        } catch (SQLException e) {
            throw ensureRuntimeException(e, "Erase failed: key=" + oKey);
        }
    }

    @SuppressWarnings("rawtypes")
	public void eraseAll(Collection colKeys) {
        throw new UnsupportedOperationException();
    }

    @SuppressWarnings("rawtypes")
	public Map loadAll(Collection colKeys) {
        throw new UnsupportedOperationException();
    }

    @SuppressWarnings("rawtypes")
	public void storeAll(Map mapEntries) {
        throw new UnsupportedOperationException();
    }
}
