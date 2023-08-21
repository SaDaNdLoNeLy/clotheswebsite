"use client"

import Container from "@/components/container";
import React, { useEffect, useState } from "react";
import ProductImage from "./productImg";
import { cn, flatten, formatter } from "@/lib/utils";

import { ProductClientType } from "../../../../../../type";
import { Input } from "@/components/ui/input";
import useCart from "@/hooks/use-cart";

const ProductClient = (product: any) => {
  const [selectedProd, setSelectedProd] = useState<ProductClientType>()
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const products = [...product.product];

  const cart = useCart()

  let imagesSet = products.map((item: any) => item.images);

  imagesSet = flatten(imagesSet);
  const url = new Set(imagesSet.map((item: any) => item.url));

  let name = new Set(products.map((item: any) => item.name));
  name = flatten([...name]);

  let price = new Set(products.map((item: any) => item.price));

  useEffect(() => {
    products.forEach(product => {
      if (product.size.value === selectedSize && product.color.value === selectedColor) {
        setSelectedProd(product);
      }
    })
  }, [selectedColor, selectedSize])


  let colors = new Set(products.map((item: any) => (item.color.value)));
  let sizes = new Set(products.map((item: any) => (item.size.value)));

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
                  <div>Left in stock: {selectedProd?.amount.toString()}</div>
                </div>
              </div>
            </div>
            <div className="color-size mb-10">
              <div className="color-picker">
                <div className="mb-m">
                  <h6 className="font-semibold text-xl uppercase">
                    <span>Color: {[...colors].length}</span>
                  </h6>
                  <div className="color-list flex flex-wrap justify-start">
                    {[...colors].map((item: any) => (
                      <div
                        key={item.id}
                        className={cn(`yellow h-11 w-11 mr-3 cursor-pointer `, selectedColor === item ? "border-2 border-black" : "border-none")}
                        style={{
                          backgroundColor: item,
                        }}
                        onClick={() => setSelectedColor(item)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="size-picker mt-10">
                <div className="mb-m">
                  <h6 className="font-semibold text-xl uppercase">
                    <span>Size: {[...sizes].length}</span>
                  </h6>
                  <div className="color-list flex flex-wrap justify-start">
                  {[...sizes].map((item: any) => (
                      <div
                        key={item.id}
                        className={cn(`yellow h-11 w-11 mr-3 cursor-pointer bg-gray-500 flex justify-center items-center`, selectedSize === item ? "border-2 border-black" : "border-none")}
                        onClick={() => setSelectedSize(item)}
                      >{item}</div>
                    ))}
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
                <Input className="mx-2" type="number" max={selectedProd?.amount.toString()}/>
                <button className="increament h-11 w-11 border border-black">
                  +
                </button>
              </div>
            </div>
            <div className="add-to-cart-btn w-full h-16 mt-10 text-center bg-red-600">
              <button className="text-white font-bold text-2xl flex justify-center items-center h-full w-full" onClick={() => cart.addItem(selectedProd)}>
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
