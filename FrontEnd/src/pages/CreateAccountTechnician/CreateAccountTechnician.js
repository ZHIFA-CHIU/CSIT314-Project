import React from 'react';
import { useNavigate } from 'react-router-dom';
import { technicianSignupRequest } from '../../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 
const CreateAccountTechnician = () => {
   return (
      <div className='CreateAccountTechnician ui center aligned container' style={{minWidth:"500px", maxWidth:"700px"}}>
         <div className='header' style={{background:"gray"}}>
            <h1>
               Roadside Assistant Service
            </h1>
         </div>
         <div >
            <h1>
               Please enter your details
            </h1>
         </div>

         <div style={{textAlign:"left"}}>
            <label htmlFor="Name">Name</label>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:"100%"}}/>
         </div>

         <div style={{textAlign:"left"}}>
            <label htmlFor="Email">Email</label>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <label htmlFor="Password">Password</label>
            <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <label htmlFor="Mobile number">Mobile number</label>
            <TextField id="outlined-basic" label="Mobile number" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <label htmlFor="Date of Birth">Date of Birth</label>
            <TextField id="outlined-basic" label="Date of Birth" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <label htmlFor="Address">Address</label>
            <TextField id="outlined-basic" label="Address" variant="outlined" style={{width:"100%"}} />
         </div>


         <div style={{display:"block", overflow:"hidden"}}>
            <div style={{float:"left"}}>
               <label htmlFor="Police Check">Police Check</label>
            </div>
            <div style={{float:"right"}}>
               <Button variant="outlined" id="Police Check">^</Button>
            </div>
         </div>

         <div  style={{display:"block", overflow:"hidden"}}>
            <div style={{float:"left"}}>
               <label htmlFor="Qualification Certificate">Qualification Certificate</label>
            </div>
            <div style={{float:"right"}}>
               <Button variant="outlined" id="Qualification Certificate">^</Button>
            </div>
         </div>
         <br/>
         <div style={{display:"block", textAlign:"left"}}>
            <p style={{textAlign:"center"}}>
               Payment Details
            </p>
            
            <div style={{display:"inline-block"}}>
               <label htmlFor="BSB">BSB</label>
               <TextField id="BSB" label="Outlined" variant="outlined" />
            </div>
            <div style={{display:"inline-block", float:"right"}}>
               <label htmlFor="Account Number">Account Number</label>
               <TextField id="Account Number" label="Outlined" variant="outlined"/>
            </div>
         </div>

         <div >
            <p>Sign up</p>
            <Button variant="outlined">Sign Up</Button>
            <p>
               Already have an account?  &nbsp;
            <a>Login</a>
         </p>
         </div>
         
      </div>
   );
}
 
export default CreateAccountTechnician;