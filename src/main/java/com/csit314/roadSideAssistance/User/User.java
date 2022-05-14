package com.csit314.roadSideAssistance.User;

import com.csit314.roadSideAssistance.Password.Password;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.util.UUID;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
abstract public class User implements Password {
    @Id
    @GeneratedValue(generator = "uuidGen")
    @GenericGenerator(
            name = "uuidGen",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Type(type = "uuid-char")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private LocalDate dob;
    @Column(unique = true)
    private String phoneNumber;
    @Transient
    private int age;
    private String streetAddress;
    private String suburb;
    private String postCode;
    private String State;

    private String salt;
    @Column(name = "Password")
    private String password; //SHA-512 encrypted password


    public User(String firstName, String lastName, String email, LocalDate dob, String phoneNumber, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        setPassword(password);
    }

    public User(String firstName, String lastName, String email, LocalDate dob, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
    }

    public int getAge() {
        if ((dob != null)) {
            return Period.between(dob, LocalDate.now()).getYears();
        }
        return 0; // dob == null
    }

    public boolean validateUser() {
        if (firstName.equals("") || lastName.equals("") || email.equals("") || dob.isBefore(LocalDate.of(1920, Month.JANUARY, 1))) {
            return false;
        }
        if (getAge() < 16) {
            return false;
        }
        return true;
    }

    public String hashPassword(String password) {
        //hashed password to be implemented here
        return password;
    }

    public void generateSalt() {
        //generate random salt
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        this.salt = new String(salt);
    }

    public void setPassword(String password) {
        if (salt == null) {
            generateSalt();
        }
        this.password = hashPassword(salt + password);
        assert (this.password != null);
    }

    public boolean checkPassword(String password) {
        System.out.println("Input password: " + password + " salt: " + salt + " hashedPassword: " + hashPassword(salt + password) + " stored password: " + this.password);
        if (hashPassword(salt + password).equals(this.password)) {
            return true;
        }
        return false;
    }


}
