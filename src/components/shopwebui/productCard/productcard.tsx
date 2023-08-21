"use client";
import React from "react";
import Link from "next/link";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatter } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ProductCard = (data: any, prodcode: any) => {
  console.log(data);

  const router = useRouter();
  return (
    <div
      className="item-new-product m-3 max-w-xs"
      onClick={() => router.push(`/product/${data.data.prodcode}`)}
    >
      <div className="product relative max-w-[360px]">
        {/* <div className="sale-percentage absolute top-[10px] left-[10px] z-50 bg-red-600 h-11 w-11 flex justify-center items-center rounded-t-full rounded-bl-full text-base font-semibold text-white">
          30
          <span>%</span>
        </div> */}
        {/* <div className="pop-up-tag bg-[url('https://pubcdn.ivymoda.com/ivy2/images/bg_news.png')] bg-cover h-[30px] w-[70px] z-[99] absolute top-0 left-[-8px] flex justify-center items-center text-white text-[xl] font-bold">
          <span>New</span>
        </div> */}
        <div className="thumb-prod relative mb-4">
          <a
            //   ref="#"
            className=" no-underline text-[#373737]"
          >
            <img
              src={`${data.data.images[0].url}`}
              alt=""
              className={`img1 block w-full border-none h-auto `}
            />
          </a>
        </div>
        <div className="info-prod">
          {/* <div className="list-color flex justify-between mb-3">
            <ul
              className="flex gap-[5px] w-full"
              onClick={(e) => e.preventDefault()}
            >
              <li
                style={{
                  backgroundColor: `#fb0000`,
                }}
                className={`h-5 w-[35px] rounded-full cursor-pointer flex justify-center items-center`}
              ></li>
              <li
                style={{
                  backgroundColor: `#000000`,
                }}
                className={`h-5 w-[35px] rounded-full cursor-pointer flex justify-center items-center`}
              ></li>
              <li
                style={{
                  backgroundColor: `#62ff00`,
                }}
                className={`h-5 w-[35px] rounded-full cursor-pointer flex justify-center items-center`}
              ></li>
            </ul>
            <div className="favorite text-[#ffffff] drop-shadow-md">
              <FontAwesomeIcon icon={faHeart} className="" />
            </div>
          </div> */}
          <h3 className="title-product overflow-hidden min-h-[32px] block text-[#57585a] text-sm leading-4 capitalize mb-3">
            <a
              // ref="#"
              className=" no-underline text-[#373737] capitalize text-[14px] font-semibold"
            >
              {data.data.name}
            </a>
          </h3>
          <div className="price-product font-semibold text-[#3e3e3f] leading-6 text-lg flex gap-[10px]">
            <div className="sale-price">
              {formatter.format(Number.parseInt(data.data.price))}
            </div>
            {/* <div className={`price line-through opacity-50 text-base`}>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(500000)}
            </div> */}
          </div>
        </div>
        <div
          className="add-to-cart"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div
            //   ref="#"
            className=" no-underline bg-[#221f20] absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg w-8 h-8 text-white flex items-center justify-center border border-solid border-transparent cursor-pointer"
          >
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
