import React from "react";
import RotatingText from "../components/RotatingText/RotatingText";
import FileUploader from "../components/FileUploader";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 mt-12 min-h-screen pb-20">
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

      <FileUploader />
    </div>
  );
};


export default Home;
