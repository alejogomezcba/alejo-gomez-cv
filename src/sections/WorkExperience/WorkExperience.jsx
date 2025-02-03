import { useEffect } from "react";
import "./styles.scss";
import WorkExperienceItem from "../../components/WorkExperienceItem";
import { Chrono } from "react-chrono";

const WorkExperience = ({ data }) => {
  useEffect(() => {
    // Función para reemplazar los textos del botón
    const translateButtons = () => {
      document.querySelectorAll(".show-more span").forEach((span) => {
        if (span.innerText.toLowerCase() === "read more") {
          span.innerText = "Expandir";
        } else if (span.innerText.toLowerCase() === "read less") {
          span.innerText = "Contraer";
        }
      });
    };

    // Aplicar la traducción inicial
    setTimeout(translateButtons, 500);

    // Observar cambios en el DOM
    const observer = new MutationObserver(() => {
      translateButtons();
    });

    // Escuchar cambios en todo el documento
    observer.observe(document.body, { childList: true, subtree: true });

    // Limpiar el observer al desmontar
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-container">
      <h3 className="section-title">Experiencias</h3>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        readMore={true}
        cardHeight={100}
        disableToolbar
        theme={{
          primary: "gray",
          secondary: "white",
          cardBgColor: "rgb(18, 18, 32)",
          cardForeColor: "violet",
          titleColor: "white",
          cardSubtitleColor: "rgb(150, 146, 146)",
          cardDetailsColor: "rgb(150, 146, 146)",
          cardTitleColor: "white",
        }}
        items={data.map((item) => ({
          title: item.title,
          cardTitle: item.cardTitle,
          cardSubtitle: item.cardSubtitle,
          cardDetailedText: item.cardDetailedText,
          buttonText: item.cardDetailedText ? "Mostrar Más" : null, // Condicional para mostrar el botón
        }))}
      />
    </div>
  );
};

export default WorkExperience;
