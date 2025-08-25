import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiTool, 
  FiUsers, 
  FiTarget, 
  FiTrendingUp, 
  FiZap,
  FiMonitor,
  FiServer,
  FiPackage,
  FiGitBranch,
  FiCloud,
  FiLayers
} from 'react-icons/fi'

const Skills = () => {
  const allSkills = [
    {
      category: 'Frontend',
      icon: FiGlobe,
      skills: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Tailwind CSS' }
      ]
    },
    {
      category: 'Backend',
      icon: FiServer,
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDB' }
      ]
    },
    {
      category: 'Languages',
      icon: FiCode,
      skills: [
        { name: 'C++' },
        { name: 'Python' },
        { name: 'SQL' }
      ]
    },
    {
      category: 'Tools',
      icon: FiTool,
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Vercel' },
        { name: 'Render' }
      ]
    }
  ]

  const softSkills = [
    { icon: FiUsers, title: 'Team Collaboration', description: 'Effective at working in cross-functional teams' },
    { icon: FiTarget, title: 'Creative Problem Solving', description: 'Analytical approach to complex challenges' },
    { icon: FiTrendingUp, title: 'Adaptability', description: 'Quickly adapt to new technologies and frameworks' },
    { icon: FiZap, title: 'Effective Communication', description: 'Clear and concise communication skills' }
  ]

  return (
    <section id="skills" className="py-20 light-section-accent dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </motion.div>

        {/* All Skills Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {allSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-secondary-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {React.createElement(category.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                                 {/* Skills List */}
                 <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                   {category.skills.map((skill, skillIndex) => (
                     <motion.div
                       key={skill.name}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                       viewport={{ once: true }}
                       className="flex items-center gap-2"
                     >
                       <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                       <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                         {skill.name}
                       </span>
                     </motion.div>
                   ))}
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Soft Skills & Professional Qualities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-200">
                  {React.createElement(skill.icon, { className: "w-10 h-10" })}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Skills
