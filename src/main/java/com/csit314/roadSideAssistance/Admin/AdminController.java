package com.csit314.roadSideAssistance.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/v1/admin")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<Admin> getAdmins() {
        return adminService.getAdmin();
    }

    @PostMapping
    public void registerAdmin(@RequestBody Admin admin) {
        adminService.registerAdmin(admin);
    }

    @DeleteMapping(path = "{adminId}")
    public void deleteAdmin(@PathVariable("adminId") UUID adminId) {
        adminService.deleteAdmin(adminId);
    }

    @PutMapping
    public void updateAdmin(@RequestBody Admin admin) {
        adminService.updateAdmin(admin);
    }


}