import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const cards = [
    {
      title: "Residential & Commercial Solar",
      description: "Harness the power of the sun for both homes and businesses.",
      image:
        "https://s3-alpha-sig.figma.com/img/7a91/a3ad/d6979f42aa1cf212331d3d4a4569ed5d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWLFVzFZQQnD0wkYwJqh69yoFBT-G0uFl9GXUVwN8awlKORAkKZZ3WESeVZe--3LUBVz8g-b0YQUwImRDR1Hn~MfI-EkgReG-0NR5Jx5O7hEKpoLhoVvRtiVLdcSSGrNaa7d166zAvTfyJ3kPQocgnXVS0cc78xhtq3uH8NgDOfgVEDgiYAba0LPhU2XmML6oeDDtXOHEoPVePwnCZybqduOYViYCUWOABbE3veKrGkDxPQIK50gbSGLdpVPa1OzPtXQw9TDFZ-lb9rsPvALa0AagHKLAoPImM1yaGgPoUOVBguZdbYNqtcvPlSNzdF1BKlG42hpy4ytgSR9shVcGQ__",
    },
    {
      title: "Industrial Solar",
      description: "Power your industry with clean, renewable energy.",
      image:
        "https://s3-alpha-sig.figma.com/img/31e0/7784/c58252891ba206c49e42b633d99f635c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGK5duM9mfiO5WQk~BePUTC9YAoI9B1439xTswiHLqJpT5E7wZQ~LCX22gdODoFA9sBYW6fClJ-JpZTzctFFeFLm052icSpY9DM3G2bPiHDGGQqhOzK7Eli4~9mCAwgIfeNBrAAs4bhH0x5g~xC6bBVtwttNWZucABxKI4LOg2dqlnHHzYI3BOSj83DhY5be4a-n28DSW7G82QoDXNqGx6rcmJiiI6RJj5uGSni-RpIFeX2mddXjl3~6G-i3XKWRqGdDK2fKoPwVRTkQ5YuzxGbi94ByILvaN6PNpv4fBOL~~4gCoeVyJI~MNpAvvH-DAUHP2jNcJ2z93X6xuisC2Q__",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselDuration = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, carouselDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 w-full flex h-screen tems-center justify-center">

    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        {cards.map((card, index) => (
            index === currentIndex && (
                <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                >
              <div
                className="h-full w-full bg-cover rounded-3xl bg-center flex flex-col items-center justify-center text-white"
                style={{
                    backgroundImage: `url(${card.image})`,
                }}
                >
                <div className="bg-black w-full h-full bg-opacity-50 flex items-start justify-end flex-col p-16 rounded-lg">
                  <h1 className="text-5xl font-bold mb-4">{card.title}</h1>
                  <p className="text-xl w-1/2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae possimus repudiandae sapiente consequatur obcaecati voluptate, odit repellat aliquid molestiae excepturi temporibus quasi consequuntur recusandae laudantium! Error, obcaecati sed? Architecto, nam.</p>
                  <button className="bg-zinc-50 text-black hover:bg-zinc-200 transition-all font-semibold py-2 px-8 rounded-3xl">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
        </div>
  );
};

export default Carousel;
