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
    <section id="projects" className="py-20 bg-dark-bg relative overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-4">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-grotesk">
            A showcase of my best work demonstrating skills in various technologies
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-200"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/25"
                      : "glass text-gray-300 hover:text-white"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 px-2 py-0.5 bg-white/10 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
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
              // Alternating Zig-Zag Bento Grid Logic
              const isFiltered = activeFilter !== 'all' || searchTerm !== '';
              
              let bentoClass = "col-span-1";
              let imageContainerHeight = "h-40 md:h-[200px]"; // Default small cell
              
              if (!isFiltered) {
                // Pattern:
                // Row 1: 0 (span 2), 1 (span 1)
                // Row 2: 2 (span 1), 3 (span 2)
                // Row 3: 4 (span 2), 5 (span 1)
                
                // Which items are large?
                // 0, 3, 4, 7...
                const row = Math.floor(index / 2); // 0: items 0,1. 1: items 2,3. 2: items 4,5.
                const isLarge = row % 2 === 0 ? (index % 2 === 0) : (index % 2 !== 0);
                
                if (isLarge) {
                  bentoClass = "md:col-span-2 lg:col-span-2";
                  imageContainerHeight = "h-56 md:h-[260px]"; // Base large cell, much smaller than before
                }
              }

              return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className={`modern-card group flex flex-col overflow-hidden ${bentoClass} transform hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-2xl border border-white/5 glass-strong`}
              >
                 {/* Glassmorphic Mac/Browser Frame */}
                 <div className="w-full bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center gap-2 z-20">
                    <div className="flex gap-2 group-hover:opacity-100 opacity-70 transition-opacity">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                    </div>
                    <div className="flex-1 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="px-3 py-1 rounded-full bg-black/40 text-[10px] md:text-xs text-gray-300 font-mono border border-white/10 flex items-center gap-2 shrink-0 max-w-[200px] truncate">
                        <FiSearch className="text-gray-500 flex-shrink-0" />
                        <span className="truncate">{project.live ? project.live.replace('https://', '') : 'localhost:3000'}</span>
                      </span>
                    </div>
                  </div>

                 {/* Project Image Gallery Container */}
                 <div className="relative overflow-hidden bg-black flex-shrink-0">
                   <div className={`relative w-full ${imageContainerHeight} overflow-hidden transform group-hover:scale-105 transition-transform duration-700 ease-in-out`}>
                      <LazyImage
                        src={getCurrentImage(project)}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        containerClassName="w-full h-full"
                      />
                    
                    {/* Parallax Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                    
                    {/* Image Navigation Arrows */}
                    {project.images && project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageChange(project.id, 'prev');
                          }}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 border border-white/20 text-white p-2.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-xl"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageChange(project.id, 'next');
                          }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 border border-white/20 text-white p-2.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-xl"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Image Indicators */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }));
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              index === (currentImageIndex[project.id] || 0) 
                                ? 'w-6 bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]' 
                                : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider z-20">
                      Featured
                    </div>
                  )}
                  
                  {/* Quick Action Overlay (Github & Live) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-6 pointer-events-none z-10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_white] transition-all duration-300 pointer-events-auto"
                    >
                      <FiGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 pointer-events-auto"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content Box */}
                <div className="p-6 md:p-8 flex flex-col flex-1 bg-gradient-to-b from-transparent to-dark-bg/50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-display text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-blue transition-all duration-300 tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3 text-sm md:text-base font-grotesk leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 group-hover:border-accent-cyan/30 group-hover:text-accent-cyan rounded-md text-[11px] font-mono tracking-wider transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-500 rounded-md text-[11px] font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Project Links / Action */}
                  <div className="flex space-x-3 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all duration-300 hover:tracking-wide"
                    >
                      Read Case Study
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
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
