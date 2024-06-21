import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer 💻",
          "MERN Stack Developer",
          "Machine learning Engineer ",
          "Gold Medalist '19🏅 ",
          "FYP Champion🥇 ",
          "SFTF'23 Nominee🌟 ",
          "Speaker at CLC ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;