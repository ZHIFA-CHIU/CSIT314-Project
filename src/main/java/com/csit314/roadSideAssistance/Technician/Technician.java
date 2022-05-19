package com.csit314.roadSideAssistance.Technician;


/*
 * Most comments to be removed once User class exists
 * Other comments require other classes such as Job and BankAccount
 * */

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.Job.Job;
import com.csit314.roadSideAssistance.Review.Review;
import com.csit314.roadSideAssistance.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * Technician model
 *

 * @author      Jack_Is_2048
 * @version     0.1
 * @since       0.1
 * @author Jack_Is_2048
 * @version 1.1
 * @since 1.1

 */
@Getter
@Setter
@Entity
@Table(name = "Technician")
public class Technician extends User {
    private boolean availableStatus,
            lightVehicleQualification,
            heavyVehicleQualification;

    private double avgRating;


    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "BankAccount_id")
    private BankAccount bankAccount;

    @JsonIgnore
    @OneToMany(mappedBy = "technician", cascade = CascadeType.ALL)
    private Set<Job> jobs = new LinkedHashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "technician", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Review> reviews = new LinkedHashSet<>();

    public Technician() {
        super();
    }

    public Technician(String firstName, String lastName, String email, LocalDate dob,
                      String phoneNumber, String password, String streetAddress,
                      String suburb, String postCode, String state, boolean heavyVehicleQualification,
                      boolean lightVehicleQualification) throws TechnicianException, NoSuchAlgorithmException {
        super(firstName, lastName, email, dob, phoneNumber, password, streetAddress, suburb, postCode, state);

        this.heavyVehicleQualification = heavyVehicleQualification;
        this.lightVehicleQualification = lightVehicleQualification;

        if (!validateUser()) {
            throw new TechnicianException("Technician fails to meet consistency constraints");
        }
    }

    @Override
    public String toString() {
        return "Technician{" +
                "availableStatus=" + availableStatus +
                ", lightVehicleQualification=" + lightVehicleQualification +
                ", heavyVehicleQualification=" + heavyVehicleQualification +
                ", avgRating=" + avgRating +
                ", bankAccount=" + bankAccount +
                "} " + super.toString();
    }
}
