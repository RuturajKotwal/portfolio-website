import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
                >
                    {title}
                </motion.h2>
            )}
            {children}
        </section>
    );
};

export default Section;
