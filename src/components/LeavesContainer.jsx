import React from "react";
import Leaf from "./Leaf";
import { motion } from "framer-motion";
import { leavesContainer } from "../../variants";

const LeavesContainer = () => {
  return (
    <motion.div variants={leavesContainer} initial="initial" animate="animate">
      <Leaf className="leafWrapper-1" imageUrl="/images/leaf01.png" />
      <Leaf className="leafWrapper-2" imageUrl="/images/leaf02.png" />
      <Leaf className="leafWrapper-3" imageUrl="/images/leaf03.png" />
      <Leaf className="leafWrapper-4" imageUrl="/images/leaf04.png" />
      <Leaf className="leafWrapper-5" imageUrl="/images/leaf05.png" />
    </motion.div>
  );
};

export default LeavesContainer;
