import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX, FiCode, FiArrowLeft, FiBriefcase } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isServicesPage = location.pathname === '/services'

  // Standard Portfolio Links for Homepage
  const mainNavItems = [
    { id: 'home', label: 'Home', href: '#home', isRoute: false },
    { id: 'about', label: 'About', href: '#about', isRoute: false },
    { id: 'skills', label: 'Skills', href: '#skills', isRoute: false },
    { id: 'projects', label: 'Projects', href: '#projects', isRoute: false },
    { id: 'experience', label: 'Experience', href: '#experience', isRoute: false },
    { id: 'certificates', label: 'Certificates', href: '#certificates', isRoute: false },
    { id: 'contact', label: 'Contact', href: '#contact', isRoute: false },
    { id: 'services', label: 'Services', href: '/services', isRoute: true }
  ]

  // Dedicated Links for Services Page
  const servicesNavItems = [
    { id: 'services-hero', label: 'Home', href: '#services-hero', isRoute: false },
    { id: 'services-offer', label: 'Services', href: '#services-offer', isRoute: false },
    { id: 'services-portfolio', label: 'Client Work', href: '#services-portfolio', isRoute: false },
    { id: 'services-process', label: 'Process', href: '#services-process', isRoute: false },
    { id: 'services-why-me', label: 'Why Me', href: '#services-why-me', isRoute: false },
    { id: 'services-pricing', label: 'Pricing', href: '#services-pricing', isRoute: false },
    { id: 'services-contact', label: 'Contact', href: '#services-contact', isRoute: false }
  ]

  const currentNavItems = isServicesPage ? servicesNavItems : mainNavItems

  useEffect(() => {
    const handleScroll = () => {
      const targetSections = currentNavItems
        .filter((item) => !item.isRoute)
        .map((item) => document.getElementById(item.id))
      const scrollPos = window.scrollY + 140

      targetSections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const matchedItem = currentNavItems.filter((i) => !i.isRoute)[index]
            if (matchedItem) {
              setActiveSection(matchedItem.id)
            }
          }
        }
      })

      setScrolled(window.scrollY > 40)
    }

    const handleScrollClose = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scroll', handleScrollClose, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScrollClose)
    }
  }, [isOpen, isServicesPage, currentNavItems])

  const handleNavClick = (item) => {
    setIsOpen(false)

    if (item.isRoute) {
      navigate(item.href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (isServicesPage && !item.href.startsWith('#')) {
      navigate('/' + item.href)
      return
    }

    const element = document.querySelector(item.href) || document.getElementById(item.href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'glass-strong py-2.5 shadow-lg shadow-black/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo / Brand Header */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link 
              to="/" 
              onClick={() => {
                if (!isServicesPage) {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="flex items-center gap-2 group"
            >
              <div className={`p-2 rounded-lg ${
                isServicesPage
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  : 'bg-gradient-to-r from-accent-blue to-accent-purple'
              }`}>
                {isServicesPage ? (
                  <FiBriefcase className="w-5 h-5 text-slate-950 font-bold" />
                ) : (
                  <FiCode className="w-5 h-5 text-white" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Tushar Sharma
                </span>
                {isServicesPage && (
                  <span className="text-[10px] font-mono text-emerald-400 -mt-1 font-semibold tracking-wider uppercase">
                    Freelance Studio
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {currentNavItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? isServicesPage
                        ? 'text-white bg-emerald-500/20 border border-emerald-400/30'
                        : 'text-white bg-blue-500/20 border border-cyan-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {item.id === 'services' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Quick Switch to Main Portfolio button when on /services */}
            {isServicesPage && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/40 text-xs font-mono text-gray-200 hover:text-white transition-all duration-300"
                title="Switch back to Main Portfolio"
              >
                <FiArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
                <span>Main Portfolio</span>
              </motion.button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl glass text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'open' : 'closed'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="p-4 space-y-2">
              
              {/* Mobile Portfolio Switcher Link when on /services */}
              {isServicesPage && (
                <button
                  onClick={() => {
                    setIsOpen(false)
                    navigate('/')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between mb-3"
                >
                  <span className="flex items-center gap-2">
                    <FiArrowLeft className="w-4 h-4" />
                    <span>Switch to Main Portfolio</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20">Home</span>
                </button>
              )}

              {currentNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150 flex items-center justify-between ${
                    activeSection === item.id
                      ? isServicesPage
                        ? 'text-white bg-emerald-500/20 border border-emerald-400/30'
                        : 'text-white bg-blue-500/20 border border-cyan-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'services' && (
                    <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      Hire Me
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
