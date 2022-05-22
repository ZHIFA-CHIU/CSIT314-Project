package com.csit314.roadSideAssistance.BankAccount;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Month;
import java.util.UUID;

/**
 * BankAccount model
 */
@Getter
@Entity
@Table(name = "BankAccount")
public class BankAccount {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    private String accountName;
    private String bsb;
    private String accountNumber;

    public BankAccount() {}

    public BankAccount(String accountName, String bsb, String accountNumber) throws BankAccountException {
        this.accountName = accountName;
        this.bsb = bsb;
        this.accountNumber = accountNumber;

        if (!validateBankAccount()) {
            throw new BankAccountException("Bank Account fails to meet consistency constraints");
        }
    }

    public boolean validateBankAccount() {
        return !accountName.equals("") && !bsb.equals("") && !accountNumber.equals("");
    }

    @Override
    public String toString() {
        return "BankAccount{" +
                "accountName='" + accountName + '\'' +
                ", BSB='" + bsb + '\'' +
                ", accountNumber='" + accountNumber + '\'' +
                '}';
    }
}
