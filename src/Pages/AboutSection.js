
import { SelectedPages } from '@/shared/typesEnum'
import React from 'react'
import { motion } from "framer-motion";
function AboutSection({ setSelectedPage }) {
    return (
        <section id="about" className='flex items-center justify-center w-full h-screen bg-emerald-300'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.About)}>
                about
            </motion.div>
        </section>
    )
}

export default AboutSection