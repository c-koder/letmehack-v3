import { useRef } from 'react';
import "@/styles/Awards.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


const Awards = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const awards = [
        { title: '1st Runnersup', amount: 'LKR 50,000', image: 'https://placehold.co/100x150' },
        { title: 'Winner', amount: 'LKR 100,000', image: 'https://placehold.co/100x150' },
        { title: '2nd Runnersup', amount: 'LKR 20,000', image: 'https://placehold.co/100x150' },
    ];

    return (
        <div className="py-8">
            <div className="text-center">
                <h1 className="text-white font-montserrat lg:text-[80px] text-[35px] font-semibold leading-[130%] uppercase  pb-10 pt-1">
                    Awards
                </h1>
                <div className="justify-center hidden space-x-8 sm:flex">
                    {awards.map((award, index) => (
                        <div key={index} className="w-full p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-200 to-gray-400">
                            <img src={award.image} alt={`Trophy for ${award.title}`} className="mx-auto mb-4" />
                            <p className="text-lg text-gray-700">{award.title}</p>
                            <p className="text-xl font-bold text-green-600">{award.amount}</p>
                        </div>
                    ))}
                </div>
                <div className="relative w-full max-w-xs mx-auto carousel-container sm:hidden">
                    <button className="arrow arrow-left" onClick={scrollLeft}>
                        <ChevronLeftIcon className="w-6 h-6 text-white" />

                    </button>
                    <div className="slider" ref={sliderRef}>
                        {awards.map((award, index) => (
                            <div key={index} className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-200 to-gray-400 slide">
                                <img src={award.image} alt={`Trophy for ${award.title}`} className="mx-auto mb-4" />
                                <p className="text-lg text-gray-700">{award.title}</p>
                                <p className="text-xl font-bold text-green-600">{award.amount}</p>
                            </div>
                        ))}
                    </div>
                    <button className="arrow arrow-right" onClick={scrollRight}>
                        <ChevronRightIcon className="w-6 h-6 text-white" />

                    </button>
                </div>
            </div>
        </div>
    );
}


export default Awards;
