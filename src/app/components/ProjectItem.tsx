import Image from "next/image";
import type { Project } from "@/types/resume";
import "./style.css";

type ProjectProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectProps) {
  return (
    <div className="card project-card">
      {/*
      <div className="image-wrapper">
        <Image
          src={`/${project.image}`}
          alt={project.title}
          width={250}
          height={160}
          className="project-image"
        />
      </div>
      */}

      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>

        {project.role && (
          <p className="project-role">
            <strong>Role:</strong> {project.role}
          </p>
        )}

        {project.date && (
          <p className="project-date">{project.date}</p>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repository
          </a>
        )}
      </div>

      <ul className="project-descr">
        {project.descr.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}