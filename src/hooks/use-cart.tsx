// import { Product, Image, Color, Size } from "@prisma/client"
// import {create} from "zustand"
// import {persist, createJSONStorage} from "zustand/middleware"


// interface CartProps {
//   items: Product & {images: Image[]} & {size: Size} & {color: Color}[];
//   addItem: (data: Product & {images: Image[]} & {size: Size} & {color: Color}) => void;
//   removeItem: (id: string) => void;
//   removeAll: () => void;
// }

// const useCart = create(
//   persist<CartProps>((set, get) => ({
//     items: [],
//     addItem: (data: Product & {images: Image[]} & {size: Size} & {color: Color}) => {

//     }
//   }))
// )