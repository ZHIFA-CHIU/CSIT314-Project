package com.csit314.roadSideAssistance.Job;

import com.csit314.roadSideAssistance.Customer.CustomerService;
import com.csit314.roadSideAssistance.Technician.Technician;
import com.csit314.roadSideAssistance.Technician.TechnicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
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

    public List<Job> getJobs(Long customerId) {
        List<Job> jobs = jobRepository.findJobsByCustomerId(customerId);
        if (jobs.isEmpty()) {
            throw new IllegalStateException(String.format("Jobs could not be found with customerID '%s'", customerId));
        }
        return jobs;
    }

    public List<Job> getTechnicianJobs(Long techId) {
        List<Job> jobs = jobRepository.findJobsByTechnicianId(techId);
        if (jobs.isEmpty()) {
            throw new IllegalStateException(String.format("Jobs could not be found with customerID '%s'", techId));
        }
        return jobs;
    }

    public Job get(Long jobId) {
        Optional<Job> job =  jobRepository.findById(jobId);
        if (!job.isPresent()) {
            throw new IllegalStateException(String.format("Job could not be found with jobId: %s", jobId));
        }
        return job.get();
    }

    public void addTechnician(Long jobId, Long technicianId) {
        Technician technician = technicianService.getById(technicianId);
        Optional<Job> job = jobRepository.findById(jobId);
        if (job.isPresent()) {
            job.get().setTechnician(technician);
            job.get().setStatus(Status.INPROGRESS);
            jobRepository.save(job.get());
        } else {
            throw new IllegalStateException(String.format("Job with id %s does not exist", jobId));
        }
    }
    private double rad2deg(double rad) {
        return (rad * 180.0 / Math.PI);
    }
    private double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }
    public List<Job> findAllJobsNearby(double technicianLat, double technicianLong) {
        List<Job> nearby = new ArrayList<>();
        for(Job j: jobRepository.findAll())
        {
            double customerLat = j.getCustomerLatitude();
            double customerLong = j.getCustomerLongitude();
            double theta = customerLong - technicianLong;
            double dist = Math.sin(deg2rad(customerLat)) * Math.sin(deg2rad(technicianLat)) + Math.cos(deg2rad(customerLat)) * Math.cos(deg2rad(technicianLat)) * Math.cos(deg2rad(theta));
            dist = Math.acos(dist);
            dist = rad2deg(dist);
            dist = dist * 60 * 1.85315962;
            if (dist < 50 && j.getStatus() == Status.WAITING){
                nearby.add(j);
            }
        }
        return nearby;
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
        jobRepository.save(job.get());
    }

    public void updateStatus(Long jobId, String status) {
        Optional<Job> job = jobRepository.findById(jobId);
        if(!job.isPresent()) {
            throw new IllegalStateException(String.format("Job with ID %s does not exist", jobId));
        }

        boolean validEnum = false;
        for(Status s : Status.values()) {
            if (s.name().equalsIgnoreCase(status)) {
                validEnum = true;
                break;
            }
        }
        if(!validEnum) {
            throw new IllegalArgumentException(String.format("Status %s is not a valid status option", status));
        }

        job.get().setStatus(Status.valueOf(status));
        jobRepository.save(job.get());
    }
}
