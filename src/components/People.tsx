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
import people from "/src/assets/people.png";
import { MdGraphicEq } from "react-icons/md";
import PeopleFile from "/src/audio/People.mp4";

export const People = () => {
  const PeopleAudioRef = useRef(new Audio(PeopleFile));

  const handleSliderChange = (value: any) => {
    const audio = PeopleAudioRef.current;
    if (audio.paused) {
      audio.play();
    }
    audio.volume = value / 100;
  };
  return (
    <Box className="bg-[#F6F5F4] hover:bg-[#E1DBD3] drop-shadow-lg w-[140px] h-[180px] flex flex-col justify-around p-5 rounded-lg items-center">
      <Image src={people} className="w-[40px]"></Image>

      <Text className="font-semibold tracking-wider ">People</Text>
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
