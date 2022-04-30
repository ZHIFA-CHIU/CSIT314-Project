package com.csit314.roadSideAssistance.Password;

import java.security.SecureRandom;

public interface Password {
    public void generateSalt();

    public void setPassword(String password);

    public boolean checkPassword(String password);

    public String hashPassword(String password);
}
