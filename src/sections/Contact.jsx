import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
    const { socials, name } = portfolioData.personalInfo;

    return (
        <footer className="bg-white dark:bg-gray-900 pt-20 pb-10">
            <Section id="contact" className="py-0 mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-20 text-center text-white"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to work together?</h2>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        I'm always open to discussing product design work or partnership opportunities.
                    </p>
                    <a
                        href={socials.email}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>
                </motion.div>
            </Section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 dark:border-gray-800 pt-10">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} {name}. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={socials.email} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-8 text-gray-400 dark:text-gray-600 text-xs flex items-center justify-center gap-1">
                    Made with <Heart size={12} className="text-red-500 fill-current" /> using React & Tailwind
                </div>
            </div>
        </footer>
    );
};

export default Contact;
