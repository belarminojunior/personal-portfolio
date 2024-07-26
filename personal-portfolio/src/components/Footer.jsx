import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const YEAR = new Date().getFullYear();

  return (
    <footer>
      <h4>Copyright &copy; {YEAR} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/belarminojunior"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/belarminojunior____"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/belarmino-sim%C3%A3o-j%C3%BAnior-72230a301/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailTo:belarminosimaojunior@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
