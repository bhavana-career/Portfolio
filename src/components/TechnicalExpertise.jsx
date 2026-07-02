import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaRobot } from 'react-icons/fa';
import { SiFastapi, SiNextdotjs, SiJavascript, SiCplusplus, SiMongodb } from 'react-icons/si';
import './TechnicalExpertise.css';

const skills = [
  { name: "Python", icon: <FaPython size={40} />, color: "#3776AB" },
  { name: "JavaScript", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact size={40} />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "#000000" },
  { name: "FastAPI", icon: <SiFastapi size={40} />, color: "#009688" },
  { name: "Machine Learning", icon: <FaRobot size={40} />, color: "#FF6F00" },
  { name: "C++", icon: <SiCplusplus size={40} />, color: "#00599C" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" },
  { name: "Git", icon: <FaGitAlt size={40} />, color: "#F05032" },
  { name: "HTML5/CSS3", icon: <FaHtml5 size={40} />, color: "#E34F26" }
];

const TechnicalExpertise = () => {
  return (
    <section className="expertise-section" id="expertise">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-divider center-divider"></div>
        </motion.div>

        <div className="skills-container">
          <motion.div 
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-icon-wrapper"
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 20 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 200, damping: 10 }
                  }
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="skill-icon glow-effect-small" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
