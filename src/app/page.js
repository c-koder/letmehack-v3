"use client";
import Navbar from "@/components/nav-bar";
import HomeSection from "@/Pages/HomeSection";
import AboutSection from "@/Pages/AboutSection";
import GallerySection from "@/Pages/GallerySection";
import ContactSection from "@/Pages/ContactSection";
import { SelectedPages } from "@/shared/typesEnum";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer/footer";

export default function Home() {
  // Select page state
  const [selectedPage, setSelectedPage] = useState(SelectedPages.Home);

  // Is top of page state
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  // Scroll listener hook
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPages.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto bg-themePrimaryNav">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HomeSection setSelectedPage={setSelectedPage} />
      <AboutSection setSelectedPage={setSelectedPage} />
      <GallerySection setSelectedPage={setSelectedPage} />
      <ContactSection setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}
