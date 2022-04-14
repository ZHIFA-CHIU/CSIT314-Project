package com.csit314.roadSideAssistance.CustomerEx;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class CustomerConfig {

    @Bean
    CommandLineRunner commandLineRunner(CustomerExRepository repository) {
        return args -> {
            CustomerEx bob = new CustomerEx(
                    "Bob",
                    "bob@gmail.com",
                    LocalDate.of(2000, Month.JANUARY, 5)
            );
            CustomerEx jim = new CustomerEx(
                    "Jim",
                    "jim@gmail.com",
                    LocalDate.of(2000, Month.FEBRUARY, 6)
            );

            repository.saveAll(
                    List.of(bob, jim)
            );
        };
    }
}
