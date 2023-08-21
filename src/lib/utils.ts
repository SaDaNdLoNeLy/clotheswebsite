import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function productFirst(products: any) {
  const uniqueProductCodes = [
    ...new Set(products.map((product: any) => product.prodcode)),
  ];
  const product1st = uniqueProductCodes.map((productcode: any) => {
    return products.find((item: any) => item.prodcode === productcode);
  });
  return product1st;
}

export function getDistinctColors(products: any) {
  const colorsSet = new Set();
  products.forEach((product: any) => {
    colorsSet.add(product.color.value);
  });
  return Array.from(colorsSet);
}

export function getDistinctSizes(products: any) {
  const sizesSet = new Set();
  products.forEach((product: any) => {
    sizesSet.add(product.size.value);
  });
  return Array.from(sizesSet);
}

export function flatten(arr: any) {
  return arr.reduce((pre: any, cur: any) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
