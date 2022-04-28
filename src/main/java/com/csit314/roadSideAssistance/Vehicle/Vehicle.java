package com.csit314.roadSideAssistance.Vehicle;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Year;

//Contains backend vehicle class
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
    }
    //Getters
    public String getRegistrationPlate() {
        return registrationPlate;
    }

    public String getRegisteredState() {
        return registeredState;
    }

    public Year getManufacturedYear() {
        return manufacturedYear;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public String getModel() {
        return model;
    }

    public String getColour() {
        return colour;
    }

    public double getWeight() {
        return weight;
    }
    public String getRego() {

        String state =  getRegisteredState();
        String plate = getRegistrationPlate();
        String rego = state + " " + plate;
        return rego;
    }
    //Setters
    public void setRegistrationPlate(String registrationPlate) {
        this.registrationPlate = registrationPlate;
    }

    public void setRegisteredState(String registeredState) {
        this.registeredState = registeredState;
    }

    public void setManufacturedYear(Year manufacturedYear) {
        this.manufacturedYear = manufacturedYear;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
    public void setRego(String rego) {
        rego = getRegisteredState() + " " + getRegistrationPlate();
        this.rego = rego;
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
        else return true;
    }
}
