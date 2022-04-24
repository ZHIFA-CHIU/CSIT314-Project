import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='header'>
                <h1 className="ui block header center aligned">
                    Roadside Assitant Service
                </h1>
            </div>
            <div className='ui center aligned container'>
                <h3>Welcome</h3>
                <p>Please login or signup to use our app</p>
            </div>
            <div className='img-div ui '>
                <img className='ui centered large image' src='https://uowplaybook.s3-ap-southeast-2.amazonaws.com/logo/logo-secondary-negative.png' />
            </div>
            <div className='ui center aligned container button-container'>
                <button className='huge ui primary button' onClick={() => navigate("/login")}>
                    Log In
                </button>
            </div>
            <div className='ui container signup center aligned'>
                    <p className='signup' onClick={() => navigate("/signup")}>Do not have an account? Sign up now </p>
                    <p className='CreateAccountTechnician' onClick={() => navigate("/CreateAccountTechnician")}>Technician? Sign up now </p>
            </div>
            nav.Navigation();
        </div>
    );
}

export default Home;