package com.csit314.roadSideAssistance.Vehicle;
import com.csit314.roadSideAssistance.Customer.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
/**
 * Contains vehicle service class
 *
 *
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



    public void registerVehicle(Vehicle vehicle, Long customerID) {
        Optional<Vehicle> foundVehicle = vehicleRepository.findVehicleByRego(vehicle.getRego());

        if (foundVehicle.isPresent()) {
            throw new IllegalStateException("Vehicle already linked to another user");
        }
        vehicle.setCustomer(customerService.getById(customerID));

        vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(String registeredState, String registeredPlate){
        String registeredStateAndPlate;
        registeredStateAndPlate = registeredState + " " + registeredPlate;
        boolean vehicleExists = vehicleRepository.existsByRego(registeredStateAndPlate);
        if(!vehicleExists) {
            throw new IllegalStateException("Vehicle with registration " + registeredPlate + " does not exist in " + registeredState);
        }
        vehicleRepository.deleteByRego(registeredStateAndPlate);
    }

    public void updateVehicle(Vehicle vehicle){
        //checking vehicle exists
        boolean vehicleExists = vehicleRepository.existsByRego(vehicle.getRego());
        if(!vehicleExists) {
            throw new IllegalStateException("vehicle with registration " + vehicle.getRego() + " does not exist");
        }

        //checking rego is valid
        boolean validRego = vehicle.validateVehicle();
        if(!validRego) {
            throw new IllegalStateException("Vehicle information is invalid");
        }

        //updating customer
        vehicleRepository.save(vehicle);
    }

}
