import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Code },
    { label: 'Technologies Mastered', value: '15+', icon: Lightbulb },
    { label: 'Coffee Cups', value: '∞', icon: Coffee },
    { label: 'Team Projects', value: '5+', icon: Users },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full p-1 overflow-hidden">
                  <img
                    src="\Profile.JPG" // <-- Replace with your actual image path
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-primary-500/20 backdrop-blur-sm rounded-lg p-3 border border-primary-500/30"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code className="w-6 h-6 text-primary-400" />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-4 bg-secondary-500/20 backdrop-blur-sm rounded-lg p-3 border border-secondary-500/30"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Lightbulb className="w-6 h-6 text-secondary-400" />
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <stat.icon className="w-8 h-8 text-primary-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Aspiring Java Developer & Full Stack Enthusiast
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate Information Technology student at Walchand
                  Institute of Technology with hands-on experience in full-stack
                  web development. I specialize in creating innovative solutions
                  using modern technologies like Java, Spring Boot, React.js, and
                  Node.js.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both frontend and backend
                  development, I've built several real-world projects including
                  healthcare portals and e-learning platforms, and I'm always
                  eager to learn new technologies and contribute to impactful
                  Java-based solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">
                  What drives me:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Problem Solving', 'Clean Code', 'User Experience', 'Innovation'].map(
                    (item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full" />
                        <span className="text-gray-300">{item}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              <motion.div
                className="pt-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
              >
                <button
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Let's Work Together
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
