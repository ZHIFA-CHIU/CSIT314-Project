import React from 'react';
 
import { Link } from 'react-router-dom';
import styled from 'styled-components';

 
 const StyledLink = styled(Link)`
   color: Black;
   text-decoration: none;
   font-weight: Bold;
   font-size: x-large;
   margin: 0 10px;
 `;

 const CenterDiv = styled.div`
 
  text-align:center;
 
 `;
 
const Navigation = () => {
    return (
       <CenterDiv>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>    
          <StyledLink to="/contact">Contact</StyledLink>    
          <StyledLink to="/ViewIncompleteRequest">ViewIncompleteRequest</StyledLink>    
          <StyledLink to="/ViewCompleteRequest">ViewCompleteRequest</StyledLink>    
          <StyledLink to="/Qualifications">Qualifications</StyledLink>    
          <StyledLink to="/PaymentInfo">PaymentInfo</StyledLink>    
          <StyledLink to="/Dashboard">Dashboard</StyledLink>    
          <StyledLink to="/Login">Login</StyledLink>    
          <StyledLink to="/CreateAccount">CreateAccount</StyledLink>    

         <hr></hr>
       </CenterDiv>
    );
}
 
export default Navigation;