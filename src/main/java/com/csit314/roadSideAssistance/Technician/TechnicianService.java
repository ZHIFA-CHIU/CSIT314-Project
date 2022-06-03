package com.csit314.roadSideAssistance.Technician;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.BankAccount.BankAccountRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

/**
 * Technician Service
 * Handles business logic for the Technician Controller
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

    public boolean registerTechnician(Technician technician) throws TechnicianException {
        Optional<Technician> technicianOptional = technicianRepository.findTechnicianByEmailOrPhoneNumber(technician.getEmail(), technician.getPhoneNumber());

        if (technicianOptional.isPresent()) {
            throw new TechnicianException("Email or Phone Number already taken");
        }

        technicianRepository.save(technician);
        return true;
    }

    public void deleteTechnician(Long technicianId) throws TechnicianException {
        boolean exists = technicianRepository.existsById(technicianId);
        if(!exists) {
            throw new TechnicianException(String.format("Technician with id: %s doesn't exist", technicianId));
        }

        technicianRepository.deleteById(technicianId);
    }

    public Technician updateTechnician(Technician technician) throws TechnicianException {
        boolean exists = technicianRepository.existsById(technician.getId());
        if(!exists) {
            throw new TechnicianException(String.format("Technician with id: %s doesn't exist", technician.getId()));
        }

        boolean isValid = technician.validateUser();
        if(!isValid) {
            throw new TechnicianException("Technician is invalid");
        }

        technicianRepository.save(technician);

        return technician;
    }

    // -- Bank Account services --

    public boolean addBankAccount(Long technicianId, BankAccount bankAccount) throws TechnicianException {
        Optional<Technician> technicianOptional = technicianRepository.findById(technicianId);
        if (!technicianOptional.isPresent()) {
            throw new TechnicianException(String.format("Technician with id: %s doesn't exist", technicianId));
        }
        technicianOptional.get().setBankAccount(bankAccount);
        technicianRepository.save(technicianOptional.get());
        return true;
    }

    public void deleteBankAccount(Long technicianId) throws TechnicianException {
        Optional<Technician> technicianOptional = technicianRepository.findById(technicianId);
        if (!technicianOptional.isPresent()) {
            throw new TechnicianException(String.format("Technician with id: %s doesn't exist", technicianId));
        }
        bankAccountRepository.deleteById(technicianOptional.get().getBankAccount().getId());

        technicianOptional.get().setBankAccount(null);
        technicianRepository.save(technicianOptional.get());
    }

    public Technician getById(Long technicianId){
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if(technician.isPresent()){
            return technician.get();
        }
        else{
            throw new IllegalStateException(String.format("Technician with id %s does not exist", technicianId));
        }

    }

    public void setAvgRating(Long technicianId, Double avgRating) throws TechnicianException {
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if(!technician.isPresent()) {
            throw new TechnicianException(String.format("Technician with id: %s doesn't exist", technicianId));
        }

        technician.get().setAvgRating(avgRating);
        technicianRepository.save(technician.get());
    }

    public String checkPassword(Technician technician) throws NoSuchAlgorithmException {
        Optional<Technician> t = technicianRepository.findTechnicianByEmail(technician.getEmail());

        JSONObject json = new JSONObject();
        json.put("login", "true");

        if(t.isPresent() && t.get().checkPassword(technician.getPassword())) {
            json.put("customer-id", t.get().getId());
        } else {
            json.put("customer-id", -1);
        }
        return json.toString();
    }

    public void setLocation(double lat, double lon, long technicianId)throws TechnicianException {
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if(!technician.isPresent()) {
            throw new TechnicianException(String.format("Technician with id: %s doesn't exist", technicianId));
        }
        technician.get().setLatitude(lat);
        technician.get().setLongitude(lon);
        technicianRepository.save(technician.get());
    }

    public double[] getLocation(long technicianId)throws TechnicianException {
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if (!technician.isPresent()) {
            throw new TechnicianException(String.format("Technician with id: %s doesn't exist", technicianId));
        }
        double lat = technician.get().getLatitude();
        double lon = technician.get().getLongitude();
        return new double[] {lat, lon};
    }

}
