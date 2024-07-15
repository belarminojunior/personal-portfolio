import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Software Developer", "Cybersecurity Enthusiast"],
          autoStart: true,
          loop: true,
          delay: 90,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
};

export default Type;
