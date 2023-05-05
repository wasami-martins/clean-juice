import React from "react";
import { motion } from "framer-motion";
import { leafWrapper } from "../../variants";

const Leaf = ({ className, imageUrl }) => {
  return (
    <motion.div variants={leafWrapper} className={className}>
      <motion.img className="leaf" src={imageUrl} alt="leaf" />
    </motion.div>
  );
};

export default Leaf;
