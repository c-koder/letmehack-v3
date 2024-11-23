import { SelectedPages } from '@/shared/typesEnum'
import React from 'react'
import { motion } from "framer-motion";

function GallerySection({ setSelectedPage }) {
    return (
        <section id="gallery" className='flex items-center justify-center w-full h-screen bg-emerald-600'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.Gallery)}>
                Gallery
            </motion.div>
        </section>
    )
}

export default GallerySection