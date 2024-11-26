
import { SelectedPages } from '@/shared/typesEnum'
import React from 'react'
import { motion } from "framer-motion";
import InfiniteSlider from '@/components/loop/sponsorLoop'
function AboutSection({ setSelectedPage }) {
    return (
        <section id="about" className='flex justify-center w-full '>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.About)}>
                <InfiniteSlider />
            </motion.div>
        </section>
    )
}

export default AboutSection