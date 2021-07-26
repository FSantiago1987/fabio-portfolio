/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import portfolios from "../Components/allPortfolios";
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

function PortfolioPage() {
  const [menuItem, setMenuItem] = useState(portfolios);
  const categoriesList = [
    "All",
    ...new Set(portfolios.map((item) => item.category)),
  ];

  function filter(category) {
    if (category === "All") {
      setMenuItem(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItem(filteredData);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="PortfolioPage"
    >
      <div className="portfolio-title">
        <Title title={"Projects"} span={"Projects"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categoriesList} />
        <MenuItems menuItems={menuItem} />
      </div>
    </motion.div>
  );
}

export default PortfolioPage;
