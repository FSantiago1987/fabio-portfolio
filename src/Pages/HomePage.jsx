import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typed from "react-typed";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 4,
      ease: "easeInOut"   
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

function HomePage() {
  return (
    <motion.div
      className="HomePage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Fabio Luiz</span>
        </h1>
        <p className="h-sub-text">
          <Typed
            className="header-typed-text"
            strings={["Web Designer", "Web Developer", "Full-Stack Developer"]}
            typeSpeed={60}
            backSpeed={80}
            loop
          />
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/fabio.santiago.96"
            className="icon-link"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a href="https://github.com/FSantiago1987" className="icon-link">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://twitter.com/FFlaSantiago" className="icon-link">
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </a>
          <a
            href="https://www.linkedin.com/in/fabio-santiago-luiz-36380420/"
            className="icon-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
          </a>
        </div>
      </header>
    </motion.div>
  );
}

export default HomePage;
