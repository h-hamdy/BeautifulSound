import { useRef, useState, useEffect } from "react";
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
import RiverFile from "/src/audio/river.mp3";
import fire from "/src/assets/river.png";

export const River = () => {
  const RiverAudioRef = useRef(new Audio(RiverFile));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = RiverAudioRef.current;

    const handleAudioEnd = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  const handlePlayAudio = () => {
    const audio = RiverAudioRef.current;
    if (!isPlaying) {
      audio.play().catch((error) => {
        console.error("Playback failed", error);
      });
      setIsPlaying(true);
    }
  };

  const handleSliderChange = (value: number) => {
    const audio = RiverAudioRef.current;
    audio.volume = value / 100;
  };

  return (
    <Box
      className="bg-[#F6F5F4] hover:bg-[#E1DBD3] drop-shadow-lg w-[140px] h-[180px] flex flex-col justify-around p-5 rounded-lg items-center"
    >
      <Image src={fire} className="w-[40px]" alt="Fire" />
      <Text className="font-semibold tracking-wider">River</Text>
      <Slider
        aria-label="slider-ex-4"
        defaultValue={0}
        onChange={(value) => handleSliderChange(value)}
        onMouseDown={handlePlayAudio}
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
