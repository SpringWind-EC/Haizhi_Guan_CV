import type { Skills } from "@/types/resume";
import "./style.css";

type SkillsProps = {
  skills: Skills;
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="skills-section">

      <div className="skills-group">
        <h3>Programming</h3>
        <ul className="skills-list">
          {skills.programming.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-group">
        <h3>Web & Frameworks</h3>
        <ul className="skills-list">
          {skills.web_frameworks.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-group">
        <h3>Databases</h3>
        <ul className="skills-list">
          {skills.databases.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-group">
        <h3>Tools & Concepts</h3>
        <ul className="skills-list">
          {skills.tools_concepts.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-group">
        <h3>Languages</h3>
        <ul className="skills-list">
          {skills.languages.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}