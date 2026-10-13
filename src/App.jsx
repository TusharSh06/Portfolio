import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaReact } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import FreelanceServices from './components/FreelanceServices'
import RouteScrollHandler from './components/RouteScrollHandler'

function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-bg">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 mx-auto text-[#61DAFB] flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(97,218,251,0.5)]"
          >
            <FaReact className="w-full h-full" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl font-semibold text-accent-cyan font-mono"
          >
            Loading Portfolio...
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-4 mx-auto"
          />
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteScrollHandler />
        <div className="min-h-screen w-full bg-dark-bg text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<FreelanceServices />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
