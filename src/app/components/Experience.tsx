import Link from "next/link";
import type { ExperienceItem } from "@/types/resume";
import "./style.css";

type ExperienceListProps = {
  experiences: ExperienceItem[];
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <section className="experience-section">
      {/*
      <dl className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <dt className="experience-title">{exp.position}</dt>
            <dd className="experience-date">📅 {exp.date}</dd>
            <dd className="experience-company">
              🏢 Company:&nbsp;
              {exp.link ? (
                <Link href={exp.link} target="_blank" rel="noopener noreferrer">
                  {exp.link.replace(/^https?:\/\//, "")}
                </Link>
              ) : (
                "N/A"
              )}
            </dd>
          </div>
        ))}
      </dl>
      */}
    </section>
  );
}

