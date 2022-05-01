package com.csit314.roadSideAssistance.Vehicle;

import com.csit314.roadSideAssistance.Vehicle.Vehicle;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.time.Year;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.util.Assert.doesNotContain;

@SpringBootTest
class VehicleTest {

    @Test
    void contextLoads() {
    }


    @Test
    @DisplayName("Simple test of vehicle get rego plate")
    void testVehiclePlate() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.getRegistrationPlate(), "AB12CD", "Checking Plate");
    }

    @Test
    @DisplayName("Simple test of vehicle registration validation")
    void testVehiclePlateSpecialChars() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.validateVehicle(), true, "Checking consistency constrains");
    }

    @Test
    @DisplayName("Simple test of vehicle get rego state")
    void testVehicleState() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.getRegisteredState(), "NSW", "Checking Rego State");
    }

    @Test
    @DisplayName("Simple test of vehicle colour method")
    void testVehicleColour() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.getColour(), "Blue", "Checking Colour");
    }

    @Test
    @DisplayName("Simple test of vehicle year method")
    void testVehicleYear() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.getManufacturedYear(), Year.of(2000), "Checking year");
    }

    @Test
    @DisplayName("Simple test of vehicle make")
    void testVehicleMake() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.getManufacturer(), "Toyota", "Checking Make");
    }

    @Test
    @DisplayName("Simple test of vehicle Model")
    void testVehicleModel() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.getModel(), "Corolla", "Checking Model");
    }

    @Test
    @DisplayName("Simple test of vehicle weight")
    void testVehicleWeight() {
        Vehicle test = new Vehicle("AB12CD", "NSW", Year.of(2000),
                "Toyota",  "Corolla",  "Blue",  2000.2);
        assertEquals(test.getWeight(), 2000.2, "Checking Weight");
    }
}