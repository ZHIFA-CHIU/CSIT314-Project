package com.csit314.roadSideAssistance.technicianTests;

import com.csit314.roadSideAssistance.Customer.CustomException;
import com.csit314.roadSideAssistance.Customer.Customer;
import com.csit314.roadSideAssistance.Technician.Technician;
import com.csit314.roadSideAssistance.Technician.TechnicianException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.Month;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Technician tests
 *      testCreateTechnician
 *      testValidUser
 *      addToAvgRating
 *
 * @author      Jack_Is_2048
 * @version     1.1
 * @since       1.1
 */
@SpringBootTest(classes = TechnicianTest.class)
class TechnicianTest {

    @Test
    @DisplayName("Simple Test of Technician Creation")
    void testCreateTechnician() throws TechnicianException {
        Technician technician = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890", "password");

        assertEquals(technician.getFirstName(), "Jay", "Checking name");
        assertEquals(technician.getEmail(), "jaysmith@mail.com", "Checking email");
    }

    @Test
    @DisplayName("Simple Test of Valid User Constraint")
    void testValidUser() throws TechnicianException {
        TechnicianException thrown = Assertions.assertThrows(TechnicianException.class, () -> {
            Technician technician = new Technician("Jay", "", "jaysmith@mail.com",
                    LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890", "password");
        });
    }

    @Test
    @DisplayName("Testing Technician adding to Avg Rating")
    void addToAvgRating() throws TechnicianException {
        Technician technician = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890", "password");

        technician.setAvgRating(3.5);

        // Add a rating of 4
        technician.addToAvgRating(4);

        assertEquals(technician.getAvgRating(), 3.75, "Checking Avg Rating");
    }

    @Test
    @DisplayName("Testing technician password authentication")
    void testCustomerPassword() throws TechnicianException {
        Technician t = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890", "password");

        assertTrue(t.checkPassword("password"));
    }

    @Test
    @DisplayName("Testing technician update password authentication")
    void updateCustomerPassword() throws TechnicianException {
        Technician t = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890", "password");

        assertTrue(t.checkPassword("password"));
        t.setPassword("bail7198kxvckn");
        assertTrue(t.checkPassword("bail7198kxvckn"));
    }
}