import { useState } from "react";
import "./App.css";

import { bricks } from "../bricks";

const {
  LinkedinRefs,
  ServicesBrick,
  NavMenuBrick,
  PointOfContactBricks,
  ProjectsBrick,
  WorkExperienceBricks,
} = bricks;

import { actualAge } from "../functions/commons";

import HeroSection from "../sections/HeroSection";
import MobileMenu from "../sections/MobileMenu";
import PersonalData from "../sections/PersonalData";
import References from "../sections/References";
import OferedServices from "../sections/OferedServices";
import NavMenu from "../sections/NavMenu";
import PointOfContact from "../sections/PointOfContact";
import Projects from "../sections/Projects";
import WorkExperience from "../sections/WorkExperience";
import Footer from "../sections/Footer";

export const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("INICIO");
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="main-container">
      <HeroSection setIsOpen={setIsOpen} isOpen={isOpen} setSelectedMenu={setSelectedMenu} data={NavMenuBrick} selectedMenu={selectedMenu}/>
      {isOpen && <MobileMenu />}
      {/*Fin de Carga NavMenu*/}
      {selectedMenu === "INICIO" && (
        <>
          <PersonalData />
          <OferedServices data={ServicesBrick} />
          <References data={LinkedinRefs} />
        </>
      )}

      {selectedMenu === "EXPERIENCIA" && (
        <WorkExperience data={WorkExperienceBricks} />
      )}

      {selectedMenu === "TRABAJOS" && <Projects data={ProjectsBrick} />}
      {selectedMenu === "INICIO" && (
        <PointOfContact data={PointOfContactBricks} />
      )}
      <Footer />
    </div>
  );
};
