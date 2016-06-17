package com.oracle.coherence.handson;

import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;

public class RunEmployeeExample {
    public RunEmployeeExample() {
    }

    public static void main(String[] args) {
        long empId = 190L; // emp 190 - Timothy Gates

        NamedCache employees = CacheFactory.getCache("Employees");

        Employees emp = (Employees)employees.get(empId);

        System.out.println("Employee " + emp.getFirstName() + " " +
                           emp.getLastName() + ", salary = $" +
                           emp.getSalary());

        // give them a 10% pay rise
        emp.setSalary(emp.getSalary() * 1.1);

        employees.put(empId, emp);

        Employees emp2 = (Employees)employees.get(empId);

        System.out.println("New Employee details are " + emp2.getFirstName() +
                           " " + emp2.getLastName() + ", salary = $" +
                           emp2.getSalary());
    }
}