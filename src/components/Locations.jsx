import React, { useState, useEffect, useRef } from "react";
import Sticky from "react-stickynode";

const Locations = () => {
  const images = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
      heading: "Nilgiri",
      description: "Beautiful Nilgiri Mountains",
    },
    {
      id: 2,
      src: "https://img.freepik.com/premium-photo/super-zoom-macro-shot-vibrant-flower-showcasing-rich-colors-exquisite-detail_493325-12162.jpg",
      heading: "Floral Bliss",
      description: "A stunning view of floral colors",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      heading: "Forest View",
      description: "Serene Forest Landscape",
    },
    {
      id: 4,
      src: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
      heading: "Nature's Beauty",
      description: "A beautiful nature scene",
    },
    {
      id: 5,
      src: "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
      heading: "Futuristic Look",
      description: "AI technology and innovation",
    },
  ];

  const [activeImage, setActiveImage] = useState(0); // Track active image index
  const imageRefs = useRef([]); // Store refs to each image

  // Use IntersectionObserver to track which image is currently visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setActiveImage(index); // Update the active image when it comes into view
          }
        });
      },
      { threshold: 0.7 } // Adjust threshold to when 70% of the image is visible
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    // Cleanup observer on component unmount
    return () => {
      imageRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className="w-full h-[500vh]">
      <div className="w-full flex h-full relative items-start p-5 gap-6">
        {/* Left Image Section */}
        <div className="w-2/3 h-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="h-[98vh] mb-6"
              data-index={index}
              ref={(el) => (imageRefs.current[index] = el)} 
            >
              <img
                src={image.src}
                alt={image.heading}
                className="w-full h-full rounded-lg object-cover shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Right Sticky Section */}
        <div className="w-1/3 py-5">
          <Sticky top={10} className="w-full">
            <div className="w-full h-[98vh] bg-white rounded-xl shadow-lg z-10 flex flex-col items-start justify-between gap-6 p-8">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold text-gray-800">
                  {images[activeImage].heading}
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                  {images[activeImage].description}
                </p>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ullam vel placeat, natus corrupti earum laudantium
                  mollitia voluptatibus id molestias accusantium dignissimos
                  asperiores minus animi beatae porro quo aut culpa deserunt
                  nulla temporibus ab est quod! Recusandae impedit animi libero
                  repellendus, unde quaerat iure provident quae soluta,
                  voluptatem odit minima.
                </p>
              </div>

              {/* Scrollable Headings */}
              <div className="flex overflow-x-scroll justify-between w-full gap-6 pb-6">
                {images.map((image, index) => (
                  <h1
                    key={image.id}
                    className={`text-md whitespace-nowrap text-gray-700 ${
                      activeImage === index ? "font-bold text-gray-900" : ""
                    }`}
                  >
                    {index + 1}. {image.heading}
                  </h1>
                ))}
              </div>
            </div>
          </Sticky>
        </div>
      </div>
    </div>
  );
};

export default Locations;
