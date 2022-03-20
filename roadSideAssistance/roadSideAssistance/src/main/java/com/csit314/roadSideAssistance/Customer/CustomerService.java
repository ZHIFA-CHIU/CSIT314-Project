package com.csit314.roadSideAssistance.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getCustomer() {
        return customerRepository.findAll();
    }

    public void registerCustomer(Customer customer) {
        Optional<Customer> foundCustomer = customerRepository.findCustomerByEmail(customer.getEmail());

        if (foundCustomer.isPresent()) {
            throw new IllegalStateException("User already exists");
        }
        customerRepository.save(customer);
    }

    public void deleteCustomer(Long customerId){
        boolean customerExists = customerRepository.existsById(customerId);
        if(!customerExists) {
            throw new IllegalStateException("customer with id " + customerId + " does not exist");
        }
        customerRepository.deleteById(customerId);
    }

    public void updateCustomer(Customer customer){
        //checking customer exists
        boolean customerExists = customerRepository.existsById(customer.getId());
        if(!customerExists) {
            throw new IllegalStateException("customer with id " + customer.getId() + " does not exist");
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
