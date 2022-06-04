package technician;

import com.csit314.roadSideAssistance.Technician.Technician;
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
 */
@SpringBootTest(classes = TechnicianTest.class)
class TechnicianTest {

    @Test
    @DisplayName("Simple Test of Technician Creation")
    void testCreateTechnician(){
        Technician technician = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW",  true, true);

        assertEquals(technician.getFirstName(), "Jay", "Checking name");
        assertEquals(technician.getEmail(), "jaysmith@mail.com", "Checking email");
    }

    @Test
    @DisplayName("Simple Test of Valid User Constraint")
    void testValidUser(){
        IllegalStateException thrown = Assertions.assertThrows(IllegalStateException.class, () -> {
            Technician technician = new Technician("", "Smith", "jaysmith@mail.com",
                    LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                    "password", "1 main street", "Wollongong",
                    "2500", "NSW",  true, true);
        });
    }

    @Test
    @DisplayName("Testing technician password authentication")
    void testCustomerPassword(){
        Technician t = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW",  true, true);

        assertTrue(t.checkPassword("password"));
    }

    @Test
    @DisplayName("Testing technician update password authentication")
    void updateCustomerPassword(){
        Technician t = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW",  true, true);

        assertTrue(t.checkPassword("password"));
        t.setPassword("bail7198kxvckn");
        assertTrue(t.checkPassword("bail7198kxvckn"));
    }
}