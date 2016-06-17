/*******************************************************************************
 * Copyright (c) 1998, 2008 Oracle. All rights reserved.
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License v1.0 and Eclipse Distribution License v. 1.0 
 * which accompanies this distribution. 
 * The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at 
 * http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 * 		dclarke - initial JPA Employee example using XML (bug 217884)
 * 	    ssmith  - mapped using annotations and simplified
 ******************************************************************************/
package cachestore.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee implements Serializable {
	private static final long serialVersionUID = 4943612673242238866L;
	@Id
	private int id;
	private String firstName;
	private String lastName;

	public Employee() {
	}

	public int getId() {
		return id;
	}

	public void setId(int empId) {
		this.id = empId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String fName) {
		this.firstName = fName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lName) {
		this.lastName = lName;
	}

	public String toString() {
		return "Employee(" + getId() + ": " + getLastName() + ", " + getFirstName() + ")";
	}

}
