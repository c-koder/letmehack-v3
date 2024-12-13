
import { SelectedPages } from '@/shared/typesEnum'
import React from 'react'
import { motion } from "framer-motion";
import InfiniteSlider from '@/components/loop/sponsorLoop'
import Card from '@/components/what-card/card';
import Awards from '@/components/awards/awards';
function AboutSection({ setSelectedPage }) {
    return (
        <section id="about" className='flex justify-center w-full '>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.About)}>
                <Card />
                <Awards />
                {/* <InfiniteSlider /> */}
            </motion.div>
        </section>
    )
}

export default AboutSection