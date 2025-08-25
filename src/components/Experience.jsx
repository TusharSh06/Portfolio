import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Student Developer',
      company: 'Self-Learning & Projects',
      location: 'New Delhi, India',
      period: '2022 - Present',
      type: 'Student',
      description: 'Currently pursuing B.Tech in Computer Science while building full-stack projects and learning modern web technologies.',
      achievements: [
        'Built Triplane - A full-stack travel booking platform with MERN stack',
        'Developed TechGather - An event management platform with role-based access',
        'Learning and implementing JWT authentication, REST APIs, and modern UI/UX',
        'Participating in bootcamps and workshops to enhance skills'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
      companyUrl: null,
      featured: true
    }
  ]

  // ===== DUMMY EXPERIENCES FOR FUTURE USE =====
  // Uncomment and customize these experiences when you're ready to add them
  
  /*
  const dummyExperiences = [
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'Tech Startup',
      location: 'New Delhi, India',
      period: '2024 - Present',
      type: 'Internship',
      description: 'Working on modern web applications using React, TypeScript, and modern CSS frameworks. Collaborating with design and backend teams.',
      achievements: [
        'Developed responsive UI components for the main product',
        'Implemented state management using Redux Toolkit',
        'Optimized application performance and accessibility',
        'Participated in code reviews and team meetings'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Git', 'Jest'],
      companyUrl: 'https://company-website.com',
      featured: false
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      period: '2023 - 2024',
      type: 'Freelance',
      description: 'Built custom web applications for various clients including e-commerce sites, business dashboards, and portfolio websites.',
      achievements: [
        'Delivered 5+ client projects on time and within budget',
        'Implemented secure authentication and payment systems',
        'Created responsive designs for mobile and desktop',
        'Maintained and updated existing client applications'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
      companyUrl: null,
      featured: false
    },
    {
      id: 4,
      title: 'Backend Developer',
      company: 'Open Source Contributor',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Volunteer',
      description: 'Contributing to open source projects and building backend APIs. Learning advanced database design and system architecture.',
      achievements: [
        'Contributed to 3+ open source projects',
        'Built RESTful APIs with proper documentation',
        'Implemented database optimization strategies',
        'Mentored junior developers in the community'
      ],
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Swagger', 'Jest'],
      companyUrl: 'https://github.com/yourusername',
      featured: false
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      company: 'Design Agency',
      location: 'New Delhi, India',
      period: '2022 - 2023',
      type: 'Part-time',
      description: 'Designed user interfaces and user experiences for web and mobile applications. Collaborated with development teams.',
      achievements: [
        'Designed 10+ mobile and web application interfaces',
        'Created design systems and component libraries',
        'Conducted user research and usability testing',
        'Improved conversion rates by 25% through better UX'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'User Research', 'Prototyping'],
      companyUrl: 'https://design-agency.com',
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'Cloud Platform',
      location: 'Remote',
      period: '2024 - Present',
      type: 'Contract',
      description: 'Managing cloud infrastructure, CI/CD pipelines, and deployment automation for multiple client projects.',
      achievements: [
        'Set up automated deployment pipelines for 8+ projects',
        'Reduced deployment time from 2 hours to 15 minutes',
        'Implemented monitoring and logging solutions',
        'Managed cloud costs and optimized resource usage'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Prometheus'],
      companyUrl: 'https://cloud-platform.com',
      featured: false
    }
  ]
  */

  // ===== STEP-BY-STEP INSTRUCTIONS TO SHOW ALL EXPERIENCES =====
  // 
  // STEP 1: Uncomment the dummyExperiences array above (remove /* and */)
  // 
  // STEP 2: Uncomment this line to merge all experiences:
  // const allExperiences = [...experiences, ...dummyExperiences]
  // 
  // STEP 3: Replace 'experiences' with 'allExperiences' in these locations:
  // - Line 130: stats array (update counts)
  // - Line 200: experiences.map() → allExperiences.map()
  // 
  // STEP 4: Update stats to reflect more experiences:
  // - Projects Built: '2+' → '5+'
  // - Technologies Learned: '10+' → '25+'
  // - Bootcamps Completed: '2' → '5+'
  // - Always Learning: '100%' → '100%'
  // 
  // STEP 5: Customize each dummy experience with your real data
  // - Update company names, titles, descriptions
  // - Change technologies to match your skills
  // - Update periods and locations
  // - Modify achievements to reflect your work

  const stats = [
    { label: 'Projects Built', value: '2+' },        // CHANGE TO: '5+' when adding dummy experiences
    { label: 'Technologies Learned', value: '10+' }, // CHANGE TO: '25+' when adding dummy experiences
    { label: 'Bootcamps Completed', value: '2' },   // CHANGE TO: '5+' when adding dummy experiences
    { label: 'Always Learning', value: '100%' }     // KEEP AS: '100%'
  ]

  return (
    <section id="experience" className="py-20 light-section-cool dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Learning Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My learning journey, projects built, and the skills I'm developing as a student developer
          </p>
        </motion.div>

                 {/* Experience Timeline */}
         {/* CHANGE: experiences.map → allExperiences.map when adding dummy experiences */}
         <div className="space-y-8">
           {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${
                experience.featured ? 'bg-white dark:bg-secondary-700 shadow-xl rounded-2xl p-8' : 'bg-white dark:bg-secondary-700 rounded-xl p-6 shadow-lg'
              }`}
            >
              {experience.featured && (
                <div className="absolute -top-3 left-8 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Current Focus
                </div>
              )}

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left side - Company info */}
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold ${
                        experience.featured 
                          ? 'bg-gradient-to-br from-primary-500 to-purple-600' 
                          : 'bg-gradient-to-br from-gray-500 to-gray-600'
                      }`}>
                        {experience.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <FiBriefcase className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                          {experience.companyUrl && (
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                            >
                              <FiExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <FiMapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <FiCalendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          experience.type === 'Full-time' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : experience.type === 'Internship'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        }`}>
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Description and achievements */}
                <div className="lg:col-span-2">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-secondary-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Experience Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Experience
