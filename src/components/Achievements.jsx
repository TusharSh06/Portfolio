import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiStar } from 'react-icons/fi'

const Achievements = () => {
  const testimonials = [
    {
      text: "Tushar showed exceptional talent and dedication during his bootcamp. His final project exceeded all expectations in both UI and backend architecture.",
      author: "Bootcamp Instructor",
      role: "K.R. Mangalam University",
    },
    {
      text: "An incredibly fast learner. He adapted to complex MERN stack paradigms within weeks and consistently delivered clean, scalable code.",
      author: "Technical Mentor",
      role: "Freelance",
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-4">Milestones</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Achievements & <span className="gradient-text">Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl relative"
            >
              <FiStar className="absolute top-8 right-8 text-accent-blue/20 w-16 h-16" />
              <p className="text-lg text-gray-300 italic mb-8 relative z-10">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold font-display">{test.author}</h4>
                  <p className="text-sm font-mono text-accent-cyan">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
