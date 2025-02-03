import { useEffect, useState } from "react";

import './styles.scss';

const ProgressBar = ({ title, value, color = "#4caf50", backgroundColor = "#ddd" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 300); // Retardo inicial antes de la animación

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="progress-container">
        <div className="progress-text">
            <span className="progress-title">{title}</span>
            <span className="progress-value">{progress}%</span>
        </div>

      <div className="progress-bar" style={{ backgroundColor }}>
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
