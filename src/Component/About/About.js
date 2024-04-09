import React from "react";
import styled from "styled-components";
import { Section } from "../../Styled/style";
// @ts-ignore
import logo from "../../Images/logo.png";
import { AboutSection, Content, Hi, MainSection } from "./AboutCss";
import { useMediaQuery } from "usehooks-ts";

const About = () => {
  const small = useMediaQuery("(max-width: 768px)");
  return (
    <MainSection id="About">
      <AboutSection>
        {!small && (
          <img src={logo} alt="Logo" className="inline-block align-middle" />
        )}
        <Hi>Hi.</Hi>
        <Content>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip
        </Content>
      </AboutSection>
    </MainSection>
  );
};

export default About;
