import React from "react";

import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    APODDesc:
      "This project is a webpage inspired by NASA's Astronomy Picture of the Day. It displays the daily featured image or photograph of our universe along with a brief explanation written by a professional astronomer.",
    APODGithub:
      "https://github.com/belarminojunior/astronomy-picture-of-the-day",
    APODWebsite: "https://astronomy-picture-of-the-day-wine.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
