import { useRef } from "react";
import {
  Box,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";

import natureFile from "/src/audio/nature.mp4";
import nature from "/src/assets/nature.png";

export const Nature = () => {
  const natureAudioRef = useRef(new Audio(natureFile));

  const handleSliderChange = (audioRef: any, value: any) => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    }
    audio.volume = value / 100;
  };
  return (
    <Box className="bg-[#F6F5F4] hover:bg-[#E1DBD3] drop-shadow-lg w-[140px] h-[180px] flex flex-col justify-around p-5 rounded-lg items-center">
      <Image src={nature} className="w-[40px]"></Image>

      <Text className="font-semibold tracking-wider ">Nature</Text>
      <Slider
        aria-label="slider-ex-4"
        defaultValue={0}
        onChange={(value) => handleSliderChange(natureAudioRef, value)}
      >
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="tomato" as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
    </Box>
  );
};
