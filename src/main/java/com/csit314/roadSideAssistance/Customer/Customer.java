package com.csit314.roadSideAssistance.Customer;

import com.csit314.roadSideAssistance.Job.Job;
import com.csit314.roadSideAssistance.User.User;
import com.csit314.roadSideAssistance.Vehicle.Vehicle;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * User entity object
 */
@Getter
@Setter
@Entity
@Table
public class Customer extends User {

    boolean hasMembership = false;

    @JsonIgnore
    @OneToMany(mappedBy="customer", cascade = CascadeType.ALL)
    private Set<Vehicle> vehicleList;

    @JsonIgnore
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Job> job = new LinkedHashSet<>();

    public Customer() {
        super();
    }

    public Customer(String firstName, String lastName, String email, LocalDate dob,
                    String phoneNumber, String password, String streetAddress,
                    String suburb, String postCode, String state){
        super(firstName, lastName, email, dob, phoneNumber, password, streetAddress, suburb, postCode, state);

        if(!validateUser()) {
            throw new IllegalStateException("Customer fails to meet consistency constraints");
        }
    }

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