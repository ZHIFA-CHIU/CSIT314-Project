package customer;

import com.csit314.roadSideAssistance.Customer.Customer;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.Month;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(classes = CustomerTest.class)
class CustomerTest {

    @Test
    @DisplayName("Simple Test of Customer Creation")
    void testCreateCustomer(){
        Customer c = new Customer("Jay", "Smith", "jaysmith@gmail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW");

        assertEquals(c.getFirstName(), "Jay", "Checking name");
        assertEquals(c.getEmail(), "jaysmith@gmail.com", "Checking email");
    }

    @Test
    @DisplayName("Simple Test of Enforced Age Consistency Constraints")
    void testConsistencyConstraints(){
        IllegalStateException thrown = Assertions.assertThrows(IllegalStateException.class, () -> {
            //Code under test
            Customer c = new Customer("Jay", "Smith", "jaysmith@mail.com",
                    LocalDate.of(1900, Month.FEBRUARY, 12), "01234567890",
                    "password", "1 main street", "Wollongong",
                    "2500", "NSW");
        });
    }

    @Test
    @DisplayName("Testing customer password authentication")
    void testCustomerPassword(){
        Customer c = new Customer("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW");

        assertTrue(c.checkPassword("password"));
    }

    @Test
    @DisplayName("Testing customer update password authentication")
    void updateCustomerPassword(){
        Customer c = new Customer("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW");
        assertTrue(c.checkPassword("password"));
        c.setPassword("bail7198kxvckn");
        assertTrue(c.checkPassword("bail7198kxvckn"));
    }

}
