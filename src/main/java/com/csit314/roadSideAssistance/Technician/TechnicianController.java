package com.csit314.roadSideAssistance.Technician;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping(path = "/login")
    public String loginTechnician(@RequestBody Technician technician) {
        return technicianService.checkPassword(technician);
    }

    @PostMapping
    public boolean registerTechnician(@RequestBody Technician technician) throws TechnicianException {
        return technicianService.registerTechnician(technician);
    }

    @DeleteMapping(path = "{technicianId}")
    public void deleteTechnician(@PathVariable("technicianId") Long technicianId) throws TechnicianException {
        technicianService.deleteTechnician(technicianId);
    }

    @PutMapping
    public Technician updateTechnician(@RequestBody Technician technician) throws TechnicianException {
        return technicianService.updateTechnician(technician);
    }

    @GetMapping(path = "/get/{technicianId}")
    public Technician getTechnicianByID(@PathVariable("technicianId") Long technicianId) {
        return technicianService.getById(technicianId);
    }

    // -- Bank Account endpoints --

    @PutMapping(path = "/addBankAccount/{technicianId}")
    public boolean addBankAccount(@PathVariable("technicianId") Long technicianId, @RequestBody BankAccount bankAccount) throws TechnicianException {
        return technicianService.addBankAccount(technicianId, bankAccount);

    }

    @DeleteMapping(path = "/deleteBankAccount")
    public void deleteBankAccount(@PathVariable("technicianId") Long technicianId) throws TechnicianException {
        technicianService.deleteBankAccount(technicianId);
    }

}
