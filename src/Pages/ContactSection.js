import React from 'react'
import { SelectedPages } from '@/shared/typesEnum';
import { motion } from "framer-motion";
import ContactUs from '@/components/ContactUs/ContactUs';

export const ContactSection = ({ setSelectedPage }) => {
    return (
        <section id="contact" className='flex justify-center w-full bg-ContactUsBg'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPages.Contact)}>
                <ContactUs />
            </motion.div>
        </section>
    )
}

export default ContactSection