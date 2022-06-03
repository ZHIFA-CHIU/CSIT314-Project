package com.csit314.roadSideAssistance.Review;

import com.csit314.roadSideAssistance.Technician.Technician;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

/**
 * Review entity for technician account
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    private String reviewInformation;
    private Integer rating;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "technician_id")
    private Technician technician;

    public Review(String reviewInformation, int rating) {
        this.reviewInformation = reviewInformation;
        this.rating = rating;
    }

    public void setTechnician(Technician technician) {
        this.technician = technician;
    }

    public boolean validateReview() {
        return rating >= 0 && rating <= 10;
    }
}
