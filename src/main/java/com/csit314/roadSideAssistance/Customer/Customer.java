package com.csit314.roadSideAssistance.Customer;

import com.csit314.roadSideAssistance.User.User;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.util.UUID;

@Entity
@Table
public class Customer extends User {

    public Customer() {
        super();
    }

    public Customer(String firstName, String lastName, String email, LocalDate dob, String phoneNumber, String password) throws CustomException {
        super(firstName, lastName, email, dob, phoneNumber, password);

        if(getAge() < 16) {
            //System.out.println("Error age < 16");
            throw new CustomException("Error age < 16");
        } if(!validateUser()) {
            throw new CustomException("Customer fails to meet consistency constraints");
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