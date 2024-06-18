import {
  Box,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Rain } from "./components/Rain";

import github from "/src/assets/github.png";

import { BrownNoise } from "./components/BrownNoise";
import { Fire } from "./components/Fire";
import { Children } from "./components/Children";
import { HandPan } from "./components/HandPan";
import { Nature } from "./components/Nature";
import { Ocean } from "./components/Ocean";
import { People } from "./components/People";
import Typewriter from 'react-typewriter-effect';



export const NatureSound = () => {

  return (
    <Flex className="flex flex-col h-screen">
      <Box className="flex flex-col justify-center items-center p-10">
	  <Typewriter
          textStyle={{  color: 'black', fontWeight: 700, fontSize: '2em' }}
          startDelay={200}
          cursorColor="white"
          multiText={[
            'Nature Sounds and White Noise for Better Work',
            'Enhanced Productivity',
            'Better Sleep Quality',
            'Focus and Relaxation',
          ]}
          multiTextDelay={1500}
          typeSpeed={40}
          deleteSpeed={50}
        />
      </Box>
      <Box className="flex flex-wrap items-center justify-center gap-7 h-full">
        <Rain />
        <BrownNoise />
        <Fire />
        <HandPan />
        <People />
        <Children />
        <Nature />
        <Ocean />
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
