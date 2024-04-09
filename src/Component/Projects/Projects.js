// @ts-nocheck
import React, { useState } from "react";
import { Section } from "../../Styled/style";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "./assets/img_1.jpg";
import slide_image_2 from "./assets/img_2.jpg";
import slide_image_3 from "./assets/img_3.jpg";
import slide_image_4 from "./assets/img_4.jpg";
import { MainSection, Heading } from "./Projectcss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      link: "https://example.com/project1",
      img: slide_image_1,
    },
    {
      id: 2,
      title: "Project 2",
      link: "https://example.com/project2",
      img: slide_image_2,
    },
    {
      id: 3,
      title: "Project 2",
      link: "https://example.com/project2",
      img: slide_image_3,
    },
    // Add more projects as needed
  ];

  return (
    <MainSection id="Projects">
      <Heading>Projects</Heading>
      <div className="project-section">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.1 }}
            style={{
              backgroundImage: `url(${project.img})`,
              backgroundSize: "300px",
              width: "300px",
              height: "300px",
            }}
          >
            <h2>{project.title}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </MainSection>
  );
};

export default Projects;
