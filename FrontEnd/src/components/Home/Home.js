import React from 'react';
import { NavLink} from 'react-router-dom';
import "./Home.css"

const Home = () => {
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
                <NavLink to={"/login"}>
                    <button className='huge ui primary button'>
                        Sign In
                    </button>
                </NavLink>
            </div>
            <div className='ui container signup center aligned'>
                <NavLink to={"/signup"}>
                    <p>Do not have an account? Sign up </p>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;