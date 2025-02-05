import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import './styles.scss'

// Animación para el relleno de la barra
const fillAnimation = (percentage) => keyframes`
  0% { width: 0%; }
  100% { width: ${percentage}%; }
`;

// Estilos del contenedor de la barra de progreso
const ProgressBarContainer = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ bgColor }) => bgColor || '#2c3e50'};
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 2px 3px;
  display: flex;
  align-items: center
`;

// Estilos de la barra de progreso
const ProgressBarFill = styled.div`
  height: 5px;
  background-color: ${({ fillColor }) => fillColor || '#00bcd4'};
  border-radius: 10px;
  animation: ${({ percentage }) => fillAnimation(percentage)} 1.5s ease-out forwards;
`;

// Componente funcional
const AnimatedProgressBar = ({ title, value, bgColor, fillColor }) => {
  const [percentage, setPercentage] = useState(0); // Estado para el porcentaje de la barra
  const [displayedPercentage, setDisplayedPercentage] = useState(0); // Estado para el porcentaje mostrado

  useEffect(() => {
    // Asegurarse de que el valor esté entre 0 y 100
    const clampedValue = Math.min(Math.max(value, 0), 100);
    setPercentage(clampedValue);

    // Animación del porcentaje mostrado
    let start = 0;
    const end = clampedValue;
    const duration = 1500; // Duración de la animación en milisegundos
    const incrementTime = 20; // Intervalo de actualización

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setDisplayedPercentage(end);
        clearInterval(timer);
      } else {
        setDisplayedPercentage(start);
      }
    }, incrementTime);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, [value]);

  return (
    <div className='progress-animated-container'>
      <div className='progress-animated_title'>
        <h3>{title}</h3> <span>{displayedPercentage}<span className="progress-porcentage">%</span></span>  
      </div>
      <ProgressBarContainer bgColor={bgColor}>
        <ProgressBarFill
          fillColor={fillColor}
          percentage={percentage}
        />
      </ProgressBarContainer>
    </div>
  );
};

export default AnimatedProgressBar;