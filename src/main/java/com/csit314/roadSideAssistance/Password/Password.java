package com.csit314.roadSideAssistance.Password;

import java.security.NoSuchAlgorithmException;

/**
 * Interface for password class
 */
public interface Password {

    void setPassword(String password);

    boolean checkPassword(String password);

    String getPassword();

    String hashPassword(String password, byte[] salt);
}
