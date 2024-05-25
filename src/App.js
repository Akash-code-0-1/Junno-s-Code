import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home_page";
import "./App.css";
import Welcome from "./pages/welcome_page";
import Signup from "./pages/signup_page";
import Message from "./pages/message_page";
import Profile from "./pages/profile_page";
import Signin from "./pages/signin_page";
import Reading_Mode from "./pages/readingMode_page";
import Business from "./pages/bussiness_page";
import Ai from "./pages/Ai_page";
import Community from "./pages/community_page";
import Notification from "./pages/notification";

// import Signin from "./pages/signin_page";
// import Signup from "./pages/signup_page";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome />} />
                    <Route path="/signin_page" element={<Signin />} />
                    <Route path="/signup_page" element={<Signup />} />
                    <Route path="/home_page" element={<Home />} />
                    <Route path="/message_page" element={<Message />} />
                    <Route path="/profile_page" element={<Profile />} />
                    <Route path="/community_page" element={<Community />} />
                    <Route path="/notification_page" element={<Notification/>} />
                    <Route path="/readingMode_page" element={<Reading_Mode/>} />
                    <Route path="/business_page" element={<Business />} />
                    <Route path="/ai_page" element={<Ai />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;