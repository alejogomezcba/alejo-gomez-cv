
import { actualAge } from "../../functions/commons";
import CircularProgressBar from "../../components/CircularProgressBar";
import ProgressBar from "../../components/ProgressBar";
import ExperienceProgressBar from "../../components/ExperienceProgressBar";


import { bricks } from "../../bricks";

import './styles.scss';


const PersonalData = () => {

  const { skillsBricks, FrameWorksExperienceBricks } = bricks;

  return (
    <div>
      <div className="personal-data-container">
        <p
            className="persona-data_text"
        >
            Soy Diseñador Gráfico y Desarrollador frontend. Me gustaría compartir un
            poco sobre mi experiencia y habilidades profesionales. Tengo experiencia
            en el campo de la tecnología y el diseño. Poseo una base sólida en
            soporte técnico, incluyendo la resolución de problemas y la gestión de
            incidentes. He trabajado como Desarrollador Full-stack y, en los últimos
            años he trabajado como desarrollador Frontend. <br />
            <br />
            A su vez de forma independiente, como diseñador gráfico y desarrollador
            web. A lo largo de mi carrera, he adquirido habilidades en tecnologías
            como React, NodeJS, JavaScript, HTML5, CSS, Figma, entre otras. En la
            parte de diseño sigo capacitandome en el paquete de Adobe (Illustrator y
            Photoshop) como asi también en Figma. <br />
            <br />
            También tengo experiencia en el manejo de bases de datos SQL utilizando
            herramientas como PostgreSQL, MongoDB y MySQL. Además, poseo
            conocimientos en diseño gráfico, lo que me permite aportar un enfoque
            visual a mis proyectos.
            <br />
            <br />
            Me considero una persona comunicativa y comprometida que está dispuesta
            a trabajar tanto de forma independiente como en equipo.
        </p>

        <div  className="persona-data_progressbar">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgressBar title='Español' value={100} color="#ffc107" backgroundColor="rgba(255,255,255,0.1)" size={65} progressWidth={3} strokeColor={'rgba(255,255,255,0.3)'}/>
                <CircularProgressBar title="Inglés" value={75} color="#ffc107" backgroundColor="rgba(255,255,255,0.1)" size={65} progressWidth={3} strokeColor={'rgba(255,255,255,0.3)'}/>
            </div>
        {skillsBricks.map( (item, index) => (
                <ProgressBar title={item.title} value={item.value} color="#ffc107" backgroundColor="rgba(255,255,255,0.1)" key={index}/>
            ))}
            { FrameWorksExperienceBricks.map( (item, index) => (
                <ExperienceProgressBar key={index} title={item.title} years={item.years} minYears={0} maxYears={20} color='#ffc107' backgroundColor="rgba(255,255,255,0.1)"/>
            ))}
        </div> 
      </div>
    </div>
  );
};

export default PersonalData;
