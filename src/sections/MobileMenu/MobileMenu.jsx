import './styles.scss';
import avatarImage from '../../assets/avatars/avatar.png'

import ProgressBar from '../../components/ProgressBar';
import CircularProgressBar from '../../components/CircularProgressBar';
import ExperienceProgressBar from '../../components/ExperienceProgressBar';
import AnimatedProgressBar from '../../components/AnimatedProgressBar/AnimatedProgressBar';

import { actualAge } from '../../functions/commons';

import { bricks } from '../../bricks';

const MobileMenu = ({ setSelectedMenu, selectedMenu, setIsOpen }) => {
    const { skillsBricks, FrameWorksExperienceBricks, PointOfContactBricks, NavMenuBrick } = bricks;

    
  const handleMenuOption = (e) => {
    setIsOpen(false)
    setSelectedMenu(e.target.outerText);
  };
    
  return (
    <div className="mobile-menu_container">
      <div className='mobile-hero-content'>
        <div className='mobile-avatar-container'>
        <img className="image-avatar" src={avatarImage} alt="Avatar Alejo" />
            <div className='mobile-avatar-text'>
        <h1 className='mobile-hero-title'>Alejo Gómez</h1>
                <p>Diseñador Gráfico</p>
                <p>Desarrollador Web</p>
            </div>
        </div>
      </div>

      <div className="mobile-nav_menu">
        {NavMenuBrick.map((item) => (
          <p className={`mobile-menu_item ${selectedMenu === item ? "active" : ""}`} onClick={handleMenuOption} key={item}>
            {item}
          </p>
        ))}
      </div>

      <div className='mobile-data'>
        <div className='personal-data'>
            <p> País:Argentina </p>
            <p> Provincia: Córdoba </p>
            <p>Edad: {actualAge()}</p>
        </div>
        <div className='languaje-container'>
            <CircularProgressBar title='Español' value={100} color="#ffc107" backgroundColor="rgba(255,255,255,0.1)" size={65} progressWidth={3} strokeColor={'rgba(255,255,255,0.3)'}/>
            <CircularProgressBar title="Inglés" value={75} color="#ffc107" backgroundColor="rgba(255,255,255,0.1)" size={65} progressWidth={3} strokeColor={'rgba(255,255,255,0.3)'}/>
         </div> 

      </div>
        {skillsBricks.map( (item) => 
          <AnimatedProgressBar
            title={item.title}
            key={item.title}
            value={item.value}
            bgColor="rgba(255,255,255,0.1)"
            fillColor="#ffc107"
          />
        )}
        { FrameWorksExperienceBricks.map( (item, index) => <ExperienceProgressBar key={index} title={item.title} years={item.years} minYears={0} maxYears={20} color='#ffc107' backgroundColor="rgba(255,255,255,0.1)"/>)}
        
        {/* <ProgressBar title="Progreso del proyecto" value={75} color="#ffc107" backgroundColor="rgba(255,255,255,0.1)" />
        <ProgressBar title="Progreso del proyecto" value={75} color="#ffc107" backgroundColor="rgba(255,255,255,0.1)" /> */}
        {/* Otro ejemplo con grosores diferentes */}
        {/* <CircularProgressBar value={45} color="#ff9800" backgroundColor="#f1f1f1" size={150} strokeWidth={12} /> */}
        <h3>Puntos de Contacto</h3>
        <div className="mobile-contact-points" >
          {PointOfContactBricks.map((item) => ( 
            <a
                href={item.href}
                target="_blank"
                key={item.name}
                rel="noreferrer"
            >
                <img
                  className={`contact_icon icon_${item.name}`}
                  alt={`${item.name} icon`}
                  src={item.icon }
                />
            </a>
           ))}
    </div>
    </div>
  )
}

export default MobileMenu
