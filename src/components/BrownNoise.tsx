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

import noise from "/src/assets/logo.png";
import BrownFile from "/src/audio/brownNoise.mp3";

export const BrownNoise = () => {
  const noiseAudioRef = useRef(new Audio(BrownFile));
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const audio = noiseAudioRef.current;

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
    const audio = noiseAudioRef.current;
    if (!isPlaying) {
      audio.play().catch((error) => {
        console.error("Playback failed", error);
      });
      setIsPlaying(true);
    }
  };

  const handleSliderChange = (value: number) => {
    const audio = noiseAudioRef.current;
    audio.volume = value / 100;
    setSliderValue(value);
  };

  const handleCardClick = () => {
    handlePlayAudio();
    setSliderValue(100);
    noiseAudioRef.current.volume = 1;
  };

  return (
    <Box
      className="bg-[#F6F5F4] hover:bg-[#E1DBD3] drop-shadow-lg w-[140px] h-[180px] flex flex-col justify-around p-5 rounded-lg items-center"
      onClick={handleCardClick}
    >
      <Image src={noise} className="w-[40px]" alt="Noise" />
      <Text className="font-semibold">Brown noise</Text>
      <Slider
        aria-label="slider-ex-4"
        value={sliderValue}
        onChange={(value) => handleSliderChange(value)}
        onClick={(e) => e.stopPropagation()}  // Prevent the card click from interfering
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
