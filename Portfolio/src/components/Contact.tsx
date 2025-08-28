// src/components/Contact.tsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    // Map frontend fields -> backend expected fields
    const payload = {
      name: formData.user_name,
      email: formData.user_email,
      subject: formData.subject,
      message: formData.message,
      phone: null, // optional
    };

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server Error ${res.status}: ${errorText}`);
      }

      const data = await res.json();

      if (data.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        alert(`❌ Failed to send: ${data.error || 'Unknown error'}`);
      }
    } catch (err: any) {
      console.error("Error sending message:", err);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'vedantb9850@gmail.com', href: 'mailto:vedantb9850@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9823033829', href: 'tel:+919823033829' },
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/vedbora', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vedant-bora-b2a7582b1', color: 'hover:text-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-primary-500/50"
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                      <info.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{info.label}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                  />
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                  />
                </div>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                />
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                />
                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 inline-block mr-2" />
                  {sending ? 'Sending…' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
