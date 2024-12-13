import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="container w-full px-4 pt-20 pb-10 ">
                <div
                    className="bg-[#041c05] text-white rounded-[40px] shadow-lg  mx-auto  border-[#03AC13] lg:px-32 px-10 py-10">
                    <h1 className="mb-10 text-2xl font-bold text-center lg:text-4xl">
                        What is LetMeHack 3.0
                    </h1>


                    <p className="mt-2 mb-8 space-y-4 text-sm leading-relaxed text-center lg:text-xl sm:leading-loose">
                        LetMeHACK eco v3.0 is the first-ever eco-friendly 
                        product-oriented inter-university hackathon 
                        organized by the Society of Computer Sciences 
                        together with the Department of Computing and 
                        Information Systems of the Sabaragamuwa 
                        University of Sri Lanka.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Card;
