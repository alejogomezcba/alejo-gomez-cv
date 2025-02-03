import ReferenceItem from "../../components/ReferenceItem/ReferenceItem";

import "./style.scss";

const References = ({ data }) => {
  return (
    <div className="references_container">
      <h2 className="subtitle_h2">Referencias</h2>
      <div className="references-items">
        {data.map((ref, index) => {
          return <ReferenceItem data={ref} key={index} />;
        })}
      </div>
      <a
        className="more_comments"
        href="https://www.linkedin.com/in/alejo-gomez/#recommendations"
        target="_blank"
        rel="noreferrer"
      >
        Ver mas comentarios
      </a>
    </div>
  );
};

export default References;
