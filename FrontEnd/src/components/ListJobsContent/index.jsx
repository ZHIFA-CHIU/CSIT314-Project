import React from "react";
import { Link } from 'react-router-dom'
import {getDistance} from 'geolib';
import { Button } from '@mui/material'
import "./ListJobs.css"

class ListJobs extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            clicked: false
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:3000/api1/api/v1/job")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Loading .... </h1> </div>;

        return (
            <div>
                <h1> List of Jobs </h1>  {
                    items.map((item) => (
                        <Button variant="outlined" size='large' key={item.id} style={{ width: "80%", marginLeft: "10%", marginBottom: "20px", textAlign: "center"}} component={Link} to="/AcceptJob">
                            <div>
                                <p>Job Number: {item.id}</p>
                                <p>Date/Time:<br />{item.startTime}</p>
                                <p>Additional Information:<br />{item.repairCategory}</p>
                                <p>Distance:<br />{Math.round(getDistance({ latitude: item.customerLatitude , longitude: item.customerLatitude }, { latitude: -33.868820, longitude: 151.209290 }) / 100000)} Km's</p>
                            </div>
                        </Button>
                    ))
                }
            </div>
        );
    }
}

export default ListJobs;