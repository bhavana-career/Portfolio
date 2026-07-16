import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub, FaPython, FaReact, FaRobot } from 'react-icons/fa';
import { SiFastapi, SiNextdotjs, SiMongodb } from 'react-icons/si';
import './FeaturedProjects.css';

const projects = [
  {
    id: "im-on-it",
    title: "I'm On It – AI Meeting Execution Platform",
    ongoing: true,
    description: "An AI-powered meeting execution platform that converts meetings into structured, trackable workflows using Large Language Models. Integrated LiveKit for real-time meetings and Gemini API for generating meeting summaries, action items, assignees, and deadlines automatically.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Python", icon: <FaPython /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],
    demoUrl: "https://im-on-it.vercel.app/",
    githubUrl: "https://github.com/bhavana-career/ImOnIt"
  },
  {
    id: "health-report",
    title: "AI Health Report Analyzer",
    description: "An AI-powered medical report analyzer using Google's Gemini API to extract insights from unstructured health reports. Implemented FastAPI backend services integrated with a responsive React.js frontend for real-time AI-generated health summaries.",
    tech: [
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "React.js", icon: <FaReact /> }
    ],
    demoUrl: "https://healthguard-analyzer.vercel.app/",
    githubUrl: "https://github.com/bhavana-career/git-status"
  },
  {
    id: "tomato-disease",
    title: "Tomato Disease Detector",
    description: "Built an end-to-end tomato leaf disease detection system using Machine Learning and Kaggle datasets. Designed REST APIs with FastAPI and integrated them with a React.js frontend for real-time disease prediction.",
    tech: [
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Machine Learning", icon: <FaRobot /> }
    ],
    demoUrl: "https://tomaai.lovable.app/",
    githubUrl: "https://github.com/bhavana-career/Tomato-Disease-Detector"
  },
  {
    id: "beacon",
    title: "Beacon – Executive AI Assistant",
    description: "An executive AI assistant that transforms raw Excel/CSV business data into actionable executive insights and interactive dashboards. Built with React, FastAPI, MongoDB, and Gemini AI.",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Gemini AI", icon: <FaRobot /> }
    ],
    demoUrl: "https://beaconswe.lovable.app/",
    githubUrl: "https://github.com/bhavana-career/Beacon"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div 
              className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="project-image-container glow-effect">
                <div className="project-image glass-card" style={{ padding: '4px', overflow: 'hidden' }}>
                  <img 
                    src={`/${project.id}.png`} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', borderRadius: '12px' }}
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"; }}
                  />
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                  {project.ongoing && <span className="ongoing-badge">Ongoing Project</span>}
                </h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge">
                      {t.icon} {t.name}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                    <FaGithub size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
