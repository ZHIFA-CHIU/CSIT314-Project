    /**
 * AJAX function interface
 */

import ajax from "./ajax"

const address = "http://3.26.161.183:8080/"

// log in
export const loginRequest = (email, password) => ajax(address + "api/v1/customer/login", { email, password }, "POST");

// sign up
export const signupRequest = (firstName, lastName, email,
    password, dob, phoneNumber, age, streetAddress, suburb, postCode, state) =>
    ajax(address + "api/v1/customer", {
        firstName, lastName, email,
        password, dob, phoneNumber, age, streetAddress, suburb, postCode, state
    }, "POST");

export const technicianLoginRequest = (email, password) => ajax(address + "api/v1/technician/login", { email, password }, "POST");

// sign up
export const technicianSignupRequest = (firstName, lastName, email,
    dob, phoneNumber, password, streetAddress, suburb, postCode, state, heavyVehicleQualification, lightVehicleQualification) =>
    ajax(address + "api/v1/technician", {
        firstName, lastName, email,
        dob, phoneNumber, password, streetAddress, suburb, postCode, state, heavyVehicleQualification, lightVehicleQualification
    }, "POST");


// service request
export const serviceRequest = (customerId, location, data) =>
    ajax(address + `api/v1/job/${customerId}`, {
        ...location, ...data
    }, "POST");

// add vehicle
export const addVehicle = (customerId, data) =>
    ajax(address + `api/v1/customer/addVehicle/${customerId}`, {
        ...data
    }, "POST");

// get vehicle
export const getVehicle = (customerId) =>
    ajax(address + `api/v1/Vehicle/getByCustomer/${customerId}`, {}, "GET")

// add review
export const addReview = (technicianId, data) =>
    ajax(address + `api/v1/review/${technicianId}`, {
        ...data
    }, "POST");

// get customer details
export const getCustomerDetailsRequest = id => ajax(address + `api/v1/customer/get/${id}`, {}, "GET");

// get job details
export const getJobDetailsRequest = id => ajax(address +  `/api/v1/job/${id}`, {}, "GET");


// update customer details
export const updateCustomerDetailsRequest = (id, firstName, lastName, email,
    password, dob, phoneNumber, age, streetAddress, suburb, postCode, state, hasMembership) =>
    ajax(address + "api/v1/customer", {
        id, firstName, lastName, email,
        password, dob, phoneNumber, age, streetAddress, suburb, postCode, state, hasMembership
    }, "PUT");

// get customer details
export const getTechnicianDetailsRequest = id => ajax(address + `api/v1/technician/get/${id}`, {}, "GET");

// update technician details
export const updateTechnicianDetailsRequest = (id, age, availableStatus, avgRating, bankAccount, dob, email,
    firstName, heavyVehicleQualification, lastName, lightVehicleQualification, password, phoneNumber, postCode, state, streetAddress, suburb
) => ajax(address + "api/v1/technician", {
    id, age, availableStatus, avgRating, bankAccount, dob, email,
    firstName, heavyVehicleQualification, lastName, lightVehicleQualification, password, phoneNumber, postCode, state, streetAddress, suburb
}, "PUT");

// get all jobs request, this one is for receipt page test purpose
export const getAllJobsRequest = id => ajax(address + `api/v1/job/getall/${id}`, {}, "GET");

export const getAllTechnicianJobsRequest = techId => ajax(address + `api/v1/job/getall/technician/${techId}`, {}, "GET");

// technician accepts a job
export const technicianAcceptJobRequest = (jobId, technicianId) => ajax(address + `api/v1/job/addTechnician/${jobId}/${technicianId}`,
    { jobId, technicianId }, "POST");

// technician gets nearby job request
export const technicianGetNearbyJobsRequest = (technicianLat, technicianLon) => ajax(address + `api/v1/job/getNearby/${technicianLat}/${technicianLon}`,
    { }, "GET");

export const closeJob = (jobId) => ajax(address + `api/v1/job/closeJob/${jobId}`, {}, "PUT");

// get job based on ID
export const getJob = id => ajax(address + `api/v1/job/${id}`, { }, "GET");

export const updateMembership = (customerId, membershipStatus) => ajax(address + `api/v1/customer/updateMembership/${customerId}/${membershipStatus}`, { customerId, membershipStatus }, "PUT");


// get customer service history
export const getCustomerServiceHsitory = customerId => ajax(address + `api/v1/job/getall/${customerId}`, { }, "GET");

// add bank detail
export const addBank = (technicianId, data) =>
    ajax(address + `api/v1/technician/addBankAccount/${technicianId}`, {
        ...data
    }, "PUT");

// set technician location
export const setLocation = (techId, technicianLat, technicianLon) =>
    ajax(address + `api/v1/technician/setLocation/${techId}/${technicianLat}/${technicianLon}`, {
        technicianLat, technicianLon
    }, "PUT");

// get nearby technician
export const getNearbyTechnician = (lat, lon) =>
    ajax(address + `api/v1/customer/getNearbyTechs/${lat}/${lon}`,{}, "GET");

// get all review
export const getAllReview = technicianId => ajax(address + `api/v1/review/${technicianId}`, {}, "GET");