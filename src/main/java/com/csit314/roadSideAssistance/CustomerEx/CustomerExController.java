package com.csit314.roadSideAssistance.CustomerEx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "api/v1/customerEx")
public class CustomerExController {

    private final CustomerExService customerService;

    @Autowired
    public CustomerExController(CustomerExService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<CustomerEx> getCustomers() {
        return customerService.getCustomer();
    }

    @PostMapping
    public void registerCustomer(@RequestBody CustomerEx customer) {
        customerService.registerCustomer(customer);
    }

    @DeleteMapping(path = "{customerId}")
    @Transactional
    public void deleteCustomer(@PathVariable("customerId") UUID customerId){
        customerService.deleteCustomer(customerId);
    }

    @PutMapping
    public void updateCustomer(@RequestBody CustomerEx customer){
        customerService.updateCustomer(customer);
    }

}
