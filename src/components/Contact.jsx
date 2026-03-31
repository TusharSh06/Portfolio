import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const formRef = useRef()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/TusharSh06', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/tushar-sharma-6b1254194/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FiMail, href: 'mailto:tsharmak10@gmail.com', label: 'Email', color: 'hover:text-red-600' }
  ]

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'tsharmak10@gmail.com',
      href: 'mailto:tsharmak10@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91-9711669908',
      href: 'tel:+919711669908'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'New Delhi, India',
      href: null
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email using EmailJS
      // Get these credentials from: https://www.emailjs.com/
      // 1. Create account at emailjs.com
      // 2. Add Email Service (Gmail, Outlook, etc.)
      // 3. Create Email Template
      // 4. Get your Public Key
      const result = await emailjs.sendForm(
        'service_ojh09ae', // Replace with your EmailJS service ID
        'template_hdne9l3', // Replace with your EmailJS template ID
        formRef.current,
        'DfU_sblqKQLKiVLaG' // Replace with your EmailJS public key
      )
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ user_name: '', user_email: '', subject: '', message: '' })
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/2 w-72 h-72 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating Communication Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-12 text-accent-blue opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          <FiMail className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 right-16 text-accent-purple opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <FiPhone className="w-8 h-8" />
        </div>
        <div className="absolute bottom-24 left-1/3 text-accent-cyan opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <FiMapPin className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-accent-pink opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <FiSend className="w-8 h-8" />
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
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-4">Let's Talk</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and connecting with fellow developers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss potential opportunities, 
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 modern-card group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-accent-cyan glass group-hover:glow-blue transition-all">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-accent-cyan hover:text-white transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:glow-blue transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Fun Facts
              </h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent-cyan rounded-full"></span>
                  <span>100+ commits on GitHub</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                  <span>10+ projects completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                  <span>Always learning new tech</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="modern-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a <span className="gradient-text">Message</span>
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                                             value={formData.user_name}
                       onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                                             value={formData.user_email}
                       onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-xl ${
                      submitStatus === 'success'
                        ? 'glass bg-green-500/20 text-green-400'
                        : 'glass bg-red-500/20 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <FiCheck className="w-5 h-5" />
                    ) : (
                      <FiAlertCircle className="w-5 h-5" />
                    )}
                    <span className="font-medium">
                      {submitStatus === 'success'
                        ? 'Message sent successfully! I\'ll get back to you soon.'
                        : 'Something went wrong. Please try again.'}
                    </span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-blue/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start a <span className="gradient-text">Project</span>?
            </h3>
            <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm excited to hear about your ideas and help bring them to life. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-200"
              >
                View My Work
              </a>
                             <a
                 href="mailto:tsharmak10@gmail.com"
                 className="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200"
               >
                 Email Me Directly
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
