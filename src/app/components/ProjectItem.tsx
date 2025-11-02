import Image from "next/image";
import type { Project } from "@/types/resume";
import "./style.css";

type ProjectProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectProps) {
  return (
    <div className="card project-card">
      <div className="image-wrapper">
        <Image
          src={`/${project.image}`}
          alt={project.title}
          width={250}
          height={160}
          className="project-image"
        />
      </div>
      <h3 className="project-title">{project.title}</h3>
      <ul className="project-descr">
        {project.descr.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
