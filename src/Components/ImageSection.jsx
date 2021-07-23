import React from "react";
import AboutImage from "../Assets/Images/Picture1.jpg";
import FabioResume from "../Assets/Images/FabioResume.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={AboutImage} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Fabio Luiz</span>
        </h4>
        <p className="about-text">
          I am a driven Web Developer with the ability to adapt to any situation
          and proven potential to grow myself and others. Offering reliability,
          punctuality, and attention to detail, with dynamic problem solving and
          customer service talents.
          <br /> I've recently graduated from Centennial College on the Software
          Engineering Technician program. I am from Rio de Janeiro, Brazil. I
          seek to improve my programming language skills and become a good
          programmer.
          <br />
          My focus is to try to always search for opportunities to grow and
          learn the trending new technologies as much as possible. I would like
          to learn more about Python and Machine Learning in the future. Also, I
          want to create reliable and meaningful software applications.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Fabio Santiago Luiz</p>
            <p>: 34</p>
            <p>: Brazilian</p>
            <p>: English, Portuguese</p>
            <p>: Toronto, ON. Canada</p>
          </div>
        </div>
        <div className="buttons-cv">
          <a href={FabioResume} download="Fabio Resume"><button className="btn-cv d-cv">Download CV</button></a>
          <a href="https://fsantiago1987.github.io/Resume/" target="_blank"><button className="btn-cv o-cv">Online CV</button></a>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
