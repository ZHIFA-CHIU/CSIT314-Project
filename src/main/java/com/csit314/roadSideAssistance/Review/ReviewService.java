package com.csit314.roadSideAssistance.Review;

import com.csit314.roadSideAssistance.Technician.TechnicianException;
import com.csit314.roadSideAssistance.Technician.TechnicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

/**
 * Service method for reviews
 */
@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final TechnicianService technicianService;

    @Autowired
    public ReviewService(TechnicianService technicianService, ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
        this.technicianService = technicianService;
    }

    public void addReview(Long technicianId, Review review) throws TechnicianException {
        review.setTechnician(technicianService.getById(technicianId));
        if (!review.validateReview()) {
            throw new IllegalStateException("Review is invalid");
        }
        reviewRepository.save(review);
        updateAvgRating(technicianId);
    }

    public Set<Review> getAllReviews(Long technicianId) {
        return reviewRepository.findReviewsByTechnicianEquals(technicianService.getById(technicianId));
    }

    public void deleteReview(Long reviewId) {
        if (!reviewRepository.existsById(reviewId)) {
            throw new IllegalStateException(String.format("Review with id %s does not exist", reviewId));
        }
        reviewRepository.deleteById(reviewId);
    }

    public void updateReview(Review review) throws TechnicianException {
        if (!review.validateReview()) {
            throw new IllegalStateException("Review is invalid");
        }

        Optional<Review> optionalReview = reviewRepository.findById(review.getId());
        if(!optionalReview.isPresent()){
            throw new IllegalStateException(String.format("Review with id %s does not exist", review.getId()));
        }

        //otherwise, we map fields over
        Review newReview = optionalReview.get();
        optionalReview.get().setReviewInformation(review.getReviewInformation());
        optionalReview.get().setRating(review.getRating());

        reviewRepository.save(newReview);
        updateAvgRating(newReview.getTechnician().getId());
    }

    private void updateAvgRating(Long technicianId) throws TechnicianException {
        Set<Review> reviews = getAllReviews(technicianId);
        Double average = 0.0;
        for (Review rev : reviews) {
            average += rev.getRating();
        }

        technicianService.setAvgRating(technicianId, average / reviews.size());
    }
}
