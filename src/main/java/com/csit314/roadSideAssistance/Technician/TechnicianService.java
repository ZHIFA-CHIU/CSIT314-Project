package com.csit314.roadSideAssistance.Technician;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.BankAccount.BankAccountRepository;
import com.csit314.roadSideAssistance.User.UserInfo;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public boolean registerTechnician(Technician technician) {
        Optional<Technician> technicianOptional = technicianRepository.findTechnicianByEmailOrPhoneNumber(technician.getEmail(), technician.getPhoneNumber());

        if (technicianOptional.isPresent()) {
            throw new IllegalStateException("Email or Phone Number already taken");
        }

        technicianRepository.save(technician);
        return true;
    }

    public void deleteTechnician(Long technicianId) {
        boolean exists = technicianRepository.existsById(technicianId);
        if (!exists) {
            throw new TechnicianNotFoundException(technicianId);
        }

        technicianRepository.deleteById(technicianId);
    }

    public Technician updateTechnician(Technician technician) {
        boolean exists = technicianRepository.existsById(technician.getId());
        if (!exists) {
            throw new TechnicianNotFoundException(technician.getId());
        }

        boolean isValid = technician.validateUser();
        if (!isValid) {
            throw new IllegalStateException("Technician is invalid");
        }

        technicianRepository.save(technician);

        return technician;
    }

    // -- Bank Account services --

    public boolean addBankAccount(Long technicianId, BankAccount bankAccount) {
        Optional<Technician> technicianOptional = technicianRepository.findById(technicianId);
        if (!technicianOptional.isPresent()) {
            throw new TechnicianNotFoundException(technicianId);
        }
        technicianOptional.get().setBankAccount(bankAccount);
        technicianRepository.save(technicianOptional.get());
        return true;
    }

    public void deleteBankAccount(Long technicianId) {
        Optional<Technician> technicianOptional = technicianRepository.findById(technicianId);
        if (!technicianOptional.isPresent()) {
            throw new TechnicianNotFoundException(technicianId);
        }
        bankAccountRepository.deleteById(technicianOptional.get().getBankAccount().getId());

        technicianOptional.get().setBankAccount(null);
        technicianRepository.save(technicianOptional.get());
    }

    public Technician getById(Long technicianId) {
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if (technician.isPresent()) {
            return technician.get();
        } else {
            throw new IllegalStateException(String.format("Technician with id %s does not exist", technicianId));
        }

    }

    public void setAvgRating(Long technicianId, Double avgRating) {
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if (!technician.isPresent()) {
            throw new TechnicianNotFoundException(technicianId);
        }

        technician.get().setAvgRating(avgRating);
        technicianRepository.save(technician.get());
    }


    public String checkPassword(UserInfo technician) throws NoSuchAlgorithmException {
        Optional<Technician> t = technicianRepository.findTechnicianByEmail(technician.getEmail());

        try {
            JSONObject json = new JSONObject();
            if (t.isPresent() && t.get().checkPassword(technician.getPassword())) {
                json.put("login", "true");
                json.put("customer-id", t.get().getId());
            } else {
                json.put("login", "false");
                json.put("customer-id", -1);
            }
            return json.toString();
        } catch (JSONException e) {
            throw new IllegalStateException("Failed to check password");
        }
    }

    public void setLocation(double lat, double lon, long technicianId) {
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if (!technician.isPresent()) {
            throw new TechnicianNotFoundException(technicianId);
        }
        technician.get().setLatitude(lat);
        technician.get().setLongitude(lon);
        technicianRepository.save(technician.get());
    }

    public double[] getLocation(long technicianId) {
        Optional<Technician> technician = technicianRepository.findById(technicianId);
        if (!technician.isPresent()) {
            throw new TechnicianNotFoundException(technicianId);
        }
        double lat = technician.get().getLatitude();
        double lon = technician.get().getLongitude();
        return new double[]{lat, lon};
    }

}
