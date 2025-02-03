import { useEffect, useState } from "react";
import "./styles.scss";

const CircularProgressBar = ({
  value,
  size = 120,
  progressWidth = 10,
  color = "#4caf50",
  strokeColor = "white",
  backgroundColor = "#ddd",
  title = "Muestra"
}) => {
  const [progress, setProgress] = useState(0);

  // Ajustamos el padding dinámico basado en el grosor del trazo
  const padding = progressWidth * 0.6;
  const adjustedSize = size + padding * 4; // Aumentamos el tamaño del SVG para evitar cortes
  const radius = (size - progressWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const center = adjustedSize / 2;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center',margin: 5 }}>
      <div className="circular-progress-container" style={{ width: adjustedSize, height: adjustedSize }}>
        <svg width={adjustedSize} height={adjustedSize} viewBox={`0 0 ${adjustedSize} ${adjustedSize}`}>
          {/* Contorno externo */}
          <circle
            cx={center}
            cy={center}
            r={radius + progressWidth / 2 + 2}
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="transparent"
          />
          {/* Círculo de fondo */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={progressWidth}
            fill="transparent"
          />
          {/* Círculo de progreso */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth={progressWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1.5s ease-in-out" }}
          />
          {/* Contorno interno */}
          <circle
            cx={center}
            cy={center}
            r={radius - progressWidth / 2 - 2}
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
        {/* Texto de porcentaje centrado */}
        <div className="circular-progress-text">
          {progress}
          <span className="circular-progress_porcentage">%</span>
        </div>
      </div>
        <h3 style={{ margin: 0, padding: 0 }}>{title}</h3>
    </div>
  );
};

export default CircularProgressBar;
