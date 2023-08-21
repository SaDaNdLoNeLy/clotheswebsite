import Container from "@/components/container";
import React from "react";
import ProductImage from "./productImg";
import { flatten, formatter } from "@/lib/utils";

const ProductClient = (product: any) => {
  console.log(product);
  const products = [...product.product];
  console.log(products);

  let imagesSet = products.map((item: any) => item.images);

  imagesSet = flatten(imagesSet);
  const url = new Set(imagesSet.map((item: any) => item.url));

  let name = new Set(products.map((item: any) => item.name));
  name = flatten([...name]);

  let price = new Set(products.map((item: any) => item.price));
  console.log(flatten([...price]));

  let colors = new Set(products.map((item: any) => item.color.value));
  console.log(colors);

  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="product-container flex">
          <div className="img-container max-w-[50%]">
            <ProductImage imageSet={[...url]} />
          </div>
          <div className="product-single__summary mt-20 ml-20">
            <div className="product-detail-summary">
              <div className="wrapper border-b border-gray-400 pb-20">
                <div className="product-name">
                  <h1 className="heading text-5xl font-bold">
                    <span className="uppercase">{name}</span>
                  </h1>
                </div>
                <div className="product-price font-bold text-lg">
                  <span>
                    <span className="">
                      {formatter.format(flatten([...price])[0])}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="color-size mb-10">
              <div className="color-picker">
                <div className="mb-m">
                  <h6 className="font-semibold text-xl uppercase">
                    <span>Color: 46 Yellow</span>
                  </h6>
                  <div className="color-list flex flex-wrap justify-start">
                    {[...colors].map((item: any) => (
                      <div
                        className={`yellow h-11 w-11 mr-3`}
                        style={{
                          backgroundColor: item,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="size-picker mt-10">
                <div className="mb-m">
                  <h6 className="font-semibold text-xl uppercase">
                    <span>size: Men XS</span>
                  </h6>
                  <div className="color-list flex flex-wrap justify-start">
                    <div className="yellow h-11 w-11 mr-3 border border-black flex justify-center items-center">
                      XS
                    </div>
                    <div className="yellow h-11 w-11 mr-3 border border-black flex justify-center items-center">
                      S
                    </div>
                    <div className="yellow h-11 w-11 mr-3 border border-black flex justify-center items-center">
                      M
                    </div>
                    <div className="yellow h-11 w-11 mr-3 border border-black flex justify-center items-center">
                      L
                    </div>
                    <div className="yellow h-11 w-11 mr-3 border border-black flex justify-center items-center">
                      XL
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="quantity-btn">
              <div className="heading uppercase text-xl font-semibold">
                <span>quantity</span>
              </div>
              <div className="button flex justify-start mt-2">
                <button className="decreament h-11 w-11 border border-black">
                  -
                </button>
                <div className="number flex justify-center items-center border-t border-b border-black h-11 w-20">
                  1
                </div>
                <button className="increament h-11 w-11 border border-black">
                  +
                </button>
              </div>
            </div>
            <div className="add-to-cart-btn w-full h-16 mt-10 text-center bg-red-600">
              <button className="text-white font-bold text-2xl flex justify-center items-center h-full w-full">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductClient;
