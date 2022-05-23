package com.csit314.roadSideAssistance.Job;

import com.csit314.roadSideAssistance.Customer.CustomerService;
import com.csit314.roadSideAssistance.Technician.Technician;
import com.csit314.roadSideAssistance.Technician.TechnicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;


/**
 * Service class for job method, containing all logical processing
 */
@Service
public class JobService {

    private final JobRepository jobRepository;
    private final CustomerService customerService;
    private final TechnicianService technicianService;

    @Autowired
    public JobService(JobRepository jobRepository, CustomerService customerService, TechnicianService technicianService) {
        this.jobRepository = jobRepository;
        this.customerService = customerService;
        this.technicianService = technicianService;
    }

    public List<Job> findAllJobs() {
        return jobRepository.findAll();
    }

    public void registerJob(Job job, Long customerID) {
        job.setCustomer(customerService.getById(customerID));
        if (!job.validateJob()) {
            throw new IllegalStateException("Job is invalid");
        }
        jobRepository.save(job);
    }

    public void deleteJob(Long jobId) {
        if (!jobRepository.existsById(jobId)) {
            throw new IllegalStateException(String.format("Job with id %s does not exist", jobId));
        }
        jobRepository.deleteById(jobId);
    }

    public void updateJob(Job job) {
        if (!jobRepository.existsById(job.getId())) {
            throw new IllegalStateException(String.format("Job with id %s does not exist", job.getId()));
        }

        if (!job.validateJob()) {
            throw new IllegalStateException("Job is invalid");
        }

        jobRepository.save(job);
    }

    public Job getJob(Long customerId, LocalDateTime startTime) {
        Optional<Job> job = jobRepository.findJobByCustomerIdAndStartTime(customerId, startTime);
        if (!job.isPresent()) {
            throw new IllegalStateException(String.format("Job could not be found with customerID '%s' and start time '%s'", customerId, startTime));
        }
        return job.get();
    }

    public Job get(Long jobId) {

        return jobRepository.findById(jobId).get();
    }

    public void addTechnician(Long jobId, Long technicianId) {
        Technician technician = technicianService.getById(technicianId);
        Optional<Job> job = jobRepository.findById(jobId);
        if (job.isPresent()) {
            job.get().setTechnician(technician);
            jobRepository.save(job.get());
        } else {
            throw new IllegalStateException(String.format("Job with id %s does not exist", jobId));
        }
    }

    public void closeJob(Long jobId) {
        Optional<Job> job = jobRepository.findById(jobId);
        if(!job.isPresent()) {
            throw new IllegalStateException(String.format("Job with ID %s does not exist", jobId));
        }
        if(!job.get().getStatus().equals(Status.INPROGRESS)) {
            throw new IllegalStateException(String.format("Job currently has %s status, only INPROGRESS jobs can be closed", job.get().getStatus()));
        }
        final double HOURLY_RATE = 40.0;
        LocalDateTime finishTime = LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES);
        long jobLength = ChronoUnit.MINUTES.between(job.get().getStartTime(), finishTime);
        if(jobLength <= 0) {
            throw new IllegalStateException(String.format("Job Finish time (%s) is earlier or equal to the job start time (%s)", finishTime.toString(), job.get().getStartTime().toString()));
        }
        job.get().setFinishTime(finishTime);
        job.get().setJobPrice((HOURLY_RATE / 60.0) * jobLength);
        job.get().setStatus(Status.COMPLETED);
    }
}
