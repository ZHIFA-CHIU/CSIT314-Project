package com.csit314.roadSideAssistance.Job;

import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Component
@Order(3)
// TODO: COMPLETE
public class JobConfig implements CommandLineRunner {

    private final JobRepository repository;

    public JobConfig(JobRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("job");

        Faker faker = new Faker(new Locale("en-AU"));

        List<Job> jobList = new ArrayList<>();
        String[] repairCat = {""};
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
                    "TODO",
                    addInfo[faker.number().numberBetween(0, addInfo.length)],
                    Double.parseDouble(lat),
                    Double.parseDouble(lon)
            );

            jobList.add(job);
        }
        repository.saveAll(jobList);
    }
}