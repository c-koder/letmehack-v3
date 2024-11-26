"use client"; // This tells Next.js that this component should be rendered on the client side

import { useState } from "react";
import Image from "next/image";

const GalleryShowcase = () => {
  const images = [
    { src: "/img/gallery-1.jpg", desc: "Event 1 Description" },
    { src: "/img/gallery-2.jpg", desc: "Event 2 Description" },
    { src: "/img/gallery-3.jpg", desc: "Event 3 Description" },
    { src: "/img/gallery-4.jpg", desc: "Event 4 Description" },
    { src: "/img/gallery-5.jpg", desc: "Event 5 Description" },
    { src: "/img/gallery-6.jpg", desc: "Event 6 Description" },
    { src: "/img/gallery-7.jpg", desc: "Event 7 Description" },
    { src: "/img/gallery-8.jpg", desc: "Event 8 Description" },

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-full py-20 bg-fixed bg-cover">
      <h1 className="text-white font-montserrat lg:text-[80px] text-[35px] font-semibold leading-[130%] uppercase  pb-10 pt-1">
        Memories
      </h1>
      <div className="bg-[rgba(31,56,39,0.76)] border border-white rounded-2xl  shadow-[0px_1px_2px_0px_rgba(239,232,232,0.40)] backdrop-blur-[15px]    flex-shrink-0 pb-10">
        <h2 className="w-[375px] h-[21px] flex-shrink-0 text-white font-montserrat text-[17px] font-semibold leading-[130%] uppercase mt-30 pt-4 pb-8 text-center">
          Special events in let me hack
        </h2>

        {/* Mobile slideshow layout */}
        <div className=" flex flex-col items-center justify-center w-full h-[200px] p-2">
          <div className="relative w-full h-[270px] mt-[50px]">
            <Image
              src={images[currentImageIndex].src}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <p className="text-white text-center mt-3 font-montserrat text-[14px] leading-[130%]">
            {images[currentImageIndex].desc}
          </p>

          {/* Slideshow navigation buttons */}
          <div className="absolute left-0 transform -translate-y-1/2 top-2/3">
            <button
              onClick={prevImage}
              className="text-white text-2xl font-semibold p-4 bg-[rgba(31,56,39,0.76)] rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out"
            >
              &#8592;
            </button>
          </div>

          <div className="absolute right-0 transform -translate-y-1/2 top-2/3">
            <button
              onClick={nextImage}
              className="text-white text-2xl font-semibold p-4 bg-[rgba(31,56,39,0.76)] rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default GalleryShowcase;
