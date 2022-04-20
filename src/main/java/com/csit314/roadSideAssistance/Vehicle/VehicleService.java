package com.csit314.roadSideAssistance.Vehicle;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepo;

    @Autowired
    public VehicleService(VehicleRepository vehicleRepo) {
        this.VehicleRepository = vehicleRepo;
    }

    public List<Vehicle> getVehicle() {
        return vehicleRepo.findAll();
    }

    public void registerVehicle(Vehicle vehicle) {
        Optional<Vehicle> foundVehicle = vehicleRepo.findVehicleByRego(vehicle.getRego());

        if (foundVehicle.isPresent()) {
            throw new IllegalStateException("Vehicle already linked to another user");
        }
        vehicleRepo.save(vehicle);
    }

    public void deleteVehicle(String registeredState, String registeredPlate){
        boolean vehicleExists = vehicleRepo.existsByRego(registeredState, registeredPlate);
        if(!vehicleExists) {
            throw new IllegalStateException("Vehicle with registration " + registeredPlate + " does not exist in " + registeredState);
        }
        vehicleRepo.deleteByRego(registeredState, registeredPlate);
    }

    public void updateVehicle(Vehicle vehicle){
        //checking vehicle exists
        boolean vehicleExists = vehicleRepo.existsByRego(vehicle.getRego());
        if(!vehicleExists) {
            throw new IllegalStateException("vehicle with registration " + vehicle.getRego() + " does not exist");
        }

        //checking rego is valid
        boolean validRego = vehicle.validateVehicle();
        if(!validRego) {
            throw new IllegalStateException("Vehicle information is invalid");
        }

        //updating customer
        vehicleRego.save(vehicle);
    }

}
