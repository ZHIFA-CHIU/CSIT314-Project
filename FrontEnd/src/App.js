import React, {Component} from 'react';
import Home from './components/Home/Home';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';


export default function App() {
    const elements = useRoutes(routes);
    return (
        <div className='app'>
            {elements}
        </div>
        // <BrowserRouter>
        //     <div>
        //         <Navigation/>
        //         <Routes>
        //             <Route path="/" element={<Home/>} exact/>
        //             <Route path="/about" element={<About/>}/>
        //             <Route path="/contact" element={<Contact/>}/>
        //             <Route path="/ViewIncompleteRequest" element={<ViewIncompleteRequest/>}/>
        //             <Route path="/ViewCompleteRequest" element={<ViewCompleteRequest/>}/>
        //             <Route path="/Qualifications" element={<Qualifications/>}/>
        //             <Route path="/PaymentInfo" element={<PaymentInfo/>}/>
        //             <Route path="/Dashboard" element={<Dashboard/>}/>
        //             <Route path="/Login" element={<Login/>}/>
        //             <Route path="/CreateAccount" element={<CreateAccount/>}/>
        //             <Route path="/CustomerExample" element={<CustomerExample/>}/>
        //             <Route component={Error}/>
        //         </Routes>
        //     </div>
        // </BrowserRouter>
    );
}