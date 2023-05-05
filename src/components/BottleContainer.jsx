import React from "react";
import { motion } from "framer-motion";
import { bottleWrapper, bottle } from "../../variants";

// @ts-ignore
import bottleImg from "/images/juice.png";

const BottleContainer = () => {
  return (
    <motion.div
      className="bottleWrapper"
      variants={bottleWrapper}
      initial="initial"
      animate="animate"
    >
      <motion.img
        variants={bottle}
        src={bottleImg}
        className="bottle"
        alt="juice"
      />
    </motion.div>
  );
};

export default BottleContainer;
