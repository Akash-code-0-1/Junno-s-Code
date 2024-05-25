import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Signup (){

    const navigate= useNavigate();
    const [passwordVisible, setPasswordVisible]=useState(false);

    const [confirmpasswordVisible, setconfirmPasswordVisible]=useState(false);





    const handleButtonClick =(page)=>{
        navigate(page);
    }

    const togglePasswordVisibility =()=>{
        setPasswordVisible(!passwordVisible);
    };

    const toggleconfirmPasswordVisibility =()=>{
        setconfirmPasswordVisible(!confirmpasswordVisible);
    };

    return (
        <div className="signup_page">
            <div className="container">
                <img src="./images/logo_junno.jpg" alt="" />
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Full Name"/>
                <div className="password-input-container">
                    <input type={passwordVisible ? "text" : "password"} placeholder="Password" />
                    {passwordVisible ? (
                        <VisibilityIcon onClick={togglePasswordVisibility} className='passIcon'/>
                    ) : (
                        <VisibilityOffIcon onClick={togglePasswordVisibility} className='passIcon'/>
                    )}
                </div>
                <div className="confirm-password-input-container">
                    <input type={confirmpasswordVisible ? "text" : "password"} placeholder="Confirm Password" />
                    {confirmpasswordVisible ? (
                        <VisibilityIcon onClick={toggleconfirmPasswordVisibility} className='passIcon'/>
                    ) : (
                        <VisibilityOffIcon onClick={toggleconfirmPasswordVisibility} className='passIcon'/>
                    )}
                </div>
                <button type="submit" onClick={()=> handleButtonClick('/signin_page')}>Sign up</button>
                <h3>Or</h3>
                <button className="google_btn" type="submit" onClick={()=> handleButtonClick('/home_page')} >Continue with google</button>
                <h4>Have an account?<a href="/signin_page">Log in</a></h4>
            </div>
            
        </div>
    )
}

export default Signup;