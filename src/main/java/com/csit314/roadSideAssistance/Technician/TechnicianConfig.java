package com.csit314.roadSideAssistance.Technician;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Component
@Order(2)
public class TechnicianConfig implements CommandLineRunner {

    private final TechnicianRepository repository;

    public TechnicianConfig(TechnicianRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        Faker faker = new Faker(new Locale("en-AU"));

        List<Technician> technicianList = new ArrayList<>();
        // Randomly generate 100 technicians
        for (int i = 0; i < 100; i++) {
            String fname = faker.name().firstName();
            String lname = faker.name().lastName();
            String email = fname + lname + "@mail.com";

            Technician technician = new Technician(
                    fname,
                    lname,
                    email,
                    faker.date().birthday().toInstant().atZone(ZoneId.systemDefault()).toLocalDate(),
                    faker.phoneNumber().phoneNumber(),
                    faker.regexify("[a-z1-9]{8}"),
                    faker.address().streetAddress(),
                    faker.address().city(),
                    faker.address().zipCode(),
                    faker.address().state(),
                    faker.bool().bool(),
                    faker.bool().bool()
            );

            BankAccount bankAccount = new BankAccount(
                    fname+"'s account",
                    faker.regexify("[1-9]{6}"),
                    faker.regexify("[1-9]{8}")
            );

            technician.setBankAccount(bankAccount);
            technicianList.add(technician);
        }
        repository.saveAll(technicianList);
    }
}