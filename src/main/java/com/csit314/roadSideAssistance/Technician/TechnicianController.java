package com.csit314.roadSideAssistance.Technician;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
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
 * @version     0.1
 * @since       0.1
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
    public void deleteTechnician(@PathVariable("technicianId") UUID technicianId) throws TechnicianException {
        technicianService.deleteTechnician(technicianId);
    }

    @PutMapping
    public void updateTechnician(@RequestBody Technician technician) throws TechnicianException {
        technicianService.updateTechnician(technician);
    }

    // -- Bank Account endpoints --

    @PutMapping(path = "/addBankAccount/{technicianId}")
    public void addBankAccount(@PathVariable("technicianId") UUID technicianId, @RequestBody BankAccount bankAccount) throws TechnicianException {
        technicianService.addBankAccount(technicianId, bankAccount);
    }

    @DeleteMapping(path = "/deleteBankAccount")
    public void deleteBankAccount(@PathVariable("technicianId") UUID technicianId) throws TechnicianException {
        technicianService.deleteBankAccount(technicianId);
    }
}
