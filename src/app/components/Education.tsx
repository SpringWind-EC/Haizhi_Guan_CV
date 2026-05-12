import type { Education } from "@/types/resume";
import "./style.css";

type EducationListProps = {
  education: Education;
};

export default function EducationList({ education }: EducationListProps) {
  const { school, degree, gpa, graduation_date, location, coursework } = education;

  return (
    <section className="education-section">
      <div className="education-card">
        <p><strong>School:</strong> {school}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Degree:</strong> {degree}</p>
        <p><strong>GPA:</strong> {gpa}</p>
        <p><strong>Graduation:</strong> {graduation_date}</p>

        {coursework?.length > 0 && (
          <div className="education-coursework">
            <p><strong>Relevant Coursework:</strong></p>
            <ul>
              {coursework.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}