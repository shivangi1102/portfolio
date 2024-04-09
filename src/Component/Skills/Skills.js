import React from "react";
import { MainSection, Skill, SkillsSection } from "./SkillsCss";
import { technologies } from "./Tech";

import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const Skills = () => {
  const small = useMediaQuery("(max-width: 768px)");
  return (
    <MainSection id="Skills">
      <SkillsSection>
        <Skill>Skills</Skill>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div
              className={small ? "w-16 h-16" : "w-28 h-28"}
              key={technology.name}
            >
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.8 }}
                src={technology.icon}
              />
            </div>
          ))}
        </div>
      </SkillsSection>
    </MainSection>
  );
};

export default Skills;
