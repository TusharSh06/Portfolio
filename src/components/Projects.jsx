import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiFilter,
  FiX,
} from "react-icons/fi";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      id: 1,
      title: "ExpressKart – Full Stack E-Commerce Platform",
      subtitle: "Local Vendors & Street Shopping Experience",
      description:
        "A MERN stack–based e-commerce platform designed to bring local businesses online. Features separate user, vendor, and admin portals with secure authentication, product and order management, and a responsive, performance-optimized UI.",
      detailedDescription: `ExpressKart is a revolutionary e-commerce platform designed to bring local kirana stores, artisans, and small businesses online. This comprehensive application provides a seamless street-shopping experience while empowering local vendors with digital tools and reducing operational costs.

Key Features:
• Multi-Portal System: Separate interfaces for vendors, users, and administrators with role-based access control
• Vendor Management: Complete vendor registration, product catalog, and inventory management system 
• AI-Powered Personalization: Nearby vendor discovery, product recommendations, and consumer behavior analysis
• Payment & Security: Secure payment gateway integration with order tracking and notifications
• User Experience: Wishlist functionality, reviews, ratings, and mobile-first responsive design
• Admin Dashboard: Comprehensive analytics, reporting, and promotional campaign management
• Trust & Transparency: Low commission structure focused on affordability and vendor success

Technical Highlights:
• Frontend: React.js with modern hooks and context API for dynamic user interfaces
• Backend: Node.js with Express.js framework for robust API development
• Database: MongoDB with Mongoose ODM for flexible data modeling
• Authentication: JWT-based secure authentication system with role management
• AI Integration: Machine learning algorithms for personalization and recommendations
• Payment Gateway: Secure payment processing and order management
• Real-time Features: Live notifications and order status updates
• Mobile Optimization: Progressive web app features for street-shopping experience

Project Impact:
This project demonstrates advanced full-stack development capabilities, AI integration, complex multi-tenant architecture, and real-world problem-solving. It showcases the ability to build scalable e-commerce solutions that benefit both businesses and consumers while addressing local market needs.`,
             images: [
         "/images/expresskart.png",
         "/images/expresskart-2.png",
         "/images/expresskart-3.png",
         "/images/expresskart-4.png",
         "/images/expresskart-5.png",
         "/images/expresskart-6.png"

       ], // Add your ExpressKart images (up to 5)
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        // "AI/ML",
        // "Payment Gateway",
        // "Real-time Updates",
      ],
      category: "fullstack",
      github: "https://github.com/TusharSh06/ExpressKart", // Update with your actual repo
      live: "https://expresskart.vercel.app/", // Update with your actual live URL
      featured: true,
    },
    {
      id: 2,
      title: "Triplane – Travel Agency Web Application",
      subtitle: "Your Gateway to Adventure",
      description:
        "A modern, full-stack travel agency web application built with the MERN stack. Features include user authentication, package browsing, booking system, admin dashboard, and image management with Cloudinary integration. Deployed on Vercel (frontend) and Render (backend).",
      detailedDescription: `Triplane is a comprehensive travel agency web application that revolutionizes the way users plan and book their travel experiences. Built with the MERN stack, this application provides a seamless platform for both travelers and travel agents.

Key Features:
• User Authentication & Authorization: Secure JWT-based authentication system with role-based access control (User, Agent, Admin)
• Package Management: Browse through curated travel packages with detailed itineraries, pricing, and availability
• Booking System: Real-time booking functionality with confirmation emails and booking history
• Admin Dashboard: Comprehensive admin panel for managing users, packages, and bookings
• Image Management: Cloudinary integration for efficient image upload and storage
• Responsive Design: Mobile-first approach ensuring perfect experience across all devices

Technical Highlights:
• Frontend: React.js with modern hooks and context API
• Backend: Node.js with Express.js framework
• Database: MongoDB with Mongoose ODM
• Authentication: JWT tokens with bcrypt password hashing
• File Upload: Multer middleware for image handling
• Deployment: Vercel (Frontend) + Render (Backend)

Project Impact:
This project demonstrates full-stack development capabilities, database design, API development, and modern web technologies. It showcases real-world problem-solving skills and attention to user experience.`,
             images: [
         "/images/triplane.png",
         "/images/triplane-1.png",
         "/images/triplane-2.png",
         "/images/triplane-3.png",
         "/images/triplane-4.png",
         "/images/triplane-5.png"
       ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "Multer",
        "bcryptjs",
      ],
      category: "fullstack",
      github: "https://github.com/TusharSh06/Triplane",
      live: "https://triplane-rho.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "TechGather – Event Management Platform",
      subtitle: "A Smart Way to Connect",
      description:
        "A full-stack event management platform enabling users to create, join, and manage events with calendar visualization. Features responsive UI with dark/light mode and comprehensive event management. Deployed on Vercel and Render.",
      detailedDescription: `TechGather is a comprehensive event management platform designed to streamline the process of organizing and participating in tech events, meetups, and conferences. This full-stack application provides an intuitive interface for event creators and attendees alike.

Key Features:
• Event Creation & Management: Create detailed events with descriptions, dates, locations, and capacity limits
• Calendar Integration: FullCalendar.js integration for intuitive date selection and event visualization
• User Authentication: Secure user registration and login system with profile management
• Event Discovery: Browse and search through available events with filtering options
• Responsive Design: Dark/light mode toggle with mobile-first responsive design
• Real-time Updates: Live updates for event changes and registrations

Technical Highlights:
• Frontend: React.js with Tailwind CSS for modern, responsive UI
• Backend: Node.js with Express.js REST API
• Database: MongoDB with Mongoose for flexible data modeling
• Calendar: FullCalendar.js for professional event scheduling
• Styling: Tailwind CSS with custom dark/light theme system
• Deployment: Vercel (Frontend) + Render (Backend)

Project Impact:
This project showcases event management system design, calendar integration, responsive UI development, and full-stack application architecture. It demonstrates the ability to create user-friendly platforms for real-world use cases.`,
             images: [
         "/images/techgather.png",
         "/images/techgather-1.png",
         "/images/techgather-2.png",
         "/images/techgather-3.png",
         "/images/techgather-4.png"
       ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "FullCalendar.js",
      ],
      category: "fullstack",
      github: "https://github.com/TusharSh06/Techgather",
      live: "https://techgather.vercel.app/",
      featured: true,
    },
    {
      id: 4,
      title: "Portfolio Website",
      subtitle: "Showcase Your Work",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark/light mode, mobile-first design, and comprehensive sections for showcasing skills, projects, and experience.",
      detailedDescription: `This portfolio website represents a modern, professional showcase of my skills and projects. Built with cutting-edge web technologies, it demonstrates proficiency in frontend development, responsive design, and user experience optimization.

Key Features:
• Responsive Design: Mobile-first approach ensuring perfect experience across all devices
• Dark/Light Mode: Dynamic theme switching with smooth transitions and persistent preferences
• Smooth Animations: Framer Motion integration for engaging, performant animations
• Comprehensive Sections: Home, About, Skills, Projects, Experience, Certificates, and Contact
• Interactive Elements: Smooth scrolling, hover effects, and engaging user interactions
• Performance Optimized: Optimized for fast loading and smooth user experience

Technical Highlights:
• Frontend: React.js with modern hooks and functional components
• Styling: Tailwind CSS for utility-first, responsive design
• Animations: Framer Motion for smooth, performant animations
• Icons: React Icons for scalable vector icons
• Responsive: Mobile-first design with breakpoint optimization
• Performance: Optimized transitions and animations

Project Impact:
This portfolio demonstrates modern web development practices, responsive design principles, and attention to user experience. It serves as both a showcase of skills and a testament to professional development standards.`,
             images: [
         "/images/portfolio.png",
         "/images/portfolio-1.png",
         "/images/portfolio-2.png",
         "/images/portfolio-3.png",
         "/images/portfolio-4.png"
       ], // Add your portfolio images later (up to 5)
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
        "Dark/Light Mode",
      ],
      category: "frontend",
      github: "https://github.com/TusharSh06/portfolio", // Update with your actual repo
      live: "https://tushar06.vercel.app/", // Update with your actual live URL
      featured: false,
    },
  ];

  // ===== DUMMY PROJECTS FOR FUTURE USE =====
  // Uncomment and customize these projects when you're ready to add them

  /*
   const dummyProjects = [
     {
       id: 5,
       title: 'E-Commerce Platform',
      subtitle: 'Modern Online Shopping Experience',
      description: 'A comprehensive e-commerce platform with product catalog, shopping cart, user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
             detailedDescription: `A full-featured e-commerce platform designed to provide a seamless online shopping experience. This application demonstrates advanced web development concepts including payment processing, inventory management, and user experience optimization.

**Key Features:**
• Product Management: Comprehensive product catalog with categories, search, and filtering
• Shopping Cart: Persistent cart functionality with quantity management and price calculations
• User Authentication: Secure user registration, login, and profile management
• Payment Integration: Stripe payment gateway for secure online transactions
• Admin Dashboard: Complete admin panel for managing products, orders, and users
• Order Management: Order tracking, history, and status updates
• Responsive Design: Mobile-first approach ensuring perfect experience across all devices

**Technical Highlights:**
• Frontend: React.js with Redux for state management
• Backend: Node.js with Express.js REST API
• Database: MongoDB with Mongoose ODM
• Payment: Stripe integration for secure transactions
• State Management: Redux Toolkit for efficient state handling
• Styling: Tailwind CSS for modern, responsive design
• Authentication: JWT-based secure authentication system

**Project Impact:**
This project showcases full-stack e-commerce development, payment gateway integration, and complex state management. It demonstrates the ability to build production-ready applications with real-world functionality.`,
             images: [
         '/images/ecommerce.png',
         '/images/ecommerce-2.png',
         '/images/ecommerce-3.png',
         '/images/ecommerce-4.png',
         '/images/ecommerce-5.png'
       ], // Add your images (up to 5)
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://your-ecommerce.vercel.app/',
      featured: false
    },
         {
       id: 6,
       title: 'Task Management App',
      subtitle: 'Organize Your Work Efficiently',
      description: 'A productivity app for managing tasks, projects, and team collaboration. Features include task creation, deadline tracking, team assignments, and progress visualization.',
             detailedDescription: `A comprehensive task management application designed to streamline productivity and team collaboration. This application helps users organize their work, track progress, and manage team projects effectively.

**Key Features:**
• Task Creation: Create, edit, and organize tasks with detailed descriptions and priorities
• Project Management: Organize tasks into projects with deadlines and milestones
• Team Collaboration: Assign tasks to team members and track progress
• Real-time Updates: Socket.io integration for live collaboration and notifications
• Progress Tracking: Visual progress indicators and completion statistics
• Deadline Management: Automated reminders and deadline tracking
• Responsive Interface: Material-UI components for professional appearance

**Technical Highlights:**
• Frontend: React.js with TypeScript for type safety
• Backend: Node.js with Express.js API
• Database: PostgreSQL for relational data management
• Real-time: Socket.io for live updates and collaboration
• UI Framework: Material-UI for professional design components
• Type Safety: TypeScript for better code quality and maintainability
• Authentication: Secure user authentication and authorization

**Project Impact:**
This project demonstrates advanced frontend development with TypeScript, real-time communication, and complex data relationships. It showcases the ability to build collaborative productivity tools.`,
             images: [
         '/images/taskapp.png',
         '/images/taskapp-2.png',
         '/images/taskapp-3.png',
         '/images/taskapp-4.png',
         '/images/taskapp-5.png'
       ], // Add your images (up to 5)
      technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Material-UI'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/taskapp',
      live: 'https://your-taskapp.vercel.app/',
      featured: false
    },
         {
       id: 7,
       title: 'Weather Dashboard',
      subtitle: 'Real-time Weather Information',
      description: 'A weather application that provides current conditions, forecasts, and weather maps. Integrates with multiple weather APIs and features location-based services.',
             detailedDescription: `A comprehensive weather dashboard application that provides real-time weather information, forecasts, and interactive weather maps. This application demonstrates API integration, data visualization, and location-based services.

**Key Features:**
• Current Weather: Real-time weather conditions with detailed metrics
• Forecast Data: 5-day and hourly weather forecasts with visual charts
• Weather Maps: Interactive maps showing weather patterns and conditions
• Location Services: GPS-based location detection and manual city search
• Multiple APIs: Integration with OpenWeather API for comprehensive data
• Data Visualization: Chart.js integration for weather trend analysis
• Responsive Design: Mobile-optimized interface for all devices

**Technical Highlights:**
• Frontend: React.js with modern hooks and context API
• Weather API: OpenWeather API integration for comprehensive data
• Charts: Chart.js for data visualization and weather trends
• Geolocation: Browser geolocation API for location detection
• Responsive: Tailwind CSS for mobile-first design
• State Management: React Context for global state handling
• Error Handling: Robust error handling for API failures

**Project Impact:**
This project showcases API integration, data visualization, and location-based services. It demonstrates the ability to work with external APIs and create informative, user-friendly dashboards.`,
             images: [
         '/images/weather.png',
         '/images/weather-2.png',
         '/images/weather-3.png',
         '/images/weather-4.png',
         '/images/weather-5.png'
       ], // Add your images (up to 5)
      technologies: ['React.js', 'OpenWeather API', 'Chart.js', 'Geolocation API', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com/yourusername/weather',
      live: 'https://your-weather.vercel.app/',
      featured: false
    },
         {
       id: 8,
       title: 'Blog Platform',
      subtitle: 'Share Your Thoughts',
      description: 'A full-featured blogging platform with markdown support, user authentication, comment system, and SEO optimization. Perfect for content creators and developers.',
             detailedDescription: `A modern, full-featured blogging platform designed for content creators, developers, and writers. This application provides a complete solution for publishing, managing, and sharing content with advanced features and SEO optimization.

**Key Features:**
• Markdown Support: Rich text editing with markdown syntax and live preview
• User Management: Secure authentication system with user profiles and roles
• Content Management: Create, edit, and organize blog posts with categories
• Comment System: Interactive commenting with moderation and notifications
• SEO Optimization: Meta tags, structured data, and search engine optimization
• Image Management: Cloudinary integration for efficient image handling
• Responsive Design: Mobile-optimized reading experience across all devices

**Technical Highlights:**
• Framework: Next.js for server-side rendering and SEO benefits
• Database: MongoDB with Mongoose for flexible content modeling
• Content: Markdown support with rich text editing capabilities
• Authentication: JWT-based secure user authentication system
• Images: Cloudinary integration for optimized image management
• Styling: Tailwind CSS for modern, responsive design
• Performance: Next.js optimization for fast loading and SEO

**Project Impact:**
This project demonstrates modern web development with Next.js, content management systems, and SEO optimization. It showcases the ability to build professional publishing platforms.`,
             images: [
         '/images/blog.png',
         '/images/blog-2.png',
         '/images/blog-3.png',
         '/images/blog-4.png',
         '/images/blog-5.png'
       ], // Add your images (up to 5)
      technologies: ['Next.js', 'MongoDB', 'Markdown', 'JWT', 'Cloudinary', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/blog',
      live: 'https://your-blog.vercel.app/',
      featured: false
    },
         {
       id: 9,
       title: 'Portfolio Website',
      subtitle: 'Showcase Your Work',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark/light mode, and mobile-first design.',
             detailedDescription: `A professional portfolio website designed to showcase skills, projects, and experience in an engaging and modern way. This application demonstrates frontend development expertise, responsive design principles, and user experience optimization.

**Key Features:**
• Responsive Design: Mobile-first approach ensuring perfect experience across all devices
• Dark/Light Mode: Dynamic theme switching with smooth transitions and persistent preferences
• Smooth Animations: Framer Motion integration for engaging, performant animations
• Comprehensive Sections: Home, About, Skills, Projects, Experience, Certificates, and Contact
• Interactive Elements: Smooth scrolling, hover effects, and engaging user interactions
• Performance Optimized: Optimized for fast loading and smooth user experience
• Accessibility: WCAG compliant design with proper semantic markup

**Technical Highlights:**
• Frontend: React.js with modern hooks and functional components
• Styling: Tailwind CSS for utility-first, responsive design
• Animations: Framer Motion for smooth, performant animations
• Icons: React Icons for scalable vector icons
• Responsive: Mobile-first design with breakpoint optimization
• Performance: Optimized transitions and animations
• Theme: Context-based theme management with localStorage persistence

**Project Impact:**
This portfolio demonstrates modern web development practices, responsive design principles, and attention to user experience. It serves as both a showcase of skills and a testament to professional development standards.`,
             images: [
         '/images/portfolio.png',
         '/images/portfolio-2.png',
         '/images/portfolio-3.png',
         '/images/portfolio-4.png',
         '/images/portfolio-5.png'
       ], // Add your images (up to 5)
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      category: 'frontend',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio.vercel.app/',
            featured: false
     },
     {
       id: 10,
       title: 'Chat Application',
       subtitle: 'Real-time Communication',
       description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
               detailedDescription: `A modern, real-time chat application that enables seamless communication between users. This application features private messaging, group chats, and file sharing capabilities with a focus on user experience and performance.

**Key Features:**
• Private Messaging: One-on-one conversations with real-time updates
• Group Chats: Create and manage group conversations with multiple participants
• File Sharing: Upload and share various file types with size limits
• Real-time Updates: Socket.io integration for instant message delivery
• User Presence: Online/offline status indicators and typing indicators
• Message History: Persistent chat history with search functionality
• Responsive Design: Mobile-optimized interface for all devices

**Technical Highlights:**
• Frontend: React.js with modern hooks and context API
• Backend: Node.js with Express.js REST API
• Real-time: Socket.io for live communication and updates
• Database: MongoDB for message storage and user management
• Authentication: JWT-based secure user authentication
• File Upload: Multer middleware for file handling and storage
• Responsive: Mobile-first design with Tailwind CSS

**Project Impact:**
This project demonstrates real-time communication, file handling, and complex user interactions. It showcases the ability to build modern communication platforms with real-time capabilities.`,
                        images: [
           '/images/chat.png',
           '/images/chat-2.png',
           '/images/chat-3.png',
           '/images/chat-4.png',
           '/images/chat-5.png'
         ], // Add your images (up to 5)
       technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'File Upload'],
       category: 'fullstack',
       github: 'https://github.com/yourusername/chat',
       live: 'https://your-chat.vercel.app/',
       featured: false
     }
   ]
   */

     // To add these projects, uncomment the above array and merge it with your projects:
   // const allProjects = [...projects, ...dummyProjects]
   // Then replace 'projects' with 'allProjects' in the component
   // 
   // Note: Each project now supports up to 5 images for comprehensive showcasing

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
  ];

  const getCurrentImage = (project) => {
    if (project.images && project.images.length > 0) {
      return project.images[currentImageIndex[project.id] || 0];
    }
    return project.image || '/images/placeholder.png';
  };

  const handleImageChange = (projectId, direction) => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[projectId] || 0;
      const project = projects.find(p => p.id === projectId);
      if (!project || !project.images) return prev;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % project.images.length;
      } else {
        newIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
      }
      
      return { ...prev, [projectId]: newIndex };
    });
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesFilter =
        activeFilter === "all" || project.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <section id="projects" className="py-20 light-section-warm dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work, demonstrating skills in various technologies
            and problem-solving approaches
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 px-2 py-1 bg-white/20 dark:bg-black/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchTerm}-${activeFilter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                                 {/* Project Image Gallery */}
                 <div className="relative overflow-hidden">
                   <div className="relative h-64 overflow-hidden">
                                         <img
                       src={getCurrentImage(project)}
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-500 ease-out"
                     />
                    
                    {/* Image Navigation Arrows */}
                    {project.images && project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageChange(project.id, 'prev');
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageChange(project.id, 'next');
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Image Indicators */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === (currentImageIndex[project.id] || 0) 
                                ? 'bg-white' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Subtle overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 pointer-events-none">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:text-primary-600 transition-colors duration-200 pointer-events-auto"
                    >
                      <FiGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:text-primary-600 transition-colors duration-200 pointer-events-auto"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together to bring your ideas to
              life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-gray-200 dark:border-secondary-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200"
                  >
                    <FiX className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image Gallery */}
                <div className="mb-6">
                  {selectedProject.images && selectedProject.images.length > 1 ? (
                    <div className="relative">
                                                                      <img
                           src={getCurrentImage(selectedProject)}
                           alt={selectedProject.title}
                           className="w-full h-80 object-cover rounded-lg shadow-lg"
                         />
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => handleImageChange(selectedProject.id, 'prev')}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleImageChange(selectedProject.id, 'next')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [selectedProject.id]: index }))}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === (currentImageIndex[selectedProject.id] || 0) 
                                ? 'bg-white' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                                         <img
                       src={selectedProject.image || selectedProject.images?.[0]}
                       alt={selectedProject.title}
                       className="w-full h-80 object-cover rounded-lg shadow-lg"
                     />
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Details
                  </h4>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedProject.detailedDescription}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-secondary-700">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FiGithub className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
