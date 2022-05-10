package com.csit314.roadSideAssistance.Admin;

import com.csit314.roadSideAssistance.Password.Password;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.security.SecureRandom;
import java.util.UUID;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

@Entity
@Setter
@Getter
@Data
@Table
public class Admin {
    @Id
    @GeneratedValue(generator = "uuidGen")
    @GenericGenerator(
            name = "uuidGen",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;
    @Column(unique=true)
    private String email;
    private String mobileNumber;
    private String passwordHash;
    private byte[] salt;

    public Admin() {
    }
    public Admin(String email, String mobileNumber, String password) {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        generateSalt();

        this.email = email;
        this.mobileNumber = mobileNumber;
        setPassword(password);
        assert(this.passwordHash != null);
    }
    public String hashPassword(String password, byte[] salt) {
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
    public void generateSalt() {
        //generate random salt
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        this.salt = salt;
    }

    public void setPassword(String password) {
        generateSalt(); //Changes the salt every time password is changed
        this.passwordHash = hashPassword(password, salt);
    }

    public boolean checkPassword(String password) {
        if(hashPassword(password, salt).equals(this.passwordHash)) {
            return true;
        }
        return false;
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

