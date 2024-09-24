import React from "react";
import { motion } from "framer-motion";

const ThreeImages = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between overflow-hidden">
      {/* Left Image */}
      <motion.div
        className="relative h-full w-1/2"
        initial={{ width: "50%" }} // Start with 50% width
        whileHover={{ width: "70%" }} // Expands to 70% on hover
        transition={{
          duration: 0.8, // Smooth transition
          ease: [0.25, 0.46, 0.45, 0.94], // Easing for animation
        }}
      >
        <img
          src="https://newsroom.cdn.bugatti-media.com/0f204a25-28ba-482e-a2ab-630d3986e796/original"
          alt="Left Image"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <span className="text-white text-2xl">Bugatti Image</span>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative h-full w-1/2"
        initial={{ width: "50%" }} // Start with 50% width
        whileHover={{ width: "70%" }} // Expands to 70% on hover
        transition={{
          duration: 0.8, // Smooth transition
          ease: [0.25, 0.46, 0.45, 0.94], // Easing for animation
        }}
      >
        <img
          src="https://rossoautomobili.com/cdn/shop/articles/Ferrari_SF90_XX_-_Fiorano_4.jpg?v=1700067961"
          alt="Right Image"
          className="w-full h-full object-cover "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <span className="text-white text-2xl">Ferrari Image</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ThreeImages;
