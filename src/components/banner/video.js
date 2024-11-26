"use client";


import { useRef, useEffect } from "react";
import "@/styles/Banner.css";
import ComingSoonVideoBanner from "./comingSoonVideoBanner";


export default function VideoSection() {
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
    <>
      <ComingSoonVideoBanner />
      <video
        src="/video/banner.mp4"
        muted
        loop
        ref={videoRef}
        className='video'
      >

      </video>

    </>
  );
}
