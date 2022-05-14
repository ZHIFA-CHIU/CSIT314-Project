package com.csit314.roadSideAssistance.BankAccount;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

/**
 * BankAccount Repository
 * Contains method(s) to ... // TODO: Update if any queries are added
 *
 * @author      Jack_Is_2048
 * @version     0.1
 * @since       0.1
 */
@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, UUID> {
    // TODO: Add any queries
}
