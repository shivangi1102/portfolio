import React, { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { NavSection } from "../../Styled/style";
import {
  LeftContainer,
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLogoLink,
  RightContainer,
} from "./NavBarCss";

import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./Toggle";
import "./style.css";

const Nav = () => {
  const small = useMediaQuery("(max-width: 768px)");
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      {small ? (
        <>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div className="background" variants={sidebar} />
            <Navigation toggle={() => toggleOpen()} />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </>
      ) : (
        <NavbarContainer>
          <NavbarInnerContainer>
            <LeftContainer>
              <NavbarLinkContainer>
                <NavbarLogoLink
                  to="Home"
                  smooth={true}
                  activeClass="activeClass"
                >
                  Shivangi
                </NavbarLogoLink>
              </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
              <NavbarLink to="About" smooth={true} activeClass="activeClass">
                {" "}
                About
              </NavbarLink>
              <NavbarLink to="Skills" smooth={true} activeClass="activeClass">
                {" "}
                Skills
              </NavbarLink>
              <NavbarLink
                to="Experience"
                smooth={true}
                activeClass="activeClass"
              >
                {" "}
                Experience
              </NavbarLink>
              <NavbarLink to="Projects" smooth={true} activeClass="activeClass">
                {" "}
                Projects
              </NavbarLink>
              <NavbarLink to="Contact" smooth={true} activeClass="activeClass">
                {" "}
                Contact
              </NavbarLink>
            </RightContainer>
          </NavbarInnerContainer>
        </NavbarContainer>
      )}
    </>
  );
};

export default Nav;
