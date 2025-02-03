import { useEffect } from "react";

import "./styles.scss";

const HamburgerMenu = ({ setIsOpen, isOpen }) => {

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);  // Cierra el menú en cualquier redimensionamiento
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`hamburger ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="bar top" />
      <span className="bar middle" />
      <span className="bar bottom" />
    </div>
  );
};

export default HamburgerMenu;
