package com.csit314.roadSideAssistance.BankAccount;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * BankAccount Repository
 */
@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
}
