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

export const NatureSound = () => {

  return (
    <Flex className="flex flex-col h-screen">
      <Box className="flex flex-col justify-center items-center p-10">
        <Text className="text-center pt-10 font-extrabold text-black text-4xl">
          Nature Sounds and White Noise for Better Work
        </Text>
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
