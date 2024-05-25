import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Signin() {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleButtonClick = (page) => {
        navigate(page);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="signin_page">
            <div className="container">
                <img src="./images/logo_junno.jpg" alt="" />
                <input type="text" placeholder="Username or email"/>
                <div className="password-input-container">
                    <input type={passwordVisible ? "text" : "password"} placeholder="Password" />
                    {passwordVisible ? (
                        <VisibilityIcon onClick={togglePasswordVisibility} className='passIcon'/>
                    ) : (
                        <VisibilityOffIcon onClick={togglePasswordVisibility} className='passIcon'/>
                    )}
                </div>
                <button type="submit" onClick={() => handleButtonClick('/home_page')}>Login</button>
                <h3>Or</h3>
                <button className="google_btn" type="submit" onClick={() => handleButtonClick('/home_page')}>Continue with google</button>
                <h4>Don't have an account?<a href="/signup_page">Sign up</a></h4>
                <h5>Forgot password?</h5>
            </div>
        </div>
    )
}

export default Signin;
