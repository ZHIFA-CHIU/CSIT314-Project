package com.csit314.roadSideAssistance.Job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * Controller class for job model
 */
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/v1/job")
public class JobController {
    private final JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public List<Job> getJobs() {
        return jobService.findAllJobs();
    }

    @GetMapping(path = "{jobId}")
    public Job get(@PathVariable("jobId") Long jobId ) { return jobService.get(jobId); }

    @GetMapping(path = "/{customerId}/{startTime}")
    public Job getJob(@PathVariable("customerId") Long customerId, @PathVariable("startTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)  LocalDateTime startTime) {
        return jobService.getJob(customerId, startTime);
    }

    @GetMapping(path = "/getall/{customerId}")
    public List<Job> getJobsCust(@PathVariable("customerId") Long customerId) {
        return jobService.getJobs(customerId);
    }

    @PostMapping(path = "/{customerId}")
    public Job registerJob(@RequestBody Job job, @PathVariable("customerId") Long customerId) {
        jobService.registerJob(job, customerId);
        return jobService.get(job.getId());
    }

    @PutMapping
    public void updateJob(@RequestBody Job job) {
        jobService.updateJob(job);
    }

    @PostMapping(path = "/addTechnician/{jobId}/{technicianId}")
    public void addTechnician(@PathVariable("jobId") Long jobId, @PathVariable("technicianId") Long technicianId) {
        jobService.addTechnician(jobId, technicianId);
    }

    @DeleteMapping
    public void deleteJob(Long jobId) {
        jobService.deleteJob(jobId);
    }

    @GetMapping(path = "/getNearby/{technicianLat}/{technicianLon}")
    public List<Job> getJobsNearby(@PathVariable("technicianLat") double technicianLat, @PathVariable("technicianLon") double technicianLong) {
        return jobService.findAllJobsNearby(technicianLat, technicianLong);
    }

    @PutMapping(path = "/closeJob/{jobId}")
    public void closeJob(@PathVariable("jobId") Long jobId) {
        jobService.closeJob(jobId);
    }

    @PutMapping(path = "/updateStatus/{jobId}/{status}")
    public void updateStatus(@PathVariable("jobId") Long jobId, @PathVariable("status") String status) {
        jobService.updateStatus(jobId, status);
    }
}