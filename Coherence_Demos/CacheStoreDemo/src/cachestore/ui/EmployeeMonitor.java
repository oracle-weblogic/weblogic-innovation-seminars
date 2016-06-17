package cachestore.ui;

import java.awt.EventQueue;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JTextPane;
import javax.swing.text.BadLocationException;
import javax.swing.text.Document;

import net.miginfocom.swing.MigLayout;
import cachestore.model.Employee;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;
import com.tangosol.util.MapEvent;
import com.tangosol.util.MapListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class EmployeeMonitor {

	private JFrame frmEmployeeMonitor;
	private JTextPane eventLog;
	private JTextField firstNameField;
	private JTextField lastNameField;
	private JLabel lblId;
	private JTextField idField;
	private JButton getButton;
	protected NamedCache employeeCache;
	private JButton removeButton;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					EmployeeMonitor window = new EmployeeMonitor();
					window.frmEmployeeMonitor.setVisible(true);
					window.registerInterest();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	protected void registerInterest() {
		MapListener listener = new MapListener() {
			
			public void entryUpdated(MapEvent event) {
				logEvent(event);
				Employee employee = (Employee) event.getNewValue();
				String idString = getIdField().getText();
				if ((idString != null) && (!idString.isEmpty())) {
					int id = Integer.valueOf(idString).intValue();
					if (id == employee.getId()) {
						updateFields(employee);
					}
				}
			}

			public void entryInserted(MapEvent event) {
				logEvent(event);			
			}
			
			public void entryDeleted(MapEvent event) {
				logEvent(event);	
				Employee employee = (Employee) event.getOldValue();
				String idString = getIdField().getText();
				if ((idString != null) && (!idString.isEmpty())) {
					int id = Integer.valueOf(idString).intValue();
					if (id == employee.getId()) {
						clearFields(employee);
					}
				}
			}

			private void logEvent(MapEvent event) {
				String eventDescription = MapEvent.getDescription(event.getId()).toUpperCase();
				Object object = event.getNewValue();
				if (object == null) {
					// handle remove case
					object = event.getOldValue();
				}
				Document doc = getEventLog().getDocument();
			    try {
					doc.insertString(doc.getLength(), eventDescription + ": " + object.toString() + "\n", null);
				} catch (BadLocationException e) {
					e.printStackTrace();
				}
			}

			private void updateForm(Object newValue) {
				
			}

		};
		employeeCache.addMapListener(listener);
		
	}

	/**
	 * Create the application.
	 */
	public EmployeeMonitor() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		CacheFactory.ensureCluster();
		employeeCache = CacheFactory.getCache("Employee");
		frmEmployeeMonitor = new JFrame();
		frmEmployeeMonitor.setTitle("CacheStore Demo-Employee Cache Monitor");
		frmEmployeeMonitor.setBounds(100, 100, 663, 370);
		frmEmployeeMonitor.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmEmployeeMonitor.getContentPane().setLayout(new MigLayout("", "[grow,fill]", "[][][grow,fill]"));
		
		lblId = new JLabel("Id:");
		frmEmployeeMonitor.getContentPane().add(lblId, "flowx,cell 0 0");
		
		idField = new JTextField();
		frmEmployeeMonitor.getContentPane().add(idField, "cell 0 0");
		idField.setColumns(10);
		
		JLabel lblFirstName = new JLabel("First Name:");
		frmEmployeeMonitor.getContentPane().add(lblFirstName, "cell 0 0,alignx left");
		
		JLabel lblNewLabel = new JLabel("Event Log:");
		frmEmployeeMonitor.getContentPane().add(lblNewLabel, "cell 0 1");
		
		firstNameField = new JTextField();
		frmEmployeeMonitor.getContentPane().add(firstNameField, "cell 0 0,alignx left");
		firstNameField.setColumns(10);
		
		JLabel lblLastName = new JLabel("Last Name:");
		frmEmployeeMonitor.getContentPane().add(lblLastName, "cell 0 0");
		
		lastNameField = new JTextField();
		frmEmployeeMonitor.getContentPane().add(lastNameField, "cell 0 0,alignx left");
		lastNameField.setColumns(10);
		
		JButton putButton = new JButton("Put");
		putButton.addKeyListener(new KeyAdapter() {
			@Override
			public void keyReleased(KeyEvent e) {
				putEmployee();				
			}
		});
		putButton.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				putEmployee();
			}

		});
		
		getButton = new JButton("Get");
		getButton.addKeyListener(new KeyAdapter() {
			@Override
			public void keyReleased(KeyEvent e) {
				getEmployee();				
			}
		});
		getButton.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				getEmployee();
			}

		});

		frmEmployeeMonitor.getContentPane().add(getButton, "cell 0 0");
		frmEmployeeMonitor.getContentPane().add(putButton, "cell 0 0,alignx left");
		
		eventLog = new JTextPane();
		eventLog.setEditable(false);
		frmEmployeeMonitor.getContentPane().add(eventLog, "cell 0 2,grow");
		
		removeButton = new JButton("Remove");
		removeButton.addKeyListener(new KeyAdapter() {
			@Override
			public void keyReleased(KeyEvent e) {
				removeEmployee();
			}
		});
		removeButton.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				removeEmployee();
			}
		});
		frmEmployeeMonitor.getContentPane().add(removeButton, "cell 0 0");
	}

	private void removeEmployee() {
		String idString = getIdField().getText();
		if ((idString != null) && (!idString.isEmpty())) {
			int id = Integer.valueOf(idString).intValue();
			Employee employee = (Employee) getEmployeeCache().remove(id);
			clearFields(employee);
		}
	}

	private void getEmployee() {
		String idString = getIdField().getText();
		if ((idString != null) && (!idString.isEmpty())) {
			int id = Integer.valueOf(idString).intValue();
			Employee employee = (Employee) getEmployeeCache().get(id);
			updateFields(employee);
		}
	}

	private void putEmployee() {
		String idString = getIdField().getText();
		if ((idString != null) && (!idString.isEmpty())) {
			int id = Integer.valueOf(idString).intValue();
			Employee employee = new Employee();
			employee.setId(id);
			employee.setFirstName(getFirstNameField().getText());
			employee.setLastName(getLastNameField().getText());
			getEmployeeCache().put(id,employee);
		}
	}

	private void updateFields(Employee employee) {
		if (employee != null) {
			getIdField().setText(String.valueOf(employee.getId()));
			getFirstNameField().setText(employee.getFirstName());
			getLastNameField().setText(employee.getLastName());
		}
	}

	private void clearFields(Employee employee) {
		if (employee != null) {
			getIdField().setText("");
			getFirstNameField().setText("");
			getLastNameField().setText("");
		}
	}

	public JTextPane getEventLog() {
		return eventLog;
	}
	public JTextField getIdField() {
		return idField;
	}
	public JTextField getFirstNameField() {
		return firstNameField;
	}
	public JTextField getLastNameField() {
		return lastNameField;
	}

	public NamedCache getEmployeeCache() {
		return employeeCache;
	}
}
