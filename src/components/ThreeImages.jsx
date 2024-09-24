import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "../assets/image.png";

const ThreeImages = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], 
  });

  const leftDivWidth = useTransform(scrollYProgress, [0, 1], ["50%", "1rem"]); 
  const rightDivWidth = useTransform(scrollYProgress, [0, 1], ["50%", "1rem"]);

  return (
    <div className="h-[200vh] relative ">
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full z-20 h-screen flex items-center justify-between"
      >
        <motion.div
          style={{ width: leftDivWidth }}
          className="relative h-full flex bg-red-200 items-center justify-center
          bg-[url(https://newsroom.cdn.bugatti-media.com/0f204a25-28ba-482e-a2ab-630d3986e796/original)]
          bg-cover bg-center bg=
          "
          whileHover={{ width: "70%" }} 
        >
          <span className="absolute top-1/2 left-1/3 text-3xl text-white">Left</span>
          {/* <img src="" alt="Image" className="h-full w-full object-cover" /> */}
        </motion.div>

        {/* Right Div */}
        <motion.div
          style={{ width: rightDivWidth }}
          className="relative h-full flex bg-blue-200 items-center justify-center
          bg-[url(https://rossoautomobili.com/cdn/shop/articles/Ferrari_SF90_XX_-_Fiorano_4.jpg?v=1700067961)]
          
          bg-cover bg-center"
          whileHover={{ width: "70%" }} 
        >
          {/* <img src="https://rossoautomobili.com/cdn/shop/articles/Ferrari_SF90_XX_-_Fiorano_4.jpg?v=1700067961" alt="Image" className="h-full w-full object-cover" /> */}
          <span className="absolute top-1/2 left-1/2 text-3xl text-white">Right</span>
        </motion.div>
      </div>
      <div className="sticky h-screen bg-green-200 top-0 left-0 w-full">
        <img src={image} alt="Image" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ThreeImages;
