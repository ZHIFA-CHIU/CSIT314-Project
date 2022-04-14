import axios from 'axios'

const CUSTOMERS_REST_API_URL = 'http://localhost:8080/api/v1/customerEx';

/**
 * Service class used to get interact with customer controller
 */
class CustomerExService {
    /**
     * Gets list of customers
     * @returns axios response
     */
    getCustomerList() {
        return axios.get(CUSTOMERS_REST_API_URL);
    }

    /**
     * Deletes a customer based on ID provided
     * @param id of customer
     * @returns axios response
     */
    deleteCustomer = (id) => {
        return axios.delete(`${CUSTOMERS_REST_API_URL}/${id}`)
    }
}

export default new CustomerExService();