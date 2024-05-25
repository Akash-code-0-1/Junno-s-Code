import Nav_bar from "../components/nav_bar";
import "../components/navbar.css";


import CallIcon from '@mui/icons-material/Call';
import DuoIcon from '@mui/icons-material/Duo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';


import { useState } from 'react';

function Message() {

    const [showChatbot, setShowChatbot] = useState(false);

    const ToggleEvent = () => {
        setShowChatbot(!showChatbot);
    };


    return (
        <div className="message_page">

            <Nav_bar />

            <div className="chat_box">

                <div className="personal_container">

                    <h4>Personal</h4>

                    <div className="person">

                        <img src="./images/akash.jpg" alt="" />

                        <div className="message">

                            <h3>Akash</h3>

                            <h5>ki koro,,,basay asba kokhon?</h5>


                        </div>

                    </div>

                    <div className="person">

                        <img src="./images/tania1.jpg" alt="" />

                        <div className="message">
                            <h3>Taniya</h3>

                            <h5>apo ami kalke tor basay jabo,,, ready thakis.</h5>

                        </div>

                    </div>

                    <div className="person">

                        <img src="./images/tayeba.jpg" alt="" />

                        <div className="message">

                            <h3>Suriya</h3>

                            <h5>mami,,, kmn aacho?</h5>

                            <div className="unread_msg">
                                3
                            </div>

                        </div>

                    </div>

                </div>

                <div className="group_container">

                    <h4>Groups</h4>

                    <div className="group">

                        <img src="./images/frnd.jpg" alt="" />

                        <div className="message">

                            <div className="group_name">
                                <h3>SSC _ 2018</h3>
                            </div>

                            <div className="group_message">
                                <h5>ki obostha sobar? </h5>
                            </div>

                        </div>

                    </div>

                    <div className="group">

                        <img src="./images/frnd2.jpg" alt="" />

                        <div className="message">

                            <div className="group_name">
                                <h3>Friends Forever</h3>
                            </div>

                            <div className="group_message">
                                <h5 id="unread">tui valo hoye ja ,,,, naile tmr aam o jabe chala ta o jabaaaa.... </h5>
                            </div>

                            <div className="unread_msg">
                                8
                            </div>


                        </div>

                    </div>

                    <div className="group">

                        <img src="./images/m.jpg" alt="" />

                        <div className="message">

                            <div className="group_name">
                                <h3>61_M (DIU)</h3>
                            </div>

                            <div className="group_message">
                                <h5>akash sent a emoji </h5>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

            <div className="chat">

                <div className="message_with">

                    <div className="profile_container">
                        <img src="./images/santi4.jpg" alt="" />
                    </div>

                    <div className="person_name">
                        <h3>Taniya Akter</h3>
                    </div>
                    <div className="person_status">
                        <h3>Online</h3>
                    </div>

                    <div className="com_medium">
                        <CallIcon className="icon" />
                        <DuoIcon className="icon" />
                        <MoreVertIcon className="icon" />
                    </div>

                </div>

                <div className="day">
                    <h6>Today</h6>
                </div>

                <div className="you">

                    <h5>Hi there. How are you</h5>
                    <h6>8:00 PM</h6>

                </div>

                <div className="me">

                    <h5>I am great. Thanks!</h5>
                    <h6>8:02 PM</h6>


                </div>

                <div className="you">

                    <h5>Can you send me mnewest work schedule?</h5>
                    <h6>8:05 PM</h6>

                </div>

                <div className="me">

                    <h5>Okay, give me some time to make a schedule for you</h5>
                    <h6>8:02 PM</h6>

                </div>

                <div className="you">

                    <h5>Okay, take your time.</h5>
                    <h6>8:10 PM</h6>

                </div>

                <div className="me">

                    <h5>Thanks for being cooperative!</h5>
                    <h6>8:02 PM</h6>

                </div>

                <div className="input_box">


                    <input type="text" placeholder="Enter your message..." />
                    <AttachFileIcon className="attach_file_icon" />
                    <SendIcon className="send_message" />

                    <div className="msg_icons">


                        <img
                            src="./images/swiftui.png"
                            alt=""
                            onClick={ToggleEvent}
                            style={{ filter: showChatbot ? 'invert(100%)' : 'none' }}
                        />

                        <KeyboardVoiceIcon className="icon" />

                    </div>

                    {showChatbot && (

                        <div className="chatbot_container">

                            {/* <div className="ai_icons_up">
                                <MinimizeIcon className='minimize' />
                                <CloseIcon className='close' />
                            </div> */}

                            <div className="mid_element">
                                <img src="./images/swiftui.png" alt="" />
                                <h2>Clear your doubt</h2>

                            </div>

                            {/* <div className="last_elements">
                                <input type="text" placeholder='Enter your query...' />
                                <SendIcon className='ask_ai' />
                            </div> */}

                        </div>
                    )}

                </div>



            </div>

        </div>
    )
}

export default Message;