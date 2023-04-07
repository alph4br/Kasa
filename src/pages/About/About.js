import React from "react";
import "./About.scss";
import Collapse from "../../composants/Collapse/Collapse";

const About = () => {

  return (
    <div className="about">
      <div className="imageContainer">
        <img src="../images/image2.png" alt="" />
      </div>
      <div className="collapseContainer">
        <Collapse title="Fiabilité"></Collapse>
        <Collapse title="Respect"></Collapse>
        <Collapse title="Service"></Collapse>
        <Collapse title="Sécurité"></Collapse>
      </div>
    </div>
  );
};

export default About;
