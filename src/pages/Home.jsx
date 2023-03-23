import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React, { useEffect } from "react";
import Memory from "../components/Memory";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    document.title = "VeggieRe | Home";
  }, []);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Memory />
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
