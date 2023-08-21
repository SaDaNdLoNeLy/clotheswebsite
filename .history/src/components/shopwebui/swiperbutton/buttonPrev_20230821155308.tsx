import React from "react";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonPrevious = () => {
  const swiper = useSwiper();
  return (
    <button
      className="absolute top-1/2 left-9 z-20 h-10 w-10 bg-slate-400 rounded-full"
      onClick={() => {
        console.log(swiper);
        swiper?.slidePrev();
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
    </button>
  );
};

export default ButtonPrevious;
