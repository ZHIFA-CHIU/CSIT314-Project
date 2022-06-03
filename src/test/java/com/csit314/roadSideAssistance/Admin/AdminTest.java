package com.csit314.roadSideAssistance.Admin;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AdminTest {
    Admin adminTest = new Admin("admin@admin.co", "0404567765","password12");

    @Test
    @DisplayName("Simple Test of admin login")
    void checkPassword() {
        assertEquals(adminTest.checkPassword("password12"), true, "Password checker");
    }

    @Test
    @DisplayName("Simple Test of admin set password")
    void setPassword() {
        adminTest.setPassword("password123");
        assertEquals(adminTest.checkPassword("password123"), true, "Checking password has been changed");
    }

    @Test
    @DisplayName("Simple Test of admin validation")
    void validateAdmin() {
        Admin adminTest2 = new Admin("adminadmin.co", "0404567765","password");
        Admin adminTest3 = new Admin("admin@admin.co", "040456776512345678","password");
        assertEquals(adminTest.validateAdmin(), true, "Checking admin passes test");
        assertEquals(adminTest2.validateAdmin(), false, "Checking admin fails test if email wrong");
        assertEquals(adminTest3.validateAdmin(), false, "Checking admin fails test if mobile wrong");
    }
    @Test
    @DisplayName("Simple Test of admin set password")
    void ensureHashed() {
       assertNotEquals("password", adminTest.getPassword(), "Ensuring password is not plaintext");
    }

}