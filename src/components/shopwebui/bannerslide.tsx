"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const BannerSlide = () => {
  const slides = [
    {
      id: 1,
      url: "https://pubcdn.ivymoda.com/files/news/2023/06/02/980c6bb31c417f37ef9c44aa741a8411.jpg",
    },
    {
      id: 2,
      url: "https://pubcdn.ivymoda.com/files/news/2023/05/29/56aa2a96b2157626e3816c98ef97ae8c.jpg",
    },
    {
      id: 3,
      url: "https://pubcdn.ivymoda.com/files/news/2023/05/24/f29737db73f904570c725277be4e7765.png",
    },
    {
      id: 4,
      url: "https://pubcdn.ivymoda.com/files/news/2023/05/11/35cbc7f406f32b21a8ceee16f41ab9bd.gif",
    },
    {
      id: 5,
      url: "https://pubcdn.ivymoda.com/files/news/2023/06/05/40ec1d403c8b69f183977a469ff7ae7d.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<Number>(0);
  const [activeIndex, setActiveIndex] = useState<Number>(0);
  const goToSlide = (index: Number) => {
    setCurrentIndex(index);
  };
  const goToPreviousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(Number(currentIndex) - 1);
    }
  };
  const goToNextImage = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(Number(currentIndex) + 1);
    }
  };
  const handleDotClick = (index: Number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };
  return (
    <section className="banner-slide mb-10 w-full h-full relative">
      <div className="slider-banner relative">
        <div className="img-container h-full w-full ">
          <div
            className="img-wrapper flex relative justify-center items-center"
            // style={{
            //   transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
            // }}
          >
            {slides.map((item, index) =>
              index === currentIndex ? (
                <img
                  key={item.id}
                  src={item.url}
                  alt=""
                  className="slide-img md:rounded-tl-[80px] md:rounded-br-[80px] rounded-tl-[50px] rounded-br-[50px]"
                />
              ) : (
                <img
                  key={item.id}
                  src={item.url}
                  alt=""
                  className="slide-img md:rounded-tl-[80px] md:rounded-br-[80px] rounded-tl-[50px] rounded-br-[50px] hidden"
                />
              )
            )}
            <div className="nav-arrow">
              <div
                className="left absolute top-1/2 translate-x-0 -translate-y-1/2 left-[5%] md:text-[45px] text-black cursor-pointer text-[25px]"
                onClick={goToPreviousImage}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div
                className="right absolute top-1/2 translate-x-0 -translate-y-1/2 right-[5%] md:text-[45px] text-black cursor-pointer text-[25px]"
                onClick={goToNextImage}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
            <div className="dot-container flex justify-center absolute bottom-0 left-[45%] cursor-pointer mobile:left-[40%]">
              {slides.map((item, index) => (
                <div
                  className={`dot text-[60px] my-0 mx-[3px] ${
                    index === currentIndex ? "text-white" : ""
                  }`}
                  key={item.id}
                  onClick={() => handleDotClick(index)}
                >
                  .
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlide;
