package com.csit314.roadSideAssistance.Password;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public interface Password {

    public void setPassword(String password) throws NoSuchAlgorithmException;

    public boolean checkPassword(String password);

    public String getPassword();

    public String hashPassword(String password, byte[] salt) throws NoSuchAlgorithmException;
}
