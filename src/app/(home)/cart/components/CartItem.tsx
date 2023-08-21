"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { ProductClientType } from "../../../../../type";
import { Button } from "@/components/ui/button";

interface CartClientProps {
  data: ProductClientType;
}

const CartItem: React.FC<CartClientProps> = ({ data }) => {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          className="object-cover object-counter"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <Button onClick={() => {}}>
            <X />
          </Button>
        </div>
        <div className="relative pr-9">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500 mr-2">{data.color.name}</p>
            <p className="text-gray-500 border-l border-gray-200 pl-4">{data.size.name}</p>
          </div>
          <div>{}</div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
