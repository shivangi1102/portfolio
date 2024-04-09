// @ts-nocheck
import React, { useEffect, useState } from "react";
// @ts-ignore
import {
  Art,
  HomeSection,
  HomeSectionMobile,
  MobileShortText,
  MobileViewName,
  Name,
  ShortText,
} from "../Styled/style";
import { motion } from "framer-motion";
// @ts-ignore
import art from "../Images/art.png";
// @ts-ignore
import art2 from "../Images/art2.png";
// @ts-ignore
import art3 from "../Images/art3.png";
// @ts-ignore
import abc from "../Images/abc.png";
import artmobile from "../Images/art.png";

import art2mobile from "../Images/art2mobile.png";

import art3mobile from "../Images/art3mobile.png";

// @ts-ignore
import logoHome from "../Images/logoHome.png";

import "../App.css";
import { useMediaQuery } from "usehooks-ts";
const Home = () => {
  const small = useMediaQuery("(max-width: 768px)");
  const artVariants = {
    initial: {
      x: "14vw",
      y: "500%",
      opacity: 0,
    },
    animate: {
      y: "57%",
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  // @ts-ignore
  const artVariants1 = {
    initial: {
      x: "27vw",
      y: "500%",
      opacity: 0,
    },
    animate: {
      y: "35%",
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
      },
    },
  };
  // @ts-ignore
  const artVariants2 = {
    initial: {
      x: "42vw",
      y: "500%",
      opacity: 0,
    },
    animate: {
      y: "80%",
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };
  const artVariantsMobile = {
    initial: {
      x: "-13%",
      y: "50%",
      opacity: 0,
    },
    animate: {
      y: "-15%",
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  // @ts-ignore
  const artVariants1Mobile = {
    initial: {
      x: "15%",
      y: "500%",
      opacity: 0,
    },
    animate: {
      y: "160%",
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
      },
    },
  };
  // @ts-ignore
  const artVariants2Mobile = {
    initial: {
      x: "35%",
      y: "500%",
      opacity: 0,
    },
    animate: {
      y: "110%",
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const cloud1 = {
    initial: {
      x: "0vw",
      y: "30%",
      opacity: 0,
    },
    animate: {
      x: "15vw",
      opacity: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.1,
      },
    },
  };
  const cloud2 = {
    initial: {
      x: "110vw",
      y: "5%",
      opacity: 0,
    },
    animate: {
      x: "80vw",
      opacity: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.1,
      },
    },
  };
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {small ? (
        <HomeSectionMobile>
          <MobileViewName
            style={{
              opacity: showText ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            I'm Shivangi
          </MobileViewName>
          <MobileShortText
            style={{
              opacity: showText ? 1 : 0,
              transition: "opacity 2s ease-in-out",
            }}
          >
            a web developer
          </MobileShortText>
          <img
            src={logoHome}
            alt="Logo"
            className="inline-block align-middle"
            style={{
              textAlign: "center",
              position: "absolute",
              opacity: showText ? 1 : 0,
              transition: "opacity 2.5s ease-in-out",
            }}
          />
          <Art>
            <motion.img
              variants={artVariants1Mobile}
              initial="initial"
              animate="animate"
              src={art2mobile}
            />
            <motion.img
              variants={artVariants2Mobile}
              initial="initial"
              animate="animate"
              src={art3mobile}
            />
            <motion.img
              variants={artVariantsMobile}
              initial="initial"
              animate="animate"
              src={artmobile}
            />
          </Art>
        </HomeSectionMobile>
      ) : (
        <HomeSection id="Home">
          <Name
            style={{
              opacity: showText ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            I'm Shivangi
          </Name>
          <ShortText
            style={{
              opacity: showText ? 1 : 0,
              transition: "opacity 2s ease-in-out",
            }}
          >
            a web developer
          </ShortText>
          <Art>
            <motion.img
              className="textContainer"
              variants={artVariants1}
              initial="initial"
              animate="animate"
              src={art2}
            />
            <motion.img
              className="textContainer"
              variants={artVariants2}
              initial="initial"
              animate="animate"
              src={art3}
            />
            <motion.img
              className="textContainer"
              variants={artVariants}
              initial="initial"
              animate="animate"
              src={art}
            />
            <motion.img
              className="textContainer"
              variants={cloud1}
              initial="initial"
              animate="animate"
              src={abc}
            />
            <motion.img
              className="textContainer"
              variants={cloud2}
              initial="initial"
              animate="animate"
              src={abc}
            />
          </Art>
        </HomeSection>
      )}
    </>
  );
};

export default Home;
