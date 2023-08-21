import React from "react";
import ProductCard from "./productCard/productcard";
import prismadb from "@/lib/prisma";

const FeatureProduct = async () => {
  const product = await prismadb.product.findMany({
    include: {
      size: true,
      color: true,
      type: true,
      images: true,
    },
  });
  console.log(product);

  const uniqueProductCodes = [
    ...new Set(product.map((product) => product.prodcode)),
  ];

  const productFirst = uniqueProductCodes.map((productCode) => {
    return product.find((product) => product.prodcode === productCode);
  });
  console.log(productFirst);

  return (
    <section className="new-products px-[5%] my-10">
      <div className="title mt-10 text-[46px] font-bold uppercase pr-10 mobile:text-[30px]">
        <span className="">Feature Products</span>
      </div>
      <div className="exclusive-tab mb-10">
        <div className="exclusive-heading my-5">
          <ul className="flex gap-20 justify-center items-center">
            <li className="cursor-pointer border-b-2 border-black text-xl pb-2 px-2 capitalize">
              Men
            </li>
            <li className="cursor-pointer text-xl pb-2 px-2 capitalize">
              Women
            </li>
          </ul>
        </div>
        <div className="exclusive-content w-full">
          {productFirst.map((item) => (
            <ProductCard data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
