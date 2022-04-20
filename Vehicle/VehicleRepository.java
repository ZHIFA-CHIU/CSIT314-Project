package com.csit314.roadSideAssistance.Vehicle;

import com.csit314.roadSideAssistance.CustomerEx.CustomerEx;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicle, Long> {

    Optional<Vehicle> findVehicleByRego(String registeredPlate, String registeredState);

    Boolean existsByRego(String registeredPlate, String registeredState);

    void deleteByRego(String registeredPlate, String registeredState);
}