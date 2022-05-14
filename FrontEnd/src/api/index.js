/**
 * AJAX function interface
 */

import ajax from "./ajax"

// log in
export const loginRequest = (email, password) => ajax("http://localhost:3000/api1/api/v1/customer", { email, password }, "POST");

// sign up
export const signupRequest = (firstName, lasgtName, email,
    password, dob, phoneNumber, age, streetAddress, suburb, postCode, state) =>
    ajax("http://localhost:3000/api1/api/v1/customer", {
        firstName, lasgtName, email,
        password, dob, phoneNumber, age, streetAddress, suburb, postCode, state
    }, "POST");