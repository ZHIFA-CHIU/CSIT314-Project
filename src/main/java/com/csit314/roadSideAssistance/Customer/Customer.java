package com.csit314.roadSideAssistance.Customer;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.util.UUID;

@Entity
@Table
public class Customer {
    @Id
    @GeneratedValue(generator = "uuidGen")
    @GenericGenerator(
            name = "uuidGen",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    private String name;
    
    @Column(unique=true)
    private String email;

    private LocalDate dob;

    @Column(unique=true)
    private String phoneNumber;

    @Transient
    private int age;

    private String password; //SHA512 salted hashed password

    private String salt; //randomly generated salt for customer

    public Customer() {
    }

    public Customer(String name, String email, LocalDate dob, String phoneNumber) throws customException {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        if(getAge() < 16) {
            //System.out.println("Error age < 16");
            throw new customException("Error age < 16");
        }
        
    }

    public Customer(String name, String email, LocalDate dob) {
        this.name = name;
        this.email = email;
        this.dob = dob;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getAge() {
        if ((dob != null)) {
            return Period.between(dob, LocalDate.now()).getYears();
        }
        return 0; // dob == null
    }

    private void generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        this.salt = new String(salt);
    }

    public void setPassword(String password) {
        if(salt == null) {
            generateSalt();
        } else {
            this.password = password;
        }
    }

    public boolean checkPassword(String password) {
        if(this.password == password) {
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", age=" + age +
                '}';
    }

    public boolean validateCustomer() {
        if (name.equals("") || email.equals("") || dob.isBefore(LocalDate.of(1920, Month.JANUARY, 1))) {
            return false;
        }
        return true;
    }
}