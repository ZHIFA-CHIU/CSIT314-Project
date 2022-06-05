import React, {useEffect, useState} from 'react'
import {getJob} from "../../api";
import {
    Table, TableCell, TableContainer, Paper,
    TableHead, TableRow, TableBody,AppBar, Toolbar, Typography
} from '@mui/material';
import {useLocation, useNavigate} from "react-router-dom";

export default function TechReceipt() {
    const {state} = useLocation();
    const [receiptInfo, setReceiptInfo] = useState({});
    const [techId, setTechId] = useState();

    const navigate = useNavigate();

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
                setTechId(response.data.technician.id);
            }
        ).catch(
            err => alert(err)
        )
        , []);

    return (
        <div className='Receipt'>
            <AppBar position='static' >
                <Toolbar>
                    <button className='medium ui primary button' onClick={() => window.history.back()}>
                        Back
                    </button>
                    <Typography align='center' sx={{ flexGrow: 1 }}>
                        Roadside Assistant Service
                    </Typography>
                    <button className='medium ui primary button' onClick={() => navigate("/TechnicianDashboard", { state: { "id":techId } })}>
                        Done
                    </button>
                </Toolbar>
            </AppBar>
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
        </div>
    )
}
