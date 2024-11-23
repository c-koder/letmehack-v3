"use client";

import styles from "../styles/Banner.module.css";
import { useRef, useEffect } from "react";

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

    <div className={styles.banner}>
      <div className={styles.videocontent}>
        <video
          src="/let me hack.mp4"
          muted
          loop
          ref={videoRef}
          className={styles.video}
        >
          Your browser does not support the video
        </video>
        <div className={styles.textcontent}>
          <div className={styles.formarea}>
            <div>
              <img className={styles.vector} src="/Vector 3.png"></img>
            </div>
            <div className={styles.hellothere}>
              <img src="/Vector 2.png"></img>

              <p className={styles.text1}>Hello there,</p>
            </div>

            <p className={styles.text2}>
              Welcome to the Let Me Hack <br></br>SUSL Hackathon
            </p>
            <p className={styles.text3}>SABARAGAMUWA UNIVERSITY OF SRI LANKA</p>

            <button>Register Now</button>
          </div>

          <img
            src="/image 9.png"
            alt="Banner photo"
            className={styles.imagearea}
          ></img>
        </div>
      </div>
      <div className={styles.tagline}>
        <p>
          LETME HACK<span>V3.0</span>
        </p>
      </div>
    </div>
  );
}
