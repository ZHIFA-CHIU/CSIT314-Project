package com.csit314.roadSideAssistance.Technician;

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
 * @version     1.1
 * @since       1.1
 */
@Service
public class TechnicianService {

    private final TechnicianRepository technicianRepository;

    @Autowired
    public TechnicianService(TechnicianRepository technicianRepository) {
        this.technicianRepository = technicianRepository;
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
}
