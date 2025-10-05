import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Vital',
      description: 'Vital is a comprehensive hospital communication system built with React.js and Spring Boot, offering real-time messaging, secure authentication, and role-based coordination between doctors, nurses, and departments.',
      longDescription: 'Created a complete doctor-patient portal using React.js, Spring Boot & MySQL. Features include appointment booking, medical record management, secure role-based dashboards with JWT authentication, and API endpoints for appointments and health history access.',
      image: '/ChatGPT Image Jul 12, 2025, 11_43_27 PM.png',
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
      github: 'https://github.com/vedbora/Vital',
      demo: '#',
      category: 'Healthcare',
      features: [
        'Appointment booking system',
        'Medical record management',
        'Role-based dashboards',
        'JWT authentication',
        'Real-time notifications'
      ]
    },
    {
      id: 2,
      title: 'UniGuide',
      description: 'UniGuide is a smart student career planner built with React.js and Node.js, offering personalized roadmaps, skill tracking, and real-time progress insights to help students achieve their career goals efficiently.',
      longDescription: 'Developed comprehensive MERN-based learning system with instructor and student roles. Implemented course creation, enrollment, and progress tracking features. Secured user access using JWT & MongoDB for course content with responsive UI using React.js and Tailwind CSS.',
      image: '/ChatGPT Image Jul 12, 2025, 01_01_26 AM.png',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/vedbora/UniGuide',
      demo: '#',
      category: 'Education',
      features: [
        'Course creation & management',
        'Student enrollment system',
        'Progress tracking',
        'Interactive learning modules',
        'Instructor dashboard'
      ]
    },
    {
      id: 3,
      title: 'MindQuest',
      description: 'MindQuest is an AI-powered learning and knowledge platform built with Node.js and MySQL, designed to deliver personalized study experiences and intelligent assistance for users.',
      longDescription: 'MindQuest provides a backend-driven solution for adaptive learning. The system is powered by Node.js with Express, integrated with MySQL for data persistence, and enhanced by AI models (OpenAI + Google Generative AI) for personalized responses. It includes secure authentication middleware, predefined response templates, and guides for billing, quota management, and API integration. The platform is designed to manage users, content, and AI-driven interactions while ensuring scalability and reliability for educational use cases.',
      image: '\Mind Quest.png',
      technologies: [
        'Node.js',
        'Express.js',
        'MySQL',
        'OpenAI API',
        'Google Generative AI',
        'JWT Authentication'
      ],
      github: 'https://github.com/vedbora/MindQuest',
      demo: '#',
      category: 'Healthcare',
      features: [
        'AI-powered knowledge assistance',
        'Secure authentication system',
        'Integration with OpenAI and Google Generative AI APIs',
        'Predefined response management',
        'Billing and quota management guides',
        'MySQL-based structured data storage',
        'Scalable Node.js backend'
      ],
      role: 'Backend Developer',
      challenges: [
        'Integrating multiple AI APIs (OpenAI + Google GenAI)',
        'Managing API quota and billing efficiently',
        'Building a secure and scalable backend with authentication'
      ],
      outcomes: [
        'Developed an AI-driven learning backend',
        'Successfully integrated large language models for user interaction',
        'Delivered a stable system with secure data handling and extensible features'
      ]
    },
    {
  id: 4,
  title: 'Hospital Booking System',
  description: 'Hospital Booking System is a Java-based web application designed to simplify doctor appointments, patient management, and hospital services through an online booking platform.',
  longDescription: 'The Hospital Booking System is built using Java Servlets, JSP, and JDBC with a DAO (Data Access Object) design pattern. The backend is structured around models for Doctors, Users, and Appointments, with SQL database integration for secure and reliable data storage. It supports functionalities such as doctor registration, patient booking, and appointment scheduling. With CORS handling, session management, and servlet-based controllers, the system ensures seamless interaction between patients and healthcare providers, reducing manual scheduling and enhancing hospital efficiency.',
  image: '\Hospital Booking System.png',
  technologies: [
    'Java',
    'Servlets',
    'JSP',
    'DAO Pattern',
    'JDBC',
    'MySQL/SQL Database',
    'Maven'
  ],
  github: 'https://github.com/vedbora/Hospital-Booking-System',
  demo: 'https://hospital-booking-system-fr88.onrender.com',
  category: 'Healthcare',
  features: [
    'Patient registration and login',
    'Doctor management system',
    'Appointment booking and scheduling',
    'Database-driven hospital services',
    'Secure session handling with authentication',
    'DAO pattern for modular data access',
    'Scalable backend using Java Servlets and JDBC'
  ],
  role: 'Full-Stack Java Developer',
  challenges: [
    'Implementing a clean DAO structure for data access',
    'Ensuring secure and concurrent appointment booking',
    'Managing multiple user roles (doctor, patient, admin)'
  ],
  outcomes: [
    'Delivered a reliable appointment booking system',
    'Streamlined hospital-patient interaction',
    'Developed a modular backend with maintainable codebase'
  ]
},
  //   {
  //     id: 5,
  //     title: 'CryptoWatch',
  //     description: 'CryptoWatch is a cryptocurrency portfolio tracker built with Angular and Node.js, providing real-time price monitoring, portfolio analytics, and trading insights for crypto investors.',
  //     longDescription: 'Created a comprehensive cryptocurrency tracking platform using Angular frontend with Node.js backend. Integrated with multiple crypto APIs for real-time price data. Features include portfolio management, price alerts, market analysis, and responsive design with Material Design components.',
  //     image: '/ChatGPT Image Jul 12, 2025, 11_43_27 PM.png',
  //     technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Material UI'],
  //     github: 'https://github.com/vedbora/CryptoWatch',
  //     demo: '#',
  //     category: 'Finance',
  //     features: [
  //       'Real-time price tracking',
  //       'Portfolio management',
  //       'Price alerts & notifications',
  //       'Market analysis tools',
  //       'Trading history tracking'
  //     ]
  //   },
  //   {
  //     id: 6,
  //     title: 'FitTracker',
  //     description: 'FitTracker is a comprehensive fitness tracking app built with React Native and Express.js, offering workout planning, progress tracking, and social features for fitness enthusiasts.',
  //     longDescription: 'Developed a cross-platform fitness application using React Native for mobile and Express.js for backend. Implemented features like workout logging, progress tracking, social sharing, and AI-powered workout recommendations. Used MongoDB for data storage and integrated with fitness APIs for exercise databases.',
  //     image: '/ChatGPT Image Jul 12, 2025, 01_01_26 AM.png',
  //     technologies: ['React Native', 'Express.js', 'MongoDB', 'Redux', 'Expo', 'Push Notifications'],
  //     github: 'https://github.com/vedbora/FitTracker',
  //     demo: '#',
  //     category: 'Health & Fitness',
  //     features: [
  //       'Workout planning & logging',
  //       'Progress tracking & charts',
  //       'Social features & challenges',
  //       'AI workout recommendations',
  //       'Nutrition tracking integration'
  //     ]
  //   }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my portfolio of full-stack applications built with modern technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.button
                      className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/80 border border-gray-600/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(project.id ?? null)}
                    className="w-full py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg text-primary-400 font-medium hover:from-primary-500/30 hover:to-secondary-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <motion.div
              className="relative bg-gray-800 rounded-2xl border border-gray-600 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-lg border border-gray-600 hover:border-red-500 transition-colors"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>

                    <div className="p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <span className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary-400 rounded-full" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700 border border-gray-600 rounded-lg text-sm text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-center text-white font-medium transition-colors flex items-center justify-center space-x-2"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg text-center text-white font-medium transition-all hover:shadow-lg flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
