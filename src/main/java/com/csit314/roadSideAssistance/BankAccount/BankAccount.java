package com.csit314.roadSideAssistance.BankAccount;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

/**
 * BankAccount model
 *
 * @author      Jack_Is_2048
 * @version     0.1
 * @since       0.1
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

    public BankAccount(String accountName, String bsb, String accountNumber) {
        this.accountName = accountName;
        this.bsb = bsb;
        this.accountNumber = accountNumber;
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
