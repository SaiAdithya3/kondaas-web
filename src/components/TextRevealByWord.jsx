"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null); 

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" "); 

  return (
    <div
      ref={targetRef}
      className={`relative z-0 h-[150vh] ${className || ""}`}
    >
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          className={
            "flex flex-wrap p-5 text-2xl items-center justify-center font-bold text-[#FF0001]/20 md:p-8 md:text-3xl lg:p-10 lg:text-5xl xl:text-6xl"
          }
        >
          {/* Map through words and apply animation */}
          {words.map((word, i) => {
            const start = i / words.length; 
            const end = start + 1 / words.length; 
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-90"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }} // Apply dynamic opacity
        className={"text-[#930000] "}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
