package com.csit314.roadSideAssistance.Customer;

import com.csit314.roadSideAssistance.Job.Job;
import com.csit314.roadSideAssistance.Technician.Technician;
import com.csit314.roadSideAssistance.User.User;
import com.csit314.roadSideAssistance.Vehicle.Vehicle;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table
public class Customer extends User {

    boolean hasMembership;

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
                    String suburb, String postCode, String state) throws CustomException, NoSuchAlgorithmException {
        super(firstName, lastName, email, dob, phoneNumber, password, streetAddress, suburb, postCode, state);

        this.hasMembership = false;

        if(getAge() < 16) {
            throw new CustomException("Error age < 16");
        }
        if(!validateUser()) {
            throw new CustomException("Customer fails to meet consistency constraints");
        }
        
    }

    public void setHasMembership(boolean b) {
        hasMembership = b;
    }

    public boolean getHasMembership() {
        return hasMembership;
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