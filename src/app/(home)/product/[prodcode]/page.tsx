import HomeNav from "@/components/nav/HomeNav";
import React from "react";
import ProductClient from "./component/productclient";
import Footer from "@/components/shopwebui/footer";
import prismadb from "@/lib/prisma";
import { getDistinctColors, getDistinctSizes } from "@/lib/utils";

const ProductPage = async ({ params }: { params: { prodcode: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      prodcode: params.prodcode,
    },
    include: {
      images: true,
      color: true,
      size: true,
      type: true,
    },
  });

  console.log(products);

  const colorsSet = getDistinctColors(products);
  console.log(colorsSet);

  const sizesSet = getDistinctSizes(products);
  console.log(sizesSet);

  console.log(products);

  return (
    <>
      <HomeNav />
      <ProductClient product={products} />
      <Footer />
    </>
  );
};

export default ProductPage;
