/**
 * AJAX function interface
 */

import ajax from "./ajax"

// log in
export const loginRequest = (email, password) => ajax("http://localhost:3000/api1/api/v1/customer/login", { email, password }, "POST");

// sign up
export const signupRequest = (firstName, lastName, email,
    password, dob, phoneNumber, age, streetAddress, suburb, postCode, state) =>
    ajax("http://localhost:3000/api1/api/v1/customer", {
        firstName, lastName, email,
        password, dob, phoneNumber, age, streetAddress, suburb, postCode, state
    }, "POST");

export const technicianLoginRequest = (email, password) => ajax("http://localhost:3000/api1/api/v1/technician/login", { email, password }, "POST");

// sign up
export const technicianSignupRequest = (firstName, lastName, email,
    dob, phoneNumber, password, streetAddress, suburb, postCode, state, heavyVehicleQualification, lightVehicleQualification) =>
    ajax("http://localhost:3000/api1/api/v1/technician", {
        firstName, lastName, email,
        dob, phoneNumber, password, streetAddress, suburb, postCode, state, heavyVehicleQualification, lightVehicleQualification
    }, "POST");


// service request
export const serviceRequest = (customerId, location, data) =>
    ajax(`http://localhost:3000/api1/api/v1/job/${customerId}`, {
        ...location, ...data
    }, "POST");

// add vehicle
export const addVehicle = (customerId, data) =>
    ajax(`http://localhost:3000/api1/api/v1/customer/addVehicle/${customerId}`,{
        ...data
    }, "POST");

// get customer details
export const getCustomerDetailsRequest = id => ajax(`http://localhost:3000/api1/api/v1/customer/get/${id}`, { id }, "GET");

// update customer details
export const updateCustomerDetailsRequest = (id, firstName, lastName, email,
    password, dob, phoneNumber, age, streetAddress, suburb, postCode, state, hasMembership) =>
    ajax("http://localhost:3000/api1/api/v1/customer", {
        id, firstName, lastName, email,
        password, dob, phoneNumber, age, streetAddress, suburb, postCode, state, hasMembership
    }, "PUT");

// get customer details
export const getTechnicianDetailsRequest = id => ajax(`http://localhost:3000/api1/api/v1/technician/get/${id}`, { id }, "GET");

// update technician details
export const updateTechnicianDetailsRequest = (id, age, availableStatus, avgRating, bankAccount, dob, email,
    firstName, heavyVehicleQualification, lastName, lightVehicleQualification, password, phoneNumber, postCode, state, streetAddress, suburb
) => ajax("http://localhost:3000/api1/api/v1/technician", {
    id, age, availableStatus, avgRating, bankAccount, dob, email,
    firstName, heavyVehicleQualification, lastName, lightVehicleQualification, password, phoneNumber, postCode, state, streetAddress, suburb
}, "PUT");
