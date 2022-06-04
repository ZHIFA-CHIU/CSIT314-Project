package com.csit314.roadSideAssistance.BankAccount;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * BankAccount model
 */
@Data
@NoArgsConstructor
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

    public BankAccount(String accountName, String bsb, String accountNumber) {
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
}
