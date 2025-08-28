import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">I'm</span>
                <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  Vedant Bora
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions. 
                Specialized in <span className="text-primary-400 font-semibold">Java</span>, 
                <span className="text-secondary-400 font-semibold"> React.js</span>, and 
                <span className="text-accent-400 font-semibold"> Spring Boot</span>.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-white hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/vedbora", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/vedant-bora-b2a7582b1", label: "LinkedIn" },
                { icon: Mail, href: "mailto:vedantb9850@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Computer Setup */}
          <motion.div
            className="relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Monitor */}
              <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                <div className="bg-gray-900 rounded aspect-video relative overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-2 bg-gradient-to-br from-primary-900/50 to-secondary-900/50 rounded">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="h-2 bg-gradient-to-r from-primary-400/30 to-transparent rounded"
                            initial={{ width: 0 }}
                            animate={{ width: `${60 + Math.random() * 40}%` }}
                            transition={{ duration: 2, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 animate-pulse-glow" />
                </div>
                
                {/* Monitor Stand */}
                <div className="w-20 h-8 bg-gray-700 mx-auto mt-2 rounded-b"></div>
              </div>
              
              {/* Keyboard */}
              <div className="mt-8 bg-gray-800 rounded-lg p-3 shadow-xl">
                <div className="grid grid-cols-12 gap-1">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-700 rounded text-xs"></div>
                  ))}
                </div>
              </div>
              
              {/* Mouse */}
              <div className="absolute -right-12 bottom-8 w-12 h-16 bg-gray-800 rounded-full shadow-xl"></div>
              
              {/* Floating Code Elements */}
              {[
                { text: "React", color: "text-accent-400", delay: 0 },
                { text: "Java", color: "text-primary-400", delay: 1 },
                { text: "Node.js", color: "text-green-400", delay: 2 },
                { text: "Spring", color: "text-secondary-400", delay: 3 },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  className={`absolute ${item.color} text-sm font-mono bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded border border-gray-600`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 70}%`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    y: [20, 0, 0, -20],
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;