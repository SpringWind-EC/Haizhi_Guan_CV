import type { Honor } from "@/types/resume";
import "./style.css";

type HonorsProps = {
  honors: Honor[];
};

export default function Honors({ honors }: HonorsProps) {
  return (
    <section className="honors-section">

      <dl className="honors-list">
        {honors.map((honorItem, index) => (
          <div key={index} className="honor-card">
            <dt className="honor-title">{honorItem.honor}</dt>
            <dd className="honor-date">🏅 {honorItem.date}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
