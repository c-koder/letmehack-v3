import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const logos = [
  "/img/logo.png",
  "/img/sponsorLogo-1.png",
  "/img/sponsorLogo-2.png",
  "/img/sponsorLogo-3.png",
  "/img/sponsorLogo-4.png",
  "/img/logo.png",
  "/img/sponsorLogo-1.png",
  "/img/sponsorLogo-2.png",
  "/img/sponsorLogo-3.png",
  "/img/sponsorLogo-4.png",
]

export default function LogoLoop() {

  return (

    <div>
      <Marquee direction="left" speed={100} delay={0}>
        {logos.map((el, index) => (
          <div key={index} className="p-6 md:p-8 lg:p-10 xl:p-12 h-28 md:h-36 lg:h-48 xl:h-56 image_wrapper">
            <img src={el} alt={`Logo ${index + 1}`} className="h-full" />
          </div>
        ))}

      </Marquee>
    </div>

  );
}

