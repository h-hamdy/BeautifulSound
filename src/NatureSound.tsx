import { Rain } from "./components/Rain";

import github from "/src/assets/github.png";
import githubwhite from "/src/assets/githubwhite1.png";

import { BrownNoise } from "./components/BrownNoise";
import { Fire } from "./components/Fire";
import { HandPan } from "./components/HandPan";
import { Nature } from "./components/Nature";
import { Ocean } from "./components/Ocean";
import { People } from "./components/People";

import Typewriter from "react-typewriter-effect";
import { River } from "./components/River";
import { motion } from "framer-motion";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const NatureSound = () => {
  const [dark, setDark] = useState(false);
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.1 },
  };

  return (
    <>
      <div
        className={`${
          dark ? "bg-black" : "bg-white"
        } min-h-screen flex flex-col`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setDark(!dark)}
        >
          {dark ? <SunIcon color={"white"} /> : <MoonIcon />}
        </button>
        <div className="flex flex-col justify-center items-center flex-grow p-10">
          <Typewriter
            textStyle={{
              color: dark ? "white" : "black",
              fontWeight: 700,
              fontSize: "2em",
            }}
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
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 p-10 w-full flex-grow">
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
        </div>
        <div className="w-full flex items-center justify-center p-10">
          <a href="https://github.com/h-hamdy">
            <img
              src={dark ? githubwhite : github}
              alt="GitHub"
              className="w-[40px] m-10 pt-16"
            />
          </a>
        </div>
      </div>
    </>
  );
};
