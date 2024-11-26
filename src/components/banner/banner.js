"use client";


import { useRef, useEffect } from "react";
import "@/styles/Banner.css";
import VideoSection from "./video";
import LogoLoop from "./logoLoop";
import Comingsoon from "./comingSoonVideoBanner";

export default function Banner() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video failed to play:", error);
      });
    }
  }, []);

  return (
    //Optional

    <div className='banner'>
      <div className='videocontent'>
        <VideoSection />
        <LogoLoop />
        <div className='w-full bg-black textcontent '>
          <div className='formarea '>
            <div>
              <img className='vector' src="/img/banner-vector-2.png"></img>
            </div>
            <div className='hellothere'>
              <img src="/img/banner-vector-1.png"></img>

              <p className='text1'>Hello there,</p>
            </div>

            <p className='text2'>
              Welcome to the Let Me Hack <br></br>SUSL Hackathon
            </p>
            <p className='text3'>SABARAGAMUWA UNIVERSITY OF SRI LANKA</p>

            <button>Register Now</button>
          </div>

          <img
            src="/img/banner-image.png"
            alt="Banner photo"
            className=' imagearea'
          />
        </div>
      </div>

      <div className='py-4 xl:py-10 md:py-6 lg:py-8 tagline'>
        <div className="w-full bg-black inBox "> 
          <p className="text-center ">
            LETME HACK<span>V3.0</span>
          </p>
        </div>

      </div>
    </div >
  );
}
