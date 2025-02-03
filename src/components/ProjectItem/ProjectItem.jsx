import facebookLogo from "../../assets/commons/facebook.svg";
import githubLogo from "../../assets/commons/github.svg";

const facebookLink = "https://web.facebook.com/crabdesignsarg";

import "./style.scss";

export const ProjectItem = ({ data }) => {
  const { title, src, id } = data;

  const pageLink = data.pageLink ? data.pageLink : facebookLink;
  const githubLink = data?.githubLink;
  const description = data?.description;

  const redirectPage = (url) => {
    window.open(url);
  }

  return (
    <div className="image-container">
      <div className="submenu">
        <h4 className="subtitle-h4">{title}</h4>
        <a
          href={githubLink ? githubLink : facebookLink}
          target="_blank"
          rel="noreferrer"
          className="item-link"
        >
          <img
            src={githubLink ? githubLogo : facebookLogo}
            alt="image icon"
            className="social-icon"
          />
        </a>
      </div>
      <img
        src={src}
        alt={title}
        key={id}
        className="image-item"
        onClick={() => redirectPage(pageLink)}
      />
      {description ? <p className="description-item" >{description}</p> : ''}
    </div>
  );
};
