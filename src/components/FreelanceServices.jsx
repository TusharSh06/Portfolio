import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight,
  FiExternalLink,
  FiCheck,
  FiCode,
  FiLayers,
  FiLayout,
  FiShoppingCart,
  FiCpu,
  FiTool,
  FiSearch,
  FiCalendar,
  FiCheckCircle,
  FiUploadCloud,
  FiShield,
  FiClock,
  FiMessageSquare,
  FiMail,
  FiSend,
  FiAlertCircle,
  FiX,
  FiChevronRight
} from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import emailjs from '@emailjs/browser'
import { freelanceServices, clientProjects, workflowSteps, valueProps } from '../data/servicesData'

const serviceIcons = {
  'business-websites': FiLayout,
  'ecommerce': FiShoppingCart,
  'custom-web-apps': FiCpu,
  'maintenance-optimization': FiTool
}

const workflowIcons = [
  FiSearch,
  FiLayers,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiShield
]

const FreelanceServices = () => {
  const formRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  // Form State
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    project_type: 'Business Website Development',
    budget_range: '$500 - $1,000 / ₹25k - ₹50k',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Dynamic SEO metadata when page mounts
  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Freelance Web Development Services | Tushar Sharma'

    const metaDescription = document.querySelector('meta[name="description"]')
    const originalDescription = metaDescription ? metaDescription.getAttribute('content') : ''
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Hire Tushar Sharma for freelance web development: modern business websites, custom e-commerce stores, and full-stack web applications tailored to your business goals.'
      )
    }

    let canonical = document.querySelector("link[rel='canonical']")
    let createdCanonical = false
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
      createdCanonical = true
    }
    const originalCanonical = canonical.getAttribute('href')
    canonical.setAttribute('href', 'https://tushar06.vercel.app/services')

    return () => {
      document.title = originalTitle
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription)
      }
      if (createdCanonical && canonical) {
        canonical.remove()
      } else if (canonical && originalCanonical) {
        canonical.setAttribute('href', originalCanonical)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageNav = (projectId, direction, total) => {
    setCurrentImageIndex((prev) => {
      const current = prev[projectId] || 0
      let next
      if (direction === 'next') {
        next = (current + 1) % total
      } else {
        next = current === 0 ? total - 1 : current - 1
      }
      return { ...prev, [projectId]: next }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using verified EmailJS service credentials configured in portfolio
      const formattedSubject = `[Freelance Inquiry] ${formData.project_type} - ${formData.user_name}`
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        subject: formattedSubject,
        message: `Project Type: ${formData.project_type}\nBudget Range: ${formData.budget_range}\n\nClient Requirements:\n${formData.message}`
      }

      await emailjs.send(
        'service_ojh09ae',
        'template_hdne9l3',
        templateParams,
        'DfU_sblqKQLKiVLaG'
      )

      setSubmitStatus('success')
      setFormData({
        user_name: '',
        user_email: '',
        project_type: 'Business Website Development',
        budget_range: '$500 - $1,000 / ₹25k - ₹50k',
        message: ''
      })
      setTimeout(() => setSubmitStatus(null), 7000)
    } catch (err) {
      console.error('EmailJS Submission Error:', err)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 7000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-dark-bg text-white pb-16 overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO — Freelance Services Introduction (Bespoke Studio / Executive Theme)
      ========================================================================= */}
      <section id="services-hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#090b12] via-[#06080e] to-dark-bg">
        {/* Distinct Studio Ambient Atmosphere: Deep Indigo & Emerald/Cyan accents instead of main profile's blue/purple */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
        
        {/* Subtle Tech Grid / Radar circles */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-70" />
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition & High-Impact Copy */}
            <div className="lg:col-span-7 text-left space-y-8">
              
              {/* Client Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0d141e] border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
                  Available for Freelance Projects
                </span>
                <span className="text-gray-600">|</span>
                <span className="text-[11px] font-mono text-gray-400">Q4 2026</span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]"
                >
                  Need a Website for{' '}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    Your Business?
                  </span>
                </motion.h1>
                <p className="text-xs sm:text-sm font-mono text-emerald-400/90 tracking-wider uppercase">
                  CUSTOM WEB DEVELOPMENT · RESPONSIVE DESIGN · DIRECT COMMUNICATION
                </p>
              </div>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-sans"
              >
                I help businesses build modern, responsive websites and web applications tailored to their goals.
                From professional company portfolios to e-commerce stores and custom web platforms, I focus on
                clean design, reliable functionality, and performance.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button
                  onClick={() => scrollTo('services-contact')}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl font-semibold text-slate-950 font-display hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <FiArrowRight className="w-5 h-5 text-slate-950" />
                </button>

                <button
                  onClick={() => scrollTo('services-portfolio')}
                  className="px-8 py-4 bg-[#111624] hover:bg-[#161d30] border border-emerald-500/20 hover:border-emerald-400/50 text-gray-200 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Client Work</span>
                  <FiChevronRight className="w-4 h-4 text-emerald-400" />
                </button>
              </motion.div>

              {/* Client Assurances */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10"
              >
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display text-white">100%</p>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Responsive & Fast</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display text-white">Direct</p>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Developer Contact</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display text-white">End-to-End</p>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Idea to Deployment</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Studio Terminal & Live Delivery Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Glowing Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-3xl blur-xl opacity-70" />

              <div className="relative rounded-2xl bg-[#0c101a] border border-emerald-500/30 shadow-2xl overflow-hidden">
                
                {/* Window Chrome Header */}
                <div className="bg-[#121826] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#090d16] border border-white/5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    freelance.tushar.dev/spec
                  </div>
                  <div className="text-[10px] font-mono text-gray-400">production:ready</div>
                </div>

                {/* Studio Live Spec Card */}
                <div className="p-6 space-y-6">
                  
                  {/* Scope Preview Card */}
                  <div className="p-4 rounded-xl bg-[#141b2d] border border-emerald-500/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        What You Get
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Turnkey Delivery
                      </span>
                    </div>
                    <p className="text-sm font-display font-bold text-white">
                      Custom Architecture Tailored to Your Brand
                    </p>
                    <div className="space-y-2 text-xs text-gray-300">
                      <div className="flex items-center gap-2">
                        <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>High conversion layouts optimized for mobile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Fast Core Web Vitals & technical SEO</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Domain setup, SSL & production deployment</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Interactive Spec Badges */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                      Standard Inclusions
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-[#0e1320] border border-white/5 text-gray-300 flex items-center justify-between">
                        <span>SEO Optimized</span>
                        <span className="text-emerald-400 font-bold">Yes</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0e1320] border border-white/5 text-gray-300 flex items-center justify-between">
                        <span>Responsive</span>
                        <span className="text-emerald-400 font-bold">100%</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0e1320] border border-white/5 text-gray-300 flex items-center justify-between">
                        <span>Lead Capture</span>
                        <span className="text-emerald-400 font-bold">WhatsApp/Mail</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0e1320] border border-white/5 text-gray-300 flex items-center justify-between">
                        <span>Handover</span>
                        <span className="text-emerald-400 font-bold">Walkthrough</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Have questions or ready to begin?</p>
                      <p className="text-[11px] text-gray-400 font-mono">Quick consultations via WhatsApp</p>
                    </div>
                    <a
                      href="https://wa.me/919711669908?text=Hi%20Tushar!%20I%20have%20a%20project%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>Connect</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SERVICES I OFFER
      ========================================================================= */}
      <section id="services-offer" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-10">
          <p className="text-accent-cyan font-mono text-xs tracking-widest uppercase mb-2">
            What I Can Deliver For You
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-2">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Focused, high-impact web solutions engineered specifically around your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {freelanceServices.map((service, index) => {
            const Icon = serviceIcons[service.id] || FiCode
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group p-5 rounded-2xl bg-[#0e1017]/90 hover:bg-[#121622] border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-cyan/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white mb-2 group-hover:text-accent-cyan transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-4 font-sans line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4 pt-3 border-t border-white/5">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-semibold">
                      Deliverables
                    </p>
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <FiCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, project_type: service.title }))
                    scrollTo('services-contact')
                  }}
                  className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-accent-cyan group-hover:text-white transition-colors group/btn"
                >
                  <span>Select Service</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLIENT PROJECTS / PORTFOLIO
      ========================================================================= */}
      <section id="services-portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-accent-cyan font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
            Real Proof of Delivery
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Websites I've Built <span className="gradient-text">for Clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Real client work focused on business needs, usability, and reliable web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clientProjects.map((project, index) => {
            const activeImgIdx = currentImageIndex[project.id] || 0
            const activeImg = project.images ? project.images[activeImgIdx] : project.screenshot

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-[#10121a] rounded-2xl border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_12px_35px_rgba(6,182,212,0.15)]"
              >
                {/* Browser Frame Header */}
                <div className="bg-[#161822] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[11px] font-mono text-accent-cyan tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Screenshot with Preview Carousel */}
                <div className="relative h-56 w-full overflow-hidden bg-black/50">
                  <img
                    src={activeImg}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10121a] via-transparent to-transparent opacity-80" />

                  {/* Carousel Controls */}
                  {project.images && project.images.length > 1 && (
                    <>
                      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleImageNav(project.id, 'prev', project.images.length)
                          }}
                          className="p-1.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 text-xs backdrop-blur"
                          aria-label="Previous screenshot"
                        >
                          ‹
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleImageNav(project.id, 'next', project.images.length)
                          }}
                          className="p-1.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 text-xs backdrop-blur"
                          aria-label="Next screenshot"
                        >
                          ›
                        </button>
                      </div>

                      {/* Dots */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.images.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              dotIdx === activeImgIdx ? 'w-4 bg-accent-cyan' : 'w-1.5 bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mt-0.5">{project.tagline}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.overview}
                  </p>

                  {/* Business Problem & Role */}
                  <div className="space-y-3 mb-5 text-xs text-gray-400 border-t border-white/5 pt-3">
                    <div>
                      <span className="text-gray-300 font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
                        Client Requirements:
                      </span>
                      <p className="line-clamp-2">{project.clientRequirements}</p>
                    </div>
                    <div>
                      <span className="text-gray-300 font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
                        My Contributions:
                      </span>
                      <p className="line-clamp-2">{project.myRole}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-2 text-xs font-semibold rounded-lg glass hover:bg-white/10 text-gray-200 hover:text-white transition-colors text-center"
                    >
                      Case Study
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
                    >
                      <span>Live Site</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW I WORK — Step-by-Step Roadmap (Interactive Horizontal Timeline)
      ========================================================================= */}
      <section id="services-process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        {/* Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full filter blur-[130px] pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Execution Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-3">
            My Process, <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">From Idea to Launch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A transparent 6-stage engineering journey — turning your vision into a live, fast website.
          </p>
        </div>

        {/* Timeline Desktop: Modern Connected Track with Step Node Badges */}
        <div className="relative z-10 hidden lg:block">
          {/* Subtle connecting track line */}
          <div className="relative grid grid-cols-6 gap-3">
            {workflowSteps.map((step, idx) => {
              const Icon = workflowIcons[idx] || FiCheck
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col"
                >
                  {/* Step Header with Node Number & Connecting Bar */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#111726] border-2 border-emerald-500/40 group-hover:border-emerald-400 flex items-center justify-center font-mono font-bold text-xs text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] z-10">
                      {step.step}
                    </div>
                    {idx < 5 && (
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500/40 to-emerald-500/10 group-hover:from-emerald-400 transition-colors ml-2" />
                    )}
                  </div>

                  {/* Sleek Timeline Card */}
                  <div className="p-4 rounded-xl bg-[#0d121c] border border-white/10 group-hover:border-emerald-500/40 transition-all duration-300 flex-1 flex flex-col justify-between hover:bg-[#111826] shadow-md hover:shadow-[0_8px_25px_rgba(16,185,129,0.1)]">
                    <div>
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs font-bold font-display text-white mb-1.5 group-hover:text-emerald-300 transition-colors leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-[11px] leading-relaxed font-sans line-clamp-4">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                      <span>Phase {idx + 1}</span>
                      <span className="text-emerald-400/80">Approved</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline Mobile / Tablet: Connected Stepper */}
        <div className="lg:hidden relative border-l-2 border-emerald-500/30 ml-4 sm:ml-6 space-y-5 pl-6 sm:pl-8">
          {workflowSteps.map((step, idx) => {
            const Icon = workflowIcons[idx] || FiCheck
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="relative p-4 rounded-xl bg-[#0e1320] border border-emerald-500/20"
              >
                {/* Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-dark-bg" />

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Step {step.step}
                  </span>
                  <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-emerald-400">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-sm font-bold font-display text-white mb-1">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY WORK WITH ME? (Distinct Bento Trust Grid)
      ========================================================================= */}
      <section id="services-why-me" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
            Client Peace of Mind
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-3">
            Why Work <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">With Me?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            High accountability, direct developer communication, and modern engineering standards.
          </p>
        </div>

        {/* Bento Trust Grid: 3 Hero Columns with Asymmetric Visual Weight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Direct Access Hero Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-gradient-to-b from-[#121828] via-[#0d121f] to-[#090d16] border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                Direct Communication
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-3 mb-2 group-hover:text-cyan-300 transition-colors">
                1-on-1 Developer Partnership
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                You work directly with the developer building your site. No account managers, lost-in-translation briefs, or multi-week ticket queues.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-cyan-400 font-mono space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Instant WhatsApp Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Clear Milestone Approvals</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Technical Precision & Speed Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-gradient-to-b from-[#131b28] via-[#0d141e] to-[#090d16] border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Engineering Quality
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-3 mb-2 group-hover:text-emerald-300 transition-colors">
                Clean Code & Blazing Speed
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Built with modern React, clean component architecture, and responsive CSS. Lightweight, search engine optimized, and free of slow templates.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-emerald-400 font-mono space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Mobile-First Touch Usability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>SEO & Core Web Vitals Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Complete Handover & Zero Vendor Lock-in Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-gradient-to-b from-[#121626] via-[#0d121c] to-[#090d16] border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 group-hover:bg-teal-400 group-hover:text-slate-950 transition-all duration-300">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                Full Ownership
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-3 mb-2 group-hover:text-teal-300 transition-colors">
                Turnkey Launch & Handover
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                You receive 100% ownership of your code, repository, hosting configuration, and credentials. Full walkthroughs provided upon launch.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-teal-400 font-mono space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Domain & Hosting Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Post-Launch Support Included</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          PRICING & BILLING TRANSPARENCY (What You Pay vs. External Services)
      ========================================================================= */}
      <section id="services-pricing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#101422] to-[#0c0f18] border border-emerald-500/25 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider uppercase">
                <FiShield className="w-3.5 h-3.5 text-emerald-400" />
                No Hidden Surprises
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white">
                Pricing & Billing <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Transparency</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Clear distinction between developer design & coding fees and direct third-party infrastructure renewals.
              </p>
            </div>

            {/* Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Developer Project Deliverables */}
              <div className="p-6 rounded-2xl bg-[#090d16] border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                      01
                    </div>
                    <h3 className="font-display font-bold text-white text-base">Developer Services</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Paid to Developer
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">Website Architecture & Development</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">Custom UI/UX, responsive layout, forms, performance, & database</p>
                    </div>
                    <span className="font-mono text-emerald-400 whitespace-nowrap font-medium text-[11px]">
                      One-time Project Fee
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">SSL Security Certificate</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">HTTPS security lock configured during production deployment</p>
                    </div>
                    <span className="font-mono text-emerald-400 whitespace-nowrap font-medium text-[11px]">
                      Free / Included 
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">Ongoing Maintenance & Updates</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">Feature enhancements, bug fixes, & technical health checks</p>
                    </div>
                    <span className="font-mono text-cyan-400 whitespace-nowrap font-medium text-[11px]">
                      Monthly or Annual Retainer
                    </span>
                  </div>
                </div>
              </div>

              {/* Third-Party Infrastructure (Client Direct) */}
              <div className="p-6 rounded-2xl bg-[#090d16] border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                      02
                    </div>
                    <h3 className="font-display font-bold text-white text-base">Direct Infrastructure & APIs</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Client's Own Account
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">Domain Name (.com, .in, .org)</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">You own 100% of the domain via your registrar (Hostinger, GoDaddy). Pricing varies by TLD (.com, .in, .ai and so on) and registrar renewal rates.</p>
                    </div>
                    <span className="font-mono text-green-400 whitespace-nowrap font-medium text-[11px]">
                      Varies by Extension (Annual)
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">Hosting / Server Platform</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">Hosting costs depend on your project's traffic, technical requirements, and provider. Suitable hosting plans are selected based on your business needs.</p>
                    </div>
                    <span className="font-mono text-gray-300 whitespace-nowrap font-medium text-[11px]">
                      Varies by Traffic & Provider
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">Business Email & Premium APIs</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">Optional services such as Google Workspace email, payment gateways (Razorpay/Stripe), or SMS APIs billed according to your business usage.</p>
                    </div>
                    <span className="font-mono text-gray-300 whitespace-nowrap font-medium text-[11px]">
                      Subscription / Usage-Based
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Advisory Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">
                  <strong className="text-white">Zero Vendor Lock-in:</strong> I assist you in configuring everything under your own accounts so you retain total control and credentials.
                </span>
              </div>
              <button
                onClick={() => scrollTo('services-contact')}
                className="whitespace-nowrap px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-display text-xs transition-colors flex items-center gap-1.5 self-end sm:self-auto"
              >
                <span>Inquire About Pricing</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT / START A PROJECT
      ========================================================================= */}
      <section id="services-contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="rounded-3xl bg-gradient-to-br from-[#12141f] via-[#0d0f18] to-[#12141f] border border-white/15 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Backdrops */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/15 rounded-full filter blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/15 rounded-full filter blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-accent-cyan font-mono text-xs sm:text-sm tracking-wider uppercase mb-2">
                  Start Your Project
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
                  Have a Project <span className="gradient-text">in Mind?</span>
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Tell me about your business and what you want to build. Let's discuss your requirements and find the right solution.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <p className="text-xs uppercase font-mono tracking-wider text-gray-400 font-semibold">
                  Fastest Ways to Reach Me
                </p>

                <a
                  href="https://wa.me/919711669908?text=Hi%20Tushar!%20I%20want%20to%20discuss%20a%20website%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl glass border border-emerald-500/30 hover:border-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10 text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500 text-white flex-shrink-0">
                    <SiWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      Chat on WhatsApp
                    </p>
                    <p className="text-xs text-gray-400">+91-9711669908 (Instant response)</p>
                  </div>
                </a>

                <a
                  href="mailto:tsharmak10@gmail.com?subject=Freelance%20Project%20Inquiry"
                  className="flex items-center gap-3.5 p-4 rounded-xl glass border border-white/10 hover:border-accent-cyan/50 text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-accent-blue/20 text-accent-cyan flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors">
                      Email Directly
                    </p>
                    <p className="text-xs text-gray-400">tsharmak10@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-400 space-y-1">
                <p className="font-semibold text-gray-300">Working Terms & Commitments:</p>
                <p>• Scope defined upfront with milestone checkpoints</p>
                <p>• Deployment, domain setup, & handover support included</p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-[#10121a]/90 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold font-display text-white mb-6">
                Project Enquiry Form
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="user_name" className="block text-xs font-mono text-gray-300 mb-2">
                      Your Name / Business *
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan text-sm transition-colors"
                      placeholder="e.g. Acme Studio"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-xs font-mono text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan text-sm transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="project_type" className="block text-xs font-mono text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="project_type"
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#171a25] border border-white/10 text-white focus:outline-none focus:border-accent-cyan text-sm transition-colors cursor-pointer"
                    >
                      <option value="Business Website Development">Business Website Development</option>
                      <option value="E-commerce Website Development">E-commerce Website Development</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="Website Improvement and Maintenance">Website Improvement and Maintenance</option>
                      <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget_range" className="block text-xs font-mono text-gray-300 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget_range"
                      name="budget_range"
                      value={formData.budget_range}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#171a25] border border-white/10 text-white focus:outline-none focus:border-accent-cyan text-sm transition-colors cursor-pointer"
                    >
                      <option value="Under $500 / < ₹25k">Under $500 / &lt; ₹25k</option>
                      <option value="$500 - $1,000 / ₹25k - ₹50k">$500 - $1,000 / ₹25k - ₹50k</option>
                      <option value="$1,000 - $2,500 / ₹50k - ₹1.5L">$1,000 - $2,500 / ₹50k - ₹1.5L</option>
                      <option value="$2,500+ / ₹1.5L+">$2,500+ / ₹1.5L+</option>
                      <option value="Flexible / To be discussed">Flexible / To be discussed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan text-sm transition-colors resize-none"
                    placeholder="Tell me about what you are building, timeline expectations, reference websites, or target launch date..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm flex items-center gap-3 ${
                      submitStatus === 'success'
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                        : 'bg-rose-500/20 border border-rose-500/40 text-rose-300'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>
                      {submitStatus === 'success'
                        ? 'Thank you! Your inquiry has been sent directly to Tushar. I will review your requirements and respond within 24 hours.'
                        : 'Failed to send inquiry via automated form. Please reach out directly on WhatsApp or Email above!'}
                    </span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink text-white rounded-xl font-semibold shadow-lg shadow-accent-blue/20 hover:shadow-accent-purple/30 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Your Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Discuss My Project</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDY POPUP MODAL (Reused & customized for client transparency)
      ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass bg-[#0d0f17]/95 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                    Client Case Study • {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-gray-400">{selectedProject.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                  aria-label="Close Case Study"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Main Screenshot */}
              <div className="rounded-xl overflow-hidden mb-6 border border-white/10 bg-black">
                <img
                  src={selectedProject.screenshot}
                  alt={selectedProject.title}
                  className="w-full h-72 sm:h-96 object-cover object-top"
                />
              </div>

              {/* Details */}
              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="font-semibold uppercase text-xs tracking-wider mb-2 text-accent-cyan">
                    Project Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.overview}</p>
                </div>

                <div>
                  <h4 className="font-semibold uppercase text-xs tracking-wider mb-2 text-accent-cyan">
                    Client Requirements & Scope
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.clientRequirements}</p>
                </div>

                <div>
                  <h4 className="font-semibold uppercase text-xs tracking-wider mb-2 text-accent-cyan">
                    My Role & Specific Deliverables
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.myRole}</p>
                </div>

                <div>
                  <h4 className="font-semibold uppercase text-xs tracking-wider mb-2 text-accent-cyan">
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-accent-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-center flex items-center justify-center gap-2"
                  >
                    <span>Visit Live Website</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-xl glass hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-center transition-colors"
                    >
                      View GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FreelanceServices
