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
    <section id="contact" className="py-20 light-section-secondary dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new learning opportunities, exciting projects, and connecting with fellow developers. 
            Let's discuss how we can collaborate or learn together!
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss potential opportunities, 
                or just want to say hello, I'd love to hear from you. 
                I'm always open to new challenges and exciting collaborations.
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
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-secondary-800 rounded-lg hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
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
                    className={`w-12 h-12 bg-gray-100 dark:bg-secondary-700 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all duration-200 ${social.color}`}
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
              className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Fun Facts
              </h4>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  <span>50+ commits on GitHub</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  <span>5+ projects completed</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  <span>100% client satisfaction</span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
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
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-secondary-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                                             value={formData.user_name}
                       onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                                             value={formData.user_email}
                       onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
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
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
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
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm excited to hear about your ideas and help bring them to life. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
                             <a
                 href="mailto:tsharmak10@gmail.com"
                 className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
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
