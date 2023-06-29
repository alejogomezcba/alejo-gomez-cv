import ReferenceItem from "../ReferenceItem/ReferenceItem";

import "./style.scss";

const References = ({ data }) => {
  return (
    <div className="references_container">
      <h2 className="subtitle_h2">Referencias</h2>
      {data.map((ref) => {
        return <ReferenceItem data={ref} key={ref.FullName} />;
      })}
      <a
        className="more_comments"
        href="https://www.linkedin.com/in/alejo-gomez/"
        target="_blank"
        rel="noreferrer"
      >
        Ver mas comentarios
      </a>
    </div>
  );
};

export default References;
