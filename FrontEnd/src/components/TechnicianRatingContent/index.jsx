import React, { useState, useEffect } from 'react'
import { Table, TableCell, TableContainer, Paper,
    TableHead, TableRow, TableBody,  } from '@mui/material';
import {getAllReview} from "../../api";

function RatingTable({ data, propertyNames }) {
    let filteredData = data.map(v =>
        Object.keys(v)
            .filter(k => propertyNames.includes(k))
            .reduce(( acc, key) => ((acc[key] = v[key]), acc), {}),
    );
    return (
        <div className='Review'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Review ID</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {filteredData.map((val, i) => (
                        <TableRow key={`i_${i}`}>
                            {propertyNames.map(p => (
                                <TableCell key={`i_${i}_${p}`}>{val[p]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default function Review({technicianId}) {
    const [review, setReview] = useState([])
    useEffect(
        () => getAllReview(technicianId).then(
            response => {
                setReview(response.data);
            }
        ).catch(
            err => alert(err)
        )
        , []);
    const propertyNames = ['id', 'reviewInformation', 'rating'];
    return <RatingTable data={review} propertyNames={propertyNames} />;
}