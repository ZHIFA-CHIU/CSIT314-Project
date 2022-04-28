package com.csit314.roadSideAssistance.Vehicle;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Embeddable;
import java.io.Serializable;
/**
 * Contains class for embedded vehicle composite key
 *
 *
 */
@NoArgsConstructor
@Data
@Embeddable
public class VehicleIDUsingEmbeddable implements Serializable {
    private String registrationPlate;
    private String registeredState;

}
