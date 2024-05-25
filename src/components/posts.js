
import "../components/posts.css";

function Posts() {
    return (
        <div className="post">
        <div className="active_container">
            <div className="profile_container">
                <img src="./images/profile.JPG" alt="" />
                <h4>Akash</h4>
            </div>

            <div className="profile_container">
                <img src="./images/profile.JPG" alt="" />
                <h4>Akash</h4>
            </div>

            <div className="profile_container">
                <img src="./images/profile.JPG" alt="" />
                <h4>Akash</h4>
            </div>

            <div className="profile_container">
                <img src="./images/profile.JPG" alt="" />
                <h4>Akash</h4>
            </div>

            <div className="profile_container">
                <img src="./images/profile.JPG" alt="" />
                <h4>Akash</h4>
            </div>

            <div className="profile_container">
                <img src="./images/profile.JPG" alt="" />
                <h4>Akash</h4>
            </div>

        </div>

        <div className="post_box">

            <div className="profile_container">
                <img src="./images/profile.JPG" alt="" />
            </div>

            <input type="text" placeholder='Post your thought..' />

        </div>

        <div className="others_post">
            <div className="people_post">

            </div>
            <div className="contenten_container">

            </div>
            <div className="reaction">

            </div>
        </div>
    </div>

    );
}

export default Posts;