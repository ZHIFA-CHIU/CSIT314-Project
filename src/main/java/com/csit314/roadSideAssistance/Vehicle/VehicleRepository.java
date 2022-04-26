package com.csit314.roadSideAssistance.Vehicle;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    Optional<Vehicle> findVehicleByRego(String registeredStateAndPlate);

    Boolean existsByRego(String registeredStateAndPlate);

    void deleteByRego(String registeredStateAndPlate);
}