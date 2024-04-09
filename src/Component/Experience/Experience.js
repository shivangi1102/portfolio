import React from "react";
// @ts-ignore
import { Section } from "../../Styled/style";
import {
  // @ts-ignore
  Content,
  ExperienceSection,
  Heading,
  MainSection,
} from "./ExperienceCss";

// @ts-ignore
import logo from "../../Images/logo.png";

// @ts-ignore
import { motion } from "framer-motion";
// @ts-ignore
import { ReactComponent as WorkIcon } from "../../Images/work.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  let timelineElements = [
    {
      id: 1,
      title: " Senior Frontend Developer at Tata Consultancy Services",
      location: "Pune, India",
      description:
        " • Led the development of 15+ new functionalities and responsive UI components for telecommunications solutions, enhancing user engagement and satisfaction by 25%. Contributed to the development of a React library and integrated it with Storybook, resulting in 30% reduction in development efforts across various projects within the firm.",

      date: "July 2021 - present",
      icon: "work",
    },
    {
      id: 2,
      title: "Frontend Developer at AVRN labs",
      location: "Bhopal, India",
      description:
        "•	Developed and launched a dynamic landing page for IoT based firm using React.js, resulting in a 30% increase in website traffic within the first month.",

      date: "Dec 2019 - Jan 2020",
      icon: "work",
    },
  ];
  return (
    <MainSection id="Experience">
      <ExperienceSection>
        <Heading>Work Experience</Heading>
        <VerticalTimeline className="hello">
          {timelineElements.map((element) => {
            let workIconStyles = { background: "#06D6A0" };
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={workIconStyles}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </ExperienceSection>
    </MainSection>
  );
};

export default Experience;
