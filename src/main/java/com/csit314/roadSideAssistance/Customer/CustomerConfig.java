package com.csit314.roadSideAssistance.Customer;

import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Component
@Order(1)
public class CustomerConfig implements CommandLineRunner {

    private final CustomerRepository repository;

    public CustomerConfig(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("customer");

        Faker faker = new Faker(new Locale("en-AU"));

        List<Customer> customerList = new ArrayList<>();
        // Randomly generate 20 customers
        for (int i = 0; i < 20; i++) {
            String fname = faker.name().firstName();
            String lname = faker.name().lastName();
            String email = fname + lname + "@mail.com";

            Customer customer = new Customer(
                    fname,
                    lname,
                    email,
                    faker.date().birthday().toInstant().atZone(ZoneId.systemDefault()).toLocalDate(),
                    faker.phoneNumber().phoneNumber(),
                    faker.regexify("[a-z1-9]{8}"),
                    faker.address().streetAddress(),
                    faker.address().city(),
                    faker.address().zipCode(),
                    faker.address().state()
            );

            customer.setHasMembership(faker.bool().bool());

            customerList.add(customer);
        }
        repository.saveAll(customerList);
    }
}
