import type { Education } from "@/types/resume";
import "./style.css";

type EducationListProps = {
  education: Education;
};

export default function EducationList({ education }: EducationListProps) {
  const { school, degree, gpa, graduation_date } = education;

  return (
    <section className="education-section">
      <div className="education-card">
        <p><strong>School:</strong> {school}</p>
        <p><strong>Degree:</strong> {degree}</p>
        <p><strong>GPA:</strong> {gpa}</p>
        <p><strong>Graduation:</strong> {graduation_date}</p>
      </div>
    </section>
  );
}

