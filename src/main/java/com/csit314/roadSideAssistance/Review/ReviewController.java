package com.csit314.roadSideAssistance.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

/**
 * Controller for review handling
 */
@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/review")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping(path = "/{technicianId}")
    public void addReview(@PathVariable("technicianId") Long technicianId, @RequestBody Review review) {
        reviewService.addReview(technicianId, review);
    }

    @GetMapping(path = "/{technicianId}")
    public Set<Review> getReviews(@PathVariable("technicianId") Long technicianId) {
        return reviewService.getAllReviews(technicianId);
    }

    @DeleteMapping(path = "/{reviewId}")
    public void deleteReview(@PathVariable("reviewId") Long reviewId) {
        reviewService.deleteReview(reviewId);
    }

    @PutMapping()
    public void addReview(@RequestBody Review review) {
        reviewService.updateReview(review);
    }
}
