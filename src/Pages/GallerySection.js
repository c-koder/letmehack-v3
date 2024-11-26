import { SelectedPages } from '@/shared/typesEnum'
import React from 'react'
import { motion } from "framer-motion";
import GalleryShowcase from '@/components/gallery/gallery';

function GallerySection({ setSelectedPage }) {
    return (
        <section id="gallery" className='flex items-center justify-center w-full h-full '>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.Gallery)}>
                <GalleryShowcase />
            </motion.div>
        </section>
    )
}

export default GallerySection