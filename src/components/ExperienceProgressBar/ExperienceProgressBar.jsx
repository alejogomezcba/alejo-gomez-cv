import { useEffect, useState } from "react";
import "./styles.scss";

const ExperienceProgressBar = ({
  title,
  years,
  minYears = 0,
  maxYears = 20,
  color = "#4caf50",
  backgroundColor = "#ddd",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const percentage = ((years - minYears) / (maxYears - minYears)) * 100;
      setProgress(Math.min(100, Math.max(0, percentage))); // Asegura que el porcentaje esté entre 0 y 100
    }, 300);

    return () => clearTimeout(timer);
  }, [years, minYears, maxYears]);

  return (
    <div className="experience-progress-container">
      <div className="experience-progress-text">
        <span className="experience-progress-title">{title}</span>
        <span className="experience-progress-value">{years} {years > 1 ? 'años' : 'año'}</span>
      </div>

      <div className="experience-progress-bar" style={{ backgroundColor }}>
        <div
          className="experience-progress-fill"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default ExperienceProgressBar;
