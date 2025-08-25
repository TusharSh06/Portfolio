import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/TusharSh06', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/tushar-sharma-6b1254194/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:tsharmak10@gmail.com', label: 'Email' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center light-section-primary dark:bg-secondary-900 relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-blue-900">
        <div className="absolute inset-0">
                           <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                 <div className="absolute top-20 right-10 sm:top-40 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
                 <div className="absolute -bottom-4 left-20 sm:-bottom-8 sm:left-40 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

             <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           {/* Left side - Text content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6 text-left"
           >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                 Hi, I'm{' '}
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                   TUSHAR SHARMA
                 </span>
               </h1>
               <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                 FULL STACK DEVELOPER | MERN STACK DEVELOPER
               </h2>
               <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                 Passionate Full Stack Developer skilled in building robust web applications using the MERN stack. Strong background in front-end/back-end integration, API development, and responsive design.
               </p>
            </motion.div>

                         {/* Call-to-action buttons */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
             >
                             <motion.a
                 href="https://drive.google.com/file/d/1hxZIuwYkwpy3dIApvCFoyIBQ8FJLw5Tw/view"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm"
               >
                 <FiDownload className="w-4 h-4" />
                 View Resume
               </motion.a>
                               <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-all duration-200 text-sm"
                >
                  <FiMail className="w-4 h-4" />
                  Contact Me
               </motion.a>
            </motion.div>

                         {/* Social Links */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
                                  className="flex space-x-4 sm:space-x-6 pt-4"
             >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 bg-white dark:bg-secondary-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Professional photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
                         <div className="relative">
               {/* Professional profile photo */}
               <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                                <img 
                 src="/images/profile2.jpeg" 
                 alt="Tushar Sharma - Full Stack Developer"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
               />
               </div>
              
              {/* Floating elements around the photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full opacity-80"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full opacity-80"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full opacity-80"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-1.5"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
