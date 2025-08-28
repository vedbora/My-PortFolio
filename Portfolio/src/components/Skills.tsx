import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Skills: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-teal-600' },
        { name: 'HTML5/CSS3', level: 95, color: 'from-orange-500 to-red-500' },
      ],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Java (Spring Boot)', level: 90, color: 'from-red-600 to-orange-600' },
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 80, color: 'from-gray-700 to-gray-900' },
       
      ],
    },
    {
      title: 'Database & Tools',
      icon: '🛠️',
      skills: [
        { name: 'MySQL', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-800' },
        { name: 'Git/GitHub', level: 90, color: 'from-gray-700 to-black' },
        
      ],
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Java', level: 90, color: 'from-red-600 to-orange-600' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-green-500' },
        { name: 'C/C++', level: 80, color: 'from-blue-600 to-purple-600' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-800" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-500/30 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-primary-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full"
                            animate={{ 
                              x: ['-100%', '100%'],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Programming using Java',
                'Introduction to GenAI Studio ',
                'Basics of Python',
                'Programming in C',
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">📜</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{cert}</h4>
                  <p className="text-sm text-gray-400"></p>
                  
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;