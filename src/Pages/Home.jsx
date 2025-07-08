import React from "react";
import RotatingText from "../components/RotatingText/RotatingText";
// import CountUp from "../components/CountUp/CountUp";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 mt-12">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 md:flex gap-4">
        Enhancing{" "}
        <RotatingText
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

      <p className="md:text-2xl mb-12">
        Changing your Simple PDF into Professional Latex Resume.
      </p>

      {/* Optional CountUp Block */}
      {/* 
      <div className="countbox text-5xl font-bold h-40 w-70 bg-black text-white rounded-xl flex items-center justify-center">
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        +
      </div> 
      */}

      {/* Optional CTA Button */}
      {/* 
      <button className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition">
        Get Started
      </button>
      */}
    </div>
  );
};

export default Home;
