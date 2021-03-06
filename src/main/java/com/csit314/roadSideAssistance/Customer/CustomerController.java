package com.csit314.roadSideAssistance.Customer;

import com.csit314.roadSideAssistance.User.UserInfo;
import com.csit314.roadSideAssistance.Vehicle.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;

/**
 * Controller for customer
 */
@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/customer")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getCustomers() {
        return customerService.getCustomer();
    }

    @PostMapping(path = "/login")
    public String loginCustomer(@RequestBody UserInfo customer) throws NoSuchAlgorithmException {
        return customerService.checkPassword(customer);
    }

    @PostMapping
    public boolean registerCustomer(@RequestBody Customer customer) {
        return customerService.registerCustomer(customer);
    }

    @DeleteMapping(path = "{customerId}")
    public void deleteCustomer(@PathVariable("customerId") Long customerId){
        customerService.deleteCustomer(customerId);
    }

    @PutMapping
    public Customer updateCustomer(@RequestBody Customer customer){
        return customerService.updateCustomer(customer);
    }

    // -- Vehicle endpoints --

    @PostMapping(path = "/addVehicle/{customerId}")
    public boolean addVehicle(@PathVariable("customerId") Long customerId, @RequestBody Vehicle vehicle) {
        return customerService.addVehicle(customerId, vehicle);
    }

    @GetMapping(path = "/get/{customerId}")
    public Customer getCustomerByID(@PathVariable("customerId") Long customerId) {
        return customerService.getById(customerId);
    }

    @PutMapping(path = "/updateMembership/{customerId}/{membershipStatus}")
    public void updateMembership(@PathVariable("customerId") Long customerId, @PathVariable("membershipStatus") Boolean membershipStatus) {
        customerService.updateMembership(customerId, membershipStatus);
    }

    @GetMapping(path = "/getNearbyTechs/{lat}/{lon}")
    public int getNearbyTechs(@PathVariable("lat") double lat, @PathVariable("lon") double lon)
    {
        return customerService.findAllTechsNearby(lat, lon);
    }

}
