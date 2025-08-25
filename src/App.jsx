import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-secondary-900 dark:to-secondary-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-xl font-semibold text-primary-600 dark:text-primary-400">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
