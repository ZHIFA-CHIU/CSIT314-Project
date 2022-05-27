package com.csit314.roadSideAssistance.Job;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Repository for Job Model
 */
@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    @Query(value = "SELECT j FROM Job j JOIN j.customer c WHERE c.id = :customerId AND j.startTime = :startTime")
    Optional<Job> findJobByCustomerIdAndStartTime(@Param("customerId") Long customerID, @Param("startTime") LocalDateTime startTime);

    List<Job> findJobsByCustomerId(@Param("customerId") Long customerID);

    List<Job> findJobsByTechnicianIsNull();
}
