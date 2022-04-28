package com.csit314.roadSideAssistance.CustomerEx;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.util.UUID;

/**
 * CustomerEx model to demonstrate basic spring functionality
 */
@Getter
@Setter
@AllArgsConstructor
@Entity
@Table
public class
CustomerEx {
    @Id
    @GeneratedValue(generator = "uuidGen")
    @GenericGenerator(name = "uuidGen", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "uuid", updatable = false, nullable = false)
    private UUID uuid;
    private String name;
    private String email;
    private LocalDate dob;

    public CustomerEx() {
    }

    public CustomerEx(String name, String email, LocalDate dob) {
        this.name = name;
        this.email = email;
        this.dob = dob;
    }

    public int getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + uuid +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", age=" + getAge() +
                '}';
    }

    public boolean validateCustomer() {
        return !name.equals("") && !email.equals("") && !dob.isBefore(LocalDate.of(1920, Month.JANUARY, 1));
    }
}