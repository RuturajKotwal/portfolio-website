import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const About = () => {
    return (
        <Section id="about" title="About Me" className="bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white leading-tight">
                        A dedicated AI & Software Engineer with a passion for cloud-native solutions.
                    </h3>

                    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                        <p>
                            {portfolioData.personalInfo.bio}
                        </p>
                        <p>
                            I specialize in building scalable applications and data pipelines, leveraging the power of Cloud platforms like GCP and AWS.
                            My experience spans across full-stack development, machine learning, and automation, always aiming to deliver efficient and robust solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 max-w-2xl mx-auto">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-3xl text-blue-600 mb-2">3+</h4>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-3xl text-purple-600 mb-2">10+</h4>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Delivered</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
