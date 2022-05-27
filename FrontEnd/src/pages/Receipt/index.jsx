import React, {useEffect, useState} from 'react'
import Banner from "../../components/Banner"
import {getJob} from "../../api";
import {
    Table, TableCell, TableContainer, Paper,
    TableHead, TableRow, TableBody, Button, Box,
} from '@mui/material';
import {useLocation, useNavigate} from "react-router-dom";

/**
 * payer
 * amount
 * repair type (description)
 * additional info
 * total time
 * technician
 */
export default function Receipt() {
    const {state} = useLocation();
    const [receiptInfo, setReceiptInfo] = useState({});
    const [custId, setCustId] = useState();
    const [techId, setTechId] = useState();

    const navigate = useNavigate();

    const reviewPage = () => {
        navigate("/CustomerRating", {state: {customerId: custId, technicianId: techId}})
    }

    useEffect(
        () => getJob(state.jobId).then(
            response => {
                setReceiptInfo(
                    {
                        orderId: response.data.id || '',
                        customer: `${response.data.customer.firstName || '-'} ${response.data.customer.lastName || '-'}`,
                        technician: `${response.data.technician.firstName || '-'} ${response.data.technician.lastName || '-'}`,
                        price: response.data.jobPrice || '-',
                        category: response.data.repairCategory || '-',
                        additionalInfo: response.data.additionalInfo || '-'
                    }
                );
                setCustId(response.data.customer.id);
                setTechId(response.data.technician.id);
            }
        ).catch(
            err => alert(err)
        )
        , []);

    return (
        <div className='Receipt'>
            <Banner/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
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
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
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
                <Button onClick={reviewPage}>Review</Button>
        </div>
    )
}
