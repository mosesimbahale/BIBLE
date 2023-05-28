import "./App.css";

import { Routes, Route } from "react-router-dom";

//AUTH
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";


//LANDING
import Home from "./pages/landing/Home";
import Lounge from "./pages/landing/Lounge";
import HolyBible from "./pages/landing/HolyBible";
import HymnBook from "./pages/landing/HymnBook";




function App() {
  return (
    <div className="App">
      <Routes>

        {/* AUTH */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* LANDING */}
        <Route path="/" element={<Home />} />
        <Route path="/lounge" element={<Lounge />} />
        <Route path="/The-Holy-Bible" element={<HolyBible />} />
        <Route path="/Hymn-Book" element={<HymnBook />} />
      </Routes>
    </div>
  );
}

export default App;
