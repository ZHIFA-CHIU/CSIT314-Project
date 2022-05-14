package com.csit314.roadSideAssistance.Technician;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * Technician Controller
 * Controlling:
 *      Get
 *      Post
 *      Delete
 *      Put
 *
 * @author      Jack_Is_2048
 * @version     1.1
 * @since       1.1
 */
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/v1/technician")
public class TechnicianController {

    private final TechnicianService technicianService;

    @Autowired
    public TechnicianController(TechnicianService technicianService) {
        this.technicianService = technicianService;
    }

    @GetMapping
    public List<Technician> getTechnicians() {
        return technicianService.getTechnician();
    }

    @PostMapping
    public void registerTechnician(@RequestBody Technician technician) throws TechnicianException {
        technicianService.registerTechnician(technician);
    }

    @DeleteMapping(path = "{technicianId}")
    public void deleteTechnician(@PathVariable("technicianId") Long technicianId) throws TechnicianException {
        technicianService.deleteTechnician(technicianId);
    }

    @PutMapping
    public void updateTechnician(@RequestBody Technician technician) throws TechnicianException {
        technicianService.updateTechnician(technician);
    }
}
