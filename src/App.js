import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/menu";

import { MenuContextProvider } from "./contexts/menuContext";

import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import Library from "./pages/library";
import History from "./pages/history";
import MyVideos from "./pages/myvideos";
import Later from "./pages/later";
import Liked from "./pages/liked";
import Trend from "./pages/trend";
import Shopping from "./pages/shopping";
import Music from "./pages/music";
import Movies from "./pages/movies";
import Live from "./pages/live";
import Gaming from "./pages/gaming";
import News from "./pages/news";
import Sports from "./pages/sports";
import Learn from "./pages/learn";
import Configuration from "./pages/config";
import Denunciation from "./pages/denunciation";
import Help from "./pages/help";
import Feedback from "./pages/feedback";
import Login from "./pages/login";
import { UserStorage } from "./contexts/userContext";
        

function App() {

  return (
    <UserStorage>
      <BrowserRouter>
        <MenuContextProvider>
          <Header />
          <div style={{width: '100%', display: 'flex'}}>
            <Sidebar />
            <div style={{width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center'}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/myvideos" element={<MyVideos />} />
                <Route path="/later" element={<Later />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="/trend" element={<Trend />} />
                <Route path="/shopping" element={<Shopping />} />
                <Route path="/music" element={<Music />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/live" element={<Live />} />
                <Route path="/gaming" element={<Gaming />} />
                <Route path="/news" element={<News />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/configuration" element={<Configuration />} />
                <Route path="/denunciation-history" element={<Denunciation />} />
                <Route path="/help" element={<Help />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </div>
          </div>
        </MenuContextProvider>
      </BrowserRouter>
    </UserStorage>
    
  );
}

export default App;