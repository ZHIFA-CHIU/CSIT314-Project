/**
 * AJAX function module
 */

import axios from "axios"

/**
 * @url Uniform Resource Locator
 * @data data
 * @method get/post
 */
const ajax = (url, data = {}, method = "GET") => {
    // sending get request
    if (method.toUpperCase() === "GET") {
        return axios.get(url, {
            params: data
        })
    } else if (method.toUpperCase() === "POST") {
        // sending post request
        return axios.post(url, data)
    } else if (method.toUpperCase() === "PUT") {
        return axios.put(url, data);
    }
}

export default ajax;