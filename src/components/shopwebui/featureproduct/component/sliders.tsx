"use client";
import React from "react";
import ButtonNext from "../../swiperbutton/buttonNext";
import ButtonPrev from "../../swiperbutton/buttonPrev";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ProductCard from "../../productCard/productcard";
import Link from "next/link";

const Sliders = (products: any) => {
  console.log(products.products.map((item: any) => item));

  return (
    <Swiper
      // className="relative"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <ButtonNext />
      {products.products.map((item: any) => (
        <div>
          <SwiperSlide>
            <ProductCard data={item} />
          </SwiperSlide>
        </div>
      ))}
      <ButtonPrev />
    </Swiper>
  );
};

export default Sliders;
