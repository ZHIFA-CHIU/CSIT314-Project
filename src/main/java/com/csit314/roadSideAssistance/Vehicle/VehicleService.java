package com.csit314.roadSideAssistance.Vehicle;

import com.csit314.roadSideAssistance.Customer.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * Contains vehicle service class
 */
@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    private final CustomerService customerService;

    @Autowired
    public VehicleService(VehicleRepository vehicleRepository, CustomerService customerService) {
        this.vehicleRepository = vehicleRepository;
        this.customerService = customerService;
    }

    public List<Vehicle> getVehicle() {
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> getVehicleByID(Long vehicleID) {
        Optional<Vehicle> foundVehicle = vehicleRepository.findVehicleByIdEquals(vehicleID);
        if (!foundVehicle.isPresent()) {
            throw new IllegalStateException("Vehicle not found");
        }
        return foundVehicle;
    }

    public void registerVehicle(Vehicle vehicle, Long customerID) {
        Optional<Vehicle> foundVehicle = vehicleRepository.findVehicleByRego(vehicle.getRego());

        if (foundVehicle.isPresent()) {
            throw new IllegalStateException("Vehicle already linked to another user");
        }
        vehicle.setCustomer(customerService.getById(customerID));

        vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(String registeredState, String registeredPlate){
        boolean vehicleExists = vehicleRepository.existsByRego(registeredState + " " + registeredPlate);
        if(!vehicleExists) {
            throw new IllegalStateException(String.format("Vehicle with registration %s does not exist in %s", registeredPlate, registeredState));
        }
        vehicleRepository.deleteByRego(registeredState + " " + registeredPlate);
    }

    public void updateVehicle(Vehicle vehicle){
        boolean vehicleExists = vehicleRepository.existsByRego(vehicle.getRego());
        if(!vehicleExists) {
            throw new IllegalStateException(String.format("Vehicle with registration %s does not exist", vehicle.getRego()));
        }

        if(!vehicle.validateVehicle()) {
            throw new IllegalStateException("Vehicle information is invalid");
        }

        vehicleRepository.save(vehicle);
    }

    public List<Vehicle> getVehicleByCustomerId(Long customerId) {
        return vehicleRepository.findVehicleByCustomerIDEquals(customerId);
    }
}
