import React from "react";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button
      className="absolute top-1/2 right-9 z-20 h-10 w-10 bg-slate-400 rounded-full"
      onClick={() => {
        console.log(swiper);
        swiper?.slideNext();
      }}
    >
      <FontAwesomeIcon icon={faArrowRight} size="2xl" />
    </button>
  );
};

export default ButtonNext;
