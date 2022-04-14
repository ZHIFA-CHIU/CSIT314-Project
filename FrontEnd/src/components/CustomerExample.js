import React, {useEffect, useState} from 'react';
import CustomerService from "../services/customerExService";
import {Button, Paper, Typography} from "@mui/material";

/**
 * CustomerExample component used to demonstrate backend call from frontend
 * @returns {JSX.Element}
 * @constructor
 */
const CustomerExample = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = () => {
        CustomerService.getCustomerList()
            .then(res => {
                setResponse(res.data)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const deleteCustomer = (id) => {
        CustomerService.deleteCustomer(id)
            .then((res) => {
                getCustomers();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (<Paper>
        <Typography variant={'h2'}>Customer List (Example)</Typography>
        <div>
            {response.map(customer => <div key={customer.id}>
                <Typography variant={'h3'}>{customer.name}</Typography>
                <div>Age: {customer.age}</div>
                <div>Email: {customer.email}</div>
                <Button onClick={() => {
                    deleteCustomer(customer.uuid);
                    getCustomers();
                }}>Delete customer
                </Button>
            </div>)}
        </div>
    </Paper>);
}

export default CustomerExample;