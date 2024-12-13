"use client";

import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";

const Awards = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide
    const awards = [
        {
            title: "1st Runners up",
            prize: "LKR 50,000",
            img: "https://placehold.co/100x150",
        },
        {
            title: "Winner",
            prize: "LKR 100,000",
            img: "https://placehold.co/100x150",
        },
        {
            title: "2nd Runners up",
            prize: "LKR 20,000",
            img: "https://placehold.co/100x150",
        },
    ];

    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * sliderRef.current.clientWidth,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const scrollLeft = () => {
        const prevIndex = currentIndex === 0 ? awards.length - 1 : currentIndex - 1;
        scrollToSlide(prevIndex);
    };

    const scrollRight = () => {
        const nextIndex = (currentIndex + 1) % awards.length;
        scrollToSlide(nextIndex);
    };

    // Auto-scroll functionality for mobile view
    useEffect(() => {
        const autoScroll = setInterval(() => {
            const nextIndex = (currentIndex + 1) % awards.length;
            scrollToSlide(nextIndex);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(autoScroll); // Cleanup interval on component unmount
    }, [currentIndex]);

    return (
        <>
            <Head>
                <title>Awards</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="bg-[#065F1E] flex items-center justify-center min-h-screen pt-6">
                <div className="text-center w-full">
                    {/* Title */}
                    <h1
                        className="text-white text-5xl font-bold -mb-32"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                        Awards
                    </h1>

                    {/* Desktop View */}
                    <div className=" hidden sm:flex justify-center space-x-8 border-2 border-dashed rounded-md pb-2 pt-48">
                        {awards.map((award, index) => (
                            <div key={index} className="bg-gradient-to-b from-white to-gray-400 rounded-3xl py-8 shadow-lg w-60">
                                <img src={award.img} alt={`Trophy for ${award.title}`} className="mx-auto mb-4" />
                                <p className="text-[#000300] text-xl font-bold mt-6">{award.title}</p>
                                <p className="text-[#065F1E] text-2xl font-bold ">{award.prize}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View bg-[#ffffff]*/}
                    <div className="carousel-container sm:hidden relative w-full max-w-xs mx-auto">

                        <h1
                            className="text-white text-4xl font-bold mb-10"
                            style={{fontFamily: "Roboto, sans-serif"}}
                        >
                            AWARDS
                        </h1>

                        {/*Left button*/}
                        <button
                            className="absolute top-1/2 left-2 -translate-y-1/2 bg-transparent -ml-14 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
                            onClick={scrollLeft}
                        >
                            <i className="">
                                <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24'>
                                    <title>left_line</title>
                                    <g id="left_line" fill='none' fillRule='evenodd'>
                                        <path
                                            d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/>
                                        <path fill='#ffffff'
                                              d='M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.657-5.657Z'/>
                                    </g>
                                </svg>
                            </i>
                        </button>

                        <div
                            className="slider flex overflow-hidden"
                            ref={sliderRef}
                            style={{scrollBehavior: "smooth"}}
                        >
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="slide bg-gradient-to-b from-white to-gray-400 rounded-3xl py-8 flex-none w-full"
                                >
                                    <img src={award.img} alt={`Trophy for ${award.title}`} className="mx-auto mb-4"/>
                                    <p className="text-[#000300] text-2xl font-bold pt-6">{award.title}</p>
                                    <p className="text-[#065F1E] text-3xl font-bold pt-2">{award.prize}</p>
                                </div>
                            ))}
                        </div>

                        {/*Right button*/}
                        <button
                            className="arrow arrow-right absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent -mr-14 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
                            onClick={scrollRight}
                        >
                            <i className="">
                                <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24'>
                                    <title>right_line</title>
                                    <g id="right_line" fill='none' fillRule='evenodd'>
                                        <path
                                            d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/>
                                        <path fill='#FFFFFFFF'
                                              d='M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z'/>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Awards;
