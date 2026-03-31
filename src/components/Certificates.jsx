import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiExternalLink, FiCalendar, FiClock } from 'react-icons/fi'
import LazyImage from './LazyImage'

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [certificateImages, setCertificateImages] = useState(() => {
    // Load saved images from localStorage
    const saved = localStorage.getItem('certificateImages');
    return saved ? JSON.parse(saved) : {};
  })

  const certificates = [
     {
      id: 3,
      title: 'Project Completion Certificate',
      issuer: 'Projexa AI , K.R. Mangalam University',
      date: '2025',
      category: 'certification',
      duration: '6 Months',
      description: 'Successfully completed the ExpressKart full-stack e-commerce project using the Projexa AI platform, implementing user, vendor, and admin workflows with the MERN stack.',
      image: ["/images/projexa.jpg",],
      url: 'https://drive.google.com/file/d/1hyz5WhXCfF7Zb6EE_EGbU7Gp4D3O8qjo/view',
      featured: true,
      skills: ['MERN', 'Frontend Development', 'Web Development']
    },
    {
      id: 1,
      title: 'Full Stack Bootcamp & Internship (IPRP 2.0)',
      issuer: 'K.R. Mangalam University',
      date: '2025',
      category: 'course',
      duration: '40 Days',
      description: 'Comprehensive bootcamp covering full-stack development technologies and best practices.',
      image: ["/images/mern.jpg",],
      url: 'https://drive.google.com/file/d/1QOpzEVIcHZNm0w_kXGDRAdi8TIi_tlD0/view',
      featured: false,
      skills: ['Full Stack', 'MERN', 'RESTful APIs', 'User Authencation','Web Development']
    },
    {
      id: 2,
      title: 'Bootcamp on Drone Technology',
      issuer: 'IIT (Indian Institute of Technology Mandi)',
      date: '2023',
      category: 'course',
      duration: '1 Week',
      description: 'Specialized bootcamp on drone technology and its applications in modern technology.',
      image: ["/images/drone.jpg",],
      url: "https://drive.google.com/file/d/19GA1i7_mMcNvhc7aP4qH9HJiyTcQ8WgE/view",
      featured: false,
      skills: ['Drone Technology', 'Innovation', 'Technology']
    },
  ]

  // ===== DUMMY CERTIFICATES FOR FUTURE USE =====
  // Uncomment and customize these certificates when you're ready to add them
  
  /*
  const dummyCertificates = [
    {
      id: 3,
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2024',
      category: 'certification',
      duration: '6 Months',
      description: 'Comprehensive React development certification covering modern React patterns, hooks, and best practices.',
      image: '/api/placeholder/300/200',
      url: 'https://certificates.meta.com/react-developer',
      featured: false,
      skills: ['React', 'JavaScript', 'Frontend Development']
    },
    {
      id: 4,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      category: 'certification',
      duration: '3 Months',
      description: 'AWS Cloud Practitioner certification covering cloud concepts, security, and basic AWS services.',
      image: '/api/placeholder/300/200',
      url: 'https://aws.amazon.com/certification/',
      featured: false,
      skills: ['AWS', 'Cloud Computing', 'DevOps']
    },
    {
      id: 5,
      title: 'Hackathon Winner - Tech Innovation',
      issuer: 'Microsoft Student Partners',
      date: '2023',
      category: 'hackathon',
      duration: '48 Hours',
      description: 'Won first place in Microsoft Student Partners hackathon for innovative tech solution.',
      image: '/api/placeholder/300/200',
      url: 'https://microsoft.com/student-partners',
      featured: false,
      skills: ['Innovation', 'Problem Solving', 'Team Work']
    },
    {
      id: 6,
      title: 'MongoDB Database Administrator',
      issuer: 'MongoDB University',
      date: '2023',
      category: 'certification',
      duration: '4 Months',
      description: 'MongoDB DBA certification covering database administration, optimization, and security.',
      image: '/api/placeholder/300/200',
      url: 'https://university.mongodb.com/',
      featured: false,
      skills: ['MongoDB', 'Database', 'NoSQL']
    },
    {
      id: 7,
      title: 'Best Student Developer Award',
      issuer: 'Computer Science Department',
      date: '2023',
      category: 'award',
      duration: 'Academic Year',
      description: 'Recognized as the best student developer for outstanding project work and technical skills.',
      image: '/api/placeholder/300/200',
      url: null,
      featured: false,
      skills: ['Leadership', 'Technical Excellence', 'Innovation']
    }
  ]
  */

  // ===== STEP-BY-STEP INSTRUCTIONS TO SHOW ALL CERTIFICATES =====
  // 
  // STEP 1: Uncomment the dummyCertificates array above (remove /* and */)
  // 
  // STEP 2: Uncomment this line to merge all certificates:
  // const allCertificates = [...certificates, ...dummyCertificates]
  // 
  // STEP 3: Replace 'certificates' with 'allCertificates' in these locations:
  // - Line 40: categories array (update counts)
  // - Line 45: filteredCertificates filter
  // - Line 200: certificates.map() → allCertificates.map()
  // 
  // STEP 4: Update categories to include new certificate types:
  // - Add 'certification', 'hackathon', 'award' categories
  // 
  // STEP 5: Customize each dummy certificate with your real data
  // - Update titles, issuers, descriptions
  // - Change URLs to actual certificate links
  // - Modify skills to match your expertise
  // - Update dates and durations

  const categories = [
    { id: 'all', label: 'All', count: certificates.length },
    { id: 'course', label: 'Bootcamps', count: certificates.filter(c => c.category === 'course').length },
    { id: 'certification', label: 'Certifications', count: certificates.filter(c => c.category === 'certification').length },
    { id: 'hackathon', label: 'Hackathons', count: certificates.filter(c => c.category === 'hackathon').length },
    { id: 'award', label: 'Awards', count: certificates.filter(c => c.category === 'award').length }
  ]

  const filteredCertificates = certificates.filter(cert => 
    activeCategory === 'all' || cert.category === activeCategory
  )

  const getCategoryColor = (category) => {
    switch (category) {
      case 'course': return 'from-blue-500 to-blue-600'
      case 'certification': return 'from-green-500 to-green-600'
      case 'hackathon': return 'from-purple-500 to-purple-600'
      case 'award': return 'from-yellow-500 to-yellow-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'course': return '📚'
      case 'certification': return '🏆'
      case 'hackathon': return '⚡'
      case 'award': return '🎖️'
      default: return '📜'
    }
  }

  // Function to update certificate image
  const updateCertificateImage = (certId, imageUrl) => {
    const newImages = { ...certificateImages, [certId]: imageUrl };
    setCertificateImages(newImages);
    localStorage.setItem('certificateImages', JSON.stringify(newImages));
  }



  // Function to get image for a certificate
  const getCertificateImage = (cert) => {
    // First check if user has set a custom image
    if (certificateImages[cert.id]) {
      return certificateImages[cert.id];
    }
    // Then check if certificate has a default image
    if (cert.image && cert.image !== '/api/placeholder/300/200') {
      return cert.image;
    }
    // Return null to show placeholder
    return null;
  }

  return (
    <section id="certificates" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating Badge Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-16 text-accent-cyan opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          <FiAward className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 left-20 text-accent-purple opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <FiAward className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 right-1/3 text-accent-blue opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <FiAward className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-accent-pink opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <FiAward className="w-8 h-8" />
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
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-4">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition of my continuous learning journey and accomplishments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/25'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {category.label}
              <span className="ml-2 px-2 py-0.5 bg-white/10 rounded-full text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        

        {/* Certificates Grid */}
        {/* CHANGE: filteredCertificates.map → allCertificates.filter(...).map when adding dummy certificates */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`modern-card overflow-hidden ${
                  cert.featured ? 'ring-2 ring-accent-cyan/50' : ''
                }`}
              >
                {/* Certificate Header */}
                <div className="relative">
                  {/* Certificate Image or Placeholder */}
                  {getCertificateImage(cert) ? (
                    <div className="w-full h-28 overflow-hidden bg-gray-900">
                      <LazyImage 
                        src={getCertificateImage(cert)} 
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          updateCertificateImage(cert.id, null);
                        }}
                      />
                    </div>
                  ) : (
                    <div className={`w-full h-28 bg-gradient-to-br ${getCategoryColor(cert.category)} flex items-center justify-center`}>
                      <span className="text-4xl">{getCategoryIcon(cert.category)}</span>
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {cert.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  

                  
                                     {/* Image Management Buttons */}
                   <div className="absolute top-4 left-4 flex gap-2">
                     {/* Add/Update Image Button - Link Option */}
                     <button
                       onClick={() => {
                         const imageUrl = prompt('Enter image URL for this certificate:');
                         if (imageUrl && imageUrl.trim()) {
                           updateCertificateImage(cert.id, imageUrl.trim());
                         }
                       }}
                       className="bg-white/90 dark:bg-secondary-800/90 hover:bg-white dark:hover:bg-secondary-700 rounded-lg p-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                       title="Add/Update Certificate Image"
                     >
                       <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                     </button>
                     

                     
                     {/* Remove Image Button (only show if image exists) */}
                     {getCertificateImage(cert) && (
                       <button
                         onClick={() => {
                           if (confirm('Remove this certificate image?')) {
                             updateCertificateImage(cert.id, null);
                           }
                         }}
                         className="bg-red-500/90 hover:bg-red-600 rounded-lg p-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                         title="Remove Certificate Image"
                       >
                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                         </svg>
                       </button>
                     )}
                   </div>
                </div>

                {/* Certificate Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <FiAward className="w-3 h-3" />
                      <span className="font-medium text-sm">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <FiCalendar className="w-3 h-3" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <FiClock className="w-3 h-3" />
                      <span className="text-sm">{cert.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-0.5 glass text-accent-cyan rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-200 text-sm"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              <span className="gradient-text">Learning</span> Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {certificates.length}
                </div>
                <div className="text-gray-400 font-medium text-sm">
                  Total Achievements
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {certificates.filter(c => c.category === 'course').length}
                </div>
                <div className="text-gray-400 font-medium text-sm">
                  Courses Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {certificates.filter(c => c.category === 'certification').length}
                </div>
                <div className="text-gray-400 font-medium text-sm">
                  Certifications
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {certificates.filter(c => c.featured).length}
                </div>
                <div className="text-gray-400 font-medium text-sm">
                  Featured Achievements
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Never Stop <span className="gradient-text">Learning</span>
            </h3>
            <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
              I believe in continuous improvement and staying current with industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-200"
              >
                Discuss Opportunities
              </a>
                             <a
                 href="https://github.com/TusharSh06"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200"
               >
                 View GitHub
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
