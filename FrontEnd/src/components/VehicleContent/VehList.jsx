import React from 'react'
import VehItem from './VehItem.jsx'
// import {AppBar, Toolbar, Typography} from "@mui/material";
// import { useNavigate } from 'react-router-dom'
// import AddVehicle from './AddVehicle/AddVehicle'
// import {Link} from 'react-router-dom'

export default class VehList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {vehicle:"Toyota",rego:"12345678",weight:"333kg"},
                {vehicle:"Mazda",rego:"12345678",weight:"333kg"},
                {vehicle:"Benz",rego:"12345678",weight:"333kg"},
                {vehicle:"Benz",rego:"12345678",weight:"333kg"},
            ]
        }

    }

    render() {
        // const navigate = useNavigate();
        return <div>
            <h1>Vehicle List</h1>

            {this.state.list.map((item,i)=>{
                return <VehItem key={i}{...item}></VehItem>
            })
            }
        </div>
    }

    loadVeh = key=>{
        const list = JSON.parse(localStorage.getItem(key) || '[]');
        this.setState({
            list
        })
    }
}