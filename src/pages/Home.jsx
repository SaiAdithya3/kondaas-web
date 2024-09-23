import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TextRevealByWord from "../components/TextRevealByWord";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="z-10 flex items-center justify-center ">
        <TextRevealByWord text="It's time to do something good for your wallet and the Earth." />
      </div>
    </>
  );
};

export default Home;
