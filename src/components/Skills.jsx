import React from 'react'
import { motion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import LazyImage from './LazyImage'
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
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiCplusplus,
  SiGit, SiGithub, SiVercel,SiPython,SiDocker,
} from 'react-icons/si'

const Skills = () => {
  const techStack = [
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-300' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'GitHub', icon: SiGithub, color: 'text-white' },
    { name: 'Vercel', icon: SiVercel, color: 'text-white' }
  ]

  const softSkills = [
    { icon: FiUsers, title: 'Team Collaboration', description: 'Effective at working in cross-functional teams' },
    { icon: FiTarget, title: 'Creative Problem Solving', description: 'Analytical approach to complex challenges' },
    { icon: FiTrendingUp, title: 'Adaptability', description: 'Quickly adapt to new technologies and frameworks' },
    { icon: FiZap, title: 'Effective Communication', description: 'Clear and concise communication skills' }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L50 15 L50 35 L30 45 L10 35 L10 15 Z' stroke='%236366f1' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-accent-blue opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          <FiCode className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 right-20 text-accent-purple opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <FiDatabase className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-accent-cyan opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <FiGlobe className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-accent-pink opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <FiGitBranch className="w-8 h-8" />
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
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-4">My Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-grotesk">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Endless Marquee of Tech Stack */}
        <div className="mb-24 relative overflow-hidden group">
          {/* Marquee Container */}
          <div className="flex min-w-full gap-8 animate-marquee group-hover:[animation-play-state:paused] py-4">
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`} 
                className="flex items-center gap-3 px-6 py-4 glass rounded-xl min-w-max hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
              >
                <tech.icon className={`w-8 h-8 ${tech.color}`} />
                <span className="text-white font-medium text-lg tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>
          {/* Gradient Fades for Marquee edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-bg/90 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-bg/90 to-transparent pointer-events-none z-10" />
        </div>

        {/* GitHub Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold font-display text-white text-center mb-12">
            GitHub <span className="gradient-text">Activity</span>
          </h3>
          
          {/* GitHub Stats Images */}
          {/* <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="glass p-6 rounded-2xl flex items-center justify-center hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-shadow">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=TusharSh06&show_icons=true&count_private=true&theme=react&bg_color=0f0f13&title_color=06b6d4&text_color=94a3b8&icon_color=3b82f6&border_color=2a2a35" 
                alt="GitHub Stats" 
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
            <div className="glass p-6 rounded-2xl flex items-center justify-center hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-shadow">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=TusharSh06&theme=react&background=0f0f13&title=06b6d4&sideNums=94a3b8&sideLabels=94a3b8&ring=3b82f6&fire=ec4899&currStreakNum=ffffff&dates=94a3b8&border=2a2a35" 
                alt="GitHub Streak" 
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div> */}

          {/* Contribution Graph */}
          <div className="glass p-8 rounded-2xl flex justify-center overflow-x-auto min-h-[220px]">
            <GitHubCalendar 
              username="TusharSh06" 
              blockSize={15}
              blockMargin={5}
              fontSize={14}
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#161b22', '#044c29', '#006d32', '#26a641', '#39d353'],
              }}
              colorScheme="dark"
            />
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold font-display text-white text-center mb-12">
            <span className="gradient-text">Professional</span> Qualities
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
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-2xl modern-card group-hover:scale-110 transition-all duration-300 group-hover:glow-blue">
                  <skill.icon className="w-10 h-10 text-accent-cyan" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {skill.title}
                </h4>
                <p className="text-gray-400 text-sm">
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
