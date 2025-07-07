import React from "react";
import Squares from "./components/Squares/Squares";
import Dock from "./components/Dock/Dock";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import CountUp from "./components/CountUp/CountUp";

import RotatingText from './components/RotatingText/RotatingText';

import "./App.css";

const App = () => {
  const dockItems = [
    {
      icon: <HiOutlineHome className="text-black text-2xl" />,
      label: "Home",
      onClick: () => alert("Home clicked"),
    },
    {
      icon: <CgProfile className="text-black text-2xl" />,
      label: "Profile",
      onClick: () => alert("Profile clicked"),
    },
    {
      icon: <FaGithub className="text-black text-2xl" />,
      label: "Github",
      onClick: () => alert("Github clicked"),
    },
    {
      icon: <GrSecure className="text-black text-2xl" />,
      label: "Why us?",
      onClick: () => alert("Secure clicked"),
    },
  ];

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-white">
      {/* Background: Squares */}
      <Squares
        speed={0.1}
        squareSize={35}
        direction="diagonal"
        borderColor="rgba(6, 6, 6, 0.03)"
        hoverFillColor="white"
      />

      {/* Main content (headings, features) */}
      <div className="absolute inset-0 flex flex-col items-center z-10 text-center px-4 mt-12">
        {/* <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 drop-shadow-lg">
          Welcome to My Site
        </h1>

        <RotatingText
          className="text-2xl md:text-4xl font-medium text-neutral-700"
          words={["Fast.", "Secure.", "Innovative."]}
          interval={1500}
        />

        <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-xl">
          Explore features, learn about our services, and join our community.
        </p>

        <button className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button> */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 md:flex gap-4">Enhancing <RotatingText
              texts={['Resume!', 'Experience!', 'Chances!', 'Potential!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
              />
        </h1>
        <p className="md:text-2xl mb-30">Changing your Simple PDF into Professional Latex Resume.</p>

        {/* <div className="countbox text-5xl font-bold h-40 w-70 bg-black text-white rounded-xl flex items-center justify-center">
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            +
        </div>  */}
      </div>

      {/* Fixed navigation Dock on top */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
        <Dock
          items={dockItems}
          panelHeight={78}
          baseItemSize={60}
          magnification={80}
        />
      </div>
    </div>
  );
};

export default App;
