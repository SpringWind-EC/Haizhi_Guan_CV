import "./style.css";

type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="skills-section">
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
