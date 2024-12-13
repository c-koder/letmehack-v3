import React, { useState, useEffect, useRef } from 'react';

const InfiniteSlider = () => {
    const [position, setPosition] = useState(0);
    const directionRef = useRef('right');
    const lastChangeTimeRef = useRef(Date.now());

    const images = [
        { url: "/img/sponsorLogo-1.png", alt: "Slide 1" },
        { url: "/img/sponsorLogo-2.png", alt: "Slide 2" },
        { url: "/img/sponsorLogo-3.png", alt: "Slide 3" },
        { url: "/img/sponsorLogo-4.png", alt: "Slide 4" },
        // Duplicate images for seamless transition
        { url: "/img/sponsorLogo-1.png", alt: "Slide 1" },
        { url: "/img/sponsorLogo-2.png", alt: "Slide 2" },
        { url: "/img/sponsorLogo-3.png", alt: "Slide 3" },
        { url: "/img/sponsorLogo-4.png", alt: "Slide 4" },
    ];

    useEffect(() => {
        const DIRECTION_CHANGE_INTERVAL = 5000; // 5 seconds
        const ANIMATION_SPEED = 0.10;

        const animate = () => {
            const currentTime = Date.now();

            // Check for direction change
            if (currentTime - lastChangeTimeRef.current >= DIRECTION_CHANGE_INTERVAL) {
                directionRef.current = directionRef.current === 'right' ? 'left' : 'right';
                lastChangeTimeRef.current = currentTime;
            }

            setPosition(prevPosition => {
                const movement = directionRef.current === 'right' ? -ANIMATION_SPEED : ANIMATION_SPEED;
                let newPosition = prevPosition + movement;

                // Reset position for seamless loop
                if (newPosition <= -50) {
                    newPosition = 0;
                }
                if (newPosition >= 0) {
                    newPosition = -50;
                }

                return newPosition;
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []); // Empty dependency array to run effect only once

    return (
        <div className='my-10'>
            <div className="container w-full mx-auto overflow-hidden">

                {/* Title Section */}
                <div className="py-8 text-center">
                    <h1 className="text-white font-montserrat lg:text-[80px] text-[35px] font-semibold leading-[130%] uppercase  pb-10 pt-1">
                        Sponsers
                    </h1>


                </div>

                <div className="relative">
                    <div
                        className="flex transition-transform duration-100 ease-linear"
                        style={{ transform: `translateX(${position}%)` }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-1/4 px-2 bg-white"
                            >
                                <div className="relative h-64">
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="object-cover w-full h-full rounded-lg shadow-md"
                                    />

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfiniteSlider;