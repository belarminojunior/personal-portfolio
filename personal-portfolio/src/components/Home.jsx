import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../assets/images/Avatar.png";

import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello!</h1>
          <h1>
            I'm <b>Belarmino Simão, Jr.</b>
          </h1>
          <Type />
          <Link to="/about">
            <button>
              About Me <BsPerson />
            </button>
          </Link>

          <Link to="/contact">
            <button>
              Contact Me <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="rounded-full shadow-lg" src={Avatar} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
