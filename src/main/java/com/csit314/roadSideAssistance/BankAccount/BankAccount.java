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
@Setter
@Entity
@Table(name = "BankAccount")
public class BankAccount {
    @Id
    @GeneratedValue(generator = "uuidGen")
    @GenericGenerator(
            name = "uuidGen",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Type(type = "uuid-char")
    @Column(name = "id")
    private UUID id;

    private String accountName,
                   BSB,
                   accountNumber;

    public BankAccount() {}

    public BankAccount(String accountName, String BSB, String accountNumber) {
        this.accountName = accountName;
        this.BSB = BSB;
        this.accountNumber = accountNumber;
    }

    @Override
    public String toString() {
        return "BankAccount{" +
                "accountName='" + accountName + '\'' +
                ", BSB='" + BSB + '\'' +
                ", accountNumber='" + accountNumber + '\'' +
                '}';
    }
}
