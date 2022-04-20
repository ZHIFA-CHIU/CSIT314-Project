package com.csit314.roadSideAssistance.Vehicle;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Year;


@Entity
@Table
public class Vehicle {
    @Id
    private String registrationPlate;
    private String registeredState;
    private Year manufacturedYear;
    private String manufacturer;
    private String model;
    private String colour;
    private double weight;
    private String rego;

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

    public void setRego(String rego) {
        rego = getRegisteredState() + " " + getRegistrationPlate();
        this.rego = rego;
    }

    public String getRego() {
        return rego;
    }
}
