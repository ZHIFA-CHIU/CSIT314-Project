package com.csit314.roadSideAssistance.Vehicle;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Year;
/**
 * Contains vehicle backend class
 *
 *
 */
@Setter
@Getter
@Entity
@Data
@Table
@IdClass(VehicleIDUsingEmbeddable.class)
public class Vehicle {
    @Id
    private String registrationPlate;
    @Id
    private String registeredState;
    private Year manufacturedYear;
    private String manufacturer;
    private String model;
    private String colour;
    private double weight;
    private String rego; //Combines plate and state - exists because repo class was throwing errors when I tried to send it 2 strings at once

    public Vehicle() {
    }
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

    public String getRego() { //Lombak getter was returning null so I added this method
        return (registeredState + " " + registrationPlate);
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "registrationPlate='" + registrationPlate + '\'' +
                ", registeredState='" + registeredState + '\'' +
                ", manufacturedYear=" + manufacturedYear +
                ", manufacturer='" + manufacturer + '\'' +
                ", model='" + model + '\'' +
                ", colour='" + colour + '\'' +
                ", weight=" + weight +
                '}';
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
        if(plate.toUpperCase() != plate)
            return false;
        else return true;
    }
}
