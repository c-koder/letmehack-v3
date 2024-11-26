import "@/styles/comingSoon.css";
//add css path and image path correctly

export default function ComingSoonVideoBanner() {
  return (
    <div className="absolute video">
      <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-4 lg:right-4 xl:bottom-5 xl:right-5 p-4 bg-[#d9d9d95f]  rounded-3xl flex items-center justify-center z-10 ">
        <img src="/img/logo-2.png" className="logo w-[50px] h-auto mr-4" alt="LetMehackWhiteLogo" />

        <div className="flex flex-col justify-center gap-1 text-center lg:gap-2 xl:gap-4">
          <p className="text-xl font-bold text-white lg:text-2xl topic">COMING SOON</p>
          <p className="text-sm text-white subtopic">SABARAGAMUWA UNIVERSITY OF SRI LANKA</p>
        </div>
      </div>
    </div>

  );
}
