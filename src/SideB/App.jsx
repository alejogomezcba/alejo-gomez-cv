import { useState } from 'react';
import './App.css';

import { bricks } from '../bricks';

const {
  LinkedinRefs,
  ServicesBrick,
  NavMenuBrick,
  PointOfContactBricks,
  ProjectsBrick,
} = bricks;


import References from '../components/References/References';
import { OferedServices } from '../components/OferedServices/OferedServices';
import { NavMenu } from '../components/NavMenu/NavMenu';
import { PointOfContact } from '../components/PointOfContact/PointOfContact';
import { Projects } from '../components/Projects/Projects';

export const App = () => {
 
  const [selectedMenu, setSelectedMenu] = useState("INICIO");


  return (
    <>
      <NavMenu data={NavMenuBrick} setSelectedMenu={setSelectedMenu} />
      {/*Fin de Carga NavMenu*/}
      { selectedMenu === 'INICIO' &&
        <>
          <OferedServices data={ServicesBrick} />
          <References data={LinkedinRefs} />
        </>
      }
      {/*Fin de Carga INICIO*/}
      { selectedMenu === 'CONTACTO' && <PointOfContact data={PointOfContactBricks} /> }
      {/*Fin de Carga CONTACTO*/}
      { selectedMenu === 'TRABAJOS' && <Projects data={ProjectsBrick} /> }
      {/*Fin de Carga TRABAJOS*/}
    </>
  )
};
