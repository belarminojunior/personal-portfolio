import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutText">
        <h1 className="AboutTextHeading">Sobre Mim</h1>
        <p>
          Olá, meu nome é <b>Belarmino Simão, Jr.</b> e sou estudante de{" "}
          <b>Engenharia Informática</b> na Universidade Eduardo Mondlane. <br />
          <br />
          Sou <b>"Desenvolvedor de Software"</b> e entusiasta de{" "}
          <b>CyberSecurity</b>. <br />
          <br />
          Tenho experiência em <b>Reactjs</b>, <b>Spring Boot</b>. <br />
          <br />
          Estou sempre em constante aprendizado e aberto a novas colaborações ou
          oportunidades de trabalho onde eu possa contribuir e crescer. Sinta-se
          à vontade para se conectar comigo, os links estão no rodapé. <br />
          <br />
          Além de programar, gosto de explorar novas tecnologias e aprimorar
          meus conhecimentos sobre <b>CyberSecurity</b>.
        </p>

        <a href="Resume.pdf" download className="resume-btn">
          Download Resume <FaFileDownload />
        </a>
      </div>

      <h1 className="SkillsHeading"></h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="Git" />
        <Skills skill="Github" />
      </div>
    </div>
  );
};

export default About;
