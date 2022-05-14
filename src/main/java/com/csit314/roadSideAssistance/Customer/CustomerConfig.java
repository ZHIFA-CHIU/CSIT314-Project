package com.csit314.roadSideAssistance.Customer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class CustomerConfig {

    /*@Bean
    CommandLineRunner commandLineRunner(CustomerRepository repository) {
        return args -> {
            Customer bob = new Customer(
                    "Bob",
                    "Jones",
                    "bob@gmail.com",
                    LocalDate.of(2000, Month.JANUARY, 5),
                    "04948181271",
                    "abc123"
            );
            Customer jim = new Customer(
                    "Jim",
                    "jilly",
                    "jim@gmail.com",
                    LocalDate.of(2000, Month.FEBRUARY, 6),
                    "0291817391",
                    "abc123"
            );

            //repository.saveAll(
            //        List.of(bob, jim)
            //);
        };
    }*/
}
