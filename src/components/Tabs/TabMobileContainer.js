"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect} from 'react'
import { motion,useCycle } from "framer-motion";
import Link from "next/link";
import { MenuToggle } from "../Ui/MenuToggle";
import { TabMobile } from "./TabMobile";

const variants = {
  closed: {
    borderRadius: "100%",
    width: "60px",
    height: "60px",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    borderRadius: "3%",
    width: "300px",
    height: "500px",
    backgroundColor: "#12121",
  },
};



export const TabMobileContainer = ({ category }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.nav
        className="fixed z-50 right-11 bottom-9 md:hidden border-white "
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="bg-gold"
          variants={variants}
          />
          <TabMobile category = {category}/>
          <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

    
    </>
  );
};
