package com.csit314.roadSideAssistance.Customer;

import com.csit314.roadSideAssistance.BankAccount.BankAccount;
import com.csit314.roadSideAssistance.Technician.TechnicianException;
import com.csit314.roadSideAssistance.Vehicle.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000/")
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
    public String loginCustomer(@RequestBody Customer customer) {
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
    public boolean addVehicle(@PathVariable("customerId") Long customerId, @RequestBody Vehicle vehicle) throws CustomException {
        return customerService.addVehicle(customerId, vehicle);
    }

    @GetMapping(path = "/get/{customerId}")
    public Customer getCustomerByID(@PathVariable("customerId") Long customerId) {
        return customerService.getById(customerId);
    }
}
