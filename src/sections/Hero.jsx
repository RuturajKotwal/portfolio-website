import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, BookOpen, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/resume.pdf';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
    const { name, tagline, bio, socials } = portfolioData.personalInfo;

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            {name}
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                            {tagline}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            {bio}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                View Projects <ArrowRight size={20} />
                            </a>
                            <a
                                href={resumePdf}
                                download="Ruturaj_Kotwal_Resume.pdf"
                                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all flex items-center gap-2"
                            >
                                Download Resume <Download size={20} />
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
                            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            {socials.researchgate && (
                                <a href={socials.researchgate} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors" title="ResearchGate">
                                    <BookOpen size={24} />
                                </a>
                            )}
                            <a href={socials.email} className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
