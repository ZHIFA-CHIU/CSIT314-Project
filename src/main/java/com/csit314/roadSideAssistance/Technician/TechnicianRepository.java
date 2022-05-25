package com.csit314.roadSideAssistance.Technician;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

/**
 * Technician Repository
 * Contains method to find technician(s) by email or phone number
 *
 * @author      Jack_Is_2048
 * @version     0.1
 * @since       0.1
 */
@Repository
public interface TechnicianRepository extends JpaRepository<Technician, Long> {
    // Used to check whether a technician exists either by email or phone
    Optional<Technician> findTechnicianByEmailOrPhoneNumber(String email, String phoneNumber);

    Optional<Technician> findTechnicianByEmail(String email);

    Optional<Technician> findTechnicianByIdEquals(Long id);
}
