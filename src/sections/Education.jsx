import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Education = () => {
    return (
        <Section id="education" title="Education" className="bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto grid gap-8">
                {portfolioData.education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                <GraduationCap className="text-blue-600" size={24} />
                                {edu.degree}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">{edu.school}</p>
                        </div>

                        <div className="text-left md:text-right">
                            <div className="text-blue-600 font-medium mb-1">{edu.period}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center md:justify-end gap-1">
                                <MapPin size={14} />
                                {edu.location}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
