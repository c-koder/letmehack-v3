import React from 'react'
import { SelectedPages } from '@/shared/typesEnum';
import { motion } from "framer-motion";

export const ContactSection = ({ setSelectedPage }) => {
    return (
        <section id="contact" className='flex items-center justify-center w-full h-screen bg-emerald-300'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.Contact)}>
                Contact
            </motion.div>
        </section>
    )
}

export default ContactSection