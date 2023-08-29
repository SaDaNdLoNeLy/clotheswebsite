import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductClientType } from "../../type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// const productFirst = uniqueProductCodes.map((productCode) => {
//   return product.find((product) => product.prodcode === productCode);
// });

export function productFirst(products: ProductClientType[]) {
  const uniqueProductCodes = [
    ...new Set(products.map((product) => product.prodcode)),
  ];
  const product1st = uniqueProductCodes.map((productcode) => {
    return products.find((item) => item.prodcode === productcode);
  });
  return product1st;
}

export function getDistinctColors(products: ProductClientType[]) {
  const colorsSet = new Set();
  products.forEach((product) => {
    colorsSet.add(product.color.value);
  });
  return Array.from(colorsSet);
}

export function getDistinctSizes(products: ProductClientType[]) {
  const sizesSet = new Set();
  products.forEach((product) => {
    sizesSet.add(product.size.value);
  });
  return Array.from(sizesSet);
}

