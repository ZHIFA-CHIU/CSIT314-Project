package com.csit314.roadSideAssistance.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfo {
    private String email;
    private String password;

    public UserInfo(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
