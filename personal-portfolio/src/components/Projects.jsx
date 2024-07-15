import React from "react";
import ProjectBox from "./ProjectBox";

import NasaImage from "../assets/images/Nasa.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={NasaImage} projectName="APOD" />
      </div>
    </div>
  );
};

export default Projects;
