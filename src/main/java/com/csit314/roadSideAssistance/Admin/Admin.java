package com.csit314.roadSideAssistance.Admin;

import com.csit314.roadSideAssistance.Password.Password;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.security.SecureRandom;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Admin Entity
 */
@Entity
@Data
@NoArgsConstructor
@Table
public class Admin implements Password {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    @Column(unique=true)
    private String email;
    private String mobileNumber;
    private String password;
    private byte[] salt;

    public Admin(String email, String mobileNumber, String password) {
        this.email = email;
        this.mobileNumber = mobileNumber;
        setPassword(password);
        assert(this.password != null);
    }

    public String hashPassword(String password, byte[] salt) {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(salt);
            byte[] bytes = messageDigest.digest(password.getBytes());
            StringBuilder stringBuilder = new StringBuilder();
            for (byte aByte : bytes) {
                stringBuilder.append(Integer.toString((aByte & 0xff) + 0x100, 16).substring(1));
            }
            password = stringBuilder.toString();
        } catch (NoSuchAlgorithmException error) {
            error.printStackTrace();
        }
        return password;
    }

    public void generateSalt() {
        //generate random salt
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        this.salt = salt;
    }

    public void setPassword(String password) {
        generateSalt(); //Changes the salt every time password is changed
        this.password = hashPassword(password, salt);
    }

    public boolean checkPassword(String password) {
        return hashPassword(password, salt).equals(this.password);
    }

    public boolean validateAdmin() {
        if (!email.contains("@")){
            return false;
        }
        if (!email.contains(".")){
            return false;
        }
        if (email.contains("[!#$%&*()_+=|<>?{}\\\\[\\\\]~-]")){
            return false;
        }
        if (email.length() < 6){
            return false;
        }
        if (mobileNumber.length() != 10){
            return false;
        }
        return true;
    }
}

