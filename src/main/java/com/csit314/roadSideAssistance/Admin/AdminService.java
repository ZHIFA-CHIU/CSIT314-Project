package com.csit314.roadSideAssistance.Admin;


import com.csit314.roadSideAssistance.Customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {this.adminRepository = adminRepository;}

    public List<Admin> getAdmin() {return adminRepository.findAll();}

    public void registerAdmin(Admin admin) {
        Optional<Admin> adminOptional = adminRepository.findAdminByEmail(admin.getEmail());
        if (adminOptional.isPresent()){
            throw new IllegalStateException("Email address already in use.");
        }
        adminRepository.save(admin);
    }

    public void deleteAdmin(UUID adminId){
        boolean exists = adminRepository.existsById(adminId);

        if(!exists){
            throw new IllegalStateException("Admin with ID "+ adminId+ " does not exist");
        }
        adminRepository.deleteById(adminId);
    }

    public void updateAdmin(Admin admin){
        boolean exists = adminRepository.existsById(admin.getId());
        if(!exists){
            throw new IllegalStateException("Admin with ID "+ admin.getId()+ " does not exist");
        }
        boolean isValid = admin.validateAdmin();
        if(!isValid){
            throw new IllegalStateException("Admin is invalid");
        }
        adminRepository.save(admin);
    }

}
