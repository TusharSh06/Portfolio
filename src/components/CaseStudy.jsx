import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 bg-dark-bg relative overflow-hidden hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-4">Deep Dive</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Featured <span className="gradient-text">Case Study</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-grotesk">
            A detailed look into my most complex project architecture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden group gradient-border"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent z-10" />
          <img 
            src="/images/projexa.jpg" 
            alt="Case Study Featured" 
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <h3 className="text-3xl font-bold font-display text-white mb-4">ExpressKart Platform Re-write</h3>
            <p className="text-gray-300 max-w-2xl mb-6 font-grotesk leading-relaxed">
              Discover how I architected a full-scale e-commerce solution reducing load times by 40% 
              and implementing a modular vendor/admin access tier schema using modern MERN principles.
            </p>
            <button className="flex items-center gap-2 text-accent-cyan font-semibold hover:text-white transition-colors duration-300 group/btn">
              Read Full Study <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudy
