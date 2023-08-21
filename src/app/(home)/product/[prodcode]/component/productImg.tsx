"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import ButtonNext from "@/components/shopwebui/swiperbutton/buttonNext";
import ButtonPrev from "@/components/shopwebui/swiperbutton/buttonPrev";
import { flatten } from "@/lib/utils";

const ProductImage = (imageSet: any) => {
  console.log(imageSet);
  const url = imageSet.imageSet.map((item: any) => item);
  console.log([...url].map((item) => item));

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <ButtonNext />
        {[...url].map((item) => (
          <SwiperSlide>
            <img src={`${item}`} />
          </SwiperSlide>
        ))}
        <ButtonPrev />
      </Swiper>
      {/* <img
        src="https://res.cloudinary.com/dbobowf00/image/upload/v1692572643/bmtcm9ip32p2248crs7r.jpg"
        alt=""
      /> */}
    </div>
  );
};

export default ProductImage;
