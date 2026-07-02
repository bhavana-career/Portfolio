import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="contact-container glass-card glow-effect"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, collaborations, or just chatting about AI and building products.
          </p>

          <div className="contact-links">
            <a href="mailto:bhavanasbhavanas989@gmail.com" className="contact-link-item">
              <span className="contact-link-icon"><Mail size={20} /></span>
              <span className="contact-link-text">bhavanasbhavanas989@gmail.com</span>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>
            
            <a href="https://linkedin.com/in/bhavanashivakumar" target="_blank" rel="noreferrer" className="contact-link-item">
              <span className="contact-link-icon"><FaLinkedin size={20} /></span>
              <span className="contact-link-text">LinkedIn Profile</span>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>
            
            <a href="https://github.com/bhavana-career" target="_blank" rel="noreferrer" className="contact-link-item">
              <span className="contact-link-icon"><FaGithub size={20} /></span>
              <span className="contact-link-text">GitHub Profile</span>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>
            
            <a href="/resume.pdf" className="contact-link-item highlight">
              <span className="contact-link-icon"><FileText size={20} /></span>
              <span className="contact-link-text">Download Resume</span>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>
          </div>
        </motion.div>
        
        <div className="footer">
          <p>© {new Date().getFullYear()} Bhavana S. Built with React & Vite.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
