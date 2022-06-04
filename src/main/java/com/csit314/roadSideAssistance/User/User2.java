package com.csit314.roadSideAssistance.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User2 {
    private String email;
    private String password;

    public User2(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
