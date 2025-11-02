import type { Project } from "@/types/resume";
import ProjectItem from "./ProjectItem";
import "./style.css";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="projects-section">
      <div className="three-col">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
