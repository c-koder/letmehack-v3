"use client"; // This tells Next.js that this component should be rendered on the client side

import { useState } from "react";
import Image from "next/image";

const GalleryShowcase = () => {
  const images = [
    { src: "/image/1.jpg", desc: "Event 1 Description" },
    { src: "/image/2.jpg", desc: "Event 2 Description" },
    { src: "/image/3.jpg", desc: "Event 3 Description" },
    { src: "/image/4.png", desc: "Event 4 Description" },
    { src: "/image/5.png", desc: "Event 5 Description" },
    { src: "/image/6.png", desc: "Event 6 Description" }
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
    <div className="bg-[rgba(1,38,13,0.97)] min-h-screen min-w-full flex flex-col justify-center items-center bg-cover bg-fixed">
      <h1 className="text-white font-montserrat text-[80px] font-semibold leading-[130%] uppercase mb-50 pb-[170px]">
        Memories
      </h1>

      <div className="bg-[rgba(31,56,39,0.76)] border border-white rounded-[45px] p-8 shadow-[0px_1px_2px_0px_rgba(239,232,232,0.40)] backdrop-blur-[15px] w-[90%] md:w-[1100px] h-[715px] flex-shrink-0">
        <h2 className="w-[375px] h-[21px] flex-shrink-0 text-white font-montserrat text-[17px] font-semibold leading-[130%] uppercase mt-30 pt-12 pb-10">
          Special events in let me hack
        </h2>

        {/* Desktop grid layout */}
        <div className="hidden md:grid grid-cols-3 gap-4 h-full">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full flex flex-col items-center group">
              <div className="relative w-[310px] h-[220px] overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <p className="text-white text-center mt-3 font-montserrat text-[14px] leading-[130%]">
                {image.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile slideshow layout */}
        <div className="md:hidden relative w-full h-[200px]">
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
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={prevImage}
              className="text-white text-2xl font-semibold p-4 bg-[rgba(31,56,39,0.76)] rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out"
            >
              &#8592;
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={nextImage}
              className="text-white text-2xl font-semibold p-4 bg-[rgba(31,56,39,0.76)] rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[50px]"></div>
    </div>
  );
};

export default GalleryShowcase;
