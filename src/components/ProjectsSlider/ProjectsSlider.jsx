import { useState } from 'react';

import { ProjectItem } from '../ProjectItem/ProjectItem';

import leftArrow from '../../assets/commons/arrow_left.svg';
import rightArrow from '../../assets/commons/arrow_right.svg';

import './style.scss';

export const ProjectsSlider = ({data}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexSlider = (e) => {
    e.preventDefault();
    const directionArrow = e.target.name; 
    setCurrentIndex((prevIndex) => {
      if (directionArrow.includes('left')) {
        return prevIndex === 0 ? data.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === data.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  
  return (
    <div className="projects-slider">
      <div className="slider-top">
        <img src={leftArrow} alt="arrow left" name='slide-left' onClick={handleIndexSlider} className='arrow-button'/>
        <ProjectItem data={data[currentIndex]} />
        <img src={rightArrow} alt="arrow left" name='slide-right' onClick={handleIndexSlider} className='arrow-button'/>
      </div>
      <div className="number-list">
        {data.map((item, index) => (
          <button
            key={item.id}
            className={`number-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
          ></button>
        ))}
      </div>
    </div>
  )
};