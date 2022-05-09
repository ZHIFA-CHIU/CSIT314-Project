import React from 'react';
import { useNavigate } from 'react-router-dom';
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
            <p>Name</p>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:"100%"}}/>
         </div>

         <div style={{textAlign:"left"}}>
            <p>Email</p>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <p>Password</p>
            <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <p>Mobile number</p>
            <TextField id="outlined-basic" label="Mobile number" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <p>Date of Birth</p>
            <TextField id="outlined-basic" label="Date of Birth" variant="outlined" style={{width:"100%"}} />
         </div>

         <div style={{textAlign:"left"}}>
            <p>Address</p>
            <TextField id="outlined-basic" label="Address" variant="outlined" style={{width:"100%"}} />
         </div>


         <div style={{display:"block", overflow:"hidden"}}>
            <div style={{float:"left"}}>
               Police Check
            </div>
            <div style={{float:"right"}}>
               <Button variant="outlined" >^</Button>
            </div>
         </div>

         <div  style={{display:"block", overflow:"hidden"}}>
            <div style={{float:"left"}}>
               Qualification Certificate
            </div>
            <div style={{float:"right"}}>
               <Button variant="outlined" >^</Button>
            </div>
         </div>
         <br/>
         <div style={{display:"block", textAlign:"left"}}>
            <p style={{textAlign:"center"}}>
               Payment Details
            </p>
            
            <div style={{display:"inline-block"}}>
               <label for="BSB">BSB</label>
               <TextField id="BSB" label="Outlined" variant="outlined" />
            </div>
            <div style={{display:"inline-block", float:"right"}}>
               <p>Account Number</p>
               <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
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