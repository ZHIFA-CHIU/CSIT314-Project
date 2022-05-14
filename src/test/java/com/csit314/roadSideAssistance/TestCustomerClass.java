package com.csit314.roadSideAssistance;

import com.csit314.roadSideAssistance.Customer.CustomException;
import com.csit314.roadSideAssistance.Customer.Customer;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.Month;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class TestCustomerClass {

    public TestCustomerClass() {}
    //@Test
    //void contextLoads() {
    //}

    //customer tests
    @Test
    @DisplayName("Simple Test of Customer Creation")
    void testCreateCustomer() throws CustomException, NoSuchAlgorithmException {
        Customer c = new Customer("Bob", "Jones", "bobsemail@gmail.com", LocalDate.of(2001, Month.JANUARY, 8)
                , "0451872930", "password");

        assertEquals(c.getFirstName(), "Bob", "Checking name");
        assertEquals(c.getEmail(), "bobsemail@gmail.com", "Checking email");
    }

    @Test
    @DisplayName("Simple Test of Enforced Age Consistency Constraints")
    void testConsistencyConstraints() throws CustomException {
        CustomException thrown = Assertions.assertThrows(CustomException.class, () -> {
            //Code under test
            Customer c = new Customer("Bob", "Jones", "bobsemail@gmail.com", LocalDate.now().minusYears(15)
                    , "0451872930", "password");
        });
    }

    @Test
    @DisplayName("Testing customer password authentication")
    void testCustomerPassword() throws CustomException, NoSuchAlgorithmException {
        Customer c = new Customer("Bob", "Jones", "bobsemail@gmail.com", LocalDate.of(2001, Month.JANUARY, 8)
                , "0451872930", "password");

        assertTrue(c.checkPassword("password"));
    }

    @Test
    @DisplayName("Testing customer update password authentication")
    void updateCustomerPassword() throws CustomException, NoSuchAlgorithmException {
        Customer c = new Customer("Bob", "Jones", "bobsemail@gmail.com", LocalDate.of(2001, Month.JANUARY, 8)
                , "0451872930", "password");
        //Customer new_c = new Customer();
        //new_c.setPassword("password");
        assertTrue(c.checkPassword("password"));
        c.setPassword("bail7198kxvckn");
        //new_c.setPassword("bail7198kxvckn");
        //System.out.println("c pass: " + c.getPassword() + " new_c pass: "+  new_c.getPassword());
        assertTrue(c.checkPassword("bail7198kxvckn"));
    }

}
