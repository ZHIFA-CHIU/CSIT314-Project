package com.csit314.roadSideAssistance.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Contains vehicle repository class
 */
@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    Optional<Vehicle> findVehicleByRego(String registeredStateAndPlate);

    Boolean existsByRego(String registeredStateAndPlate);

    void deleteByRego(String registeredStateAndPlate);

    List<Vehicle> findVehicleByCustomerIDEquals(Long customerID);

    Optional<Vehicle> findVehicleByIdEquals(Long id);
}