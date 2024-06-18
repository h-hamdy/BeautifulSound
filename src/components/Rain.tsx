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

import rain from "/src/assets/rain.png";
import RainFile from "/src/audio/rain.mp4";
import { MdGraphicEq } from "react-icons/md";

export const Rain = () => {
  const rainAudioRef = useRef(new Audio(RainFile));
  const handleSliderChange = (value: any) => {
    const audio = rainAudioRef.current;
    if (audio.paused) {
      audio.play();
    }
    audio.volume = value / 100;
  };

  return (
    <Box className="bg-[#F6F5F4] hover:bg-[#E1DBD3] drop-shadow-lg w-[140px] h-[180px] flex flex-col justify-around p-5 rounded-lg items-center">
      <Image src={rain} className="w-[40px]"></Image>
      <Text className="font-semibold tracking-wider ">Rain</Text>
      <Slider
        aria-label="slider-ex-4"
        defaultValue={0}
        onChange={(value) => handleSliderChange(value)}
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
