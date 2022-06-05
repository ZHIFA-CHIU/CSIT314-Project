package com.csit314.roadSideAssistance.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

/**
 * Contains vehicle controller class
 */
@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/Vehicle")
public class VehicleController {

    private final VehicleService vehicleService;
    @Autowired
    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;

    }
    @GetMapping
    public List<Vehicle> getVehicles() {
        return vehicleService.getVehicle();
    }

    @GetMapping(path = "/get/{vehicleID}")
    public Optional<Vehicle> getVehicleByID(@PathVariable("vehicleID") Long vehicleID) {
        return vehicleService.getVehicleByID(vehicleID);
    }

    @GetMapping(path= "/getByCustomer/{customerId}")
    public List<Vehicle> getVehicleByCustomerId(@PathVariable("customerId") Long customerId) {
        return vehicleService.getVehicleByCustomerId(customerId);
    }

    @DeleteMapping(path = "{vehicleRego}")
    public void deleteVehicle(@PathVariable("vehicleRego") String registeredState, String registeredPlate){
        vehicleService.deleteVehicle(registeredPlate, registeredState);
    }

    @PutMapping
    public void updateVehicle(@RequestBody Vehicle vehicle){
        vehicleService.updateVehicle(vehicle);
    }
}
