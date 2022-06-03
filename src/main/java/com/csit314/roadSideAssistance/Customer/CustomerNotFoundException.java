package com.csit314.roadSideAssistance.Customer;

/**
 * Customer not found exception
 */
public class CustomerNotFoundException extends RuntimeException
{
    public CustomerNotFoundException(Long id)
    {
        super(String.format("Customer with id %s does not exist", id));
    }
}
