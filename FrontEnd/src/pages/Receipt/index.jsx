import React, { useEffect, useState } from 'react'
import Banner from "../../components/Banner"
import { getAllJobsRequest } from '../../api';
import { Table, TableCell, TableContainer, Paper, 
    TableHead, TableRow, TableBody,  } from '@mui/material';
/**
 * payer
 * amount
 * repair type (description)
 * additional info
 * total time
 * technician
 */
export default function Receipt() {
    // getting order
    // let history = useLocation();
    // let [order, _] = useState(history.state.order);
    // console.log(order);
    const [receiptInfo, setReceiptInfo] = useState({});

    useEffect(
        () => getAllJobsRequest(2).then(
            response => {
                // console.log(response.data[0]);
                const customer = response.data[0].customer;
                const technician = response.data[0].technician;
                console.log(customer);
                console.log(technician);
                setReceiptInfo(
                    {
                        orderId: response.data[0].id,
                        customer: `${customer.firstName} ${customer.lastName}`,
                        technician: `${technician.firstName} ${technician.lastName}`,
                        price: response.data[0].jobPrice,
                        category: response.data[0].repairCategory,
                        additionalInfo: response.data[0].additionalInfo
                    }
                );
                // console.log(receiptInfo);
            }
        ).catch(
            err => alert(err)
        )
        , []);

    return (
        <div className='Receipt'>
            <Banner />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Receipt ID</TableCell>
                            <TableCell align="right">Customer</TableCell>
                            <TableCell align="right">Technician</TableCell>
                            <TableCell align="right">Repair Type</TableCell>
                            <TableCell align="right">Additional Information</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {receiptInfo.orderId}
                                </TableCell>
                                <TableCell align="right">{receiptInfo.customer}</TableCell>
                                <TableCell align="right">{receiptInfo.technician}</TableCell>
                                <TableCell align="right">{receiptInfo.category}</TableCell>
                                <TableCell align="right">{receiptInfo.additionalInfo}</TableCell>
                                <TableCell align="right">${receiptInfo.price}</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
