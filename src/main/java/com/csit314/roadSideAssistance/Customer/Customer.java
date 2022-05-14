package com.csit314.roadSideAssistance.Customer;

import com.csit314.roadSideAssistance.Job.Job;
import com.csit314.roadSideAssistance.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table
public class Customer extends User {

    public Customer() {
        super();
    }

    public Customer(String firstName, String lastName, String email, LocalDate dob, String phoneNumber, String password) throws CustomException {
        super(firstName, lastName, email, dob, phoneNumber, password);

        if(getAge() < 16) {
            throw new CustomException("Error age < 16");
        }
        if(!validateUser()) {
            throw new CustomException("Customer fails to meet consistency constraints");
        }
        
    }

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    private Set<Job> job = new LinkedHashSet<>();

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + getId() +
                ", name='" + getFirstName() + ' ' + getLastName() + '\'' +
                ", email='" + getEmail() + '\'' +
                ", dob=" + getDob() +
                ", age=" + getAge() +
                '}';
    }
}