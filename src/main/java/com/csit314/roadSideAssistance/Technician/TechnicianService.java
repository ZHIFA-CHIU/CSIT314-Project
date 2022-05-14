package com.csit314.roadSideAssistance.Technician;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.BankAccount.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Technician Service
 * Handles business logic for the Technician Controller
 *
 * @author      Jack_Is_2048
 * @version     0.1
 * @since       0.1
 */
@Service
public class TechnicianService {

    private final TechnicianRepository technicianRepository;
    private final BankAccountRepository bankAccountRepository;

    @Autowired
    public TechnicianService(TechnicianRepository technicianRepository, BankAccountRepository bankAccountRepository) {
        this.technicianRepository = technicianRepository;
        this.bankAccountRepository = bankAccountRepository;
    }

    public List<Technician> getTechnician() {
        return technicianRepository.findAll();
    }

    public void registerTechnician(Technician technician) throws TechnicianException {
        Optional<Technician> technicianOptional = technicianRepository.findTechnicianByEmailOrPhoneNumber(technician.getEmail(), technician.getPhoneNumber());

        if (technicianOptional.isPresent()) {
            throw new TechnicianException("Email or Phone Number already taken");
        }

        technicianRepository.save(technician);
    }

    public void deleteTechnician(UUID technicianId) throws TechnicianException {
        boolean exists = technicianRepository.existsById(technicianId);
        if(!exists) {
            throw new TechnicianException("Technician with id " + technicianId + " does not exist");
        }

        technicianRepository.deleteById(technicianId);
    }

    public void updateTechnician(Technician technician) throws TechnicianException {
        boolean exists = technicianRepository.existsById(technician.getId());
        if(!exists) {
            throw new TechnicianException("Technician with id " + technician.getId() + " does not exist");
        }

        boolean isValid = technician.validateUser();
        if(!isValid) {
            throw new TechnicianException("Technician is invalid");
        }

        technicianRepository.save(technician);
    }
    // -- Bank Account services --

    public void addBankAccount(UUID technicianId, BankAccount bankAccount) throws TechnicianException {
        Optional<Technician> technicianOptional = technicianRepository.findById(technicianId);
        if (!technicianOptional.isPresent()) {
            throw new TechnicianException("Technician with id " + technicianId + " does not exist");
        }
        bankAccountRepository.save(bankAccount);

        technicianOptional.get().setBankAccount(bankAccount);
        technicianRepository.save(technicianOptional.get());
    }

    public void deleteBankAccount(UUID technicianId) throws TechnicianException {
        Optional<Technician> technicianOptional = technicianRepository.findById(technicianId);
        if (!technicianOptional.isPresent()) {
            throw new TechnicianException("Technician with id " + technicianId + " does not exist");
        }
        bankAccountRepository.deleteById(technicianOptional.get().getBankAccount().getId());

        technicianOptional.get().setBankAccount(null);
        technicianRepository.save(technicianOptional.get());
    }
    public Technician getById(UUID technicianId){
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if(technician.isPresent()){
            return technician.get();
        }
        else{
            throw new IllegalStateException(String.format("Technician with id %s does not exist", technicianId));
        }

    }
}
