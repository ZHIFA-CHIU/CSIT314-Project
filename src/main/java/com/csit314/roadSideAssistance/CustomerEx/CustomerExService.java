package com.csit314.roadSideAssistance.CustomerEx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerExService {

    private final CustomerExRepository customerRepository;

    @Autowired
    public CustomerExService(CustomerExRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<CustomerEx> getCustomer() {
        return customerRepository.findAll();
    }

    public void registerCustomer(CustomerEx customer) {
        Optional<CustomerEx> foundCustomer = customerRepository.findCustomerByEmail(customer.getEmail());

        if (foundCustomer.isPresent()) {
            throw new IllegalStateException("User already exists");
        }
        customerRepository.save(customer);
    }

    public void deleteCustomer(UUID customerId){
        boolean customerExists = customerRepository.existsByUuid(customerId);
        if(!customerExists) {
            throw new IllegalStateException("customer with id " + customerId + " does not exist");
        }
        customerRepository.deleteByUuid(customerId);
    }

    public void updateCustomer(CustomerEx customer){
        //checking customer exists
        boolean customerExists = customerRepository.existsByUuid(customer.getUuid());
        if(!customerExists) {
            throw new IllegalStateException("customer with id " + customer.getUuid() + " does not exist");
        }

        //checking customer is valid
        boolean validCustomer = customer.validateCustomer();
        if(!validCustomer) {
            throw new IllegalStateException("Customer is invalid");
        }

        //updating customer
        customerRepository.save(customer);
    }
}
