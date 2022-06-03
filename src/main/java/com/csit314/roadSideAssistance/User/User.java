package com.csit314.roadSideAssistance.User;

import com.csit314.roadSideAssistance.Password.Password;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
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
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
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
    private String state;

    @Column(name = "Password")
    private String password; //SHA-512 encrypted password
    private byte[] salt;


    public User(String firstName, String lastName, String email, LocalDate dob,
                String phoneNumber, String password, String streetAddress,
                String suburb, String postCode, String state) throws NoSuchAlgorithmException {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.streetAddress = streetAddress;
        this.suburb = suburb;
        this.postCode = postCode;
        this.state = state;
        setPassword(password);
    }
    public User(String firstName, String lastName, String email, LocalDate dob, String phoneNumber, String password) throws NoSuchAlgorithmException {
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
    public void generateSalt() {
        //generate random salt
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        this.salt = salt;
    }

    public String hashPassword(String password, byte[] salt) throws NoSuchAlgorithmException {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(salt);
            byte[] bytes = messageDigest.digest(password.getBytes());
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < bytes.length; i++) {
                stringBuilder.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            password = stringBuilder.toString();
        } catch (NoSuchAlgorithmException error) {
            error.printStackTrace();
        }
        return password;
    }

    public void setPassword(String password) throws NoSuchAlgorithmException {
        generateSalt();
        this.password = hashPassword(password, salt);
        assert (this.password != null);
    }

    public boolean checkPassword(String password) throws NoSuchAlgorithmException {
        if(hashPassword(password, salt).equals(this.password)) {
            return true;
        }
        return false;
    }


}
