package job;

import com.csit314.roadSideAssistance.Customer.CustomException;
import com.csit314.roadSideAssistance.Customer.Customer;
import com.csit314.roadSideAssistance.Customer.CustomerService;
import com.csit314.roadSideAssistance.Job.Job;
import com.csit314.roadSideAssistance.Job.JobRepository;
import com.csit314.roadSideAssistance.Job.JobService;
import com.csit314.roadSideAssistance.Job.RepairCategory;
import com.csit314.roadSideAssistance.Technician.TechnicianService;
import org.junit.jupiter.api.*;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.Mockito.verify;

/**
 * Service method test example that only tests the service method logic
 * Note that the repository is mocked and not actually called
 */
class JobServiceTest {

    @Mock
    private JobRepository jobRepository;
    @Mock
    private CustomerService customerService;
    @Mock
    private TechnicianService technicianService;

    private AutoCloseable autoCloseable;
    private JobService jobService;

    @BeforeEach
    void setup() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        jobService = new JobService(jobRepository, customerService, technicianService);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    @DisplayName("Can get all jobs")
    void canGetAllJobs() {
        //given
        jobService.findAllJobs();

        //then
        verify(jobRepository).findAll();
    }

    @Test
    @DisplayName("Can request a job")
    void canRequestJob() throws CustomException, NoSuchAlgorithmException {
        //given
        Job job = new Job(RepairCategory.OTHER, "testing information", 45.0, 95.0);
        Customer customer = new Customer("pedro", "o", "email", LocalDate.of(2001, 12, 17), "04566871234", "password");

        //when
        jobService.registerJob(job, customer.getId());
        job.setCustomer(customer);

        //then
        ArgumentCaptor<Job> jobArgumentCaptor = ArgumentCaptor.forClass(Job.class);

        verify(customerService).getById(customer.getId());
        verify(jobRepository).save(jobArgumentCaptor.capture());

        //and
        Job jobCaptured = jobArgumentCaptor.getValue();
        assertThat(jobCaptured).isEqualTo(job);
    }

    @Test
    @DisplayName("Can get a job by id and time")
    void canGetJobByIdAndTime() throws CustomException {
        //given
        LocalDateTime startTime = LocalDateTime.parse("2022-05-10T21:44:43.402945700");
        Long customerID = new Long(9274972);

        //when
        assertThatThrownBy(() -> jobService.getJob(customerID, startTime)).hasMessageContaining("Job could not be found with customerID 'a418e91e-eee2-4d0f-9628-88d1f458f518' and start time '2022-05-10T21:44:43.402945700'");
    }
}
