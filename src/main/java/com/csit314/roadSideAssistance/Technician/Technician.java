package com.csit314.roadSideAssistance.Technician;


/*
 * Most comments to be removed once User class exists
 * Other comments require other classes such as Job and BankAccount
 * */

import com.csit314.roadSideAssistance.Job.Job;
import com.csit314.roadSideAssistance.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * Technician model
 *
 * @author Jack_Is_2048
 * @version 1.1
 * @since 1.1
 */
@Getter
@Setter
@Entity
@Table
public class Technician extends User {
    private boolean availableStatus,
            lightVehicleQualification,
            heavyVehicleQualification;

    private double avgRating;

    @JsonIgnore
    @OneToMany(mappedBy = "technician")
    private Set<Job> jobs = new LinkedHashSet<>();

//    private BankAccount bankAccount;

    public Technician() {
        super();
//        Maybe no initl of vars below?
//        bankAccount = new BankAccount();
    }

    public Technician(String firstName, String lastName, String email, LocalDate dob, String phoneNumber, String password) throws TechnicianException {
        super(firstName, lastName, email, dob, phoneNumber, password);

        if (!validateUser()) {
            throw new TechnicianException("Technician fails to meet consistency constraints");
        }
//        bankAccount = new BankAccount();
    }

    public Technician(String firstName, String lastName, String email, LocalDate dob, String phoneNumber) {
        super(firstName, lastName, email, dob, phoneNumber);
    }

/*    public Technician(String UUID, String email, String mobileNumber,
                      String passwordHash, String firstName, String lastName,
                      String dateOfBirth, String address, String suburb,
                      String postcode, String state) {
//        super(UUID, email, mobileNumber,
//              passwordHash, firstName, lastName,
//              dateOfBirth, address, suburb,
//              postcode, state);
//        bankAccount = new BankAccount();
//        jobsAssigned = new ArrayList<Job>();
    }*/

    public void addToAvgRating(double rating) {
        avgRating += rating;
        setAvgRating(avgRating / 2);
    }

    @Override
    public String toString() {
        return "Technician{" +
                "availableStatus=" + availableStatus +
                ", lightVehicleQualification=" + lightVehicleQualification +
                ", heavyVehicleQualification=" + heavyVehicleQualification +
                ", avgRating=" + avgRating +
                "} " + super.toString();
    }
}
