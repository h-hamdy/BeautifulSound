import { Box, Image, Flex } from "@chakra-ui/react";
import { Rain } from "./components/Rain";

import github from "/src/assets/github.png";

import { BrownNoise } from "./components/BrownNoise";
import { Fire } from "./components/Fire";
import { HandPan } from "./components/HandPan";
import { Nature } from "./components/Nature";
import { Ocean } from "./components/Ocean";
import { People } from "./components/People";

import Typewriter from "react-typewriter-effect";
import { River } from "./components/River";
import { motion } from "framer-motion";

export const NatureSound = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.1 },
  };

  return (
    <Flex className="flex flex-col h-screen">
      <Box className="flex flex-col text-center justify-center items-center p-10">
        <Typewriter
          textStyle={{ color: "black", fontWeight: 700, fontSize: "2em" }}
          startDelay={200}
          cursorColor="white"
          multiText={[
            "Nature Sounds and White Noise for Better Work",
            "Enhanced Productivity",
            "Better Sleep Quality",
            "Focus and Relaxation",
          ]}
          multiTextDelay={1500}
          typeSpeed={20}
          deleteSpeed={50}
        />
      </Box>
      <Box className="flex flex-wrap items-center justify-center gap-7 h-full">
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Rain />
        </motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <BrownNoise />
        </motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Fire />
        </motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <HandPan />
        </motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <People />
        </motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Nature />
        </motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Ocean />
        </motion.div>
        <motion.div
          className="card"
          variants={variants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <River />
        </motion.div>
      </Box>
      <Box className="w-full flex items-center justify-center">
        <a href="https://github.com/h-hamdy">
          <Image
            src={github}
            className="flex items-center justify-center w-[40px] m-10 pt-16"
          ></Image>
        </a>
      </Box>
    </Flex>
  );
};
