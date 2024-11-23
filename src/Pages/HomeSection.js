import { SelectedPages } from "@/shared/typesEnum";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HomeSection({ setSelectedPage }) {
  return (
    <section
      id="home"
      className="flex items-center justify-center w-full h-screen bg-themePrimary"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPages.Home)}>
        Home
      </motion.div>
    </section>
  );
}

export default HomeSection;
