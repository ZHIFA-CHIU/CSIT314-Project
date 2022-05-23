package com.csit314.roadSideAssistance.Review;

import com.csit314.roadSideAssistance.Technician.Technician;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

/**
 * Repository for technician reviews
 */
public interface ReviewRepository extends JpaRepository<Review, Long> {

    Set<Review> findReviewsByTechnicianEquals(Technician technician);

    boolean existsById(Long reviewId);
}
