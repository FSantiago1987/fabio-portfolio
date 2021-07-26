import React from "react";
import ContactItem from "../Components/ContactItem";
import Title from "../Components/Title";
import phone from "../Assets/Images/phone.svg";
import email from "../Assets/Images/emailme.svg";
import location from "../Assets/Images/location.svg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      //delay: 0.5,
      mass: 0.9,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};

function ContactPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="ContactPage"
    >
      <div className="contact-title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="contact-content">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1369155692496!2d-79.38259488454064!3d43.64531967912153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b350e38f30029%3A0xddf7c32c7703346a!2sUnion%20Station%20Toronto!5e0!3m2!1spt-BR!2sca!4v1625159848597!5m2!1spt-BR!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text={"+647-8196254"} title={"Phone"} />
          <ContactItem
            icon={email}
            text={"rawpower_br@hotmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text={"Toronto, ON - Canada"}
            title={"Location"}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
