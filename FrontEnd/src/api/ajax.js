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
    } else {
        // sending post request
        return axios.post(url, data)
    }
}

export default ajax;