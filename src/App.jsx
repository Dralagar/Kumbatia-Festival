// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import About from "./pages/About";
import Programming from "./pages/Programming";
import Partners from "./pages/Partners";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import KumbatiaLogo from "../src/assets/KumbatiaLogo.jpg";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <div>
        {/* Use the NavBar component here */}
        <NavBar
          isOpen={isOpen}
          toggleNavbar={toggleNavbar}
          isAuth={isAuth}
          signUserOut={signUserOut}
        />
        <Routes>
          <Route path="/Home" element={<KumbatiaLogo />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
