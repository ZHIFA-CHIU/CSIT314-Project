package com.csit314.roadSideAssistance.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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
        boolean validCustomer = customer.validateUser();
        if(!validCustomer) {
            throw new IllegalStateException("Customer is invalid");
        }

        //updating customer
        customerRepository.save(customer);
    }

    public String checkPassword(Customer customer) {
        Optional<Customer> c = customerRepository.findCustomerByEmail(customer.getEmail());

        String json;
        if(c.isPresent() && c.get().checkPassword(customer.getPassword())) {
            json = "{" +
                    "login: true," +
                    "customer-id:" + c.get().getId() +
                    "}";
        }
        else {
            json = "{" +
                    "login: false," +
                    "customer-id:" + -1 +
                    "}";
        }
        return json;
    }

    public Customer getById(Long customerID){
        Optional<Customer> customer = customerRepository.findById(customerID);
        if(customer.isPresent()){
            return customer.get();
        }
        else{
            throw new IllegalStateException(String.format("Customer with id %s does not exist", customerID));
        }
    }
}
