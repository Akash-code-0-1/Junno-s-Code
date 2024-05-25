import React, { useEffect, useState } from 'react';
import '../App.css';

function Welcome() {
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            setRedirectToLogin(true);
        }, 5000); 

        return () => clearTimeout(redirectTimeout); 
    }, []);

    useEffect(() => {
        if (redirectToLogin) {
            window.location.href = '/signin_page';
        }
    }, [redirectToLogin]);

    return (
        <div className='logo'>
            <img src="./images/logo_junno.jpg" alt="" />
        </div>
    );
}


export default Welcome;

