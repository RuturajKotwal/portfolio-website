import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
    return (
        <Section id="experience" title="Work Experience" className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-0 py-8 md:py-12 group"
                    >
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 group-last:bottom-auto group-last:h-1/2"></div>

                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 mt-1.5 z-10"></div>

                        <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2 mb-2 md:mb-0">
                                <div className={`flex items-center gap-2 text-sm text-blue-600 font-medium mb-1 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <Calendar size={16} />
                                    {exp.period}
                                </div>
                            </div>

                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2 md:inline-flex">
                                        <Briefcase size={18} className="inline md:hidden" />
                                        {exp.company}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
