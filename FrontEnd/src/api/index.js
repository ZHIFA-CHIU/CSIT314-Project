/**
 * AJAX function interface
 */

import ajax from "./ajax"

// log in
export const loginRequest = (username, password) => ajax("http://localhost:3000/api1/login", { username, password }, "POST");

