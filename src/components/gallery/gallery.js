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
    { src: "/img/gallery-1.jpg", desc: "Event 8 Description" },
    { src: "/img/gallery-2.jpg", desc: "Event 6 Description" },

  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Paginated Images
  const paginatedImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className="py-12">
      <h1 className="text-white font-montserrat lg:text-[80px] text-[35px] font-semibold leading-[130%] uppercase  pb-10 pt-1 text-center">
        Memories
      </h1>
      <div className="p-4 border-2 border-themePrimaryLighter rounded-2xl">
        <p className="mb-4 text-lg font-thin text-white text-start"> Special events in let me hack </p>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 grid-rows-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-green-500"
              >
                <img
                  src={image.src}
                  alt={image.desc}
                  className="object-cover w-full h-48"
                />
                <p className="p-4 text-center text-white">{image.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md text-white ${currentPage === index + 1
                  ? "bg-slate-950"
                  : "bg-slate-600 hover:bg-slate-700"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GalleryShowcase;
