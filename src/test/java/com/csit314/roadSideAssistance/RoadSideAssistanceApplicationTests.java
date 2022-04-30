package com.csit314.roadSideAssistance;

import com.csit314.roadSideAssistance.Customer.Customer;
import com.csit314.roadSideAssistance.Customer.CustomException;
import org.junit.jupiter.api.Assertions;
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
	//customer tests
	/*
	@Test
	@DisplayName("Simple Test of Customer Creation")
	void testCreateCustomer() throws CustomException {
		Customer c = new Customer("Bob", "bobsemail@gmail.com", LocalDate.of(2001, Month.JANUARY, 8)
				, "0451872930", "password");

		assertEquals(c.getName(), "Bob", "Checking name");
		assertEquals(c.getEmail(), "bobsemail@gmail.com", "Checking email");
	}
	@Test
	@DisplayName("Simple Test of Enforced Age Consistency Constraints")
	void testConsistencyConstraints() throws CustomException {
		CustomException thrown = Assertions.assertThrows(CustomException.class, () -> {
			//Code under test
			Customer c = new Customer("Bob", "bobsemail@gmail.com", LocalDate.now().minusYears(15)
					, "0451872930", "password");
		});
	}
	*/



}
