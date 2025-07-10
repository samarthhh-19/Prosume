import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Squares from "./components/Squares/Squares";
import Dock from "./components/Dock/Dock";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import RotatingText from './components/RotatingText/RotatingText';

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Github from "./Pages/Github";
import Security from "./pages/Security";

import "./App.css";

const AppContent = () => {
  const navigate = useNavigate();

  const dockItems = [
    {
      icon: <HiOutlineHome className="text-black text-2xl" />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: <CgProfile className="text-black text-2xl" />,
      label: "Profile",
      onClick: () => navigate("/profile"),
    },
    {
      icon: <FaGithub className="text-black text-2xl" />,
      label: "Github",
      onClick: () => navigate("/github"),
    },
    {
      icon: <GrSecure className="text-black text-2xl" />,
      label: "Why us?",
      onClick: () => navigate("/security"),
    },
  ];

  return (
    <div className="min-h-screen w-screen relative overflow-x-hidden overflow-y-auto">
      <Squares speed={0.1} squareSize={35} direction="diagonal" borderColor="rgba(6, 6, 6, 0.03)" hoverFillColor="white" />

      <div className="absolute inset-0 z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/github" element={<Github />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
        <Dock items={dockItems} panelHeight={78} baseItemSize={60} magnification={80} />
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
