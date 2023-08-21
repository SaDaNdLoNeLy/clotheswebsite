import HomeNav from "@/components/nav/HomeNav";
import React from "react";
import ProductClient from "./component/productclient";
import Footer from "@/components/shopwebui/footer";

const ProductPage = async ({ params }: { params: { prodcode: string } }) => {
  return (
    <>
      <HomeNav />
      <ProductClient />
      <Footer />
    </>
  );
};

export default ProductPage;
