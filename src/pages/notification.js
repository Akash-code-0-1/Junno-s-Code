import Nav_bar from "../components/nav_bar";
import Posts from "../components/posts";
import "../components/navbar.css";


import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



function Notification (){
    return (
        <div className="notification_page">
            <Nav_bar/>

            <div className="notification_box">
                <div className="notification_header">
                    <h3>Notifications</h3>
                    <MoreHorizIcon className='Iconmore' />
                </div>
            </div>

            <Posts/>
        </div>
    )
}

export default Notification;