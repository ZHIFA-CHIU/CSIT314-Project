package com.csit314.roadSideAssistance.Job;

import com.csit314.roadSideAssistance.Customer.Customer;
import com.csit314.roadSideAssistance.Technician.Technician;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

import static java.time.temporal.ChronoUnit.MINUTES;

/**
 * Job Model, storing the details of a user requested maintenance job
 */
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table
public class Job {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="technician_id", referencedColumnName="id")
    private Technician technician;

    @Column(nullable = false)
    private LocalDateTime startTime = LocalDateTime.now().truncatedTo(MINUTES);
    private LocalDateTime finishTime;

    @Enumerated(EnumType.STRING)
    private Status status = Status.WAITING;

    private String repairCategory;

    private String additionalInfo;
    private Double jobPrice;

    @Column(nullable = false)
    private Double customerLatitude;
    @Column(nullable = false)
    private Double customerLongitude;

    public Job(String repairCategory, String additionalInfo, Double customerLatitude, Double customerLongitude) {
        this.repairCategory = repairCategory;
        this.additionalInfo = additionalInfo;
        this.customerLatitude = customerLatitude;
        this.customerLongitude = customerLongitude;
    }

    public boolean validateJob() {
        return customerLatitude >= -90 && customerLatitude <= 90 && customerLongitude >= -180 && customerLongitude <= 180;
    }

    /*public void setCustomer(Customer byId) {

    }

    public void setTechnician(Technician technician) {

    }*/
}
