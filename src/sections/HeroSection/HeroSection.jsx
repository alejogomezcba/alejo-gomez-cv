
import backgroundHero from '../../assets/commons/background.png'
import alejoAvatar from '../../assets/avatars/avatar.png'
import HamburgerMenu from '../../components/HamburgerMenu';
import NavMenu from '../NavMenu';

import './styles.scss';

const HeroSection = ({ setIsOpen, isOpen, data, setSelectedMenu, selectedMenu }) => {
  return (
    <div className='hero-content'>
      <img className="hero-image" src={backgroundHero} alt="Imagen del hero" />
      <h1 className='hero-title'>Hola, soy Alejo</h1>
      <p className='hero-text'> &lt;<span className='hero-text_span'>code</span>&gt; Te invito a conocer mi porfolio. &lt;/<span className='hero-text_span'>code</span>&gt;</p>
      <img className="avatar-image" src={alejoAvatar} alt="Avatar Alejo" />
      <NavMenu data={data} setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu}/>
      <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen}/>
      {/* <div className='hamburger'>
          <span className='bar top'/>
          <span className='bar middle'/>
          <span className='bar bottom'/>
      </div> */}
    </div>
  )
}

export default HeroSection
