import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiTarget, FiHeart, FiCode } from 'react-icons/fi'

const About = () => {
  const achievements = [
    { icon: FiAward, title: '10+ Projects', description: 'Completed successfully' },
    { icon: FiTarget, title: '2+ Years', description: 'Of coding experience' },
    { icon: FiHeart, title: '100%', description: 'Client satisfaction' },
    { icon: FiCode, title: '15+ Skills', description: 'Technologies mastered' }
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
    <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-accent-purple rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-accent-cyan rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-accent-pink rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-4">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-grotesk">
            Passionate developer crafting innovative solutions and pushing the boundaries of web technology
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
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-accent-blue">#</span> Who I Am
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer skilled in building robust web applications using the MERN stack. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-accent-purple">#</span> Career Goals
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-400 group-hover:text-white transition-colors">
                    Lead development teams and mentor junior developers
                  </p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-400 group-hover:text-white transition-colors">
                    Contribute to open-source projects and give back to the community
                  </p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-400 group-hover:text-white transition-colors">
                    Master advanced technologies like AI/ML and blockchain
                  </p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-accent-pink rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-400 group-hover:text-white transition-colors">
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
            <h3 className="text-2xl font-bold font-display text-white text-center lg:text-left mb-8">
              <span className="gradient-text">Experience</span> Timeline
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
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm gradient-border">
                        {item.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="modern-card p-5 group hover:scale-[1.02] transition-all duration-300">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-accent-cyan font-mono text-sm mb-2">
                          {item.company}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-accent-blue to-accent-purple" />
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
          <h3 className="text-2xl font-bold font-display text-white text-center mb-12">
            Key <span className="gradient-text">Achievements</span>
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
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-2xl modern-card group-hover:scale-110 transition-all duration-300 group-hover:glow-blue">
                  <achievement.icon className="w-10 h-10 text-accent-cyan" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
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
