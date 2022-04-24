import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 
const CreateAccountTechnician = () => {
   return (
      <div>
         <h1>Create Account Technician</h1>
         <p>Creating account</p>
         <TextField id="outlined-basic" label="First Name" variant="outlined" />
         <p>Creating account</p>
         <TextField id="outlined-basic" label="Last Name" variant="outlined" />
         <p>Creating account</p>
         <TextField id="outlined-basic" label="Address" variant="outlined" />
         <p>Creating account</p>
         <TextField id="outlined-basic" label="Date of birth" variant="outlined" />
         <p>Creating account</p>
         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
         <p>Creating account</p>
         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
         <p>Creating account</p>
         <Button variant="outlined">Submit</Button>
      </div>
   );
}
 
export default CreateAccountTechnician;