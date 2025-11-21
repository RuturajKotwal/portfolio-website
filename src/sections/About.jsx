import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const About = () => {
    return (
        <Section id="about" title="About Me" className="bg-white dark:bg-gray-900">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <img
                        src="https://images.unsplash.com/photo-1544256306-3b7298690419?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Working"
                        className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 space-y-6"
                >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        A dedicated developer with a passion for clean code.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {portfolioData.personalInfo.bio}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I believe in building software that is not only functional but also accessible and enjoyable to use.
                        When I'm not coding, you can find me exploring new technologies, contributing to open source, or hiking in the mountains.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h4 className="font-bold text-2xl text-blue-600">5+</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h4 className="font-bold text-2xl text-purple-600">50+</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
