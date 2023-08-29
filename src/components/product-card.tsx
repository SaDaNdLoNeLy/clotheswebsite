import React from "react";
import { formatter } from "@/lib/utils";
import { ProductClientType } from "../../type";
import Image from "next/image";

interface ProductCardProps {
  product: ProductClientType;
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
      <Image />
    </div>  
  );
};

export default ProductCard;
