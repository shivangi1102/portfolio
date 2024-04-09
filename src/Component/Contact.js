import React from "react";
import { Section } from "../Styled/style";
import styled from "styled-components";
import { Heading } from "./Projects/Projectcss";

const ContactSection = styled.div`
  width: 100%;
`;

const Contact = () => {
  return (
    <ContactSection id="Contact">
      <Heading>Contact me!</Heading>
    </ContactSection>
  );
};

export default Contact;
