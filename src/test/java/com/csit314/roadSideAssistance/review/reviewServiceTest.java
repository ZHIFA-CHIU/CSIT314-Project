package review;

import com.csit314.roadSideAssistance.Review.Review;
import com.csit314.roadSideAssistance.Review.ReviewRepository;
import com.csit314.roadSideAssistance.Review.ReviewService;
import com.csit314.roadSideAssistance.Technician.Technician;
import com.csit314.roadSideAssistance.Technician.TechnicianException;
import com.csit314.roadSideAssistance.Technician.TechnicianService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.Month;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.Mockito.*;

/**
 * Testing class for review Service
 */
class ReviewServiceTest {

    @Mock
    ReviewRepository reviewRepository;

    @Mock
    TechnicianService technicianService;

    private AutoCloseable autoCloseable;
    private ReviewService reviewService;

    @BeforeEach
    void setup() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        reviewService = new ReviewService(technicianService, reviewRepository);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    @DisplayName("Can get all reviews relating to technician")
    void canGetAllReviews() throws TechnicianException, NoSuchAlgorithmException {
        //given
        Technician technician = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW", true, true);

        when(technicianService.getById(1L)).thenReturn(technician);
        reviewService.getAllReviews(technician.getId());

        //then
        reviewRepository.findReviewsByTechnicianEquals(technician);
    }

    @Test
    @DisplayName("Can submit a review relating to technician")
    void canSubmitReview() throws TechnicianException, NoSuchAlgorithmException {
        //given
        Review review = new Review("I am cool", 5);

        reviewService.addReview(1L, review);

        //then
        ArgumentCaptor<Review> reviewArgumentCaptor = ArgumentCaptor.forClass(Review.class);

        verify(technicianService, times(2)).getById(1L);
        verify(reviewRepository).save(reviewArgumentCaptor.capture());
        // I couldn't figure out how to test setting the avg rating :(

        //and
        Review reviewCaptured = reviewArgumentCaptor.getValue();
        assertThat(reviewCaptured).isEqualTo(review);
    }

    @Test
    @DisplayName("Can delete a review")
    void canDeleteReview() {
        //given
        when(reviewRepository.existsById(1L)).thenReturn(true);
        reviewService.deleteReview(1L);

        //then
        verify(reviewRepository).deleteById(1L);
    }

    @Test
    @DisplayName("Cant delete a review that dost exist")
    void cantDeleteReview() {
        assertThatThrownBy(() -> reviewService.deleteReview(1L)).hasMessageContaining("Review with id 1 does not exist");
    }

    @Test
    @DisplayName("Can update review")
    void canUpdateReview() throws TechnicianException, NoSuchAlgorithmException {
        Technician technician = new Technician("Jay", "Smith", "jaysmith@mail.com",
                LocalDate.of(1990, Month.FEBRUARY, 12), "01234567890",
                "password", "1 main street", "Wollongong",
                "2500", "NSW", true, true);

        Review review1 = new Review("I am cool", 5);
        Review review2 = new Review("Im not cool", 5);

        review1.setTechnician(technician);
        review2.setTechnician(technician);

        //given
        when(reviewRepository.findById(review1.getId())).thenReturn(Optional.of(review1));
        reviewService.updateReview(review2);

        //then
        ArgumentCaptor<Review> reviewArgumentCaptor = ArgumentCaptor.forClass(Review.class);

        verify(reviewRepository).save(reviewArgumentCaptor.capture());
        // I couldn't figure out how to test setting the avg rating :(

        //and
        Review reviewCaptured = reviewArgumentCaptor.getValue();
        assertThat(reviewCaptured.toString()).isEqualTo(review2.toString());
    }
}
