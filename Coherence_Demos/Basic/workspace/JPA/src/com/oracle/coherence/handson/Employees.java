package com.oracle.coherence.handson;

import java.io.Serializable;

import java.sql.Timestamp;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;


@Entity
@NamedQueries({
  @NamedQuery(name = "Employees.findAll", query = "select o from Employees o")
})
public class Employees implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Column(name="COMMISSION_PCT")
    private Double commissionPct;
    @Column(name="DEPARTMENT_ID")
    private Long departmentId;
    @Column(nullable = false, unique = true, length = 25)
    private String email;
    @Id
    @Column(name="EMPLOYEE_ID", nullable = false)
    private Long employeeId;
    @Column(name="FIRST_NAME", length = 20)
    private String firstName;
    @Column(name="HIRE_DATE", nullable = false)
    private Timestamp hireDate;
    @Column(name="JOB_ID", nullable = false, length = 10)
    private String jobId;
    @Column(name="LAST_NAME", nullable = false, length = 25)
    private String lastName;
    @Column(name="PHONE_NUMBER", length = 20)
    private String phoneNumber;
    private Double salary;
    @ManyToOne
    @JoinColumn(name = "MANAGER_ID")
    private Employees employees;
    @OneToMany(mappedBy = "employees")
    private List<Employees> employeesList;

    public Employees() {
    }

    public Employees(Double commissionPct, Long departmentId, String email,
                     Long employeeId, String firstName, Timestamp hireDate,
                     String jobId, String lastName, Employees employees,
                     String phoneNumber, Double salary) {
        this.commissionPct = commissionPct;
        this.departmentId = departmentId;
        this.email = email;
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.hireDate = hireDate;
        this.jobId = jobId;
        this.lastName = lastName;
        this.employees = employees;
        this.phoneNumber = phoneNumber;
        this.salary = salary;
    }

    public Double getCommissionPct() {
        return commissionPct;
    }

    public void setCommissionPct(Double commissionPct) {
        this.commissionPct = commissionPct;
    }

    public Long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Timestamp getHireDate() {
        return hireDate;
    }

    public void setHireDate(Timestamp hireDate) {
        this.hireDate = hireDate;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public Employees getEmployees() {
        return employees;
    }

    public void setEmployees(Employees employees) {
        this.employees = employees;
    }

    public List<Employees> getEmployeesList() {
        return employeesList;
    }

    public void setEmployeesList(List<Employees> employeesList) {
        this.employeesList = employeesList;
    }

    public Employees addEmployees(Employees employees) {
        getEmployeesList().add(employees);
        employees.setEmployees(this);
        return employees;
    }

    public Employees removeEmployees(Employees employees) {
        getEmployeesList().remove(employees);
        employees.setEmployees(null);
        return employees;
    }
}
