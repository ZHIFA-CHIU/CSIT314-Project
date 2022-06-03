package com.csit314.roadSideAssistance.Vehicle;

import com.csit314.roadSideAssistance.Customer.Customer;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Year;

/**
 * Contains vehicle backend class
 */
@Data
@NoArgsConstructor
@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "registrationPlate", "registeredState" }) })
public class Vehicle {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="customer_id", referencedColumnName="id")
    private Customer customer;
    private Long customerID;
    private String registrationPlate;
    private String registeredState;
    private Year manufacturedYear;
    private String manufacturer;
    private String model;
    private String colour;
    private double weight;
    private String rego; //Combines plate and state - exists because repo class was throwing errors when I tried to send it 2 strings at once

    //Constructor
    public Vehicle(String registrationPlate, String registeredState, Year manufacturedYear,
                   String manufacturer, String model, String colour, double weight) {
        this.registrationPlate = registrationPlate;
        this.registeredState = registeredState;
        this.manufacturedYear = manufacturedYear;
        this.manufacturer = manufacturer;
        this.model = model;
        this.colour = colour;
        this.weight = weight;
        rego = registeredState + " " + registrationPlate;
    }

    //Validates Vehicle to ensure rego is not null
    public boolean validateVehicle() {
        String state =  getRegisteredState();
        String plate = getRegistrationPlate();
        if(state.trim().isEmpty())
            return false;
        if(plate.trim().isEmpty())
            return false;
        if(plate.length() > 7)
            return false;
        if(plate.contains("[!@#$%&*()_+=|<>?{}\\\\[\\\\]~-]"))
            return false;
        if(!plate.toUpperCase().equals(plate))
            return false;
        return true;
    }
}
