import React from "react";
import { motion } from "framer-motion";

const ThreeImages = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between">
      {/* Left Image */}
      <motion.div
        className="relative h-full w-1/2 bg-red-200 bg-cover bg-center"
        // style={{
        //   backgroundImage: "url(https://newsroom.cdn.bugatti-media.com/0f204a25-28ba-482e-a2ab-630d3986e796/original)",
        // }}
        whileHover={{ width: "70%" }} // Expands to 70% on hover
      >
        <img src="https://newsroom.cdn.bugatti-media.com/0f204a25-28ba-482e-a2ab-630d3986e796/original" alt="Image" className="w-full h-full object-cover "/>
        {/* <span className="absolute top-1/2 left-1/3 text-3xl text-white">Left</span> */}
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative h-full w-1/2 bg-blue-200 bg-cover bg-center"
        // style={{
        //   backgroundImage: "url(https://rossoautomobili.com/cdn/shop/articles/Ferrari_SF90_XX_-_Fiorano_4.jpg?v=1700067961)",
        // }}
        whileHover={{ width: "70%" }} // Expands to 70% on hover
      >
        <img src="https://rossoautomobili.com/cdn/shop/articles/Ferrari_SF90_XX_-_Fiorano_4.jpg?v=1700067961" alt="" className="w-full h-full object-cover" />
        {/* <span className="absolute top-1/2 left-1/2 text-3xl text-white">Right</span> */}
      </motion.div>
    </div>
  );
};

export default ThreeImages;
