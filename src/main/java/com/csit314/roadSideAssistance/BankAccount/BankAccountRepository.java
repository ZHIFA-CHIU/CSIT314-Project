package com.csit314.roadSideAssistance.BankAccount;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

/**
 * BankAccount Repository
 * Contains method(s) to ... // TODO: Update if any queries are added
 */
@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
    // TODO: Add any queries
}
