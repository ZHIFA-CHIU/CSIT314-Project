package com.csit314.roadSideAssistance.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for admin
 */
@CrossOrigin
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

    @GetMapping(path = "get/{adminId}")
    public Admin getAdmin(@PathVariable("adminId") Long adminId) {
        return adminService.getAdminByID(adminId);
    }

    @PostMapping
    public void registerAdmin(@RequestBody Admin admin) {
        adminService.registerAdmin(admin);
    }

    @DeleteMapping(path = "{adminId}")
    public void deleteAdmin(@PathVariable("adminId") Long adminId) {
        adminService.deleteAdmin(adminId);
    }

    @PutMapping
    public void updateAdmin(@RequestBody Admin admin) {
        adminService.updateAdmin(admin);
    }


}