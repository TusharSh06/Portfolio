import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiFilter,
  FiX,
  FiMonitor,
  FiPackage,
  FiCloud,
  FiLayers,
} from "react-icons/fi";
import { projects } from "../data/projects";
import LazyImage from "./LazyImage";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
  ];

  const getCurrentImage = (project) => {
    if (project.images && project.images.length > 0) {
      return project.images[currentImageIndex[project.id] || 0];
    }
    return project.image || '/images/placeholder.png';
  };

  const handleImageChange = (projectId, direction) => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[projectId] || 0;
      const project = projects.find(p => p.id === projectId);
      if (!project || !project.images) return prev;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % project.images.length;
      } else {
        newIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
      }
      
      return { ...prev, [projectId]: newIndex };
    });
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesFilter =
        activeFilter === "all" || project.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <section id="projects" className="py-12 bg-dark-bg relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating Project Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-12 text-accent-blue opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          <FiMonitor className="w-10 h-10" />
        </div>
        <div className="absolute top-1/3 left-16 text-accent-purple opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <FiPackage className="w-10 h-10" />
        </div>
        <div className="absolute bottom-20 right-1/4 text-accent-cyan opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <FiCloud className="w-10 h-10" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-accent-pink opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <FiLayers className="w-10 h-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-accent-cyan font-mono text-xs tracking-wider mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-grotesk">
            A showcase of my best work demonstrating skills in full-stack architecture & design
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:max-w-xs">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-blue/50 border border-white/10 transition-all duration-200"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-md shadow-accent-blue/20"
                      : "glass text-gray-400 hover:text-white border border-white/5 hover:border-white/20"
                  }`}
                >
                  {category.label}
                  <span className="px-1.5 py-0.2 bg-white/10 rounded-full text-[10px]">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchTerm}-${activeFilter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col bg-[#111319]/90 hover:bg-[#141824]/90 rounded-2xl border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(6,182,212,0.15)] overflow-hidden"
                >
                  {/* Compact Header Bar */}
                  <div className="w-full bg-[#16181f]/90 border-b border-white/5 px-3.5 py-2 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                    </div>
                    {project.featured && (
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-0.5 rounded-full bg-accent-blue/20 text-accent-cyan border border-accent-cyan/30">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Image Preview */}
                  <div className="relative h-44 w-full overflow-hidden bg-black/60">
                    <LazyImage
                      src={getCurrentImage(project)}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                    />

                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-transparent to-transparent opacity-80" />

                    {/* Image Carousel Arrows (if multiple) */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageChange(project.id, 'prev');
                          }}
                          className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur border border-white/20"
                          title="Previous image"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageChange(project.id, 'next');
                          }}
                          className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur border border-white/20"
                          title="Next image"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Carousel Dots */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                        {project.images.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1 rounded-full transition-all duration-200 ${
                              i === (currentImageIndex[project.id] || 0)
                                ? 'w-4 bg-accent-cyan'
                                : 'w-1.5 bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Compact Card Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors line-clamp-1 mb-1.5 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed mb-3 flex-1 font-grotesk">
                      {project.description}
                    </p>

                    {/* Technology Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.technologies.slice(0, 4).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 text-gray-500 rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions Row */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-medium text-gray-300 hover:text-white flex items-center gap-1 group/btn transition-colors"
                      >
                        Case Study
                        <span className="text-accent-cyan group-hover/btn:translate-x-0.5 transition-transform">→</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code on GitHub"
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                            title="GitHub Repo"
                          >
                            <FiGithub className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit live website"
                            className="p-1.5 rounded-lg bg-accent-blue/20 hover:bg-accent-blue/30 text-accent-cyan border border-accent-cyan/30 transition-colors"
                            title="Live Demo"
                          >
                            <FiExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-accent-cyan font-mono text-sm">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    <FiX className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image Gallery */}
                <div className="mb-6">
                  {selectedProject.images && selectedProject.images.length > 1 ? (
                    <div className="relative">
                      <LazyImage
                        src={getCurrentImage(selectedProject)}
                        alt={selectedProject.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                        containerClassName="w-full h-full rounded-lg"
                      />
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => handleImageChange(selectedProject.id, 'prev')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleImageChange(selectedProject.id, 'next')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [selectedProject.id]: index }))}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === (currentImageIndex[selectedProject.id] || 0) 
                                ? 'bg-white' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <LazyImage
                      src={selectedProject.image || selectedProject.images?.[0]}
                      alt={selectedProject.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      containerClassName="w-full h-full rounded-lg"
                    />
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass text-accent-cyan rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Project Details
                  </h4>
                  <div className="prose prose-invert max-w-none">
                    <div className="whitespace-pre-line text-gray-400 leading-relaxed text-sm">
                      {selectedProject.detailedDescription}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass text-white rounded-xl font-medium hover:border-accent-blue/50 transition-all duration-200"
                  >
                    <FiGithub className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-xl font-medium hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-200"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
