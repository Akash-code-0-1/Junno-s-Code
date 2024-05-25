import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SchoolIcon from '@mui/icons-material/School';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import LightModeIcon from '@mui/icons-material/LightMode';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsIcon from '@mui/icons-material/Settings';

import "../components/navbar.css";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  // to navigate to the another page onClick
  const navigate = useNavigate();

  const handleIconClick = (page) => {
    navigate(page);
  };

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };


  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };


  const [showSearch, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!showSearch);
  };




  return (
    <div className="navbar">
      <div className="profile_container">
        <img src="./images/santi4.jpg" alt="" />
      </div>
      <div className="icon_container" onClick={() => handleIconClick('/home_page')}>
        <HomeIcon className='Icons' />
      </div>

      <div className="icon_container" onClick={() => handleIconClick('/message_page')}>

        <ChatIcon className='Icons' />

      </div>

      <div className="icon_container" onClick={() => handleIconClick('/community_page')}>

        <GroupsIcon className='Icons' />

      </div>

      {/* <div className="icon_container" onClick={() => handleIconClick('/business_page')}>
        <DashboardIcon className='Icons' />

      </div> */}

      <div className="icon_container" onClick={toggleNotifications}>
        <NotificationsIcon className='Icons' />
      </div>

      {showNotifications && (

        <div className="notifications_container">

          <div className="updates_header">

            <div className="heading">
              <h3>Notifications</h3>
              <MoreHorizIcon className="icn" />

            </div>

            <div className="buttons">
              <button>All</button>
              <button>Unread</button>
            </div>
          </div>

          <div className="updates_container">

            <div className="updates">

              <img src="./images/diu.png" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/santi.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/santi2.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/santi4.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/suriya.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/diu.png" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/tania.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/ju.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/du.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/job.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/tayeba.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

            <div className="updates">
              <img src="./images/santi.jpg" alt="" />

              <div className="context">
                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
              </div>

              <div className="time">
                <h6>10 min ago</h6>
              </div>

            </div>

          </div>


        </div>
      )}

      <div className="icon_container" onClick={() => handleIconClick('/readingMode_page')}>
        <SchoolIcon className='Icons' />

      </div>

      <div className="icon_container" onClick={toggleSearch}>
        <SearchIcon className='Icons' />
      </div>

      {showSearch && (

        <div className="search_container">
          <div className="search_box">
            <input type="text" placeholder="Search your community..." />
            <SearchIcon className="icon" />
          </div>
          <div className="search_history">
            <h4>Recent</h4>
            <hr />
            <div className="searched_by">
              <h3>DIU sports club</h3>
              <ClearIcon className='Icon_close' />
            </div>
          </div>
        </div>
      )}

      <div className="icon_container" onClick={toggleOptions}>
        <MoreHorizIcon className='Iconmore' />

      </div>

      <div className="icon_container">
        <LogoutIcon className='Iconlogout' />
      </div>


      {showOptions && (

        <div className="options_container">
          <div className="options" onClick={() => handleIconClick('/business_page')}>
            <BusinessCenterIcon className='more_icons' />
            <h6>Business</h6>
          </div>
          <div className="options">
            <LightModeIcon className='more_icons' />
            <h6>Change Mode</h6>
          </div>
          <div className="options">
            <SettingsIcon className='more_icons' />
            <h6>Settings</h6>
          </div>
        </div>
      )}



    </div>
  );
}

export default NavBar;
