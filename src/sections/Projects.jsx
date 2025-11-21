import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects" className="bg-white dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all group"
                    >
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Folder size={24} />
                                </div>
                                <div className="flex gap-3">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
