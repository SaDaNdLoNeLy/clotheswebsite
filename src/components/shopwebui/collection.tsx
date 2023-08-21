import React from "react";
import Link from "next/link";
import Image from "next/image";
import home from "./image/home.webp";
import sport from "./image/sport.webp";
import daily from "./image/daily.webp";
import allProd from "./image/allProducts.webp";

const Collection = () => {
  return (
    <section className="homepage-collection">
      <div className="collection-container">
        <div className="collection-wrapper flex gap-8 max-tablet:flex-wrap justify-center">
          <div className="collection-item tablet:w-[45%] mobile:w-[80%]">
            <Link href="/">
              <div className="img-container">
                <Image src={allProd} alt="" />
              </div>
            </Link>
          </div>
          <div className="collection-item tablet:w-[45%] mobile:w-[80%]">
            <Link href="/">
              <div className="img-container">
                <Image src={daily} alt="" />
              </div>
            </Link>
          </div>
          <div className="collection-item tablet:w-[45%] mobile:w-[80%]">
            <Link href="/">
              <div className="img-container">
                <Image src={sport} alt="" />
              </div>
            </Link>
          </div>
          <div className="collection-item tablet:w-[45%] mobile:w-[80%]">
            <Link href="/">
              <div className="img-container">
                <Image src={home} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
