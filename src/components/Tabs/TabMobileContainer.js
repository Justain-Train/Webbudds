"use client";

import { motion,useCycle } from "framer-motion";
import { MenuToggle } from "../Ui/MenuToggle";
import { TabMobile } from "./TabMobile";


const variants = {
  closed: {
    borderRadius: "100%",
    width: "60px",
    height: "60px",
    transition: {
      duration: 0.1,
    },
  },
  open: {
    borderRadius: "3%",
    width: 300,
    height: "100%",
    backgroundColor: "#121212",
    transition: {
      duration: 0.1,
    },
  },
};



export const TabMobileContainer = ({ category }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.nav
        className="fixed z-50 right-11 bottom-9 md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="bg-gold"
          variants={variants}
          > <TabMobile category = {category} toggle={() => toggleOpen()} isOpen = {isOpen}/>
          </motion.div>
      
          <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

    
    </>
  );
};
