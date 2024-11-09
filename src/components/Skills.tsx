import React from 'react';
import '../style/Skills.css';
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiCss3 } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div>
          <h2 className="skills-heading">
            THE VARIOUS TECHNOLOGIES I WORK WITH
          </h2>
          <p className="skills-description">
            I have extensive experience with a range of programming languages and technologies. My primary expertise lies in TypeScript, JavaScript, Next.js, and C++, which I use for web and software development projects. Additionally, I am familiar with Java, Assembly language, and C, allowing me to adapt to different programming environments and expand my skill set across diverse technical areas.
          </p>
        </div>
      </div>
      <div className="skills-icons">
        <div className="skills-column">
          <div className="skill-item">
            <span>TYPESCRIPT</span>
            <SiTypescript />
          </div>
          <div className="skill-item">
            <span>NEXT.JS</span>
            <RiNextjsFill />
          </div>
          <div className="skill-item">
            <span>CSS</span>
            <SiCss3 />
          </div>
          <div className="skill-item">
            <span>C LANGUAGE</span>
          </div>
        </div>
        <div className="skills-column">
          <div className="skill-item">
            <span>TAILWIND CSS</span>
            <RiTailwindCssFill />
          </div>
          <div className="skill-item">
            <span>JAVA</span>
            <FaJava />
          </div>
          <div className="skill-item">
            <span>C++</span>
          </div>
          <div className="skill-item">
            <span>ASSEMBLY LANGUAGE</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;