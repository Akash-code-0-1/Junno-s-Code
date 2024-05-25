
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';

import Nav_bar from "../components/nav_bar";
import "../components/navbar.css";

function Home() {
    return (
        <div className="home_page">

            <Nav_bar />

            <div className="post">
                <div className="active_container">
                    <div className="profile_container">
                        <img src="./images/santi4.jpg" alt="" />
                        <h4>Santi</h4>
                    </div>

                    <div className="profile_container">
                        <img src="./images/akash.jpg" alt="" />
                        <h4>Akash</h4>
                    </div>

                    <div className="profile_container">
                        <img src="./images/tania1.jpg" alt="" />
                        <h4>Taniya</h4>
                    </div>

                    <div className="profile_container">
                        <img src="./images/tayeba.jpg" alt="" />
                        <h4>Tayeba</h4>
                    </div>

                    <div className="profile_container">
                        <img src="./images/suriya.jpg" alt="" />
                        <h4>Suriya</h4>
                    </div>

                    <div className="profile_container">
                        <img src="./images/junno.jpg" alt="" />
                        <h4>Junno</h4>
                    </div>

                </div>

                <div className="post_box">

                    <div className="profile_container">
                        <img src="./images/santi4.jpg" alt="" />

                    </div>

                    <input type="text" placeholder='Post your thought..' />
                    < AttachFileIcon className='atach_file' />



                </div>

                <div className="others_post">
                    <div className="people_post">

                        <img src="./images/tania1.jpg" alt="" />
                        <h4>Taniya</h4>
                        <h5>Active now</h5>

                        < MoreVertIcon className='more_icon_for_profile' />
                    </div>

                    <div className="contenten_container">
                        <h3>Journey through worlds, penned in pages.</h3>
                        <img src="./images/book.png" alt="" />

                    </div>

                    <div className="reaction">

                        <div className="love">
                            <FavoriteIcon className='loved_by' />
                            <h4>1.5K</h4>
                        </div>

                        <div className="comment">
                            <ChatBubbleIcon className='comment_by' />
                            <h4>198</h4>

                        </div>

                        <div className="share">
                            <ShareIcon className='shared_by' />
                            <h4>300</h4>

                        </div>

                    </div>
                </div>
            </div>

            <div className="right_container">

                <div className="thoughts">
                    <div className="slider">
                        <div className="sub_container1">

                            <div className="box" id='child1'>

                                <img src="./images/tania1.jpg" alt="" />
                                
                            </div>

                            <div className="profile_container">
                                <img src="./images/tania1.jpg" alt="" />
                            </div>

                        </div>

                        <div className="sub_container2">

                            <div className="box" id='child2'>

                            <img src="./images/child2.jpg" alt="" />
                               
                            </div>

                            <div className="profile_container">
                                <img src="./images/tayeba.jpg" alt="" />
                            </div>


                        </div>
                        <div className="sub_container3">

                            <div className="box" id='child3'>

                            <img src="./images/child3.jpg" alt="" />
                                
                            </div>

                            <div className="profile_container">
                                <img src="./images/akash.jpg" alt="" />
                            </div>

                        </div>


                        {/* <div className="box" id='child4'>
                            <h4>4</h4>
                        </div>
                        <div className="box" id='child5'>
                            <h4>5</h4>
                        </div> */}
                    </div>
                </div>

                <div className="ai">
                    {/* <div className="ai_icons_up">
                        <MinimizeIcon className='minimize' />
                        <CloseIcon className='close' />
                    </div> */}

                    <div className="mid_element">
                        <img src="./images/swiftui.png" alt="" />
                        <h2>Clear your doubt</h2>

                    </div>

                    <div className="last_elements">
                        <input type="text" placeholder='Enter your query...' />
                        <SendIcon className='ask_ai' />
                    </div>


                </div>

            </div>


        </div>
    )
};

export default Home;