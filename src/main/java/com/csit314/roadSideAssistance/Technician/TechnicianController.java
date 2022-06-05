package com.csit314.roadSideAssistance.Technician;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.User.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;

/**
 * Controller for technician
 */
@CrossOrigin(origins = "*")
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
    public String loginTechnician(@RequestBody UserInfo technician) throws NoSuchAlgorithmException {
        return technicianService.checkPassword(technician);
    }

    @PostMapping
    public boolean registerTechnician(@RequestBody Technician technician){
        return technicianService.registerTechnician(technician);
    }

    @DeleteMapping(path = "{technicianId}")
    public void deleteTechnician(@PathVariable("technicianId") Long technicianId){
        technicianService.deleteTechnician(technicianId);
    }

    @PutMapping
    public Technician updateTechnician(@RequestBody Technician technician){
        return technicianService.updateTechnician(technician);
    }

    @GetMapping(path = "/get/{technicianId}")
    public Technician getTechnicianByID(@PathVariable("technicianId") Long technicianId) {
        return technicianService.getById(technicianId);
    }

    @PostMapping(path = "/setLocation/{techId}/{technicianLat}/{technicianLon}")
    public void setTechnicianLatLong(@PathVariable("techId") long techId, @PathVariable("technicianLat")
            double technicianLat, @PathVariable("technicianLon") double technicianLong) {
        technicianService.setLocation(technicianLat, technicianLong, techId);
    }

    @PutMapping(path = "/setLocation/{techId}/{technicianLat}/{technicianLon}")
    public void updateTechnicianLatLong(@PathVariable("techId") long techId, @PathVariable("technicianLat")
            double technicianLat, @PathVariable("technicianLon") double technicianLong) {
        technicianService.setLocation(technicianLat, technicianLong, techId);
    }

    @GetMapping(path = "/getLocation/{techId}")
    public double[] updateTechnicianLatLong(@PathVariable("techId") long techId) {
        return technicianService.getLocation(techId);
    }

    // -- Bank Account endpoints --

    @PutMapping(path = "/addBankAccount/{technicianId}")
    public boolean addBankAccount(@PathVariable("technicianId") Long technicianId, @RequestBody BankAccount bankAccount) {
        return technicianService.addBankAccount(technicianId, bankAccount);

    }

    @DeleteMapping(path = "/deleteBankAccount/{technicianId}")
    public void deleteBankAccount(@PathVariable("technicianId") Long technicianId) {
        technicianService.deleteBankAccount(technicianId);
    }
}
