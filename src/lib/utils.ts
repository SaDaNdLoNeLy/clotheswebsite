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

// const products = [
//   { productCode: 'P001', color: 'Red', size: 'S' },
//   { productCode: 'P001', color: 'Red', size: 'M' },
//   { productCode: 'P001', color: 'Blue', size: 'M' },
//   // ... other product items
// ];

// const colorsSet = new Set();
// const sizesSet = new Set();

// products.forEach(product => {
//   colorsSet.add(product.color);
//   sizesSet.add(product.size);
// });

// const distinctColors = Array.from(colorsSet);
// const distinctSizes = Array.from(sizesSet);

// console.log('Distinct Colors:', distinctColors);
// console.log('Distinct Sizes:', distinctSizes);
export function getDistinctColors(products: any) {
  const colorsSet = new Set();
  products.forEach((product: any) => {
    colorsSet.add(product.color);
  });
  return Array.from(colorsSet);
}

export function getDistinctSizes(products: any) {
  const sizesSet = new Set();
  products.forEach((product: any) => {
    sizesSet.add(product.color);
  });
  return Array.from(sizesSet);
}
