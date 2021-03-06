package com.csit314.roadSideAssistance.Technician;

/**
 * Technician Exception
 * Custom exception for the Technician classes
 */
public class TechnicianNotFoundException extends RuntimeException
{
    public TechnicianNotFoundException(Long id)
    {
        super(String.format("Technician with id: %s doesn't exist", id));
    }
}
