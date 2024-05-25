import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CampaignIcon from '@mui/icons-material/Campaign';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Business() {

    const navigate = useNavigate();

    const handleIconClick = (page) => {
        navigate(page);
    };

    return (
        <div className="business_page">

            <div className="nav_bar">

                <h1>BD</h1>


                <li><HomeIcon className='Icons' onClick={() => handleIconClick('/home_page')} /></li>
                <li><BusinessCenterIcon className='Icons' onClick={() => handleIconClick('/home_page')} /></li>
                <li><CampaignIcon className='Icons' onClick={() => handleIconClick('/home_page')} /></li>
                <li><AnalyticsIcon className='Icons' onClick={() => handleIconClick('/home_page')} /></li>
                <li><MarkUnreadChatAltIcon className='Icons' onClick={() => handleIconClick('/home_page')} /></li>
                <li><NotificationsActiveIcon className='Icons' onClick={() => handleIconClick('/home_page')} /></li>

                <div className="business_profile_container">
                    <img src="./images/profile.JPG" alt="" />
                </div>









            </div>
            
            <div className="content">

            </div>
        </div>
    )
}

export default Business;