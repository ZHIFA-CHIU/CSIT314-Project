package com.csit314.roadSideAssistance;

import com.csit314.roadSideAssistance.Customer.Customer;
import com.csit314.roadSideAssistance.Customer.customException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.Month;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class RoadSideAssistanceApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	@DisplayName("Simple Test of Customer Creation")
	void testCreateCustomer() throws customException {
		Customer c = new Customer("Bob", "bobsemail@gmail.com", LocalDate.of(2001, Month.JANUARY, 8)
				, "0451872930");

		assertEquals(c.getName(), "Bob", "Create basic customer class");
	}


}
