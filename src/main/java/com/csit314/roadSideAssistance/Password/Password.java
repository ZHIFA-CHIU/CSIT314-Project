package com.csit314.roadSideAssistance.Password;

import java.security.NoSuchAlgorithmException;

/**
 * Interface for password class
 */
public interface Password {

    void setPassword(String password) throws NoSuchAlgorithmException;

    boolean checkPassword(String password) throws NoSuchAlgorithmException;

    String getPassword();

    String hashPassword(String password, byte[] salt) throws NoSuchAlgorithmException;
}
