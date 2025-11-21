import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
    const categories = Object.keys(portfolioData.skills);

    return (
        <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center border-b border-gray-100 dark:border-gray-800 pb-4">
                            {category}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {portfolioData.skills[category].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-700 dark:hover:text-blue-400 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
