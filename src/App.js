import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ViewIncompleteRequest from './components/ViewIncompleteRequest';
import ViewCompleteRequest from './components/ViewCompleteRequest';
import Qualifications from './components/Qualifications';
import PaymentInfo from './components/PaymentInfo';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';


import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/ViewIncompleteRequest" element={<ViewIncompleteRequest/>}/>
              <Route path="/ViewCompleteRequest" element={<ViewCompleteRequest/>}/>
              <Route path="/Qualifications" element={<Qualifications/>}/>
              <Route path="/PaymentInfo" element={<PaymentInfo/>}/>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/CreateAccount" element={<CreateAccount/>}/>
            <Route component={Error}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;