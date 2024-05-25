import Nav_bar from "../components/nav_bar";
import Posts from "../components/posts";
import "../components/navbar.css";

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';

function Button({ onClick, buttonId, children }) {
    return <button onClick={() => onClick(buttonId)}>{children}</button>;
}
function Community() {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    }



    return (
        <div className="community_page">
            <Nav_bar />

            <div className="communities">

                <div className="search_box">
                    <input type="text" placeholder="Search your community..." />
                    <SearchIcon className="icon" />
                </div>

                <div className="community_type">

                    <div className="first" >

                        <Button onClick={handleButtonClick} buttonId={1}>Educational</Button>

                    </div>

                    <div className="second" >

                        <Button onClick={handleButtonClick} buttonId={2}>Others</Button>

                    </div>

                </div>

                <div className="cmn_identity">
                    {selectedButton === 1 && (
                        <div className="communities_name">

                            <div className="cmn" id="first_cmn">

                                <img src="./images/diu.png" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>DIU Community</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>

                            </div>

                            <div className="cmn">

                                <img src="./images/ju.jpg" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>JU Community</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>

                            </div>

                            <div className="cmn">

                                <img src="./images/du.jpg" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>DU community</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>

                            </div>

                            <div className="cmn">

                                <img src="./images/nsu.jpg" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>NSU Community</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>
                            </div>

                            <div className="cmn">

                                <img src="./images/city.png" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>City Community</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>
                            </div>

                            <div className="cmn">

                                <img src="./images/job.jpg" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>Jobs Update</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>

                            </div>

                            <div className="cmn">

                                <img src="./images/buet.jpg" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>BUET Community</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>

                            </div>
                            {/* <div className="cmn">

                                <img src="./images/santi2.jpg" alt="" />

                                <div className="message">

                                    <div className="group_name">
                                        <h3>61_M (DIU)</h3>
                                    </div>

                                    <div className="group_message">
                                        <h5>akash sent a emoji </h5>
                                    </div>

                                </div>

                            </div> */}


                        </div>
                    )}
                    {selectedButton === 2 && (
                        <div className="communities_name">
                            <div className="communities_name">

                                <div className="cmn" id="first_cmn">

                                    <img src="./images/akash.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>

                                </div>

                                <div className="cmn">

                                    <img src="./images/tania1.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>

                                </div>

                                <div className="cmn">

                                    <img src="./images/tania.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>

                                </div>

                                <div className="cmn">

                                    <img src="./images/santi4.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>
                                </div>

                                <div className="cmn">

                                    <img src="./images/suriya.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>
                                </div>

                                <div className="cmn">

                                    <img src="./images/tayeba.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>

                                </div>

                                <div className="cmn">

                                    <img src="./images/santi.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>

                                </div>
                                {/* <div className="cmn">

                                    <img src="./images/santi2.jpg" alt="" />

                                    <div className="message">

                                        <div className="group_name">
                                            <h3>61_M (DIU)</h3>
                                        </div>

                                        <div className="group_message">
                                            <h5>akash sent a emoji </h5>
                                        </div>

                                    </div>

                                </div> */}


                            </div>
                        </div>
                    )}
                </div>





            </div>

            {/* <Posts/> */}

            <div className="communities_post">

                <div className="cmn_posts">

                    <div className="cmn_post">

                        <div className="people_post">

                            <div className="imag">
                                <img src="./images/diu.png" />
                                <img className="person" src="./images/tania1.jpg" />
                            </div>

                            <div className="title">
                                <h4>DIU Community</h4>
                            </div>

                            <div className="description">
                                <h5>Suriya Akter . 3h ago</h5>
                            </div>

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

                    <div className="cmn_post">

                        <div className="people_post">

                            <div className="imag">
                                <img src="./images/ju.jpg" />
                                <img className="person" src="./images/santi4.jpg" />
                            </div>

                            <div className="title">
                                <h4>JU Community</h4>
                            </div>

                            <div className="description">
                                <h5>Shirajum Monira . 3h ago</h5>
                            </div>

                            < MoreVertIcon className='more_icon_for_profile' />
                        </div>

                        <div className="contenten_container">
                            <h3>Everything is Time Management.</h3>
                            <img src="./images/ju_post.jpg" alt="" />

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

                    <div className="cmn_post">

                        <div className="people_post">

                            <div className="imag">
                                <img src="./images/santi.jpg" />
                                <img className="person" src="./images/tania1.jpg" />
                            </div>

                            <div className="title">
                                <h4>Daffordil International University</h4>
                            </div>

                            <div className="description">
                                <h5>Tuhin Rana . 3h ago</h5>
                            </div>

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

                    <div className="cmn_post">

                        <div className="people_post">

                            <div className="imag">
                                <img src="./images/santi.jpg" />
                                <img className="person" src="./images/tania1.jpg" />
                            </div>

                            <div className="title">
                                <h4>Daffordil International University</h4>
                            </div>

                            <div className="description">
                                <h5>Tuhin Rana . 3h ago</h5>
                            </div>

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

                    <div className="cmn_post">

                        <div className="people_post">

                            <div className="imag">
                                <img src="./images/santi.jpg" />
                                <img className="person" src="./images/tania1.jpg" />
                            </div>

                            <div className="title">
                                <h4>Daffordil International University</h4>
                            </div>

                            <div className="description">
                                <h5>Tuhin Rana . 3h ago</h5>
                            </div>

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

                    <div className="cmn_post">

                        <div className="people_post">

                            <div className="imag">
                                <img src="./images/santi.jpg" alt="" />
                                <img className="person" src="./images/tania1.jpg" alt="" />
                            </div>

                            <div className="title">
                                <h4>Daffordil International University</h4>
                            </div>

                            <div className="description">
                                <h5>Tuhin Rana . 3h ago</h5>
                            </div>

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

                <div className="cmn_hot_topics">

                    <div className="updates_header">
                        <div className="heading">
                            <h3>Todays Updates</h3>
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
                            <img src="./images/du.jpg" alt="" />

                            <div className="context">
                                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
                            </div>

                            <div className="time">
                                <h6>10 min ago</h6>
                            </div>

                        </div>

                        <div className="updates">
                            <img src="./images/nsu.jpg" alt="" />

                            <div className="context">
                                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
                            </div>

                            <div className="time">
                                <h6>10 min ago</h6>
                            </div>

                        </div>

                        <div className="updates">
                            <img src="./images/buet.jpg" alt="" />

                            <div className="context">
                                <h5>DIU posted 🌐ড্যাফোডিল বিশ্ববিদ্যালয় শুধু একজন শিক্ষার্থীকে শিক্ষা প্রদান করে না,</h5>
                            </div>

                            <div className="time">
                                <h6>10 min ago</h6>
                            </div>

                        </div>

                        <div className="updates">
                            <img src="./images/city.png" alt="" />

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
                            <img src="./images/ju.jpg" alt="" />

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
                            <img src="./images/du.jpg" alt="" />

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
                            <img src="./images/diu.png" alt="" />

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




                    </div>

                </div>


            </div>


        </div>
    )
}

export default Community;