package com.csit314.roadSideAssistance.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.util.List;
/**
 * Contains vehicle controller class
 *
 *
 */
@CrossOrigin(origins = "http://localhost:3000/")
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

    @DeleteMapping(path = "{vehicleRego}")
    @Transactional
    public void deleteVehicle(@PathVariable("vehicleRego") String registeredState, String registeredPlate){
        vehicleService.deleteVehicle(registeredPlate, registeredState);
    }

    @PutMapping
    public void updateVehicle(@RequestBody Vehicle vehicle){
        vehicleService.updateVehicle(vehicle);
    }
}
