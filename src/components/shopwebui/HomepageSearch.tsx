import React from "react";
import Link from "next/link";
import test from "./image/productSearch.webp";
import Image from "next/image";

const HomepageSearch = () => {
  return (
    <section className="homepage-search pt-8 pb-12 mx-[5%]">
      <div className="search-container max-w-7xl w-full my-0 mx-auto">
        <div className="homepage-wrapper flex justify-center flex-col my-0 mx-auto max-w-[700px] items-center">
          <h2 className=" inline-flex relative text-center font-bold text-4xl mb-5">
            Bạn tìm gì hôm nay
          </h2>
          <div className="homepage-search-inner relative w-full">
            <form
              action="/spotlight"
              method="GET"
              className="block mt-0 relative"
            >
              <input
                type="text"
                name="keyword"
                placeholder="Find something"
                className="homepage-search-control border-0 bg-[hsla(0,0%,83.1%,.4)] w-full h-16 rounded-[100vmax] px-6 text-base"
              />
              <button className="homepage-search-button absolute bottom-[20px] right-[20px] border-0 cursor-pointer flex justify-center items-center">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8002 19.6905L17.9213 16.5856C19.5193 14.6641 20.3123 12.1989 20.1342 9.70609C19.9561 7.21325 18.8208 4.88587 16.9659 3.21104C15.1109 1.5362 12.68 0.643744 10.182 0.720377C7.68398 0.79701 5.31241 1.83678 3.56359 3.62217C1.81477 5.40756 0.824241 7.80016 0.79931 10.2992C0.774379 12.7983 1.71695 15.2102 3.4298 17.0301C5.14266 18.8501 7.49307 19.9369 9.98907 20.0634C12.4851 20.1898 14.9332 19.346 16.8212 17.7085L19.6462 20.7575C19.7892 20.9041 19.9838 20.9889 20.1884 20.9941C20.3931 20.9992 20.5916 20.9242 20.7418 20.785C20.8919 20.6458 20.9818 20.4535 20.9921 20.2491C21.0025 20.0446 20.9325 19.8442 20.7972 19.6905H20.8002ZM2.57025 10.5415C2.57025 8.96444 3.03792 7.42275 3.91412 6.11143C4.79031 4.80011 6.03567 3.77807 7.49273 3.17454C8.94979 2.57101 10.5531 2.41306 12.0999 2.72074C13.6467 3.02842 15.0675 3.78787 16.1827 4.90306C17.2979 6.01824 18.0574 7.43908 18.365 8.98588C18.6727 10.5327 18.5148 12.136 17.9112 13.5931C17.3077 15.0501 16.2857 16.2955 14.9744 17.1717C13.663 18.0479 12.1214 18.5155 10.5442 18.5155C8.42997 18.5134 6.40288 17.6726 4.90777 16.1777C3.41265 14.6828 2.57159 12.6558 2.56921 10.5415H2.57025Z"
                    fill="#80949D"
                  ></path>
                </svg>
              </button>
            </form>
            <div className="homepage-search-spotlight hidden invisible absolute bg-white shadow-[0_0_10px_0_#aebbc1] p-4 rounded-lg w-full max-w-[500px] left-1/2 top-full z-10 translate-x-[-50%] translate-y-0 transition-all duration-300 delay-0 mt-3">
              <div className="spotlight-search-content">
                <Link href="/" className="flex items-center">
                  <div className="img-product rounded-md overflow-hidden relative">
                    <Image src={test} alt="" />
                  </div>
                  <div className="product-content flex flex-col pl-4 text-[13px]">
                    <h4 className="title font-bold mb-0">
                      Quần nam DAily Pants - sợi Sorana, nhuộm Cleandye
                    </h4>
                    <div className="price flex items-center font-semibold">
                      <del className="text-[#c4c4c4] mr-[10px]">299.000đ</del>
                      <ins className="text-[#ff3102] mr-1 no-underline">
                        259.000đ
                      </ins>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSearch;
