import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Select, MenuItem } from "@material-ui/core";
import "./Signup.css";

const CreateAccountCustomer = () => {
  //update state function for input
   const navigate = useNavigate();
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [pword, setPword] = useState();
   const [pNum, setPNum] = useState();
   const [dob, setDob] = useState();
   const [address, setAddress] = useState();
   const [memType, setMemType] = useState('payOnDemand');
   const [cNum, setCNum] = useState();
   const [expirey, setExpirey] = useState();
   const [cvv, setCvv] = useState();
  
   //function creates account object and navigates to home page
   const handleSubmit = (e) => {
     const account = { name, email, pword, pNum, dob, address, memType, cNum, expirey, cvv };
     navigate('/home');
   }

   return (
      <div id="contents">
         <div className='header'>
            <h1 className="ui block header center aligned">
               Roadside Assitant Service
            </h1>
         </div>

         <div id="body">

            <h1>Personal details</h1>

            <p>Name:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={name} onChange={e => setName(e.target.value)} /><br />

            <p>Email:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={email} onChange={e => setEmail(e.target.value)} /><br />

            <p>Password:</p>
            <TextField type="password" style={{ width: "100%" }} variant="outlined" value={pword} onChange={e => setPword(e.target.value)} /><br />

            <p>Mobile nuber:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={pNum} onChange={e => setPNum(e.target.value)} /><br />

            <p>Date of birth:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={dob} onChange={e => setDob(e.target.value)} /><br />

            <p>Address:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={address} onChange={e => setAddress(e.target.value)} /><br />

            <p>
               Membership type:<br />
               <Select
                  style={{ width: "100%" }}
                  value={memType}
                  onChange={e => setMemType(e.target.value)}>
                  <MenuItem value={"payOnDemand"}>Pay on demand</MenuItem>
                  <MenuItem value={"subscription"}>Subscription</MenuItem>
               </Select>
            </p><br />

            <h1>Payment information</h1>

            <p>Card number:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={cNum} onChange={e => setCNum(e.target.value)} /><br />

            <p>Expirey date:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={expirey} onChange={e => setExpirey(e.target.value)} /><br />

            <p>CVV:</p>
            <TextField variant="outlined" style={{ width: "100%" }} value={cvv} onChange={e => setCvv(e.target.value)} /><br />

            <Button variant="outlined" style={{width: "20%", marginTop: "25px", marginLeft: "40%"}} onClick={handleSubmit}>Submit</Button>
   
            <p className='ui center aligned container' onClick={() => navigate("/login")}>Have an account? <span id="login">Login now</span></p>
         </div>
      </div>
   );
}

export default CreateAccountCustomer;

