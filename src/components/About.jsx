import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiTarget, FiHeart, FiCode } from 'react-icons/fi'

const About = () => {
  const achievements = [
    { icon: FiAward, title: '5+ Projects', description: 'Completed successfully' },
    { icon: FiTarget, title: '2+ Years', description: 'Of coding experience' },
    { icon: FiHeart, title: '100%', description: 'Client satisfaction' },
    { icon: FiCode, title: '10+ Skills', description: 'Technologies mastered' }
  ]

  const timeline = [
    {
      year: '2022 - 2026',
      title: 'Bachelor of Technology (B.Tech)',
      company: 'K.R. Mangalam University, Gurugram',
      description: 'Computer Science & Engineering'
    },
    {
      year: '2020 - 2023',
      title: 'Diploma in Electronics and Communication Engineering',
      company: 'Guru Tegh Bahadur Institute of Technology',
      description: 'Electronics and Communication Engineering'
    },
    {
      year: '2019 - 2020',
      title: 'Senior Secondary Schooling',
      company: 'Smt. Misri Devi Gyan Niketan',
      description: 'Senior Secondary Education'
    }
  ]

  return (
    <section id="about" className="py-20 light-section-secondary dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and learning new technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Bio and Goals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer skilled in building robust web applications using the MERN stack. 
                I love turning complex problems into simple, beautiful, and intuitive solutions with strong background in front-end/back-end integration, API development, and responsive design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm eager to contribute technical expertise to innovative teams and real-world projects.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Career Goals
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lead development teams and mentor junior developers
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Contribute to open-source projects and give back to the community
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Master advanced technologies like AI/ML and blockchain
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build products that make a positive impact on people's lives
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
              Experience Timeline
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bg-gray-50 dark:bg-secondary-800 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {item.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-200">
                  <achievement.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
