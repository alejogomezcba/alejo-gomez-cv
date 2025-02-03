import { useState } from 'react';



import './style.scss';
import { ProjectsSlider } from '../../components/ProjectsSlider/ProjectsSlider';

const Projects = ({ data }) => {
  const { GraphicDesigns, WebDesigns }  = data;

  return (
    <div className='projects-container'>
    <h2>Trabajos de Diseño gráfico</h2>
    <ProjectsSlider data={GraphicDesigns} />

    <br />
    <hr/>

    <h2>Trabajos de Diseño web</h2>
    {<ProjectsSlider data={WebDesigns} />}
    </div>
  );
};

export default Projects;
