package com.csit314.roadSideAssistance.Customer;

import com.csit314.roadSideAssistance.Technician.Technician;
import com.csit314.roadSideAssistance.Technician.TechnicianRepository;
import com.csit314.roadSideAssistance.Vehicle.Vehicle;
import com.csit314.roadSideAssistance.Vehicle.VehicleRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    private final VehicleRepository vehicleRepository;

    private final TechnicianRepository technicianRepository;


    @Autowired
    public CustomerService(CustomerRepository customerRepository, VehicleRepository vehicleRepository, TechnicianRepository technicianRepository) {
        this.customerRepository = customerRepository;
        this.vehicleRepository = vehicleRepository;
        this.technicianRepository = technicianRepository;
    }

    public List<Customer> getCustomer() {
        return customerRepository.findAll();
    }

    public boolean registerCustomer(Customer customer) {
        Optional<Customer> foundCustomer = customerRepository.findCustomerByEmail(customer.getEmail());

        if (foundCustomer.isPresent()) {
            throw new IllegalStateException("User already exists");
        }
        customerRepository.save(customer);
        return true;
    }

    public void deleteCustomer(Long customerId) {
        boolean customerExists = customerRepository.existsById(customerId);
        if (!customerExists) {
            throw new CustomerNotFoundException(customerId);
        }
        customerRepository.deleteById(customerId);
    }

    public Customer updateCustomer(Customer customer) {
        //checking customer exists
        boolean customerExists = customerRepository.existsById(customer.getId());
        if (!customerExists) {
            throw new CustomerNotFoundException(customer.getId());
        }

        //checking customer is valid
        boolean validCustomer = customer.validateUser();
        if (!validCustomer) {
            throw new IllegalStateException("Customer is invalid");
        }

        //updating customer
        customerRepository.save(customer);
        return customer;
    }

    public Customer getById(Long customerId) {
        Optional<Customer> customer = customerRepository.findById(customerId);
        if (customer.isPresent()) {
            return customer.get();
        } else {
            throw new CustomerNotFoundException(customerId);
        }
    }

    public String checkPassword(Customer customer) {
        Optional<Customer> c = customerRepository.findCustomerByEmail(customer.getEmail());

        try {
            JSONObject json = new JSONObject();
            json.put("login", "true");

            if (c.isPresent() && c.get().checkPassword(customer.getPassword())) {
                json.put("customer-id", c.get().getId());
            } else {
                json.put("customer-id", -1);
            }
            return json.toString();
        }
        catch(JSONException e){
            throw new IllegalStateException("Failed to check password");
        }


    }

    public boolean addVehicle(Long customerId, Vehicle vehicle) {
        Optional<Customer> customerOptional = customerRepository.findById(customerId);
        if (!customerOptional.isPresent()) {
            throw new CustomerNotFoundException(customerId);
        }

        vehicle.setCustomer(customerOptional.get());
        vehicle.setCustomerID(customerId);
        vehicleRepository.save(vehicle);

        return true;
    }

    public List<Vehicle> getVehicle(Long customerId) {
        List<Vehicle> vehicleOptional = vehicleRepository.findVehicleByCustomerIDEquals(customerId);
        if (vehicleOptional.isEmpty()) {
            throw new CustomerNotFoundException(customerId);
        }
        return vehicleOptional;
    }

    public void updateMembership(Long customerId, Boolean membershipStatus) {
        Optional<Customer> customerOptional = customerRepository.findById(customerId);
        if (!customerOptional.isPresent()) {
            throw new CustomerNotFoundException(customerId);
        }

        customerOptional.get().setHasMembership(membershipStatus);
        customerRepository.save(customerOptional.get());
    }

    private double rad2deg(double rad) {
        return (rad * 180.0 / Math.PI);
    }

    private double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    public int findAllTechsNearby(double technicianLat, double technicianLong) {
        List<Technician> nearby = new ArrayList<>();
        for (Technician t : technicianRepository.findAll()) {
            double customerLat = t.getLatitude();
            double customerLong = t.getLongitude();
            double theta = customerLong - technicianLong;
            double dist = Math.sin(deg2rad(customerLat)) * Math.sin(deg2rad(technicianLat)) + Math.cos(deg2rad(customerLat)) * Math.cos(deg2rad(technicianLat)) * Math.cos(deg2rad(theta));
            dist = Math.acos(dist);
            dist = rad2deg(dist);
            dist = dist * 60 * 1.85315962;
            if (dist < 50) {
                nearby.add(t);
            }
        }
        return nearby.size();
    }
}
