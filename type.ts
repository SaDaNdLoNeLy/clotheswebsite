import { Color, Image, Product, Size } from "@prisma/client";

export type ProductClientType = Product & {images: Image[]} & {color: Color} & {size: Size};
