import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code2, BrainCircuit } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Full-Stack Development",
    "Backend Engineering",
    "Problem Solving"
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Education Card */}
          <motion.div className="about-card glass-card" variants={itemVariants}>
            <div className="about-card-icon">
              <GraduationCap size={24} className="text-accent" />
            </div>
            <h3 className="about-card-title">Education</h3>
            <div className="about-card-content">
              <p className="primary-text">B.E. Information Science & Engineering</p>
              <p className="secondary-text">The National Institute of Engineering (NIE)</p>
              <div className="about-card-footer">
                <span className="badge">Expected: June 2027</span>
              </div>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div className="about-card glass-card span-2" variants={itemVariants}>
            <div className="about-card-icon">
              <BrainCircuit size={24} className="text-accent" />
            </div>
            <h3 className="about-card-title">Areas of Interest</h3>
            <div className="interests-tags">
              {interests.map((interest, index) => (
                <span key={index} className="interest-tag">{interest}</span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
