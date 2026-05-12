import resumeData from "./resume.json";
import type { Resume } from "@/types/resume";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import EducationList from "@/app/components/Education";
import Honors from "@/app/components/Honors"; 
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";
import ExperienceList from "@/app/components/Experience";
import Projects from "@/app/components/Projects";

const resume = resumeData as Resume;

export default function Home() {
  const {
    name,
    tagline,
    headshot,
    contact,
    education,
    honors_and_awards,
    skills,
    leadership_and_experience,
    projects,
  } = resume;

  return (
    <main>
      <Nav name={name}/>


      <Header
        name={name}
        tagline={tagline}
        headshot={headshot}
        contact={contact}
      />

      <Section title="Education">
        <EducationList education={education} />
      </Section>

      <Section title="Honors & Awards">
        <Honors honors={honors_and_awards} />
      </Section>

      <Section title="Skills">
        <Skills skills={skills} />
      </Section>

      <Section title="Projects">
        <Projects projects={projects} />
      </Section>

      <Footer />
    </main>
  );
}
