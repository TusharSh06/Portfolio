import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiGithub, FiUsers, FiStar } from 'react-icons/fi'

const Stats = () => {
  const stats = [
    { label: 'Projects Completed', value: '10+', icon: FiStar, color: 'text-accent-blue' },
    { label: 'Happy Clients', value: '2+', icon: FiUsers, color: 'text-accent-pink' },
    { label: 'Technologies Used', value: '15+', icon: FiCode, color: 'text-accent-cyan' },
    { label: 'GitHub Commits', value: '200+', icon: FiGithub, color: 'text-accent-purple' }
  ]

  return (
    <section id="stats" className="pb-16 pt-4 bg-transparent relative z-10 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-2xl glass group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display gradient-text tracking-tight mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium font-grotesk text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
