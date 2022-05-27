package com.csit314.roadSideAssistance.Job;

import com.csit314.roadSideAssistance.Customer.CustomerRepository;
import com.csit314.roadSideAssistance.Technician.TechnicianRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@Component
@Order(3)
public class JobConfig implements CommandLineRunner {

    private final JobRepository jobRepository;
    private final CustomerRepository customerRepository;
    private final TechnicianRepository technicianRepository;

    public JobConfig(JobRepository jobRepository, CustomerRepository customerRepository, TechnicianRepository technicianRepository) {
        this.jobRepository = jobRepository;
        this.customerRepository = customerRepository;
        this.technicianRepository = technicianRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Faker faker = new Faker(new Locale("en-AU"));

        List<Job> jobList = new ArrayList<>();
        String[] repairCat = {"Brakes", "Tires", "Steering", "Lights", "Engine_transmission", "Battery", "Other"};
        String[] addInfo = {"", "", "", "N/A", "Ring when near", "Text when near",
                "Beware of frog", "Near traffic light"};

        // Randomly generate 20 jobs
        for (int i = 0; i < 20; i++) {
            String lat = "";
            String lon = "";

            if (faker.bool().bool()) {
                lat += "-";
            }
            if (faker.bool().bool()) {
                lon += "-";
            }

            lat += faker.bothify("##.####");
            lon += faker.regexify("[0-1]{1}");
            lon += faker.bothify("##.####");

            Job job = new Job(
                    repairCat[faker.number().numberBetween(0, repairCat.length)],
                    addInfo[faker.number().numberBetween(0, addInfo.length)],
                    Double.parseDouble(lat),
                    Double.parseDouble(lon)
            );

            job.setCustomer(customerRepository.findAll().get(faker.number().numberBetween(0, (int)customerRepository.count())));

            if (faker.number().numberBetween(1, 101) >= 80) {
                job.setTechnician(technicianRepository.findAll().get(faker.number().numberBetween(0, (int) technicianRepository.count())));

                job.setFinishTime(faker.date().future(8, TimeUnit.HOURS).toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime());

                long diff = Duration.between(job.getStartTime(), job.getFinishTime()).toHours();

                if (diff == 0)
                    diff = 1;

                job.setJobPrice((double) diff * 40);

                job.setStatus(Status.COMPLETED);
            }

            jobList.add(job);
        }
        jobRepository.saveAll(jobList);
    }
}