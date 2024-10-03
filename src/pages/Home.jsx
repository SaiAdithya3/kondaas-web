import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TextRevealByWord from "../components/TextRevealByWord";
import ThreeImages from "../components/ThreeImages";
import Locations from "../components/Locations";
import Carousel from "../components/Carousel";
import Groups from "../components/Groups";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="z-10 flex items-center justify-center ">
        <TextRevealByWord text="It's time to do something good for your wallet and the Earth." />
      </div>
      <ThreeImages />
      <div className="z-10 flex items-center justify-center ">
        <TextRevealByWord text="2000 Happy Customers who trusted us." />
      </div>
      <Locations />
      <div className="z-10 flex items-center justify-center ">
        <TextRevealByWord text="2000 Happy Customers who trusted us." />
      </div>
      <Carousel />
      <Groups />
    </>
  );
};

export default Home;
