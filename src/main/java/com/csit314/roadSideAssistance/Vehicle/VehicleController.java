package com.csit314.roadSideAssistance.Vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/v1/Vehicle")
public class VehicleController {

    private final VehicleService vehicleService;
    @Autowired
    public VehicleController(VehicleService vehicleService, VehicleService vehicleService1) {
        this.vehicleService = vehicleService;

    }

    @GetMapping
    public List<Vehicle> getVehicles() {
        return vehicleService.getVehicle();
    }

    @PostMapping
    public void registerVehicle(@RequestBody Vehicle vehicle) {
        vehicleService.registerVehicle(vehicle);
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
