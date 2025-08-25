import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiHeart,
  FiArrowUp
} from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/TusharSh06', 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: FiLinkedin, 
      href: 'https://www.linkedin.com/in/tushar-sharma-6b1254194/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: FiMail, 
      href: 'mailto:tsharmak10@gmail.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 dark:bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-purple-400 to-blue-400"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Greeting */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-4">
                Tushar Sharma
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Thank you for visiting my portfolio! I'm passionate about creating innovative web solutions 
                and always excited to connect with fellow developers, potential collaborators, and anyone 
                interested in technology. Feel free to reach out - let's build something amazing together! 🚀
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <FiHeart className="w-4 h-4 mr-2 text-red-400" />
                <span>Made with passion and dedication</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-primary-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-primary-400 mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <FiMail className="w-4 h-4 mr-3 text-primary-400" />
                  <a 
                    href="mailto:tsharmak10@gmail.com"
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    tsharmak10@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <FiPhone className="w-4 h-4 mr-3 text-primary-400" />
                  <a 
                    href="tel:+919711669908"
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    +91-9711669908
                  </a>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <FiMapPin className="w-4 h-4 mr-3 text-primary-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-3 bg-gray-800 dark:bg-secondary-800 rounded-full text-gray-300 transition-all duration-200 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-right"
            >
              <p>&copy; {currentYear} Tushar Sharma. All rights reserved.</p>
              <p className="mt-1">Full Stack Developer & MERN Stack Enthusiast</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-200 z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
