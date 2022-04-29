import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Link, TextField, Typography } from '@mui/material'
import { Select, MenuItem } from "@material-ui/core";
import "./Signup.css";


const CreateAccountCustomer = () => {
   /**update state function for input*/
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

   const [nameErr, setNameErr] = useState([false, ""]);
   const [emailErr, setEmailErr] = useState([false, ""]);
   const [pwordErr, setPwordErr] = useState([false, ""]);
   const [pNumErr, setPNumErr] = useState([false, ""]);
   const [dobErr, setDobErr] = useState([false, ""]);
   const [addressErr, setAddressErr] = useState([false, ""]);
   const [cNumErr, setCNumErr] = useState([false, ""]);
   const [expireyErr, setExpireyErr] = useState([false, ""]);
   const [cvvErr, setCvvErr] = useState([false, ""]);

   /**validate user input function */
   const validateInput = e => {
      if (name.length < 4) {
         setNameErr([true, "Username must contain at least 4 characters"]);
         return false;
      }

      if (!email.includes("@")) {
         setEmailErr([true, "Email is invalid"]);
         return false;
      }

      if (pword.length < 6) {
         setPwordErr([true, "Password must contain at least 6 characters"]);
         return false;
      }

      if (pNum.length != 10) {
         setPNumErr([true, "Phone number is invalid"]);
         return false;
      }

      if (address.length < 10) {
         setAddressErr([true, "Address is invalid"]);
         return false
      }

      if (cNum.length != 16) {
         setCNumErr = ([true, "Card number is invalid"]);
         return false;
      }

      if (expirey.length != 5) {
         setExpireyErr = ([true, "Card expirey is invalid"]);
         return false;
      }

      if (cvv.length != 3) {
         setCvvErr = ([true, "CVV is invalid"]);
         return false;
      }

      return true;
   }


   /**function creates account object and navigates to home page*/
   const handleSubmit = (e) => {
      if (validateInput()) {
         const account = { name, email, pword, pNum, dob, address, memType, cNum, expirey, cvv };
         navigate('/home');
      }
   }

   return (
      <div id="contents">
         <div className='header'>
            <h1 className="ui block header center aligned">
               Roadside Assitant Service
            </h1>
         </div>

         <div id="body">

            <Typography component="h1" variant="h5">
               Personal Information
            </Typography>

            <p>Name:</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={name}
               onChange={e => setName(e.target.value)}
            /><br />

            <p>Email:</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={email}
               onChange={e => setEmail(e.target.value)}
            /><br />

            <p>Password:</p>
            <TextField
               type="password"
               style={{ width: "100%" }}
               variant="outlined" value={pword}
               onChange={e => setPword(e.target.value)}
            /><br />

            <p>Mobile number (04):</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={pNum}
               onChange={e => setPNum(e.target.value)}
            /><br />

            <p>Date of birth (dd/mm/yyyy):</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={dob}
               onChange={e => setDob(e.target.value)}
            /><br />

            <p>Address:</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={address}
               onChange={e => setAddress(e.target.value)}
            /><br />

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

            <Typography component="h1" variant="h5">
               Payment Information
            </Typography>

            <p>Card number:</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={cNum}
               onChange={e => setCNum(e.target.value)}
            /><br />

            <p>Expirey date (dd/mm):</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={expirey}
               onChange={e => setExpirey(e.target.value)}
            /><br />

            <p>CVV:</p>
            <TextField
               variant="outlined"
               style={{ width: "100%" }}
               value={cvv}
               onChange={e => setCvv(e.target.value)}
            /><br />

            <Button
               variant="outlined"
               style={{ width: "20%", marginTop: "25px", marginLeft: "40%" }}
               onClick={handleSubmit}
            >Submit</Button><br /><br />

            <Link variant={"body2"} style={{marginLeft: "35%"}} underline={"hover"} href={"/login"}>
               {"Already have an account? Login"}
            </Link>
         </div>
      </div>
   );
}

export default CreateAccountCustomer;
