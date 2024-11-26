import { SelectedPages } from '@/shared/typesEnum'
import React from 'react'
import { motion } from "framer-motion";
import Banner from '@/components/banner/banner';

function HomeSection({ setSelectedPage }) {
    return (
        <section id="home" className='w-full h-full bg-ContactUsBg'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.Home)}>
                    
                <Banner /> 
                
            </motion.div>
        </section>
    )
}


export default HomeSection