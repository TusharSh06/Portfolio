import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { FiDownload, FiMail, FiGithub as FiGithubIcon, FiLinkedin, FiStar, FiUsers, FiCode } from 'react-icons/fi'
import { SiReact, SiJavascript, SiNodedotjs, SiTailwindcss, SiGithub, SiWhatsapp } from 'react-icons/si'

const Hero = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  const socialLinks = [
    { icon: FiGithubIcon, href: 'https://github.com/TusharSh06', label: 'GitHub', color: '#ffffff' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/tushar-sharma-6b1254194/', label: 'LinkedIn', color: '#0A66C2' },
    { icon: SiWhatsapp, href: 'https://wa.me/919711669908?text=Hi%20Tushar!%20I%20came%20across%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you.', label: 'WhatsApp', color: '#25D366' },
    { icon: FiMail, href: 'mailto:tsharmak10@gmail.com', label: 'Email', color: '#EA4335' }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Removed GSAP text animation to prevent conflicts with Framer Motion

      gsap.to('.floating-element', {
        y: -20,
        rotation: 10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.3,
          from: 'random'
        }
      })

      const image = imageRef.current
      if (image) {
        image.addEventListener('mousemove', (e) => {
          const rect = image.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = (y - centerY) / 20
          const rotateY = (centerX - x) / 20

          gsap.to(image, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: 'power2.out'
          })
        })

        image.addEventListener('mouseleave', () => {
          gsap.to(image, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out'
          })
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center bg-dark-bg relative overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Code Snippets and Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Center / Mid Section Floating Tech Logos */}
        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[45%] text-accent-cyan/10 w-24 h-24 blur-[1px]"
        >
          <SiReact className="w-full h-full" />
        </motion.div>

        <motion.div 
          animate={{ y: [15, -15, 15], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-[55%] text-yellow-500/10 w-20 h-20 blur-[1px]"
        >
          <SiJavascript className="w-full h-full" />
        </motion.div>

        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-[40%] text-green-500/10 w-28 h-28 blur-[1px]"
        >
          <SiNodedotjs className="w-full h-full" />
        </motion.div>

        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [-10, 10, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/4 left-[60%] text-teal-500/10 w-20 h-20 blur-[1px]"
        >
          <SiTailwindcss className="w-full h-full" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 left-[35%] text-white/10 w-16 h-16 blur-[1px]"
        >
          <SiGithub className="w-full h-full" />
        </motion.div>

        {/* Original Floating Code Elements */}
        <div className="floating-element absolute top-32 left-10 glass px-4 py-2 rounded-lg opacity-40">
          <code className="text-accent-blue text-sm font-mono">const developer = true;</code>
        </div>
        <div className="floating-element absolute top-1/3 right-16 glass px-4 py-2 rounded-lg opacity-40">
          <code className="text-accent-purple text-sm font-mono">&lt;React /&gt;</code>
        </div>
        <div className="floating-element absolute bottom-40 left-20 glass px-4 py-2 rounded-lg opacity-40">
          <code className="text-accent-cyan text-sm font-mono">npm run build</code>
        </div>
        <div className="floating-element absolute bottom-1/4 right-24 glass px-4 py-2 rounded-lg opacity-40">
          <code className="text-accent-pink text-sm font-mono">git commit -m "awesome"</code>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div ref={textRef} className="space-y-8 text-left">
            <div className="space-y-4">
              <motion.p 
                className="text-accent-cyan font-mono text-sm tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Hi, I&apos;m
              </motion.p>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="gradient-text">
                  TUSHAR SHARMA
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 font-grotesk tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full Stack Developer
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Passionate developer crafting exceptional digital experiences with modern technologies. 
                Specializing in building scalable, real-world solutions with robust architectures and stunning UIs.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://drive.google.com/file/d/1UrgfJu-gvW0RR4X8T9HlzeoDGY-fyF5E/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FiDownload className="relative z-10 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span className="relative z-10">View Resume</span>
              </a>
              
              <a
                href="#contact"
                className="group flex items-center gap-3 px-8 py-4 border border-gray-600/50 glass rounded-xl font-semibold text-gray-300 hover:border-accent-cyan hover:text-white transition-all duration-300 hover:bg-white/5"
              >
                <FiMail className="w-5 h-5 group-hover:text-accent-cyan transition-colors" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group p-4 glass rounded-xl transition-all duration-300 flex items-center justify-center hover:bg-white/10"
                  aria-label={social.label}
                  style={{ color: social.color }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - 3D Profile Image */}
          <div className="flex justify-center perspective-1000">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative preserve-3d cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur-[60px] opacity-30 animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border group">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent z-10" />
                <img 
                  src="/images/profile2.jpeg" 
                  alt="Tushar Sharma - Full Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full glow-blue"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full glow-purple"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full glow-blue"
              />
              
              {/* Tech Stack Floating Badges */}
              <div className="absolute -top-8 right-0 glass px-3 py-1 rounded-full text-xs font-mono text-accent-cyan">
                React.js
              </div>
              <div className="absolute top-1/4 -right-12 glass px-3 py-1 rounded-full text-xs font-mono text-accent-purple">
                Node.js
              </div>
              <div className="absolute bottom-1/4 -left-12 glass px-3 py-1 rounded-full text-xs font-mono text-accent-blue">
                MongoDB
              </div>
              <div className="absolute -bottom-8 left-1/4 glass px-3 py-1 rounded-full text-xs font-mono text-accent-pink">
                TypeScript
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section Integrated into Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-24 pb-20 relative z-20">
          {[
            { label: 'Projects Completed', value: '10+', icon: FiStar, color: 'text-accent-blue' },
            { label: 'Happy Clients', value: '2+', icon: FiUsers, color: 'text-accent-pink' },
            { label: 'Technologies Used', value: '10+', icon: FiCode, color: 'text-accent-cyan' },
            { label: 'GitHub Commits', value: '200+', icon: FiGithubIcon, color: 'text-white' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-2xl glass group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold font-display tracking-tight mb-2 text-white">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium font-grotesk text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-500 font-mono">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-to-b from-accent-blue to-accent-purple rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
