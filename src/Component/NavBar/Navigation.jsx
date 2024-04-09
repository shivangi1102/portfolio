import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants}>
    {item.map((i) => (
      <MenuItem name={i.name} key={i.id} toggle={toggle} />
    ))}
  </motion.ul>
);

const item = [
  { id: 1, name: "About" },
  { id: 2, name: "Skills" },
  { id: 3, name: "Experience" },
  { id: 4, name: "Projects" },
  { id: 5, name: "Contact" },
];
