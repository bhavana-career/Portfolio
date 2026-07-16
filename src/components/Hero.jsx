import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, School, Calendar, Mail, Phone, FileText, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaPython, FaReact } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        {/* LEFT COLUMN (Text) */}
        <motion.div 
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ paddingRight: '2rem' }}
        >
          <motion.h1 className="hero-name" variants={itemVariants}>Bhavana S</motion.h1>

          <motion.p className="hero-intro" variants={itemVariants} style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.15rem' }}>
            Passionate about building practical AI systems using Machine Learning, LLMs, and modern web technologies. I enjoy designing scalable applications that automate workflows and deliver intuitive user experiences.
          </motion.p>

          <motion.div className="hero-skills-row" variants={itemVariants}>
            <span className="badge"><FaPython /> Python</span>
            <span className="badge"><FaReact /> React.js</span>
            <span className="badge">Next.js</span>
            <span className="badge">FastAPI</span>
            <span className="badge">Machine Learning</span>
            <span className="badge">DSA</span>
            <span className="badge">OOP</span>
          </motion.div>

          <motion.div className="status-badges" variants={itemVariants} style={{ marginTop: '1.5rem', justifyContent: 'flex-start' }}>
            <div className="status-badge"><MapPin size={14} /> Mysuru, Karnataka</div>
            <div className="status-badge"><GraduationCap size={14} /> B.E. Information Science & Engineering</div>
            <div className="status-badge"><School size={14} /> The National Institute of Engineering (NIE)</div>
            <div className="status-badge"><Calendar size={14} /> Expected Graduation: June 2027</div>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants} style={{ marginTop: '2.5rem', alignItems: 'center' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="https://drive.google.com/file/d/10z72Ujc8o7-BC8CLgn-9kVCPRo2f3LsW/view?usp=sharing" className="btn btn-secondary" target="_blank" rel="noreferrer">
              <FileText size={16} /> Resume
            </a>
            
            {/* Social Icons Inline */}
            <div className="hero-social-icons">
              <a href="mailto:bhavanasbhavanas989@gmail.com" className="social-icon-btn" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/bhavanashivakumar" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/bhavana-career" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN (Image) */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="profile-container glow-effect">
            <div className="profile-card glass-card" style={{ padding: '8px', maxWidth: '350px' }}>
              <div className="profile-image-placeholder" style={{ borderRadius: '12px', overflow: 'hidden', height: '100%' }}>
                <img src="/profile.jpeg" alt="Bhavana S" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
