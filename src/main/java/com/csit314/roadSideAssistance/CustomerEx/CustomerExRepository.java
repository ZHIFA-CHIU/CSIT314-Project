package com.csit314.roadSideAssistance.CustomerEx;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CustomerExRepository extends JpaRepository<CustomerEx, Long> {

    Optional<CustomerEx> findCustomerByEmail(String email);

    Boolean existsByUuid(UUID id);

    void deleteByUuid(UUID id);
}
